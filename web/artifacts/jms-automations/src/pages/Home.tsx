import { Link } from "wouter";
import { ArrowRight, BarChart3, Cpu, LineChart, CheckCircle, Circle, Loader } from "lucide-react";

const products = [
  {
    name: "Bebida de Lima",
    volume: "1.5L",
    color: "bg-green-100",
    textColor: "text-green-700",
    borderColor: "border-green-300",
    emoji: "🍋",
    desc: "Bebida carbonatada de lima con envase retornable",
  },
  {
    name: "Bebida de Toronja",
    volume: "1.75L",
    color: "bg-pink-100",
    textColor: "text-pink-700",
    borderColor: "border-pink-300",
    emoji: "🍊",
    desc: "Bebida carbonatada de toronja con formulación especial",
  },
  {
    name: "Bebida de Cola",
    volume: "2L",
    color: "bg-amber-100",
    textColor: "text-amber-700",
    borderColor: "border-amber-300",
    emoji: "🥤",
    desc: "Bebida carbonatada tipo cola, presentación familiar",
  },
];

const stages = [
  { label: "Diagnóstico Inicial", status: "done", icon: CheckCircle },
  { label: "Modelado Preliminar", status: "done", icon: CheckCircle },
  { label: "Simulación en Desarrollo", status: "active", icon: Loader },
  { label: "Implementación Futura", status: "future", icon: Circle },
];

const services = [
  {
    icon: BarChart3,
    title: "Optimización de Procesos",
    desc: "Identificamos y eliminamos ineficiencias en las líneas de producción mediante análisis de datos y herramientas de ingeniería industrial.",
  },
  {
    icon: Cpu,
    title: "Simulación Industrial",
    desc: "Modelamos entornos productivos digitalmente con Plant Simulation para validar mejoras antes de implementarlas en planta.",
  },
  {
    icon: LineChart,
    title: "Análisis de Producción",
    desc: "Medimos indicadores clave (takt time, OEE, MLT, etc.) para establecer líneas base y proponer mejoras cuantificables.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#06335f] text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 80% 50%, #f02d4d 0%, transparent 60%)"}} />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-block bg-[#f02d4d] text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Proyecto Activo
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Soluciones de Automatización y{" "}
            <span className="text-[#f02d4d]">Optimización</span> de Procesos Productivos
          </h1>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Proyecto de mejora de línea de producción de bebidas carbonatadas
          </p>
          <Link
            href="/proyecto"
            className="inline-flex items-center gap-2 bg-[#f02d4d] hover:bg-[#d02040] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Ver Proyecto <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Estado del Proyecto */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#141414] text-center mb-10">
            Estado del Proyecto
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div key={idx} className="flex flex-col md:flex-row items-center gap-2 flex-1">
                  <div
                    className={`flex flex-col items-center text-center p-5 rounded-xl border-2 w-full ${
                      stage.status === "done"
                        ? "bg-[#06335f] border-[#06335f] text-white"
                        : stage.status === "active"
                        ? "bg-white border-[#f02d4d] text-[#141414]"
                        : "bg-white border-gray-200 text-gray-400"
                    }`}
                  >
                    <Icon className={`w-7 h-7 mb-2 ${stage.status === "active" ? "text-[#f02d4d] animate-spin" : ""}`} />
                    <span className="font-semibold text-sm">{stage.label}</span>
                  </div>
                  {idx < stages.length - 1 && (
                    <ArrowRight className="hidden md:block w-5 h-5 text-gray-300 flex-shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Qué hacemos */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#141414] text-center mb-3">
            ¿Qué Hacemos?
          </h2>
          <p className="text-center text-gray-500 mb-10">Nuestras áreas de especialización como empresa</p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-7 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200 hover:border-[#06335f]/20">
                  <div className="bg-[#06335f]/10 rounded-lg p-3 w-fit mb-4">
                    <Icon className="w-7 h-7 text-[#06335f]" />
                  </div>
                  <h3 className="font-bold text-[#141414] text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Productos */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#141414] text-center mb-3">
            Productos Analizados
          </h2>
          <p className="text-center text-gray-500 mb-10">Línea de bebidas carbonatadas en estudio</p>
          <div className="grid md:grid-cols-3 gap-8 justify-center">
            {products.map((p, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className={`w-36 h-36 rounded-full ${p.color} border-4 ${p.borderColor} flex items-center justify-center shadow-md mb-4 text-6xl`}>
                  {p.emoji}
                </div>
                <h3 className={`font-bold text-lg ${p.textColor}`}>{p.name}</h3>
                <p className="text-gray-400 font-semibold text-sm">{p.volume}</p>
                <p className="text-gray-500 text-sm mt-2 max-w-[180px]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 px-4 bg-[#06335f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Acceso Rápido</h2>
          <p className="text-blue-200 mb-10">Navega directamente a las secciones del proyecto</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/analisis"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#06335f] hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow"
            >
              <BarChart3 className="w-5 h-5" /> Ver Análisis
            </Link>
            <Link
              href="/simulacion"
              className="inline-flex items-center justify-center gap-2 bg-[#f02d4d] text-white hover:bg-[#d02040] font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow"
            >
              <Cpu className="w-5 h-5" /> Ver Simulación
            </Link>
            <Link
              href="/propuesta"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white hover:bg-white/20 border border-white/30 font-semibold px-8 py-3 rounded-lg transition-all duration-200"
            >
              <LineChart className="w-5 h-5" /> Ver Propuesta
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
