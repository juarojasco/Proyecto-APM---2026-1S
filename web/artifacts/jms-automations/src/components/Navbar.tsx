import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Proyecto", href: "/proyecto" },
  { label: "Análisis", href: "/analisis" },
  { label: "Simulación", href: "/simulacion" },
  { label: "Propuesta", href: "/propuesta" },
  { label: "Nosotros", href: "/nosotros" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="bg-[#06335f] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight hover:opacity-90 transition-opacity">
            <div className="bg-[#f02d4d] rounded-lg p-1.5">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span>JMS-Automations</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-150 ${
                  location === link.href
                    ? "bg-[#f02d4d] text-white"
                    : "text-blue-100 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#052a4e] px-4 pb-4 pt-2 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2 rounded-md text-sm font-medium transition ${
                location === link.href
                  ? "bg-[#f02d4d] text-white"
                  : "text-blue-100 hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
