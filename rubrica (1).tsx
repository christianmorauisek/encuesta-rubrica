import { useState } from "react";

const TITULO = "Modelo tecno-pedagógico para encuentros síncronos como eje de una experiencia estudiantil positiva en graduados de posgrados de educación en la Universidad Particular Internacional SEK - Ecuador";
const OBJ_GENERAL = "Diseñar un modelo tecno-pedagógico para encuentros síncronos como eje de una experiencia estudiantil positiva en graduados de posgrados de educación en la UISEK.";
const OBJ_ESP = [
  "Diagnosticar la situación actual de los graduados de los programas de posgrado en Educación de la UISEK respecto del encuentro síncrono y la experiencia estudiantil positiva.",
  "Analizar los fundamentos teóricos, referenciales y estructurales para un modelo tecno-pedagógico que tiene como eje central a los encuentros síncronos en modalidad online orientado a la construcción de una experiencia estudiantil positiva.",
  "Estructurar los componentes del modelo tecno-pedagógico que considera los encuentros síncronos como eje fundamental para la construcción de una experiencia estudiantil positiva en los programas de posgrado en Educación de la UISEK.",
];
const ITEMS = [
  { num:1,  dim:"Planificación de la enseñanza", codigo:"A.1", texto:"Durante los encuentros síncronos, los contenidos priorizados fueron coherentes con el diseño de la asignatura." },
  { num:2,  dim:"Planificación de la enseñanza", codigo:"A.4", texto:"Los encuentros síncronos incorporaron estrategias o actividades de aprendizaje de la asignatura que favorecieron la comprensión de los temas." },
  { num:3,  dim:"Planificación de la enseñanza", codigo:"A.5", texto:"Los encuentros síncronos respondieron a los resultados de aprendizaje planteados en la asignatura." },
  { num:4,  dim:"Metodologías", codigo:"B.2", texto:"Durante los encuentros síncronos, el docente utilizó metodologías activas de aprendizaje (pecha kucha, ABP, resolución de casos, etc.)." },
  { num:5,  dim:"Metodologías", codigo:"B.3", texto:"Las actividades propuestas en los encuentros síncronos facilitaron el desarrollo de competencias y habilidades profesionales." },
  { num:6,  dim:"Metodologías", codigo:"B.5", texto:"Las actividades realizadas fomentaron la autorregulación y la autonomía, como estudiantes, en el proceso de aprendizaje." },
  { num:7,  dim:"Recursos didácticos", codigo:"C.1", texto:"Los recursos complementarios (diapositivas, lecturas, vídeos, entre otros) que se emplearon fueron útiles para reforzar el contenido del encuentro síncrono." },
  { num:8,  dim:"Recursos didácticos", codigo:"C.4", texto:"Las herramientas tecnológicas utilizadas en los encuentros síncronos (pizarra digital, chat, presentaciones, herramientas de trabajo colaborativo, encuestas, etc.) fueron un apoyo para la comprensión del contenido." },
  { num:9,  dim:"Recursos didácticos", codigo:"C.5", texto:"El uso del campus virtual (CANVAS) y la integración con la herramienta del encuentro síncrono (Zoom) fue efectivo para el proceso de enseñanza-aprendizaje." },
  { num:10, dim:"Recursos didácticos", codigo:"C.7", texto:"El uso de recursos didácticos en los encuentros síncronos colaboró con el desarrollo del aprendizaje." },
  { num:11, dim:"Evaluación para el aprendizaje", codigo:"D.1", texto:"Las evaluaciones formativas (cuestionarios, evaluaciones, gamificación, etc.) permitieron realizar un acompañamiento al proceso de enseñanza-aprendizaje." },
  { num:12, dim:"Evaluación para el aprendizaje", codigo:"D.3", texto:"Los instrumentos evaluativos que utilizaron los docentes fueron coherentes con los aprendizajes desarrollados." },
  { num:13, dim:"Evaluación para el aprendizaje", codigo:"D.5", texto:"Los instrumentos evaluativos permitieron evidenciar los aprendizajes desarrollados." },
  { num:14, dim:"Evaluación para el aprendizaje", codigo:"D.7", texto:"La retroalimentación docente colaboró con el desarrollo de los aprendizajes." },
  { num:15, dim:"Interacción social", codigo:"E.1", texto:"Durante los encuentros síncronos, se generaron espacios de diálogo entre docente y estudiantes." },
  { num:16, dim:"Interacción social", codigo:"E.2", texto:"La relación con el/la docente se fortaleció a través de las interacciones en el encuentro síncrono." },
  { num:17, dim:"Interacción social", codigo:"E.5", texto:"Hubo oportunidad de expresar dudas, hacer comentarios, y participar activamente durante las sesiones síncronas." },
  { num:18, dim:"Interacción social", codigo:"E.6", texto:"Se promovió un clima participativo y respetuoso en los encuentros síncronos." },
  { num:19, dim:"Apoyo pedagógico institucional", codigo:"F.5", texto:"La institución dispuso plataformas digitales que ayudaron al desarrollo del encuentro síncrono." },
  { num:20, dim:"Apoyo pedagógico institucional", codigo:"F.7", texto:"La institución generó una evaluación del docente y sus encuentros síncronos para asegurar los aprendizajes." },
  { num:21, dim:"Pregunta abierta", codigo:"Ab", texto:"Si tendrías que elegir una o dos asignaturas del programa de posgrado como 'ejemplos' de una experiencia estudiantil positiva, ¿cuál/es elegirías?" },
];
const GLOBAL_CRITERIA = [
  "Pertinencia del instrumento respecto al objetivo de la investigación",
  "Coherencia entre dimensiones e ítems",
  "Claridad general del cuestionario",
  "Adecuación del instrumento para medir la experiencia estudiantil en encuentros síncronos",
];
const CRITERIOS = ["Claridad","Coherencia","Pertinencia","Relevancia"];
const NIVELES = [1,2,3,4,5];
const NL = {1:"Muy bajo",2:"Bajo",3:"Medio",4:"Alto",5:"Muy alto"};
const DC = {
  "Planificación de la enseñanza":["#1e40af","#dbeafe"],
  "Metodologías":["#6d28d9","#ede9fe"],
  "Recursos didácticos":["#0f766e","#ccfbf1"],
  "Evaluación para el aprendizaje":["#b45309","#fef3c7"],
  "Interacción social":["#be185d","#fce7f3"],
  "Apoyo pedagógico institucional":["#065f46","#d1fae5"],
  "Pregunta abierta":["#374151","#f3f4f6"],
};
const DI = {"Planificación de la enseñanza":"📋","Metodologías":"⚙️","Recursos didácticos":"🗂️","Evaluación para el aprendizaje":"📊","Interacción social":"🤝","Apoyo pedagógico institucional":"🏛️","Pregunta abierta":"💬"};
const cv = v => !v?"#f1f5f9":v<=2?"#fee2e2":v===3?"#fef9c3":"#dcfce7";
const tc = v => !v?"#94a3b8":v<=2?"#991b1b":v===3?"#92400e":"#166534";
const avgArr = a => { const f=a.filter(Boolean); return f.length?(f.reduce((x,y)=>x+y,0)/f.length):null; };
const fmt = v => v==null?"—":Number(v).toFixed(2);

export default function App() {
  const [step, setStep] = useState(0);
  const [experto, setExperto] = useState({nombre:"",institucion:"",cargo:"",fecha:""});
  const [vals, setVals] = useState({});
  const [obsItems, setObsItems] = useState({});
  const [globalVals, setGlobalVals] = useState({});
  const [globalObs, setGlobalObs] = useState({});
  const [sugerencias, setSugerencias] = useState("");
  const [htmlContent, setHtmlContent] = useState("");

  const sv = (cod,crit,v) => setVals(p=>({...p,[`${cod}_${crit}`]:v}));
  const gv = (cod,crit) => vals[`${cod}_${crit}`]||null;
  const iAvg = cod => avgArr(CRITERIOS.map(c=>gv(cod,c)));
  const dims = [...new Set(ITEMS.map(i=>i.dim))];
  const dItems = dim => ITEMS.filter(i=>i.dim===dim);
  const dAvg = dim => avgArr(dItems(dim).flatMap(i=>CRITERIOS.map(c=>gv(i.codigo,c))));
  const gAvgVal = () => avgArr(GLOBAL_CRITERIA.map(g=>globalVals[g]));
  const overallVal = () => avgArr(ITEMS.flatMap(i=>CRITERIOS.map(c=>gv(i.codigo,c))));

  const buildHTML = () => {
    const ov = overallVal(); const ga = gAvgVal();
    const ocol = !ov?"#94a3b8":ov<=2?"#ef4444":ov<=3?"#f59e0b":"#22c55e";
    const gcol = !ga?"#94a3b8":ga<=2?"#ef4444":ga<=3?"#f59e0b":"#22c55e";
    const dimBars = dims.map(dim=>{
      const dv=dAvg(dim)||0;const[dc]=DC[dim];
      return `<div style="margin-bottom:8px"><div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:2px"><span style="font-weight:600">${DI[dim]} ${dim}</span><span style="font-weight:800;color:${dc}">${dv?dv.toFixed(2):"—"}</span></div><div style="background:#e2e8f0;border-radius:99px;height:9px;overflow:hidden"><div style="width:${(dv/5)*100}%;background:${dc};height:100%;border-radius:99px"></div></div></div>`;
    }).join("");
    const dimSections = dims.map(dim=>{
      const[dc,dbg]=DC[dim];const dv=dAvg(dim);
      const rows=dItems(dim).map((item,idx)=>{
        const ia=iAvg(item.codigo);
        return `<tr style="background:${idx%2===0?"#fff":"#f8fafc"}"><td style="padding:5px 7px;font-weight:700;color:#64748b;text-align:center;width:28px">${item.num}</td><td style="padding:5px 7px;font-size:9.5px;line-height:1.45">${item.texto}</td>${CRITERIOS.map(c=>{const v=gv(item.codigo,c);return`<td style="padding:5px 7px;text-align:center;background:${cv(v)};color:${tc(v)};font-weight:700;width:60px">${v||"—"}</td>`;}).join("")}<td style="padding:5px 7px;text-align:center;background:${cv(ia?Math.round(ia):null)};color:${tc(ia?Math.round(ia):null)};font-weight:800;width:40px">${ia!=null?ia.toFixed(2):"—"}</td><td style="padding:5px 7px;font-size:9px;color:#475569">${obsItems[item.codigo]||""}</td></tr>`;
      }).join("");
      return `<div style="margin-bottom:14px;page-break-inside:avoid"><div style="background:${dc};color:white;border-radius:8px 8px 0 0;padding:7px 12px;display:flex;justify-content:space-between;align-items:center"><span style="font-weight:800;font-size:11px">${DI[dim]} ${dim}</span><span style="background:rgba(255,255,255,.2);border-radius:20px;padding:1px 9px;font-size:10px;font-weight:700">Promedio: ${fmt(dv)}</span></div><table style="width:100%;border-collapse:collapse;font-size:10px;border:1px solid #e2e8f0;border-top:none"><thead><tr style="background:${dbg}"><th style="padding:4px 7px;color:${dc};font-size:9px;text-align:center">#</th><th style="padding:4px 7px;color:${dc};font-size:9px;text-align:left">Ítem</th>${CRITERIOS.map(c=>`<th style="padding:4px 7px;color:${dc};font-size:9px;text-align:center">${c}</th>`).join("")}<th style="padding:4px 7px;color:${dc};font-size:9px;text-align:center">Ẋ</th><th style="padding:4px 7px;color:${dc};font-size:9px;text-align:left">Observaciones</th></tr></thead><tbody>${rows}</tbody></table></div>`;
    }).join("");
    const globalRows = GLOBAL_CRITERIA.map((g,idx)=>{
      const v=globalVals[g];
      return `<tr style="background:${idx%2===0?"white":"#f0f9ff"}"><td style="padding:7px 10px">${g}</td><td style="padding:7px 10px;text-align:center;font-weight:700;background:${cv(v)};color:${tc(v)}">${v||"—"}</td><td style="padding:7px 10px;text-align:center;color:#475569">${v?NL[v]:""}</td><td style="padding:7px 10px;color:#475569">${globalObs[g]||""}</td></tr>`;
    }).join("");
    const levelSummary = dims.map(dim=>{
      const dv=dAvg(dim);
      return `<div style="display:flex;justify-content:space-between;align-items:center;padding:4px 0;border-bottom:1px solid #e2e8f0"><span style="font-size:9.5px">${DI[dim]} ${dim}</span><span style="background:${cv(dv?Math.round(dv):null)};color:${tc(dv?Math.round(dv):null)};padding:1px 8px;border-radius:20px;font-size:9px;font-weight:700">${dv!=null?dv.toFixed(2):"—"} · ${dv?NL[Math.round(dv)]:"—"}</span></div>`;
    }).join("");

    return `<!DOCTYPE html>
<html lang="es"><head><meta charset="UTF-8"/>
<title>Rúbrica de validación de expertos - Cuestionario</title>
<style>
@page{size:A4;margin:12mm 13mm}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Segoe UI',Arial,sans-serif;background:white;color:#1e293b;font-size:12px}
.wrap{max-width:794px;margin:0 auto;padding:22px 26px}
</style></head><body><div class="wrap">
<div style="background:linear-gradient(135deg,#1e3a5f 0%,#1e40af 55%,#3b82f6 100%);color:white;border-radius:12px;padding:18px 22px;margin-bottom:13px">
<div style="font-size:8px;letter-spacing:2px;text-transform:uppercase;opacity:.7;margin-bottom:4px">Universidad Particular Internacional SEK · Ecuador · Validación de Expertos</div>
<div style="font-size:15px;font-weight:900;margin-bottom:8px">Rúbrica de validación de expertos - Cuestionario</div>
<div style="display:grid;grid-template-columns:1fr auto;gap:14px;align-items:start">
<div>
<div style="font-size:13px;font-weight:700;line-height:1.4;margin-bottom:9px;opacity:.95">${TITULO}</div>
<div style="font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:1px;opacity:.75;margin-bottom:3px">Objetivo general</div>
<p style="font-size:9.5px;line-height:1.5;opacity:.93;margin-bottom:7px">${OBJ_GENERAL}</p>
<div style="font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:1px;opacity:.75;margin-bottom:3px">Objetivos específicos</div>
<ol style="padding-left:14px;font-size:9px;line-height:1.6;opacity:.9;margin:0">${OBJ_ESP.map(o=>`<li style="margin-bottom:2px">${o}</li>`).join("")}</ol>
</div>
<div style="display:flex;flex-direction:column;gap:7px;min-width:92px">
<div style="background:rgba(255,255,255,.15);border:1.5px solid rgba(255,255,255,.3);border-radius:9px;padding:9px 12px;text-align:center"><div style="font-size:23px;font-weight:900">${fmt(ov)}</div><div style="font-size:8px;opacity:.8">Promedio ítems</div></div>
<div style="background:rgba(255,255,255,.15);border:1.5px solid rgba(255,255,255,.3);border-radius:9px;padding:9px 12px;text-align:center"><div style="font-size:23px;font-weight:900">${fmt(ga)}</div><div style="font-size:8px;opacity:.8">Val. global</div></div>
</div></div></div>
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin-bottom:11px">
${[["Experto evaluador",experto.nombre],["Institución",experto.institucion],["Cargo / Especialidad",experto.cargo],["Fecha",experto.fecha]].map(([l,v])=>`<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:7px;padding:7px 9px"><div style="font-size:7.5px;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;margin-bottom:2px">${l}</div><div style="font-size:10.5px;font-weight:700">${v||"—"}</div></div>`).join("")}
</div>
<div style="display:flex;gap:7px;align-items:center;margin-bottom:11px;padding:6px 10px;background:#f8fafc;border-radius:7px;border:1px solid #e2e8f0;flex-wrap:wrap">
<span style="font-size:8.5px;font-weight:700;color:#64748b;text-transform:uppercase">Escala:</span>
${[[1,"#fee2e2","#991b1b","Muy bajo"],[2,"#fecaca","#b91c1c","Bajo"],[3,"#fef9c3","#92400e","Medio"],[4,"#bbf7d0","#166534","Alto"],[5,"#dcfce7","#15803d","Muy alto"]].map(([v,bg,col,l])=>`<span style="background:${bg};color:${col};padding:1px 7px;border-radius:20px;font-size:9px;font-weight:700">${v} – ${l}</span>`).join("")}
<span style="margin-left:auto;font-size:8px;color:#94a3b8">Criterios: Claridad · Coherencia · Pertinencia · Relevancia</span>
</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:11px;margin-bottom:14px">
<div style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:9px;padding:12px 14px">
<div style="font-size:10.5px;font-weight:800;color:#0369a1;margin-bottom:9px">📊 Promedio por dimensión</div>${dimBars}</div>
<div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:9px;padding:12px 14px">
<div style="font-size:10.5px;font-weight:800;color:#166534;margin-bottom:9px">🎯 Nivel alcanzado</div>${levelSummary}
<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;margin-top:3px">
<span style="font-size:10px;font-weight:800">PROMEDIO GENERAL</span>
<span style="background:${ocol};color:white;padding:2px 10px;border-radius:20px;font-size:9.5px;font-weight:800">${fmt(ov)} · ${ov?NL[Math.round(ov)]:"—"}</span>
</div></div></div>
<div style="display:flex;align-items:center;gap:7px;margin-bottom:9px"><div style="width:16px;height:16px;background:#1e3a5f;border-radius:50%;color:white;font-size:9px;display:flex;align-items:center;justify-content:center">📋</div><span style="font-size:12px;font-weight:800;color:#1e3a5f">Evaluación detallada por ítem</span></div>
${dimSections}
<div style="display:flex;align-items:center;gap:7px;margin:14px 0 9px"><div style="width:16px;height:16px;background:#0f766e;border-radius:50%;color:white;font-size:9px;display:flex;align-items:center;justify-content:center">🌐</div><span style="font-size:12px;font-weight:800;color:#1e3a5f">Evaluación global del instrumento</span></div>
<table style="width:100%;border-collapse:collapse;font-size:10.5px;border:1px solid #e2e8f0">
<thead><tr style="background:#1e3a5f;color:white"><th style="padding:7px 9px;text-align:left;width:46%">Criterio</th><th style="padding:7px 9px;text-align:center;width:10%">Valor</th><th style="padding:7px 9px;text-align:center;width:16%">Nivel</th><th style="padding:7px 9px;text-align:left">Observaciones</th></tr></thead>
<tbody>${globalRows}<tr style="background:#e0f2fe"><td style="padding:7px 9px;font-weight:800;font-size:11px">Promedio global del instrumento</td><td colspan="3" style="text-align:center;font-weight:900;font-size:13px;color:${gcol}">${fmt(ga)} — ${ga?NL[Math.round(ga)]:""}</td></tr></tbody></table>
${sugerencias?`<div style="display:flex;align-items:center;gap:7px;margin:14px 0 9px"><div style="width:16px;height:16px;background:#7c3aed;border-radius:50%;color:white;font-size:9px;display:flex;align-items:center;justify-content:center">💡</div><span style="font-size:12px;font-weight:800;color:#1e3a5f">Sugerencias y recomendaciones</span></div><div style="background:#faf5ff;border:1px solid #ddd6fe;border-left:5px solid #7c3aed;border-radius:7px;padding:12px 14px;font-size:11px;color:#3b0764;line-height:1.7;white-space:pre-wrap">${sugerencias}</div>`:""}
<div style="margin-top:20px;border-top:2px solid #e2e8f0;padding-top:14px;display:grid;grid-template-columns:1fr 1fr;gap:44px">
<div><div style="font-size:8.5px;color:#94a3b8;margin-bottom:4px">Firma del experto evaluador</div><div style="border-top:1.5px solid #94a3b8;padding-top:6px;margin-top:34px;text-align:center"><div style="font-weight:700;font-size:11.5px">${experto.nombre||"———————————————"}</div><div style="font-size:10px;color:#64748b">${experto.cargo||""}</div><div style="font-size:10px;color:#64748b">${experto.institucion||""}</div></div></div>
<div><div style="font-size:8.5px;color:#94a3b8;margin-bottom:4px">Fecha y sello</div><div style="border-top:1.5px solid #94a3b8;padding-top:6px;margin-top:34px;text-align:center"><div style="font-weight:700;font-size:11.5px">${experto.fecha||"———————————————"}</div><div style="font-size:10px;color:#64748b">Documento generado digitalmente</div></div></div>
</div>
<div style="text-align:center;margin-top:12px;font-size:8px;color:#cbd5e1;letter-spacing:1px;border-top:1px solid #f1f5f9;padding-top:9px">UNIVERSIDAD PARTICULAR INTERNACIONAL SEK · ECUADOR · VALIDACIÓN DE INSTRUMENTO DE INVESTIGACIÓN · ${new Date().getFullYear()}</div>
</div></body></html>`;
  };

  const handleGenerate = () => {
    setHtmlContent(buildHTML());
    setStep(5);
  };

  const BASE = {fontFamily:"Georgia,serif",maxWidth:920,margin:"0 auto",padding:"20px 16px",background:"#f8fafc",minHeight:"100vh"};

  // ── PASO 5: INFORME ──────────────────────────────────────────────────────
  if (step === 5) return (
    <div style={BASE}>
      <style>{`.btn{padding:9px 20px;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:600}.bs{background:#e2e8f0;color:#334155}`}</style>
      <div style={{marginBottom:12}}>
        <button className="btn bs" onClick={()=>setStep(4)}>← Volver</button>
      </div>
      <iframe
        id="report-iframe"
        className="print-frame"
        srcDoc={htmlContent}
        style={{width:"100%",height:"1200px",border:"2px solid #e2e8f0",borderRadius:10,background:"white",display:"block"}}
        title="Informe de Validación"
      />
      <div style={{textAlign:"center",marginTop:16}}>
        <button
          onClick={()=>{
            const w = window.open("","_blank");
            w.document.open();
            w.document.write(htmlContent);
            w.document.close();
          }}
          style={{padding:"12px 36px",background:"#16a34a",color:"white",border:"none",borderRadius:8,fontWeight:700,fontSize:15,cursor:"pointer"}}
        >⬇️ Descargar HTML</button>
        <p style={{marginTop:8,fontSize:11,color:"#94a3b8"}}>Se abrirá en una nueva pestaña. Desde allí: Ctrl+P → Guardar como PDF → A4</p>
      </div>
    </div>
  );

  // ── FORMULARIO ───────────────────────────────────────────────────────────
  return (
    <div style={BASE}>
      <style>{`
        select{padding:4px 8px;border-radius:6px;border:1px solid #cbd5e1;font-size:13px;cursor:pointer}
        input,textarea{border:1px solid #cbd5e1;border-radius:6px;padding:8px;font-size:14px;width:100%;box-sizing:border-box}
        textarea{resize:vertical}
        .btn{padding:9px 20px;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:600}
        .bp{background:#1e40af;color:white}.bs{background:#e2e8f0;color:#334155}.bg{background:#16a34a;color:white}
        table{width:100%;border-collapse:collapse;font-size:13px}
        th{background:#1e3a5f;color:white;padding:8px 10px;text-align:center}
        td{padding:7px 10px;border:1px solid #e2e8f0;vertical-align:middle}
        tr:nth-child(even) td{background:#f8fafc}
      `}</style>

      <div style={{textAlign:"center",marginBottom:20}}>
        <div style={{fontSize:10,color:"#64748b",letterSpacing:2,textTransform:"uppercase",marginBottom:4}}>Universidad Particular Internacional SEK · Ecuador</div>
        <h1 style={{margin:0,fontSize:17,color:"#1e3a5f",lineHeight:1.4}}>{TITULO}</h1>
        <p style={{margin:"6px 0 0",fontSize:13,color:"#475569"}}>Rúbrica de Validación de Expertos - Cuestionario</p>
      </div>

      <div style={{display:"flex",gap:5,marginBottom:22,flexWrap:"wrap",justifyContent:"center"}}>
        {["1. Datos","2. Ítems","3. Global","4. Sugerencias"].map((s,i)=>(
          <div key={i} onClick={()=>setStep(i)} style={{padding:"6px 13px",borderRadius:20,fontSize:12,cursor:"pointer",fontWeight:step===i?700:400,background:step===i?"#1e40af":i<step?"#bfdbfe":"#e2e8f0",color:step===i?"white":i<step?"#1e40af":"#64748b",border:step===i?"2px solid #1e40af":"2px solid transparent"}}>{s}</div>
        ))}
      </div>

      {/* STEP 0 */}
      {step===0&&(
        <div style={{background:"white",borderRadius:12,padding:22,boxShadow:"0 2px 10px #0001"}}>
          <div style={{background:"#f0f9ff",borderRadius:10,padding:14,marginBottom:18,borderLeft:"4px solid #0ea5e9"}}>
            <div style={{fontSize:11,fontWeight:700,color:"#0369a1",textTransform:"uppercase",letterSpacing:1,marginBottom:5}}>Objetivo general</div>
            <p style={{fontSize:13,color:"#1e293b",margin:"0 0 11px",lineHeight:1.6}}>{OBJ_GENERAL}</p>
            <div style={{fontSize:11,fontWeight:700,color:"#0369a1",textTransform:"uppercase",letterSpacing:1,marginBottom:5}}>Objetivos específicos</div>
            <ol style={{paddingLeft:18,fontSize:13,color:"#1e293b",lineHeight:1.7,margin:0}}>{OBJ_ESP.map((o,i)=><li key={i} style={{marginBottom:3}}>{o}</li>)}</ol>
          </div>
          <h3 style={{color:"#1e3a5f",fontSize:14,margin:"0 0 13px"}}>Datos del experto evaluador</h3>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:13}}>
            {[["nombre","Nombre completo"],["institucion","Institución"],["cargo","Cargo / Especialidad"],["fecha","Fecha"]].map(([k,l])=>(
              <div key={k}>
                <label style={{fontSize:13,color:"#475569",display:"block",marginBottom:4}}>{l}</label>
                <input type={k==="fecha"?"date":"text"} value={experto[k]} onChange={e=>setExperto(p=>({...p,[k]:e.target.value}))}/>
              </div>
            ))}
          </div>
          <div style={{marginTop:16,textAlign:"right"}}>
            <button className="btn bp" onClick={()=>setStep(1)}>Continuar →</button>
          </div>
        </div>
      )}

      {/* STEP 1 */}
      {step===1&&(
        <div>
          {dims.map(dim=>{
            const [dc,dbg]=DC[dim];
            return(
              <div key={dim} style={{background:"white",borderRadius:12,padding:18,boxShadow:"0 2px 8px #0001",marginBottom:14,borderTop:`4px solid ${dc}`}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
                  <h3 style={{margin:0,color:dc,fontSize:14}}>{DI[dim]} {dim}</h3>
                  <span style={{background:dbg,color:dc,borderRadius:12,padding:"2px 10px",fontSize:11,fontWeight:700}}>Ẋ {fmt(dAvg(dim))}</span>
                </div>
                {dItems(dim).map(item=>{
                  const ia=iAvg(item.codigo);
                  return(
                    <div key={item.codigo} style={{marginBottom:13,borderBottom:"1px solid #f1f5f9",paddingBottom:13}}>
                      <div style={{display:"flex",gap:8,marginBottom:8,alignItems:"flex-start"}}>
                        <span style={{background:dc,color:"white",borderRadius:"50%",width:24,height:24,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:11,flexShrink:0}}>{item.num}</span>
                        <p style={{margin:0,fontSize:13,color:"#1e293b",lineHeight:1.5}}>{item.texto}</p>
                      </div>
                      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr) auto",gap:7,marginBottom:6}}>
                        {CRITERIOS.map(c=>(
                          <div key={c}>
                            <label style={{fontSize:10,color:"#64748b",display:"block",marginBottom:2}}>{c}</label>
                            <select style={{width:"100%",background:cv(gv(item.codigo,c))}} value={gv(item.codigo,c)||""} onChange={e=>sv(item.codigo,c,e.target.value?+e.target.value:null)}>
                              <option value="">—</option>
                              {NIVELES.map(n=><option key={n} value={n}>{n} – {NL[n]}</option>)}
                            </select>
                          </div>
                        ))}
                        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end"}}>
                          <label style={{fontSize:10,color:"#64748b",marginBottom:2}}>Ẋ</label>
                          <div style={{background:cv(ia?Math.round(ia):null),color:tc(ia?Math.round(ia):null),borderRadius:7,padding:"5px 11px",fontWeight:800,fontSize:13}}>{fmt(ia)}</div>
                        </div>
                      </div>
                      <input type="text" placeholder="Observaciones (opcional)..." value={obsItems[item.codigo]||""} onChange={e=>setObsItems(p=>({...p,[item.codigo]:e.target.value}))} style={{fontSize:12}}/>
                    </div>
                  );
                })}
              </div>
            );
          })}
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <button className="btn bs" onClick={()=>setStep(0)}>← Anterior</button>
            <button className="btn bp" onClick={()=>setStep(2)}>Continuar →</button>
          </div>
        </div>
      )}

      {/* STEP 2 */}
      {step===2&&(
        <div style={{background:"white",borderRadius:12,padding:22,boxShadow:"0 2px 10px #0001"}}>
          <h2 style={{color:"#1e3a5f",marginTop:0,fontSize:16}}>Evaluación global del instrumento</h2>
          <table>
            <thead><tr><th>Criterio</th><th>Valoración</th><th>Observaciones (opcional)</th></tr></thead>
            <tbody>{GLOBAL_CRITERIA.map(g=>(
              <tr key={g}>
                <td>{g}</td>
                <td style={{textAlign:"center",background:cv(globalVals[g]),width:150}}>
                  <select value={globalVals[g]||""} onChange={e=>setGlobalVals(p=>({...p,[g]:e.target.value?+e.target.value:null}))}>
                    <option value="">—</option>
                    {NIVELES.map(n=><option key={n} value={n}>{n} – {NL[n]}</option>)}
                  </select>
                </td>
                <td><input type="text" placeholder="Observación..." value={globalObs[g]||""} onChange={e=>setGlobalObs(p=>({...p,[g]:e.target.value}))}/></td>
              </tr>
            ))}</tbody>
          </table>
          <div style={{marginTop:11,textAlign:"right",background:"#f0f9ff",borderRadius:7,padding:"7px 13px"}}>
            <strong style={{color:"#0369a1"}}>Promedio global: {fmt(gAvgVal())}</strong>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",marginTop:16}}>
            <button className="btn bs" onClick={()=>setStep(1)}>← Anterior</button>
            <button className="btn bp" onClick={()=>setStep(3)}>Continuar →</button>
          </div>
        </div>
      )}

      {/* STEP 3 */}
      {step===3&&(
        <div style={{background:"white",borderRadius:12,padding:22,boxShadow:"0 2px 10px #0001"}}>
          <h2 style={{color:"#1e3a5f",marginTop:0,fontSize:16}}>Sugerencias <span style={{fontSize:12,color:"#94a3b8",fontWeight:400}}>(opcional)</span></h2>
          <textarea rows={7} value={sugerencias} onChange={e=>setSugerencias(e.target.value)} placeholder="Recomendaciones o ajustes propuestos al instrumento..."/>
          <div style={{display:"flex",justifyContent:"space-between",marginTop:16}}>
            <button className="btn bs" onClick={()=>setStep(2)}>← Anterior</button>
            <button className="btn bg" style={{fontSize:15,padding:"10px 28px"}} onClick={handleGenerate}>📄 Generar informe</button>
          </div>
        </div>
      )}

      {/* STEP 4 (no se usa normalmente, solo por nav) */}
      {step===4&&(
        <div style={{background:"white",borderRadius:12,padding:22,boxShadow:"0 2px 10px #0001",textAlign:"center"}}>
          <p style={{color:"#475569",marginBottom:16}}>El informe fue generado. Puedes volver a verlo.</p>
          <div style={{display:"flex",gap:10,justifyContent:"center"}}>
            <button className="btn bs" onClick={()=>setStep(3)}>← Anterior</button>
            <button className="btn bg" onClick={handleGenerate}>📄 Ver informe</button>
          </div>
        </div>
      )}
    </div>
  );
}
