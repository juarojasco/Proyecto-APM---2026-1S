import { Target, AlertTriangle, CheckSquare, Layers } from "lucide-react";

const products = [
  { emoji: "🍋", name: "Bebida de Lima", volume: "1.5L", color: "bg-green-100 border-green-300", textColor: "text-green-700" },
  { emoji: "🍊", name: "Bebida de Toronja", volume: "1.75L", color: "bg-pink-100 border-pink-300", textColor: "text-pink-700" },
  { emoji: "🥤", name: "Bebida de Cola", volume: "2L", color: "bg-amber-100 border-amber-300", textColor: "text-amber-700" },
];

const objetivos = [
  "Diagnosticar el estado actual de la línea de producción de bebidas carbonatadas mediante herramientas de gestión de producción.",
  "Modelar preliminarmente el proceso productivo utilizando Plant Simulation.",
  "Identificar cuellos de botella, tiempos muertos y oportunidades de mejora.",
  "Proponer una solución de automatización que reduzca tiempos de ciclo y aumente la eficiencia global.",
  "Estimar el impacto económico y operativo de la propuesta de mejora.",
];

const alcanceItems = [
  { title: "Diagnóstico", desc: "Levantamiento de información del proceso actual, diagramas DOP, DAP, layout y flujo de materias." },
  { title: "Análisis", desc: "Cálculo de indicadores de producción, VSM, identificación de desperdicios y aplicación de los 7 pasos de gestión." },
  { title: "Simulación", desc: "Desarrollo de modelo en Plant Simulation del proceso actual con propuesta de mejora de automatización." },
];

export default function Proyecto() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-block bg-[#f02d4d] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          Descripción del Proyecto
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#141414] mb-4">
          Mejora de Línea de Producción de{" "}
          <span className="text-[#06335f]">Bebidas Carbonatadas</span>
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
          Este proyecto tiene como propósito aplicar metodologías de ingeniería industrial y automatización de procesos
          de manufactura a una planta de producción de bebidas carbonatadas, con el fin de optimizar su eficiencia
          operativa mediante diagnóstico, análisis y simulación del proceso productivo.
        </p>
      </div>

      {/* Problema identificado */}
      <section className="mb-12 bg-red-50 border border-red-200 rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#f02d4d] rounded-lg p-2">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold text-[#141414]">Problema Identificado</h2>
        </div>
        <p className="text-gray-700 leading-relaxed">
          La línea de producción de bebidas carbonatadas presenta tiempos de ciclo elevados, acumulación de
          inventario en proceso (WIP), paradas no programadas de equipos y baja eficiencia global (OEE). Estos
          problemas generan pérdidas de capacidad productiva, incremento de costos operativos y dificultad para
          cumplir con la demanda del mercado. La ausencia de automatización en etapas críticas del proceso agudiza
          estas ineficiencias.
        </p>
      </section>

      {/* Objetivos */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#06335f] rounded-lg p-2">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold text-[#141414]">Objetivos</h2>
        </div>
        <div className="space-y-3">
          {objetivos.map((obj, i) => (
            <div key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="bg-[#06335f] text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{obj}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Productos */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#06335f] rounded-lg p-2">
            <CheckSquare className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold text-[#141414]">Productos Involucrados</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div key={i} className={`flex flex-col items-center text-center p-6 rounded-2xl border-2 ${p.color}`}>
              <div className="text-6xl mb-3">{p.emoji}</div>
              <h3 className={`font-bold text-lg ${p.textColor}`}>{p.name}</h3>
              <p className="text-gray-500 text-sm font-semibold">{p.volume}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Alcance */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#06335f] rounded-lg p-2">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold text-[#141414]">Alcance del Proyecto</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {alcanceItems.map((item, i) => (
            <div key={i} className="bg-white border-l-4 border-[#06335f] rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-[#06335f] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 bg-[#06335f] text-white rounded-xl p-5 text-sm">
          <strong>Nota:</strong> El alcance actual del proyecto comprende hasta la etapa de <strong>Costos</strong> dentro del marco de los 7 pasos de gestión de proyectos. Las fases de Adquisiciones, Riesgos, Comunicaciones y RACI están definidas pero pendientes de desarrollo completo.
        </div>
      </section>
    </div>
  );
}
