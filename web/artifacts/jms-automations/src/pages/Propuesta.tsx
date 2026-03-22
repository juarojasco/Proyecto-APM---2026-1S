import { AlertTriangle, TrendingDown, Lightbulb, TrendingUp, DollarSign, AlertOctagon } from "lucide-react";

const consecuencias = [
  "Acumulación de inventario en proceso (WIP) en etapas intermedias de la línea",
  "Paradas no programadas que interrumpen el flujo continuo de producción",
  "Baja eficiencia global del equipo (OEE) por debajo de estándares industriales",
  "Incapacidad de responder ágilmente a cambios en la demanda del mercado",
  "Elevados costos operativos por uso ineficiente de mano de obra y tiempo",
  "Variabilidad en la calidad del producto por procesos manuales no estandarizados",
];

const propuesta = [
  {
    titulo: "Automatización de la Estación de Llenado",
    desc: "Implementar un sistema de llenado automatizado con control de flujo y pesaje en tiempo real para garantizar exactitud y velocidad constante.",
    icon: "⚙️",
  },
  {
    titulo: "Sistema de Transporte Automatizado (Conveyor)",
    desc: "Reemplazar el transporte manual entre estaciones por una línea de conveyor automatizada con control de velocidad variable.",
    icon: "🔄",
  },
  {
    titulo: "Control de Calidad Automático (Visión Artificial)",
    desc: "Incorporar cámaras de inspección visual y sensores para detección automática de defectos en el sellado, llenado y etiquetado.",
    icon: "👁️",
  },
  {
    titulo: "Sistema SCADA de Monitoreo",
    desc: "Implementar un sistema de supervisión SCADA para monitoreo en tiempo real de indicadores de producción y generación de alertas preventivas.",
    icon: "📊",
  },
];

const impactos = [
  { label: "Reducción de Tiempo de Ciclo", value: "~30%", color: "text-green-600", bg: "bg-green-50 border-green-200" },
  { label: "Mejora del OEE", value: "+25%", color: "text-blue-600", bg: "bg-blue-50 border-blue-200" },
  { label: "Reducción de WIP", value: "~40%", color: "text-purple-600", bg: "bg-purple-50 border-purple-200" },
  { label: "Reducción de Defectos", value: "~60%", color: "text-red-600", bg: "bg-red-50 border-red-200" },
];

const limitaciones = [
  "El modelo de simulación actual es preliminar y requiere validación con datos reales de planta",
  "Los costos estimados son aproximados y sujetos a cotizaciones formales con proveedores",
  "La implementación requiere paros de producción programados para instalación de equipos",
  "El impacto esperado está basado en benchmarks de la industria y puede variar según condiciones reales",
  "Se requiere capacitación del personal operativo antes de la puesta en marcha",
  "La integración con sistemas existentes (ERP, MES) puede generar complejidad adicional",
];

export default function Propuesta() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-block bg-[#f02d4d] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          Propuesta de Mejora
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#141414] mb-4">
          Propuesta de Automatización
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
          Solución técnica propuesta para resolver las ineficiencias identificadas en la línea de producción de bebidas carbonatadas.
        </p>
      </div>

      {/* Problema detectado */}
      <section className="mb-10 bg-red-50 border border-red-200 rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#f02d4d] rounded-lg p-2">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold text-[#141414]">Problema Detectado</h2>
        </div>
        <p className="text-gray-700 leading-relaxed">
          La línea de producción opera con procesos predominantemente manuales en etapas críticas como el llenado,
          sellado y transporte entre estaciones. Esto genera tiempos de ciclo variables, alta dependencia de operarios,
          acumulación de inventario en proceso y una eficiencia global (OEE) significativamente inferior a los
          estándares de la industria de bebidas carbonatadas (típicamente 65-85% en plantas modernas).
        </p>
      </section>

      {/* Consecuencias */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#06335f] rounded-lg p-2">
            <TrendingDown className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold text-[#141414]">Consecuencias del Problema</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {consecuencias.map((c, i) => (
            <div key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="bg-[#f02d4d]/10 rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[#f02d4d] font-bold text-xs">{i + 1}</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Propuesta de mejora */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#06335f] rounded-lg p-2">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold text-[#141414]">Propuesta de Mejora</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {propuesta.map((p, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow hover:border-[#06335f]/20">
              <div className="text-4xl mb-3">{p.icon}</div>
              <h3 className="font-bold text-[#06335f] mb-2">{p.titulo}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impacto esperado */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#06335f] rounded-lg p-2">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold text-[#141414]">Impacto Esperado</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {impactos.map((imp) => (
            <div key={imp.label} className={`rounded-xl border-2 ${imp.bg} p-5 text-center`}>
              <p className={`text-3xl font-extrabold ${imp.color}`}>{imp.value}</p>
              <p className="text-gray-700 text-xs font-semibold mt-2 leading-snug">{imp.label}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-xs mt-4">* Estimaciones basadas en benchmarks industriales. Sujeto a validación con simulación.</p>
      </section>

      {/* Costo esperado */}
      <section className="mb-10 bg-[#06335f] rounded-2xl p-8 text-white">
        <div className="flex items-center gap-3 mb-6">
          <DollarSign className="w-7 h-7 text-[#f02d4d]" />
          <h2 className="text-xl font-bold">Costo Esperado</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { cat: "Equipos de Automatización", desc: "Sistemas de llenado, conveyor, cámaras de visión artificial", est: "A determinar según cotización" },
            { cat: "Infraestructura y Software", desc: "SCADA, PLC, sensores, instalación eléctrica y neumática", est: "A determinar según cotización" },
            { cat: "Capacitación e Implementación", desc: "Puesta en marcha, training, integración con sistemas existentes", est: "A determinar según cotización" },
          ].map((item) => (
            <div key={item.cat} className="bg-white/10 rounded-xl p-5 border border-white/20">
              <h3 className="font-bold text-sm mb-2">{item.cat}</h3>
              <p className="text-blue-200 text-xs mb-3">{item.desc}</p>
              <p className="text-[#f02d4d] text-xs font-semibold">{item.est}</p>
            </div>
          ))}
        </div>
        <p className="text-blue-300 text-xs mt-4">Los costos detallados serán calculados en la fase de Costos del plan de gestión, con cotizaciones formales de proveedores.</p>
      </section>

      {/* Limitaciones */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#f02d4d] rounded-lg p-2">
            <AlertOctagon className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold text-[#141414]">Limitaciones</h2>
        </div>
        <div className="space-y-3">
          {limitaciones.map((lim, i) => (
            <div key={i} className="flex items-start gap-3 bg-orange-50 border border-orange-100 rounded-xl p-4">
              <span className="text-orange-400 text-lg flex-shrink-0 mt-0.5">⚠</span>
              <p className="text-gray-700 text-sm leading-relaxed">{lim}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
