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

  // Lista de todas las ediciones disponibles
  const EDICIONES = {
    1: "https://f005.backblazeb2.com/file/bitacora-indie-hemeroteca/numero1.pdf",
    2: "https://f005.backblazeb2.com/file/bitacora-indie-hemeroteca/numero2.pdf" // La nueva
  };

  // Definimos cuál es la más reciente para el Hero
  const ULTIMA_EDICION = 2;
  const REVISTA_URL = EDICIONES[ULTIMA_EDICION];

  const socialLinks = {
    twitch: "https://www.twitch.tv/bitacoraindie",
    instagram: "https://instagram.com/bitacoraindie",
    youtube: "https://www.youtube.com/@BitacoraIndie",
    discord: "https://discord.gg/ngrpbJ5ky"
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
            NÚMERO #02 - DISPONIBLE
          </span>
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 tracking-tighter italic">
            REPORTAJE ESPECIAL: <span className="text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]">NECROWAVE</span> 
          </h1>
          <p className="text-zinc-400 text-sm md:text-base mb-8 max-w-xl font-mono leading-relaxed normal-case">
            ¿MÉXICO HACE MALOS JUEGOS? la respuesta no es la que te esperas. Te enseñamos a desbloquear al jefe secreto de MOSTROSCOPY. Entrevistamos a mas desarrolladores y los obligamos a chambear
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* ENLACE DE DESCARGA DIRECTA (Abre en pestaña nueva por ser enlace externo) */}
            <a 
              href={REVISTA_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              download="Bitacora_Indie_02.pdf" 
              className="relative flex items-center justify-center gap-3 bg-purple-600 text-white font-black px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 group overflow-hidden"
            >
              <Download size={20} /> VER / DESCARGAR PDF
            </a>
            {/* ENLACE PARA LEER ONLINE */}
            <a 
              href={REVISTA_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-zinc-800 text-white font-black px-8 py-4 hover:border-purple-500 hover:bg-purple-500/10 transition-all"
            >
              LEER ONLINE <ChevronRight size={20} />
            </a>
          </div>
         {/* --- BOTÓN DE KO-FI AJUSTADO A MEDIDA --- */}
          {/* Aquí controlas el ancho exacto cambiando el 400px por 380px, 420px, etc. */}
          <div className="mt-8 flex flex-col items-center lg:items-start animate-pulse hover:animate-none w-full max-w-[450px]">
            <p className="text-zinc-500 text-[10px] tracking-widest mb-2 font-bold uppercase text-center lg:text-left w-full">
              ¿Te gusta la revista? Apoya el proyecto:
            </p>
            <a 
              href="https://ko-fi.com/bitacoraindie" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 bg-[#FF5E5B] text-white font-black px-6 py-4 rounded-full hover:bg-white hover:text-[#FF5E5B] transition-all duration-300 shadow-[0_0_15px_rgba(255,94,91,0.3)]"
            >
              ☕ INVÍTAME UN KO-FI
            </a>
          </div>
          {/* ---------------------------- */}
        </div>
        
        <div className="lg:w-1/2 flex justify-center perspective-[1200px]">
          <div className="relative group transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform rotate-[15deg] scale-[0.80] hover:rotate-0 hover:scale-100">
            <div className="absolute -inset-10 bg-purple-600 blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
            <div className="relative border-4 border-zinc-900 shadow-[30px_30px_60px_rgba(0,0,0,0.9)] group-hover:shadow-[0_0_40px_rgba(147,51,234,0.5)] group-hover:border-purple-500 transition-all duration-700">
              <img 
                src="/portadas/portada_02.jpg" 
                alt="Portada Revista" 
                className="w-72 md:w-96 grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute bottom-4 right-4 bg-black border border-purple-500 text-purple-500 px-4 py-2 font-black text-2xl group-hover:bg-purple-500 group-hover:text-black transition-colors duration-700">
                #02
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HEMEROTECA: Catálogo histórico */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {[4, 3, 2, 1].map((n) => {
    const estaDisponible = EDICIONES[n]; // Verifica si el número existe en nuestra lista
    
    return (
      <a 
        key={n} 
        href={estaDisponible ? EDICIONES[n] : "#"} 
        download={estaDisponible ? `Bitacora_Indie_0${n}.pdf` : false}
        target={estaDisponible ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className={`group cursor-pointer border border-zinc-900 hover:border-purple-600 transition-all duration-300 bg-zinc-950 p-2 ${!estaDisponible ? 'opacity-50' : ''}`}
      >
        <div className="aspect-[3/4] bg-zinc-900 mb-3 overflow-hidden relative border border-white/5">
          {estaDisponible ? (
            <img 
              src={`/portadas/portada_0${n}.jpg`} 
              alt={`Edición #0${n}`} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center text-zinc-800 font-black italic">
              #0{n}
            </div>
          )}
          
          <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-[10px] font-black border border-white px-2 py-1">
              {estaDisponible ? "DESCARGAR_PDF" : "PRÓXIMAMENTE"}
            </span>
          </div>
        </div>
        <p className="font-bold text-[10px] text-zinc-500 group-hover:text-purple-400 transition-colors tracking-widest uppercase">
          Edición #0{n}
        </p>
      </a>
    );
  })}
</div>

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