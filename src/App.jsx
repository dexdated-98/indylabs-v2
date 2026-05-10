import React, { useState, useEffect, useRef } from 'react';

// --- Google Analytics Tag Injection ---
// Placed outside the component so it executes instantly before React mounts,
// maximizing the chances of Google's verification bots detecting it.
if (typeof window !== 'undefined' && !document.getElementById('ga-script')) {
  const gtagScript = document.createElement('script');
  gtagScript.id = 'ga-script';
  gtagScript.async = true;
  gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-8N927F630F';
  document.head.appendChild(gtagScript);

  const gtagConfig = document.createElement('script');
  gtagConfig.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-8N927F630F');
  `;
  document.head.appendChild(gtagConfig);
}
// --------------------------------------

// --- Inline Icons ---
const Menu = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);
const X = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);
const TrendingUp = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);
const Users = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const Video = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m22 8-6 4 6 4V8Z" />
    <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
  </svg>
);
const Globe = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>
);
const ArrowUpRight = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);
const PlayCircle = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </svg>
);
const BarChart = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" x2="12" y1="20" y2="10" />
    <line x1="18" x2="18" y1="20" y2="4" />
    <line x1="6" x2="6" y1="20" y2="16" />
  </svg>
);
const Zap = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const Target = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);
const Linkedin = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const XLogo = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

// --- Global CSS for Noise, Custom Cursors, and Animations ---
const GlobalStyles = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: `
    :root {
      --mouseX: 50vw;
      --mouseY: 50vh;
    }
    html { scroll-behavior: smooth; cursor: none; background-color: #030303; }
    body { background-color: #030303 !important; color: #ffffff; overflow-x: hidden; margin: 0; padding: 0; }
    
    /* Cinematic Noise Overlay - Upgraded to Base64 to prevent URL parsing errors */
    .bg-noise {
      position: fixed; inset: 0; z-index: 9999; pointer-events: none; opacity: 0.05;
      background-image: url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOCIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZUZpbHRlcikiLz48L3N2Zz4=');
    }

    /* Custom Cursor */
    .cursor-dot {
      position: fixed; top: 0; left: 0; width: 12px; height: 12px; border-radius: 50%;
      background-color: white; transform: translate(calc(var(--mouseX) - 50%), calc(var(--mouseY) - 50%));
      pointer-events: none; z-index: 10000; mix-blend-mode: difference; transition: width 0.2s, height 0.2s;
    }
    .cursor-ring {
      position: fixed; top: 0; left: 0; width: 40px; height: 40px; border-radius: 50%;
      border: 1px solid rgba(255,255,255,0.4); transform: translate(calc(var(--mouseX) - 50%), calc(var(--mouseY) - 50%));
      pointer-events: none; z-index: 9999; transition: transform 0.15s ease-out;
    }
    
    /* Interactive Hover States */
    a:hover ~ .cursor-dot, button:hover ~ .cursor-dot { width: 40px; height: 40px; }
    
    /* 3D Parallax Environment */
    .scene-3d { perspective: 1200px; transform-style: preserve-3d; }
    .element-3d { transform-style: preserve-3d; transition: transform 0.1s linear; }

    /* Floating Animation */
    @keyframes float {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(2deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-float-delayed { animation: float 8s ease-in-out infinite alternate-reverse; }

    /* Infinite Marquee */
    @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
    .animate-marquee { animation: marquee 40s linear infinite; display: flex; width: max-content; }
  `,
    }}
  />
);

// --- Magnetic Button Component ---
const MagneticButton = ({ children, className, onClick, type = 'button' }) => {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.4;
    const y = (e.clientY - top - height / 2) * 0.4;
    buttonRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    buttonRef.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <button
      type={type}
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </button>
  );
};

// --- Advanced 3D Glass Card with Glare ---
const Glass3DCard = ({ children, className }) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -15;
    const rotateY = (x / rect.width - 0.5) * 15;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease-out',
    });

    setGlareStyle({
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%)`,
      opacity: 1,
      transition: 'opacity 0.2s',
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform:
        'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
    });
    setGlareStyle({ opacity: 0, transition: 'opacity 0.5s' });
  };

  return (
    <div
      ref={cardRef}
      className={`relative z-10 element-3d border border-white/10 overflow-hidden ${className}`}
      style={{ ...style, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 pointer-events-none z-20"
        style={glareStyle}
      />
      {/* Content wrapper pushed forward on Z axis */}
      <div style={{ transform: 'translateZ(30px)' }} className="h-full">
        {children}
      </div>
    </div>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef(null);

  const companies = [
    { name: 'Physics Wallah', domain: 'pw.live' },
    { name: 'The Better India', domain: 'thebetterindia.com' },
    { name: 'I-PAC', domain: 'indianpac.com' },
    { name: 'News18', domain: 'news18.com' },
    { name: 'Skillbee', domain: 'skillbee.com' },
    { name: 'Soch', domain: 'youtube.com' },
    { name: 'DU Beat', domain: 'dubeat.com' },
    { name: 'Newzera', domain: 'newzera.com' },
    { name: 'Merkle Science', domain: 'merklescience.com' },
    { name: 'The Wire', domain: 'thewire.in' },
    { name: 'BitGo', domain: 'bitgo.com' },
    { name: 'Blockwiz', domain: 'blockwiz.com' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    const handleGlobalMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouseX', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouseY', `${e.clientY}px`);

      // Parallax effect for hero section
      if (heroRef.current) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        heroRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#030303] text-white font-sans antialiased overflow-hidden">
      <GlobalStyles />
      <div className="bg-noise" />
      <div className="cursor-dot hidden md:block" />
      <div className="cursor-ring hidden md:block" />

      {/* --- Dynamic Cursor Lighting Gradient (Always on, but tracks mouse) --- */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(600px circle at calc(var(--mouseX)) calc(var(--mouseY)), rgba(255, 106, 0, 0.08), transparent 40%)',
        }}
      />

      {/* --- Navbar --- */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#030303]/70 backdrop-blur-xl border-b border-white/5 py-4'
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div
            className="text-2xl font-black tracking-tighter flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-300">
              <span className="text-xs font-bold">IL</span>
            </div>
            IndyLabs
          </div>

          <div className="hidden md:flex items-center gap-10 text-xs font-bold tracking-widest uppercase text-neutral-400">
            <button
              onClick={() => scrollToSection('services')}
              className="hover:text-white transition-colors"
            >
              DNA
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="hover:text-white transition-colors"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="hover:text-white transition-colors"
            >
              Architects
            </button>
            <a
              href="https://portfolio.indylabs.in/#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              Portfolio <ArrowUpRight size={14} />
            </a>
            <MagneticButton
              onClick={() => scrollToSection('contact')}
              className="bg-white text-black px-6 py-3 rounded-full hover:bg-neutral-200 flex items-center gap-2 ml-2"
            >
              Initiate <ArrowUpRight size={14} />
            </MagneticButton>
          </div>

          <button
            className="md:hidden text-white relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#030303]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl md:hidden z-40">
            <button
              onClick={() => scrollToSection('services')}
              className="text-left text-lg font-bold text-white uppercase tracking-widest"
            >
              DNA
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-left text-lg font-bold text-white uppercase tracking-widest"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-left text-lg font-bold text-white uppercase tracking-widest"
            >
              Architects
            </button>
            <a
              href="https://portfolio.indylabs.in/#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-left text-lg font-bold text-white uppercase tracking-widest flex items-center gap-2"
            >
              Portfolio <ArrowUpRight size={18} />
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-orange-600 text-white px-5 py-3 rounded-xl font-bold mt-4 uppercase tracking-widest"
            >
              Initiate Sequence
            </button>
          </div>
        )}
      </nav>

      {/* --- Immersive Hero Section --- */}
      <section
        id="home"
        className="relative z-10 min-h-[90vh] flex items-center justify-center pt-32 pb-12 overflow-hidden scene-3d"
      >
        <div
          ref={heroRef}
          className="w-full max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center element-3d relative"
        >
          <div
            className="relative z-20"
            style={{ transform: 'translateZ(50px)' }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-neutral-200 mb-8">
              <span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316] animate-pulse"></span>
              Studio of the Future
            </div>
            <h1
              className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-8 uppercase"
              style={{ textShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
            >
              Scale <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-orange-300 to-orange-600">
                Reality.
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-neutral-500 max-w-lg mb-10 font-light leading-relaxed">
              We forge digital empires. Combining high-impact content marketing,
              algorithmic dominance, and cinematic performance.
            </p>
            <MagneticButton
              onClick={() => scrollToSection('contact')}
              className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            >
              Build Your Legacy <ArrowUpRight size={20} />
            </MagneticButton>
          </div>

          {/* Abstract 3D Hero Composition */}
          <div className="relative hidden lg:block h-[600px] element-3d">
            {/* Ambient Back Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-orange-600/40 to-neutral-600/40 rounded-full blur-[100px] animate-pulse"></div>

            <Glass3DCard className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[450px] bg-white/5 backdrop-blur-2xl rounded-[3rem] p-8 flex flex-col justify-between animate-float">
              <div className="flex justify-between items-start">
                <BarChart className="text-orange-500 w-10 h-10" />
                <div className="text-xs font-bold tracking-widest text-neutral-300 uppercase">
                  Live Metrics
                </div>
              </div>
              <div style={{ transform: 'translateZ(40px)' }}>
                <h3 className="text-7xl font-black mb-2 text-white">100M+</h3>
                <p className="text-neutral-400 font-medium tracking-widest uppercase text-sm">
                  Combined Views Scaled
                </p>
              </div>
            </Glass3DCard>

            <Glass3DCard
              className="absolute top-[10%] right-[5%] w-48 h-48 bg-black/60 backdrop-blur-xl rounded-full p-6 flex flex-col justify-center animate-float-delayed"
              style={{ transform: 'translateZ(80px)' }}
            >
              <Target className="w-8 h-8 text-neutral-400 mb-2 mx-auto" />
              <h3 className="text-4xl font-black text-center text-white">
                -70%
              </h3>
              <p className="text-[10px] text-neutral-400 uppercase tracking-widest text-center mt-1">
                CPL Reduced
              </p>
            </Glass3DCard>

            <Glass3DCard
              className="absolute bottom-[15%] left-[5%] w-56 h-36 bg-gradient-to-br from-orange-900/30 to-black/60 backdrop-blur-xl rounded-3xl p-6 flex flex-col justify-center animate-float"
              style={{ transform: 'translateZ(120px)' }}
            >
              <h3 className="text-3xl font-black text-white">1.5M+</h3>
              <p className="text-[10px] text-orange-400 uppercase tracking-widest mt-1">
                Community Growth
              </p>
            </Glass3DCard>
          </div>
        </div>

        {/* Marquee */}
        <div className="absolute bottom-0 w-full overflow-hidden border-y border-white/5 bg-white/5 backdrop-blur-sm py-4 z-20">
          <div className="animate-marquee text-neutral-400 text-sm font-bold tracking-[0.2em] uppercase flex gap-12 w-[200%]">
            <span>Content Marketing</span>
            <span>•</span>
            <span>Performance Architecture</span>
            <span>•</span>
            <span>Cinematic Content</span>
            <span>•</span>
            <span>SEO Dominance</span>
            <span>•</span>
            <span>Content Marketing</span>
            <span>•</span>
            <span>Performance Architecture</span>
            <span>•</span>
            <span>Cinematic Content</span>
            <span>•</span>
            <span>SEO Dominance</span>
          </div>
        </div>
      </section>

      {/* --- Services / DNA Section --- */}
      <section id="services" className="relative z-10 py-12 lg:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black mb-12 uppercase tracking-tighter mix-blend-difference">
            The <span className="text-orange-500">DNA.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 perspective-1000">
            {[
              {
                icon: <Globe className="text-orange-500 w-8 h-8" />,
                title: 'Content Authority',
                desc: 'Algorithmic mastery. We embed your brand into the fabric of the modern web and Web3 ecosystems.',
                tags: [
                  'SEO Architecture',
                  'Web3 Community',
                  'Product Marketing',
                ],
              },
              {
                icon: <Users className="text-neutral-400 w-8 h-8" />,
                title: 'Social Ecosystems',
                desc: "We don't manage accounts; we build loyal cults. Transforming casual viewers into die-hard advocates.",
                tags: [
                  'Channel Management',
                  'Audience Scaling',
                  'Trend Leverage',
                ],
              },
              {
                icon: <Video className="text-orange-400 w-8 h-8" />,
                title: 'Cinematic Performance',
                desc: 'High-converting, visually arresting campaigns. UGC, podcasting, and media buying that slashes CPLs.',
                tags: [
                  'Meta/Google Ads',
                  'Viral Scriptwriting',
                  'Video Production',
                ],
              },
            ].map((service, idx) => (
              <Glass3DCard
                key={idx}
                className="bg-[#0a0a0a]/80 backdrop-blur-lg rounded-[2rem] p-10 group hover:bg-[#111] transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-bold mb-6 tracking-tight text-white">
                  {service.title}
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-8 font-light">
                  {service.desc}
                </p>
                <div className="space-y-3">
                  {service.tags.map((tag, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm text-neutral-300 font-medium"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                      {tag}
                    </div>
                  ))}
                </div>
              </Glass3DCard>
            ))}
          </div>
        </div>
      </section>

      {/* --- Case Studies / Impact --- */}
      <section
        id="work"
        className="relative z-10 pt-12 lg:pt-16 bg-white/5 border-y border-white/5 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              Verified <br /> <span className="text-orange-500">Impact.</span>
            </h2>
            <p className="text-lg text-neutral-500 max-w-sm font-light">
              Data doesn't lie. We build frameworks that multiply attention and
              revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 perspective-1000">
            {/* Study 1: Soch */}
            <Glass3DCard className="w-full bg-[#050505] rounded-[2rem] p-6 lg:p-8 flex flex-col group h-full">
              <div
                className="flex justify-between items-center mb-6"
                style={{ transform: 'translateZ(10px)' }}
              >
                <span className="px-3 py-1.5 rounded-full border border-white/20 text-[10px] font-bold tracking-widest uppercase text-neutral-200">
                  Content Strategy
                </span>
                <PlayCircle className="text-orange-500 group-hover:text-white transition-colors w-6 h-6" />
              </div>

              <div
                style={{ transform: 'translateZ(20px)' }}
                className="mb-6 flex-grow"
              >
                <h3 className="text-2xl md:text-3xl font-black mb-6 tracking-tight text-white uppercase">
                  Soch by Mohak
                </h3>

                {/* Hero Numbers */}
                <div className="flex gap-6 mb-6 border-l-2 border-orange-500 pl-4">
                  <div>
                    <div className="text-3xl md:text-4xl font-black text-white mb-1">
                      1.5M
                    </div>
                    <div className="text-[9px] text-orange-500 uppercase tracking-widest font-bold">
                      Subscribers
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-black text-white mb-1">
                      50M+
                    </div>
                    <div className="text-[9px] text-orange-500 uppercase tracking-widest font-bold">
                      Total Views
                    </div>
                  </div>
                </div>

                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  Architected the content strategy and scripting for one of
                  India's premier infotainment hubs, scaling their digital
                  footprint exponentially.
                </p>
              </div>

              <div className="mt-auto h-32 rounded-xl border border-white/10 bg-[#0a0a0a] overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-700">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop"
                  alt="Mohak Mangal"
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
                />
              </div>
            </Glass3DCard>

            {/* Study 2: Skillbee */}
            <Glass3DCard className="w-full bg-[#050505] rounded-[2rem] p-6 lg:p-8 flex flex-col group h-full">
              <div
                className="flex justify-between items-center mb-6"
                style={{ transform: 'translateZ(10px)' }}
              >
                <span className="px-3 py-1.5 rounded-full border border-white/20 text-[10px] font-bold tracking-widest uppercase text-neutral-200">
                  Performance Media
                </span>
                <Target className="text-orange-500 group-hover:text-white transition-colors w-6 h-6" />
              </div>

              <div
                style={{ transform: 'translateZ(20px)' }}
                className="mb-6 flex-grow"
              >
                <h3 className="text-2xl md:text-3xl font-black mb-6 tracking-tight text-white uppercase">
                  Skillbee India
                </h3>

                {/* Hero Numbers */}
                <div className="flex gap-6 mb-6 border-l-2 border-orange-500 pl-4">
                  <div>
                    <div className="text-3xl md:text-4xl font-black text-white mb-1">
                      -70%
                    </div>
                    <div className="text-[9px] text-orange-500 uppercase tracking-widest font-bold">
                      CPL Reduction
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-black text-white mb-1">
                      200K+
                    </div>
                    <div className="text-[9px] text-orange-500 uppercase tracking-widest font-bold">
                      Audience Built
                    </div>
                  </div>
                </div>

                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  Led end-to-end media buying, drastically slashed Meta Ads CPL,
                  and multiplied cross-platform reach through aggressive
                  creative scaling.
                </p>
              </div>

              <div className="mt-auto h-32 rounded-xl border border-white/10 bg-gradient-to-br from-neutral-900 to-black flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-20"></div>
                <div className="relative z-10 text-3xl font-black tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  Skill<span className="text-orange-500">bee</span>
                </div>
              </div>
            </Glass3DCard>

            {/* Study 3: Merkle Science */}
            <Glass3DCard className="w-full bg-[#050505] rounded-[2rem] p-6 lg:p-8 flex flex-col group h-full">
              <div
                className="flex justify-between items-center mb-6"
                style={{ transform: 'translateZ(10px)' }}
              >
                <span className="px-3 py-1.5 rounded-full border border-white/20 text-[10px] font-bold tracking-widest uppercase text-neutral-200">
                  Web3 & SEO
                </span>
                <Globe className="text-orange-500 group-hover:text-white transition-colors w-6 h-6" />
              </div>

              <div
                style={{ transform: 'translateZ(20px)' }}
                className="mb-6 flex-grow"
              >
                <h3 className="text-2xl md:text-3xl font-black mb-6 tracking-tight text-white uppercase">
                  Merkle Science
                </h3>

                {/* Hero Numbers */}
                <div className="flex gap-6 mb-6 border-l-2 border-orange-500 pl-4">
                  <div>
                    <div className="text-3xl md:text-4xl font-black text-white mb-1">
                      300%
                    </div>
                    <div className="text-[9px] text-orange-500 uppercase tracking-widest font-bold">
                      Organic Growth
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-black text-white mb-1">
                      Top 3
                    </div>
                    <div className="text-[9px] text-orange-500 uppercase tracking-widest font-bold">
                      SERP Rankings
                    </div>
                  </div>
                </div>

                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  Scaled organic footprint and product visibility through highly
                  technical SEO and content architecture in the blockchain
                  security sector.
                </p>
              </div>

              <div className="mt-auto h-32 rounded-xl border border-white/10 bg-gradient-to-bl from-blue-900/10 to-neutral-900 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                <img
                  src="https://www.google.com/s2/favicons?domain=merklescience.com&sz=128"
                  alt="Merkle Science"
                  className="w-12 h-12 opacity-60 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                />
              </div>
            </Glass3DCard>

            {/* Study 4: Blockwiz */}
            <Glass3DCard className="w-full bg-[#050505] rounded-[2rem] p-6 lg:p-8 flex flex-col group h-full">
              <div
                className="flex justify-between items-center mb-6"
                style={{ transform: 'translateZ(10px)' }}
              >
                <span className="px-3 py-1.5 rounded-full border border-white/20 text-[10px] font-bold tracking-widest uppercase text-neutral-200">
                  Social Ecosystems
                </span>
                <Users className="text-orange-500 group-hover:text-white transition-colors w-6 h-6" />
              </div>

              <div
                style={{ transform: 'translateZ(20px)' }}
                className="mb-6 flex-grow"
              >
                <h3 className="text-2xl md:text-3xl font-black mb-6 tracking-tight text-white uppercase">
                  Blockwiz
                </h3>

                {/* Hero Numbers */}
                <div className="flex gap-6 mb-6 border-l-2 border-orange-500 pl-4">
                  <div>
                    <div className="text-3xl md:text-4xl font-black text-white mb-1">
                      500K+
                    </div>
                    <div className="text-[9px] text-orange-500 uppercase tracking-widest font-bold">
                      Community Size
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-black text-white mb-1">
                      10M+
                    </div>
                    <div className="text-[9px] text-orange-500 uppercase tracking-widest font-bold">
                      Impressions
                    </div>
                  </div>
                </div>

                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  Architected end-to-end community growth and hyper-engaged
                  social media ecosystems across Twitter, Discord, and Telegram
                  for tier-1 Web3 projects.
                </p>
              </div>

              <div className="mt-auto h-32 rounded-xl border border-white/10 bg-gradient-to-bl from-purple-900/10 to-neutral-900 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-20"></div>
                <div className="relative z-10 flex items-center gap-3 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-500"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                  <span className="text-3xl font-black tracking-tighter text-white">
                    Block<span className="text-orange-500">wiz</span>
                  </span>
                </div>
              </div>
            </Glass3DCard>
          </div>
        </div>

        {/* --- Collective Experience Ticker --- */}
        <div className="mt-16 border-t border-white/5 bg-black/40 py-4 overflow-hidden relative backdrop-blur-sm">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

          <div className="animate-marquee opacity-60 hover:opacity-100 transition-opacity duration-500">
            {/* Render 2 identical sets for seamless infinite scrolling loop */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12 items-center pr-12">
                {companies.map((company, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-neutral-300"
                  >
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${company.domain}&sz=64`}
                      alt={`${company.name} logo`}
                      className="w-6 h-6 rounded-full object-cover bg-white/10 border border-white/10"
                      onError={(e) => {
                        e.target.onerror = null; // prevents looping
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          company.name
                        )}&background=222&color=fff&size=64`;
                      }}
                    />
                    {company.name}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- The Architects / Team --- */}
      <section id="team" className="relative z-10 py-12 lg:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black mb-12 uppercase tracking-tighter text-center">
            The <span className="text-orange-500">Architects.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-start">
            {[
              {
                id: 'SL',
                name: 'Suhail Lone',
                role: 'Product & Content',
                exp: '6+ years driving growth via Web3 strategy, technical SEO, and product marketing architecture.',
                delay: '0',
              },
              {
                id: 'AR',
                name: 'Aquilur Rahman',
                role: 'Social Ecosystems',
                exp: '5+ years architecting brand loyalty and converting casual viewers into die-hard communities.',
                delay: 'md:mt-12',
              },
              {
                id: 'PS',
                name: 'Priyanshu Sinha',
                role: 'Media & Performance',
                exp: '100M+ views generated. Master of UGC, documentary-style production, and slashing Meta CPLs.',
                delay: 'md:mt-6',
              },
            ].map((member, idx) => (
              <div key={idx} className={`group ${member.delay}`}>
                <Glass3DCard className="aspect-[3/4] bg-[#080808] rounded-[2rem] p-6 flex flex-col justify-between mb-8 overflow-hidden relative">
                  {/* Abstract Portrait Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity group-hover:scale-110 duration-700 mix-blend-screen text-orange-500">
                    <div className="text-[15rem] font-black leading-none">
                      {member.id}
                    </div>
                  </div>

                  <div className="relative z-10 flex justify-between w-full">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">{`0${
                      idx + 1
                    }`}</span>
                    <ArrowUpRight className="text-orange-500/50 group-hover:text-orange-500 transition-colors" />
                  </div>

                  <div
                    className="relative z-10"
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    <div className="text-[10px] font-bold tracking-widest uppercase border border-white/20 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full inline-block mb-4 text-neutral-200">
                      {member.role}
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tight text-white">
                      {member.name}
                    </h3>
                  </div>
                </Glass3DCard>
                <p className="text-neutral-500 font-light leading-relaxed max-w-sm px-4">
                  {member.exp}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Immersive Contact Section --- */}
      <section
        id="contact"
        className="relative z-10 py-16 lg:py-24 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/5 border-t border-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <Glass3DCard className="bg-black/60 rounded-[3rem] md:rounded-[5rem] p-10 md:p-20 text-center relative border border-white/10 shadow-[0_0_100px_rgba(255,255,255,0.02)]">
            <h2 className="text-5xl md:text-8xl font-black mb-8 uppercase tracking-tighter">
              Initiate <br /> <span className="text-orange-500">Sequence.</span>
            </h2>
            <p className="text-xl text-neutral-300 mb-16 max-w-2xl mx-auto font-light">
              We partner with visionaries ready to dominate their vertical.
              Connect with the architects and let's construct your future.
            </p>

            <form
              className="max-w-xl mx-auto space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const name = formData.get('name');
                const msg = formData.get('message');
                window.location.href = `mailto:socials@indylabs.in?subject=Project Inquiry: ${name}&body=${msg}`;
              }}
            >
              <div className="group relative">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder=" "
                  className="peer w-full bg-transparent border-b-2 border-white/20 px-0 py-4 text-xl text-white placeholder-transparent focus:outline-none focus:border-orange-500 transition-colors"
                />
                <label className="absolute left-0 top-4 text-neutral-400 text-xl font-light transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-orange-500 peer-valid:-top-4 peer-valid:text-xs">
                  Your Name / Brand
                </label>
              </div>

              <div className="group relative pt-6">
                <textarea
                  name="message"
                  required
                  rows={3}
                  placeholder=" "
                  className="peer w-full bg-transparent border-b-2 border-white/20 px-0 py-4 text-xl text-white placeholder-transparent focus:outline-none focus:border-orange-500 transition-colors resize-none"
                ></textarea>
                <label className="absolute left-0 top-10 text-neutral-400 text-xl font-light transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-orange-500 peer-valid:top-0 peer-valid:text-xs">
                  Project Details
                </label>
              </div>

              <div className="pt-8">
                <MagneticButton
                  type="submit"
                  className="w-full bg-orange-600 text-white font-black uppercase tracking-widest text-lg py-6 rounded-2xl hover:bg-orange-500 shadow-[0_0_40px_rgba(234,88,12,0.2)] transition-colors"
                >
                  Transmit Data
                </MagneticButton>
              </div>
            </form>
          </Glass3DCard>
        </div>
      </section>

      {/* --- Minimal Footer --- */}
      <footer className="relative z-10 py-12 px-6 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-4xl font-black tracking-tighter uppercase">
            IndyLabs.
          </div>

          <div className="flex gap-12 text-xs font-bold tracking-widest uppercase text-neutral-500">
            <a
              href="mailto:socials@indylabs.in"
              className="hover:text-white transition-colors"
            >
              socials@indylabs.in
            </a>
            <span className="hidden md:inline">
              Based in reality. Operating in Web3.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://x.com/indylabs_in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              <XLogo size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/indylabs-in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <div className="text-xs font-bold tracking-widest uppercase text-neutral-600 border-l border-white/10 pl-6">
              &copy; {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
