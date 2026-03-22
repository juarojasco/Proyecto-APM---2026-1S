import { useState } from "react";
import { BarChart3, Clock, DollarSign, ShoppingCart, AlertOctagon, MessageSquare, Users, ChevronDown, ChevronUp } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: BarChart3,
    title: "ALCANCE",
    color: "#06335f",
    status: "Completado",
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 text-sm leading-relaxed">
          El alcance define los límites del proyecto y las entregas esperadas. Se estructuró mediante la Estructura de Desglose del Trabajo (EDT).
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-xl p-4 border">
            <h4 className="font-bold text-[#06335f] mb-2">EDT del Proyecto</h4>
            <div className="bg-white rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center h-48 text-gray-400 text-sm">
              <div className="text-center">
                <BarChart3 className="w-10 h-10 mx-auto mb-2 text-[#06335f]/40" />
                <p>EDT_proy.png</p>
                <p className="text-xs">(Imagen del proyecto EDT)</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 border">
            <h4 className="font-bold text-[#06335f] mb-2">EDT de Producción</h4>
            <div className="bg-white rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center h-48 text-gray-400 text-sm">
              <div className="text-center">
                <BarChart3 className="w-10 h-10 mx-auto mb-2 text-[#06335f]/40" />
                <p>EDT_prod.png</p>
                <p className="text-xs">(Imagen de producción EDT)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    icon: Clock,
    title: "TIEMPOS",
    color: "#06335f",
    status: "Completado",
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 text-sm leading-relaxed">
          Gestión del cronograma del proyecto, con identificación de hitos, secuencias de actividades y ruta crítica.
        </p>
        <div className="bg-gray-50 rounded-xl p-4 border">
          <h4 className="font-bold text-[#06335f] mb-2">Cronograma del Proyecto</h4>
          <div className="bg-white rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center h-48 text-gray-400 text-sm">
            <div className="text-center">
              <Clock className="w-10 h-10 mx-auto mb-2 text-[#06335f]/40" />
              <p>cronograma.png</p>
              <p className="text-xs">(Imagen del cronograma)</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    icon: DollarSign,
    title: "COSTOS",
    color: "#f02d4d",
    status: "En alcance actual",
    content: (
      <div className="space-y-4">
        <div className="bg-[#f02d4d]/10 border border-[#f02d4d]/30 rounded-lg p-3 text-sm text-[#f02d4d] font-semibold">
          ★ Límite actual del alcance del proyecto
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          Estimación y control de costos asociados al proyecto de automatización, incluyendo costos de equipos, mano de obra, implementación y retorno de inversión esperado.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {["Equipos", "Mano de Obra", "Implementación", "ROI Esperado"].map((item) => (
            <div key={item} className="bg-white border rounded-xl p-3 text-center shadow-sm">
              <DollarSign className="w-5 h-5 text-[#f02d4d] mx-auto mb-1" />
              <p className="text-xs font-semibold text-gray-700">{item}</p>
              <p className="text-xs text-gray-400 mt-1">Ver propuesta</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 4,
    icon: ShoppingCart,
    title: "ADQUISICIONES",
    color: "#9ca3af",
    status: "Pendiente",
    content: <p className="text-gray-500 text-sm">Esta sección será desarrollada en fases posteriores del proyecto. Incluirá la planificación de adquisición de equipos automatizados y contratos de proveedores.</p>,
  },
  {
    id: 5,
    icon: AlertOctagon,
    title: "RIESGOS",
    color: "#9ca3af",
    status: "Pendiente",
    content: <p className="text-gray-500 text-sm">Identificación, evaluación y plan de mitigación de riesgos técnicos, económicos y operativos asociados al proyecto de automatización.</p>,
  },
  {
    id: 6,
    icon: MessageSquare,
    title: "COMUNICACIONES",
    color: "#9ca3af",
    status: "Pendiente",
    content: <p className="text-gray-500 text-sm">Plan de comunicaciones para la gestión de información entre stakeholders del proyecto durante todas las fases de ejecución.</p>,
  },
  {
    id: 7,
    icon: Users,
    title: "RACI",
    color: "#9ca3af",
    status: "Pendiente",
    content: <p className="text-gray-500 text-sm">Matriz RACI que define Responsables, Autorizadores, Consultados e Informados para cada actividad del proyecto.</p>,
  },
];

const indicadores = [
  { name: "Takt Time", unit: "seg/ud", desc: "Ritmo de producción requerido según demanda" },
  { name: "Tiempo de Ciclo", unit: "seg/ud", desc: "Tiempo real de producción por unidad" },
  { name: "Tiempo de Preparación", unit: "min", desc: "Tiempo de alistamiento entre cambios" },
  { name: "Tasa de Producción", unit: "ud/hr", desc: "Unidades producidas por hora" },
  { name: "Capacidad de Producción", unit: "ud/turno", desc: "Máxima producción por turno" },
  { name: "Manufacturing Lead Time", unit: "hrs", desc: "Tiempo total del proceso extremo a extremo" },
  { name: "OEE", unit: "%", desc: "Efectividad global del equipo (Availability × Performance × Quality)" },
];

const diagrams = [
  { title: "Diagrama de Operación del Proceso (DOP)", key: "dop", desc: "Secuencia de operaciones e inspecciones del proceso productivo" },
  { title: "Diagrama de Análisis de Proceso (DAP)", key: "dap", desc: "Análisis detallado de operaciones, transportes, inspecciones, demoras y almacenajes" },
  { title: "Distribución de Planta Actual", key: "layout", desc: "Layout actual de la planta de producción de bebidas carbonatadas" },
  { title: "Diagrama de Flujo de Materias", key: "flujo_materias", desc: "Flujo de materiales e insumos a través del proceso productivo" },
  { title: "Value Stream Mapping (VSM)", key: "vsm", desc: "Mapa de flujo de valor identificando actividades que agregan y no agregan valor" },
];

export default function Analisis() {
  const [openStep, setOpenStep] = useState<number | null>(1);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-12">
        <div className="inline-block bg-[#f02d4d] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          Análisis del Proyecto
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#141414] mb-4">
          Gestión y Análisis del Proyecto
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
          Aplicación de los 7 pasos para planear y gestionar un proyecto, complementado con herramientas de gestión de producción industrial.
        </p>
      </div>

      {/* 7 Pasos */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#141414] mb-2">7 Pasos de Gestión de Proyectos</h2>
        <p className="text-gray-500 mb-6 text-sm">El alcance actual llega hasta <strong className="text-[#f02d4d]">COSTOS</strong></p>
        <div className="space-y-3">
          {steps.map((step) => {
            const Icon = step.icon;
            const isOpen = openStep === step.id;
            const isPending = step.status === "Pendiente";
            return (
              <div key={step.id} className={`rounded-xl border-2 overflow-hidden transition-all ${isPending ? "border-gray-200 opacity-70" : "border-[#06335f]/20"}`}>
                <button
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition"
                  onClick={() => setOpenStep(isOpen ? null : step.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                      style={{ backgroundColor: step.color }}>
                      {step.id}
                    </div>
                    <div>
                      <span className="font-bold text-[#141414]">{step.title}</span>
                      <span className={`ml-3 text-xs px-2 py-0.5 rounded-full font-semibold ${
                        step.status === "En alcance actual" ? "bg-[#f02d4d]/10 text-[#f02d4d]" :
                        step.status === "Completado" ? "bg-green-100 text-green-700" :
                        "bg-gray-100 text-gray-500"
                      }`}>{step.status}</span>
                    </div>
                  </div>
                  <Icon className="w-5 h-5 text-gray-400" />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 bg-white border-t border-gray-100">
                    <div className="pt-4">{step.content}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Gestión de Producción */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#141414] mb-2">Gestión de Producción</h2>
        <p className="text-gray-500 mb-8 text-sm">Herramientas de análisis y diagramas del proceso productivo</p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {diagrams.map((d) => (
            <div key={d.key} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-[#06335f] text-white px-4 py-3">
                <h3 className="font-bold text-sm">{d.title}</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-500 text-xs mb-3">{d.desc}</p>
                <div className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center h-40 text-gray-400 text-xs">
                  <div className="text-center">
                    <BarChart3 className="w-8 h-8 mx-auto mb-1 text-[#06335f]/30" />
                    <p>{d.key}.png</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores */}
        <div className="bg-[#06335f] rounded-2xl p-8 text-white">
          <h3 className="text-xl font-bold mb-2">Indicadores de Producción</h3>
          <p className="text-blue-200 text-sm mb-6">Por producto: Lima 1.5L · Toronja 1.75L · Cola 2L</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {indicadores.map((ind) => (
              <div key={ind.name} className="bg-white/10 rounded-xl p-4 border border-white/20">
                <h4 className="font-bold text-sm mb-1">{ind.name}</h4>
                <p className="text-blue-300 text-xs font-mono">{ind.unit}</p>
                <p className="text-blue-200 text-xs mt-2 leading-snug">{ind.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-blue-300 text-xs mt-4">
            * OEE = Disponibilidad × Rendimiento × Calidad
          </p>
        </div>
      </section>
    </div>
  );
}
