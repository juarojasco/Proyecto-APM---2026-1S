import { Users, GraduationCap, University } from "lucide-react";

const team = [
  { name: "Ing. Jeison Nicolas Diaz Arciniegas", initials: "JD" },
  { name: "Ing. Juan Antonio Rojas Cobos", initials: "JR" },
  { name: "Ing. Mateo Bustos Aguilar", initials: "MB" },
  { name: "Ing. Miguel Antonio Parrado Pardo", initials: "MP" },
  { name: "Ing. Omar David Acosta Zambrano", initials: "OA" },
  { name: "Ing. David Santiago Cuellar Lopez", initials: "DC" },
];

const avatarColors = [
  "bg-[#06335f]",
  "bg-[#f02d4d]",
  "bg-[#06335f]",
  "bg-[#f02d4d]",
  "bg-[#06335f]",
  "bg-[#f02d4d]",
];

export default function Nosotros() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-block bg-[#f02d4d] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          Grupo de Trabajo
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#141414] mb-4">
          Nosotros
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
          Somos un equipo de ingenieros estudiantes de la materia <strong>Automatización de Procesos de Manufactura</strong> comprometidos
          con la mejora continua de sistemas productivos industriales.
        </p>
      </div>

      {/* Contexto académico */}
      <section className="mb-12 bg-[#06335f] rounded-2xl p-8 text-white">
        <div className="flex items-center gap-3 mb-4">
          <University className="w-7 h-7 text-[#f02d4d]" />
          <h2 className="text-xl font-bold">Contexto Académico</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-blue-300 font-semibold flex-shrink-0">Materia:</span>
                <span className="text-white">Automatización de Procesos de Manufactura</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-300 font-semibold flex-shrink-0">Periodo:</span>
                <span className="text-white">2026 – 1S</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-300 font-semibold flex-shrink-0">Departamento:</span>
                <span className="text-white">Ingeniería Mecánica y Mecatrónica</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-300 font-semibold flex-shrink-0">Facultad:</span>
                <span className="text-white">Facultad de Ingeniería</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-300 font-semibold flex-shrink-0">Universidad:</span>
                <span className="text-white">Universidad Nacional de Colombia – Sede Bogotá</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-center">
              <GraduationCap className="w-24 h-24 text-white/20 mx-auto mb-3" />
              <p className="text-blue-200 text-sm font-semibold">Universidad Nacional de Colombia</p>
              <p className="text-blue-300 text-xs">Sede Bogotá</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-[#06335f] rounded-lg p-2">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold text-[#141414]">Grupo de Trabajo</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-6 flex flex-col items-center text-center hover:border-[#06335f]/20"
            >
              <div className={`${avatarColors[i]} text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-md`}>
                {member.initials}
              </div>
              <p className="font-semibold text-[#141414] text-sm leading-snug">{member.name}</p>
              <p className="text-gray-400 text-xs mt-2">Automatización de Procesos de Manufactura</p>
              <div className="mt-3 flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#f02d4d]" />
                <span className="text-xs text-gray-500">2026-1S</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cierre */}
      <section className="text-center py-8">
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
          <div className="text-5xl mb-4">🎓</div>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto text-sm">
            Este proyecto es el resultado del trabajo colectivo del grupo JMS-Automations en el marco de la materia
            de Automatización de Procesos de Manufactura. Buscamos aplicar las herramientas de la ingeniería industrial
            y la automatización para proponer soluciones reales y viables en la industria de bebidas carbonatadas.
          </p>
        </div>
      </section>
    </div>
  );
}
