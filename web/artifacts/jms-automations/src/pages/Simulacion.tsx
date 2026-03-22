import { Cpu, Play, AlertCircle } from "lucide-react";

export default function Simulacion() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-block bg-[#f02d4d] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          Simulación Industrial
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#141414] mb-4">
          Simulación del Proceso Productivo
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
          Modelado y simulación de la planta de producción de bebidas carbonatadas mediante software especializado de simulación industrial.
        </p>
      </div>

      {/* Plant Simulation */}
      <section className="mb-12 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md">
        <div className="bg-[#06335f] px-8 py-5 flex items-center gap-4">
          <div className="bg-white/10 rounded-xl p-3">
            <Cpu className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Tecnomatix Plant Simulation</h2>
            <p className="text-blue-200 text-sm">Siemens Digital Industries Software</p>
          </div>
          <div className="ml-auto">
            <div className="bg-gray-50 border-2 border-dashed border-white/30 rounded-xl w-24 h-16 flex items-center justify-center text-white/60 text-xs">
              plantsim.png
            </div>
          </div>
        </div>
        <div className="p-8">
          <h3 className="font-bold text-[#141414] text-lg mb-3">¿Qué es Plant Simulation?</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Tecnomatix Plant Simulation es un software de simulación de eventos discretos desarrollado por Siemens. Permite modelar,
            simular y optimizar sistemas de producción, logística y cadenas de suministro de manera virtual, antes de realizar
            cambios en la planta real.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Simulación de Eventos Discretos", desc: "Modela el flujo de materiales y recursos en el tiempo" },
              { title: "Análisis Estadístico", desc: "Genera reportes de KPIs, cuellos de botella y utilización" },
              { title: "Optimización Virtual", desc: "Prueba escenarios de mejora sin parar la producción real" },
            ].map((feat) => (
              <div key={feat.title} className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <h4 className="font-bold text-[#06335f] text-sm mb-1">{feat.title}</h4>
                <p className="text-gray-600 text-xs leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modelo de planta */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#06335f] rounded-lg p-2">
            <Play className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold text-[#141414]">Planta de Producción de Bebidas Carbonatadas</h2>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-3 flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-700">Vista del Modelo en Plant Simulation</span>
            <span className="text-xs bg-[#f02d4d] text-white px-2 py-1 rounded-full font-semibold">Modelo Preliminar</span>
          </div>
          <div className="p-8 flex items-center justify-center">
            <div className="bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 w-full flex items-center justify-center" style={{minHeight: "320px"}}>
              <div className="text-center text-gray-400">
                <Cpu className="w-16 h-16 mx-auto mb-3 text-[#06335f]/30" />
                <p className="font-semibold text-gray-500">simu.png</p>
                <p className="text-xs text-gray-400 mt-1">Modelo de planta en Plant Simulation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estado del modelo */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#f02d4d] rounded-lg p-2">
            <AlertCircle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold text-[#141414]">Estado Actual del Modelo</h2>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="bg-amber-400 rounded-full p-2 flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-amber-800 text-lg mb-2">Modelo Preliminar en Desarrollo</h3>
              <p className="text-amber-700 leading-relaxed mb-4">
                El modelo actual corresponde a un <strong>modelo preliminar</strong> de la planta de producción de bebidas carbonatadas.
                Este modelo replica el estado actual del proceso productivo y es la base sobre la cual se desea implementar
                una mejora de automatización.
              </p>
              <div className="space-y-2">
                {[
                  "✅ Modelado del layout actual de planta",
                  "✅ Definición de tiempos de ciclo por operación",
                  "✅ Configuración de recursos y personal",
                  "🔄 Mejora de automatización en proceso de definición",
                  "⏳ Validación del modelo con datos reales pendiente",
                  "⏳ Comparación modelo actual vs. modelo mejorado pendiente",
                ].map((item) => (
                  <p key={item} className="text-amber-800 text-sm">{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
