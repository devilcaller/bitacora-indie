import React, { useState } from 'react';
import { 
  Download, 
  Gamepad2, 
  ChevronRight, 
  Twitch, 
  Instagram, 
  Youtube, 
  Menu, 
  X,
  Disc 
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Configura aquí tus links una sola vez
  const socialLinks = {
    twitch: "https://www.twitch.tv/bitacoraindie",
    instagram: "https://instagram.com/tu_usuario",
    youtube: "https://www.youtube.com/@BitacoraIndie",
    discord: "https://discord.gg/tu_servidor"
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-600 selection:text-white uppercase">
      
      {/* NAVEGACIÓN */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-zinc-800 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-purple-600 p-1 shadow-[0_0_15px_rgba(147,51,234,0.5)]">
            <Gamepad2 size={24} className="text-white" />
          </div>
          <span className="font-black text-xl tracking-tighter italic">
            Bitácora <span className="text-purple-500">Indie</span>
          </span>
        </div>

        <div className="hidden md:flex gap-8 text-xs font-bold tracking-widest">
          <a href="#inicio" className="hover:text-purple-500 transition-colors">Inicio</a>
          <a href="#archivo" className="hover:text-purple-500 transition-colors">Hemeroteca</a>
          <a href="#contacto" className="hover:text-purple-500 transition-colors">Contacto</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* HERO SECTION */}
      <section id="inicio" className="relative pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center overflow-hidden">
        <div className="lg:w-1/2 text-center lg:text-left z-10">
          <span className="inline-block bg-purple-600 text-white px-3 py-1 text-[10px] font-black tracking-[0.2em] mb-4 italic">
            NÚMERO #01 - DISPONIBLE
          </span>
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 tracking-tighter italic">
            EL FUTURO DEL <span className="text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]">GAMEDEV</span> LATINO
          </h1>
          <p className="text-zinc-400 text-sm md:text-base mb-8 max-w-xl font-mono leading-relaxed normal-case">
            ¡ES NUESTRO DEBUT! Entrevistamos a varios desarrolladores con propuestas interesantes de la región. TOPICO CANDENTE: IA VS ARTE TRADICIONAL.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* RUTA CORREGIDA PARA TU PDF LOCAL */}
            <a 
              href="/revistas/edicion_01.pdf" 
              download 
              className="relative flex items-center justify-center gap-3 bg-purple-600 text-white font-black px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 group overflow-hidden"
            >
              <Download size={20} /> DESCARGAR PDF
            </a>
            <a 
              href="/revistas/edicion_01.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-zinc-800 text-white font-black px-8 py-4 hover:border-purple-500 hover:bg-purple-500/10 transition-all"
            >
              LEER ONLINE <ChevronRight size={20} />
            </a>
          </div>
        </div>
        
        {/* PORTADA: 80% TAMAÑO + 15° ROTACIÓN -> 100% TAMAÑO + 0° ROTACIÓN */}
        <div className="lg:w-1/2 flex justify-center perspective-[1200px]">
          <div className="relative group transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform rotate-[15deg] scale-[0.80] hover:rotate-0 hover:scale-100">
            <div className="absolute -inset-10 bg-purple-600 blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
            <div className="relative border-4 border-zinc-900 shadow-[30px_30px_60px_rgba(0,0,0,0.9)] group-hover:shadow-[0_0_40px_rgba(147,51,234,0.5)] group-hover:border-purple-500 transition-all duration-700">
              
              {/* RUTA CORREGIDA PARA TU PORTADA LOCAL */}
              <img 
                src="/portadas/portada_01.jpg" 
                alt="Portada Revista" 
                className="w-72 md:w-96 grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              
              <div className="absolute bottom-4 right-4 bg-black border border-purple-500 text-purple-500 px-4 py-2 font-black text-2xl group-hover:bg-purple-500 group-hover:text-black transition-colors duration-700">
                #01
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HEMEROTECA: Catálogo histórico */}
<section id="archivo" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
  <h2 className="text-3xl font-black mb-12 border-l-4 border-purple-600 pl-4 italic tracking-tighter">
    Hemeroteca
  </h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {[4, 3, 2, 1].map((n) => (
      <a 
        key={n} 
        href={n === 1 ? "/revistas/edicion_01.pdf" : "#"} 
        download={n === 1}
        className="group cursor-pointer border border-zinc-900 hover:border-purple-600 transition-all duration-300 bg-zinc-950 p-2"
      >
        <div className="aspect-[3/4] bg-zinc-900 mb-3 overflow-hidden relative border border-white/5">
          {/* Si es el número 1, muestra tu portada real */}
          {n === 1 ? (
            <img 
              src="/portadas/portada_01.jpg" 
              alt={`Edición #0${n}`} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center text-zinc-800 font-black italic">
              #0{n}
            </div>
          )}
          
          {/* Overlay de descarga al pasar el mouse */}
          <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-[10px] font-black border border-white px-2 py-1">
              {n === 1 ? "DESCARGAR_PDF" : "PRÓXIMAMENTE"}
            </span>
          </div>
        </div>
        <p className="font-bold text-[10px] text-zinc-500 group-hover:text-purple-400 transition-colors tracking-widest uppercase">
          Edición #0{n}
        </p>
      </a>
    ))}
  </div>
</section>

      {/* FOOTER */}
      <footer id="contacto" className="bg-black py-20 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex gap-10 mb-12 text-zinc-500">
            <a href={socialLinks.twitch} target="_blank" rel="noreferrer" className="hover:text-purple-500 transition-all hover:-translate-y-1"><Twitch size={24} /></a>
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="hover:text-purple-500 transition-all hover:-translate-y-1"><Instagram size={24} /></a>
            <a href={socialLinks.youtube} target="_blank" rel="noreferrer" className="hover:text-purple-500 transition-all hover:-translate-y-1"><Youtube size={24} /></a>
            <a href={socialLinks.discord} target="_blank" rel="noreferrer" className="hover:text-purple-500 transition-all hover:-translate-y-1"><Disc size={24} /></a>
          </div>
          <div className="text-center font-mono">
            <p className="text-[9px] text-zinc-700 tracking-[0.5em] mb-2">
              © 2026 Bitácora Indie // Sin filtros
            </p>
            <p className="text-[9px] text-purple-900 tracking-[0.2em]">
              Alquimicorp // No nos pagan lo suficiente
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}