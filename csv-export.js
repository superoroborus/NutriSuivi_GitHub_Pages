/* NutriSuivi v5 — export local : aucun accès réseau, aucune mutation des données. */
(function(){
  'use strict';
  function csvDailyRows(meals,weights,period,now){
    if(!['30','90','all'].includes(period))throw Error('Période invalide');
    const end=new Date(now.getFullYear(),now.getMonth(),now.getDate());
    const begin=new Date(end);
    if(period!=='all')begin.setDate(begin.getDate()-(Number(period)-1));
    const cutoff=period==='all'?'0000-01-01':localDay(begin);
    const data=new Map();
    function record(day){if(typeof day!=='string'||!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(day)||day<cutoff||day>localDay(end))return null;
      if(!data.has(day))data.set(day,{day,weight:null,kcal:0,protein:0,carbs:0,fat:0,items:0,slots:new Set()});
      return data.get(day);
    }
    for(const w of weights||[]){let row=record(w.day);if(row&&w.kg!==''&&w.kg!=null&&Number.isFinite(Number(w.kg)))row.weight=Number(w.kg);}
    for(const meal of meals||[]){let row=record(meal.day);if(!row)continue;row.items++;if(meal.slot)row.slots.add(meal.slot);
      for(const field of ['kcal','protein','carbs','fat']) {let value=Number(meal[field]);if(meal[field]!=null&&meal[field]!==''&&Number.isFinite(value))row[field]+=value;}
    }
    return [...data.values()].sort((a,b)=>a.day.localeCompare(b.day)).map(row=>({date:row.day,weight:row.weight,kcal:row.items?row.kcal:null,protein:row.items?row.protein:null,carbs:row.items?row.carbs:null,fat:row.items?row.fat:null,meals:row.items?row.slots.size:0}));
  }
  function localDay(date){return [date.getFullYear(),String(date.getMonth()+1).padStart(2,'0'),String(date.getDate()).padStart(2,'0')].join('-');}
  function toFrenchCSV(rows){
    const heading=['Date','Poids (kg)','Énergie (kcal)','Protéines (g)','Glucides (g)','Lipides (g)','Repas renseignés'];
    const numeric=n=>n===null||n===undefined?'':String(Math.round((n+Number.EPSILON)*10000)/10000).replace('.',',');
    const quote=s=>'"'+String(s).replace(/"/g,'""')+'"';
    return '\uFEFF'+[heading,...rows.map(r=>[r.date,r.weight,r.kcal,r.protein,r.carbs,r.fat,r.meals].map((v,i)=>i?numeric(v):v))].map(cells=>cells.map(quote).join(';')).join('\r\n')+'\r\n';
  }
  if(typeof module!=='undefined'&&module.exports)module.exports={csvDailyRows,toFrenchCSV};
  if(typeof document==='undefined')return;
  const btn=document.getElementById('exportCsvBtn');if(!btn)return;
  btn.addEventListener('click',()=>{
    const status=document.getElementById('csvExportStatus');
    try{
      const period=document.getElementById('csvPeriod').value;
      const rows=csvDailyRows(state.meals,state.weights,period,new Date());
      if(!rows.length){status.textContent='Aucune donnée dans cette période.';return;}
      const blob=new Blob([toFrenchCSV(rows)],{type:'text/csv;charset=utf-8'});
      const url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download='nutrisuivi-bilan-'+period+'-'+localDay(new Date())+'.csv';document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);
      status.textContent=rows.length+' jour(s) exporté(s).';
    }catch(error){status.textContent='Export impossible : '+error.message;}
  });
})();
