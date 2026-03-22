import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#06335f] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="bg-[#f02d4d] rounded-lg p-1.5">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span>JMS-Automations</span>
          </div>
          <p className="text-blue-200 text-sm text-center">
            Proyecto de Automatización de Procesos de Manufactura — Universidad Nacional de Colombia, Sede Bogotá — 2026-1S
          </p>
        </div>
        <div className="border-t border-white/20 mt-6 pt-6 text-center text-blue-300 text-xs">
          © 2026 JMS-Automations · Departamento de Ingeniería Mecánica y Mecatrónica
        </div>
      </div>
    </footer>
  );
}
