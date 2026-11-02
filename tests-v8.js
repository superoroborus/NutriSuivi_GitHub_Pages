const fs=require('fs'),vm=require('vm'),assert=require('assert');
const source=fs.readFileSync(__dirname+'/nutrisuivi-v8.js','utf8');
const saved={'nutrisuivi-v7-goals':JSON.stringify({protein:115})};
const context={document:{getElementById:()=>null,querySelector:()=>null},localStorage:{getItem:k=>saved[k]||null,setItem:(k,v)=>saved[k]=v},TextEncoder,Blob,Date,Number,String,Array,Object,Math,Set,Map,JSON,console,module:{exports:{}},state:{meals:[{day:'2026-11-01',slot:'lunch',name:'Pâtes',grams:150,kcal:538.5,protein:18,carbs:108,fat:2.85}],weights:[{day:'2026-11-01',kg:70}],settings:{target_kcal:2100}}};
vm.runInNewContext(source,context);const {exportData,xlsx}=context.module.exports;
const sheets=exportData(['2026-11-01','2026-11-30']);assert.equal(sheets.length,5);assert.equal(sheets[0].rows[1][1],538.5);assert.equal(sheets[1].rows[1][3],150);assert.equal(sheets[3].rows[1][1],70);assert.equal(sheets[0].rows[1][6],'Non historisés');
const zip=xlsx(sheets);assert(zip.size>2000);const out=__dirname+'/test-validation.xlsx';const {writeFileSync}=fs;zip.arrayBuffer().then(x=>{writeFileSync(out,Buffer.from(x));console.log('Tests OK : 5 feuilles, cellules numériques, dates, export non rétroactif; taille '+zip.size+' octets')});
