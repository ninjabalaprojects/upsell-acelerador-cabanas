"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  AlertTriangle,
  Check,
  X,
  Zap,
  Clock,
  Shield,
  ChevronDown,
  Hammer,
  TrendingUp,
  Lock,
  Star,
  Package,
  ListChecks,
  Layers,
  HardHat,
  Banknote,
  ArrowRight,
  Timer,
  CheckCircle2,
  XCircle,
  Building2,
  Sparkles,
  RefreshCcw,
  BarChart3,
} from "lucide-react";

// ─── Countdown Timer ────────────────────────────────────────────────────────
function Countdown() {
  const [secs, setSecs] = useState(12 * 60);
  useEffect(() => {
    const id = setInterval(() => setSecs((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return (
    <span className="font-mono font-bold text-gold-light tabular-nums">
      {String(m).padStart(2, "0")}:{String(s).padStart(2, "0")}
    </span>
  );
}

// ─── Fade-in wrapper ────────────────────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── CTA Button ─────────────────────────────────────────────────────────────
function CTAButton({ children, size = "lg" }: { children: React.ReactNode; size?: "lg" | "xl" }) {
  const py = size === "xl" ? "py-6" : "py-5";
  return (
    <motion.button
      className={`btn-gold w-full ${py} px-6 rounded-2xl font-display text-base sm:text-lg md:text-xl leading-tight shadow-2xl cursor-pointer`}
      animate={{
        boxShadow: [
          "0 0 18px rgba(201,169,110,0.25), 0 8px 32px rgba(0,0,0,0.6)",
          "0 0 50px rgba(201,169,110,0.55), 0 12px 48px rgba(0,0,0,0.7)",
          "0 0 18px rgba(201,169,110,0.25), 0 8px 32px rgba(0,0,0,0.6)",
        ],
      }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}

// ─── Section Divider ────────────────────────────────────────────────────────
function Divider() {
  return <div className="divider-line my-0" />;
}

// ─── PDF Mockup ─────────────────────────────────────────────────────────────
function PDFMockup() {
  return (
    <div className="relative max-w-sm mx-auto">
      {/* Stack layers */}
      <div className="absolute top-4 left-4 right-0 h-full rounded-2xl glass opacity-40" />
      <div className="absolute top-2 left-2 right-0 h-full rounded-2xl glass opacity-60" />
      {/* Main card */}
      <div className="relative glass-gold rounded-2xl p-7">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gold/20 border border-gold/30">
            <Zap className="w-6 h-6 text-gold" />
          </div>
          <div className="flex-1">
            <div className="h-2.5 bg-gold/40 rounded-full w-full mb-2" />
            <div className="h-2 bg-white/15 rounded-full w-3/4" />
          </div>
        </div>
        {/* Title */}
        <div className="mb-5">
          <p className="font-display font-800 text-gold text-sm uppercase tracking-wider mb-1">
            Acelerador de Construcción
          </p>
          <p className="font-display font-900 text-warm-white text-lg leading-tight">
            para Cabañas
          </p>
        </div>
        {/* Content lines */}
        <div className="space-y-2.5 mb-5">
          {[90, 70, 80, 55, 75, 60].map((w, i) => (
            <div
              key={i}
              className="h-1.5 rounded-full"
              style={{
                width: `${w}%`,
                background: i === 0 ? "rgba(201,169,110,0.5)" : "rgba(255,255,255,0.1)",
              }}
            />
          ))}
        </div>
        {/* Badges */}
        <div className="flex gap-2 flex-wrap">
          {["PDF Premium", "Acceso Inmediato", "Español"].map((b) => (
            <span
              key={b}
              className="text-xs font-display font-700 text-gold/80 border border-gold/25 rounded-full px-3 py-1 bg-gold/5"
            >
              {b}
            </span>
          ))}
        </div>
        {/* Glow dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-forest-light shadow-[0_0_12px_4px_rgba(79,168,108,0.6)]" />
      </div>
    </div>
  );
}

// ─── SECTION 1 — Alert Bar ──────────────────────────────────────────────────
function AlertBar() {
  return (
    <div className="w-full bg-red-700 border-b border-red-900 py-3 px-4 z-50 sticky top-0">
      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-1 text-center">
        <span className="text-red-100 font-body text-xs sm:text-sm">
          ⚡ <strong className="text-white">PASO 1 DE 2</strong> — Tu pedido está en proceso.{" "}
          <strong className="text-yellow-300">NO cierres esta página.</strong>
        </span>
        <span className="text-red-200 font-body text-xs flex items-center gap-1">
          <Timer className="w-3 h-3 text-yellow-300 inline" />
          Oferta expira en: <Countdown />
        </span>
      </div>
    </div>
  );
}

// ─── SECTION 2 — Hero ───────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden px-5 pt-12 pb-20">
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-forest/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-7">
        {/* Badge */}
        <FadeUp>
          <div className="inline-flex items-center gap-2 glass-gold rounded-full px-5 py-2 mb-2">
            <CheckCircle2 className="w-4 h-4 text-forest-light" />
            <span className="font-display font-700 text-gold text-xs sm:text-sm uppercase tracking-widest">
              Felicidades — tu Plan Premium está confirmado
            </span>
          </div>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.1}>
          <h1 className="font-display font-900 text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-warm-white text-glow-white">
            Construye tu cabaña{" "}
            <span className="text-gold text-glow-gold">mucho más rápido</span>{" "}
            y sin errores costosos
          </h1>
        </FadeUp>

        {/* Subheadline */}
        <FadeUp delay={0.2}>
          <p className="font-body text-lg sm:text-xl text-warm-white/70 leading-relaxed max-w-xl mx-auto">
            Evita retrasos, desperdicios y gastos innecesarios con un sistema
            simple para acelerar tu obra{" "}
            <strong className="text-warm-white/90">desde el primer día.</strong>
          </p>
        </FadeUp>

        {/* CTA */}
        <FadeUp delay={0.3} className="max-w-md mx-auto">
          <CTAButton size="xl">
            🚀 QUIERO ACELERAR MI CONSTRUCCIÓN
          </CTAButton>
          <div className="flex items-center justify-center gap-4 mt-4 text-warm-white/40 text-xs font-body">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3" /> Pago seguro
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-1">
              <Zap className="w-3 h-3" /> Acceso inmediato
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3" /> Garantía 7 días
            </span>
          </div>
        </FadeUp>

        {/* Social proof mini */}
        <FadeUp delay={0.4}>
          <div className="flex items-center justify-center gap-1.5 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-gold fill-gold" />
            ))}
            <span className="font-body text-warm-white/50 text-sm ml-1">
              +1.200 personas ya construyendo más rápido
            </span>
          </div>
        </FadeUp>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-warm-white/20" />
      </motion.div>
    </section>
  );
}

// ─── SECTION 3 — Pain ───────────────────────────────────────────────────────
const painItems = [
  {
    icon: Clock,
    title: "Obras lentas e interminables",
    desc: "El tiempo se estira y la cabaña sigue sin terminarse. Cada semana que pasa es dinero que no entra.",
  },
  {
    icon: Package,
    title: "Materiales desperdiciados",
    desc: "Compras de más, compras de menos, compras lo que no necesitas. El desperdicio silenciosamente destruye tu margen.",
  },
  {
    icon: Banknote,
    title: "Gastos inesperados",
    desc: "Presupuestaste $X y estás gastando $X+40%. Cada error no previsto cuesta dinero real.",
  },
  {
    icon: RefreshCcw,
    title: "Cambios durante la obra",
    desc: "Cambiar de idea en medio de la construcción multiplica los costos. Lo que parecía pequeño termina siendo un caos.",
  },
  {
    icon: Layers,
    title: "Falta de organización en las etapas",
    desc: "Sin un orden claro, el equipo trabaja en desorden. Todo se traba y nadie sabe qué viene después.",
  },
  {
    icon: TrendingUp,
    title: "Retrasos que cuestan dinero",
    desc: "Cada mes de retraso es un mes más sin ingreso por Airbnb. El tiempo tiene un precio altísimo.",
  },
];

function PainSection() {
  return (
    <section className="py-20 px-5 bg-canvas-soft relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-2xl mx-auto">
        <FadeUp className="text-center mb-14">
          <p className="font-display font-700 text-gold text-xs sm:text-sm uppercase tracking-[0.2em] mb-4">
            La realidad que nadie te dice
          </p>
          <h2 className="font-display font-900 text-3xl sm:text-4xl md:text-5xl text-warm-white leading-tight mb-5">
            Muchas personas comienzan emocionadas...{" "}
            <span className="text-warm-white/50">y terminan atrapadas en una obra interminable.</span>
          </h2>
          <p className="font-body text-warm-white/60 text-base sm:text-lg">
            Si no corriges estos errores desde el inicio, cada uno de ellos puede
            costarte semanas de retraso y miles de dólares de pérdida.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {painItems.map((item, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="glass-danger rounded-2xl p-5 h-full group hover:border-red-500/30 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="font-display font-800 text-warm-white text-sm sm:text-base mb-1.5">
                      {item.title}
                    </p>
                    <p className="font-body text-warm-white/55 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </section>
  );
}

// ─── SECTION 4 — El Error #1 ─────────────────────────────────────────────────
function ErrorSection() {
  return (
    <section className="py-20 px-5 bg-canvas">
      <div className="max-w-2xl mx-auto">
        <FadeUp className="text-center mb-10">
          <p className="font-display font-700 text-gold text-xs sm:text-sm uppercase tracking-[0.2em] mb-4">
            Por qué pasa todo esto
          </p>
          <h2 className="font-display font-900 text-3xl sm:text-4xl md:text-5xl text-warm-white leading-tight">
            El Error{" "}
            <span className="text-gold text-glow-gold">#1</span>{" "}
            que arruina las obras de cabañas
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="glass-gold rounded-3xl p-7 sm:p-10 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="font-display font-900 text-gold text-lg sm:text-xl uppercase tracking-wide mb-1">
                  Construir sin sistema
                </p>
                <p className="font-body text-warm-white/60 text-sm">
                  La causa raíz del 90% de las obras que se retrasan
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: X,
                  text: "Improvisar en lugar de planificar cada etapa con anticipación",
                },
                {
                  icon: X,
                  text: "Comprar materiales sin saber exactamente cuánto se necesita",
                },
                {
                  icon: X,
                  text: "Cambiar ideas en medio de la obra sin calcular el costo real",
                },
                {
                  icon: X,
                  text: "Trabajar sin un orden claro entre fundación, estructura y terminaciones",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/15 border border-red-500/25 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <p className="font-body text-warm-white/75 text-sm sm:text-base leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 pt-6 border-t border-gold/15">
              <p className="font-display font-800 text-warm-white text-base sm:text-lg leading-snug">
                El resultado: obras que duran el doble, cuestan el triple y generan el
                doble de estrés.{" "}
                <span className="text-gold">Y eso se puede evitar.</span>
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Transition statement */}
        <FadeUp delay={0.2} className="text-center">
          <div className="inline-flex items-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-forest/50" />
            <p className="font-display font-700 text-forest-light text-base sm:text-lg uppercase tracking-widest">
              Pero hay una solución
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-forest/50" />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── SECTION 5 — The System ──────────────────────────────────────────────────
function SystemSection() {
  const features = [
    "Acelera tu obra semana a semana con un sistema probado",
    "Evita desperdicios desde el primer día de construcción",
    "Organiza las etapas en el orden correcto",
    "Reduce errores costosos antes de que sucedan",
    "Ahorra tiempo real y dinero real en cada fase",
  ];

  return (
    <section className="py-20 px-5 bg-canvas-soft relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest/30 to-transparent" />
      <div className="absolute inset-0 bg-offer-bg pointer-events-none" />

      <div className="max-w-2xl mx-auto">
        <FadeUp className="text-center mb-14">
          <p className="font-display font-700 text-forest-light text-xs sm:text-sm uppercase tracking-[0.2em] mb-4">
            La solución
          </p>
          <h2 className="font-display font-900 text-3xl sm:text-4xl md:text-5xl text-warm-white leading-tight mb-4">
            Presentamos el{" "}
            <span className="text-gold text-glow-gold">Acelerador de Construcción</span>{" "}
            para Cabañas
          </h2>
          <p className="font-body text-warm-white/60 text-base sm:text-lg max-w-xl mx-auto">
            Un sistema paso a paso diseñado específicamente para quienes ya tienen
            su proyecto de cabaña y quieren construirlo de forma rápida, organizada
            y sin desperdicios.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          {/* PDF Mockup */}
          <FadeUp delay={0.1}>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
              <PDFMockup />
            </motion.div>
          </FadeUp>

          {/* Features */}
          <FadeUp delay={0.2}>
            <div className="space-y-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09, duration: 0.5 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-7 h-7 rounded-full bg-forest/20 border border-forest-light/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-forest/35 transition-colors">
                    <Check className="w-4 h-4 text-forest-light" />
                  </div>
                  <p className="font-body text-warm-white/80 text-sm sm:text-base leading-relaxed">
                    {f}
                  </p>
                </motion.div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest/30 to-transparent" />
    </section>
  );
}

// ─── SECTION 6 — What You Get ────────────────────────────────────────────────
const deliverables = [
  {
    icon: ListChecks,
    title: "Orden correcto de construcción",
    desc: "Sabe exactamente qué hacer en cada semana de obra. Sin confusión, sin pasos fuera de lugar.",
    tag: "Módulo 1",
  },
  {
    icon: CheckCircle2,
    title: "Checklist de obra rápida",
    desc: "Una lista de verificación diaria para que nada se olvide y tu equipo sepa qué hacer cada día.",
    tag: "Módulo 2",
  },
  {
    icon: Package,
    title: "Cómo evitar desperdicios",
    desc: "Calcula exactamente cuánto material necesitas. Sin sobras costosas, sin faltantes que paren la obra.",
    tag: "Módulo 3",
  },
  {
    icon: Hammer,
    title: "Materiales que aceleran la obra",
    desc: "Conoce cuáles materiales modernos reducen el tiempo de construcción sin comprometer la calidad.",
    tag: "Módulo 4",
  },
  {
    icon: HardHat,
    title: "Construcción con equipo pequeño",
    desc: "Cómo avanzar rápido incluso con 2 o 3 personas. Estrategia de trabajo eficiente y coordinado.",
    tag: "Módulo 5",
  },
];

function WhatYouGetSection() {
  return (
    <section className="py-20 px-5 bg-canvas">
      <div className="max-w-2xl mx-auto">
        <FadeUp className="text-center mb-14">
          <p className="font-display font-700 text-gold text-xs sm:text-sm uppercase tracking-[0.2em] mb-4">
            Lo que recibirás
          </p>
          <h2 className="font-display font-900 text-3xl sm:text-4xl md:text-5xl text-warm-white leading-tight mb-4">
            Todo lo que necesitas para{" "}
            <span className="text-gold">construir más rápido</span>
          </h2>
          <p className="font-body text-warm-white/55 text-base">
            Cinco módulos prácticos listos para implementar desde el día 1
          </p>
        </FadeUp>

        <div className="space-y-4">
          {deliverables.map((item, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <div className="glass rounded-2xl p-5 sm:p-6 flex items-start gap-4 group hover:border-gold/20 hover:bg-white/[0.06] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="font-display font-900 text-warm-white text-base sm:text-lg">
                      {item.title}
                    </span>
                    <span className="text-xs font-display font-700 text-forest-light border border-forest/30 rounded-full px-2.5 py-0.5 bg-forest/10">
                      {item.tag}
                    </span>
                  </div>
                  <p className="font-body text-warm-white/55 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <Check className="w-5 h-5 text-forest-light shrink-0 opacity-60 mt-0.5" />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 7 — Benefits ────────────────────────────────────────────────────
const benefits = [
  { icon: "🧘", text: "Menos estrés en tu obra", sub: "Sabes qué viene después en todo momento" },
  { icon: "⏱️", text: "Menos retrasos que cuestan dinero", sub: "Tu obra avanza de forma constante y predecible" },
  { icon: "💰", text: "Menos gastos innecesarios", sub: "Cada peso invertido tiene un propósito claro" },
  { icon: "⚡", text: "Más rapidez de construcción", sub: "De meses interminables a semanas concretas" },
  { icon: "📈", text: "Retorno de inversión más rápido", sub: "Tu cabaña genera ingresos Airbnb antes" },
  { icon: "🎯", text: "Control total de tu proyecto", sub: "Tú decides el ritmo, no las circunstancias" },
];

function BenefitsSection() {
  return (
    <section className="py-20 px-5 bg-canvas-soft relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-forest/8 blur-[80px] pointer-events-none" />

      <div className="max-w-2xl mx-auto">
        <FadeUp className="text-center mb-14">
          <p className="font-display font-700 text-gold text-xs sm:text-sm uppercase tracking-[0.2em] mb-4">
            El resultado de tener el sistema
          </p>
          <h2 className="font-display font-900 text-3xl sm:text-4xl md:text-5xl text-warm-white leading-tight">
            Con el Acelerador,{" "}
            <span className="text-forest-light">todo cambia</span>
          </h2>
        </FadeUp>

        {/* Comparison table */}
        <FadeUp delay={0.1} className="mb-12">
          <div className="glass rounded-2xl overflow-hidden">
            <div className="grid grid-cols-2">
              <div className="p-4 border-b border-r border-white/8 bg-red-500/5">
                <p className="font-display font-800 text-red-400 text-xs uppercase tracking-widest text-center">
                  Sin el Acelerador
                </p>
              </div>
              <div className="p-4 border-b border-white/8 bg-forest/10">
                <p className="font-display font-800 text-forest-light text-xs uppercase tracking-widest text-center">
                  Con el Acelerador
                </p>
              </div>
              {[
                ["Obra improvisada", "Obra planificada"],
                ["Materiales desperdiciados", "Materiales exactos"],
                ["Equipo confundido", "Equipo coordinado"],
                ["Meses de retraso", "Plazos reales"],
                ["Ingresos lejanos", "Ingresos más rápidos"],
              ].map(([bad, good], i) => (
                <>
                  <div
                    key={`bad-${i}`}
                    className="p-3.5 border-b border-r border-white/6 flex items-center gap-2"
                  >
                    <XCircle className="w-4 h-4 text-red-400/60 shrink-0" />
                    <span className="font-body text-warm-white/40 text-sm">{bad}</span>
                  </div>
                  <div
                    key={`good-${i}`}
                    className="p-3.5 border-b border-white/6 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-forest-light shrink-0" />
                    <span className="font-body text-warm-white/80 text-sm">{good}</span>
                  </div>
                </>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((b, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <div className="glass-forest rounded-2xl p-5 h-full">
                <div className="text-3xl mb-3">{b.icon}</div>
                <p className="font-display font-800 text-warm-white text-base sm:text-lg mb-1">
                  {b.text}
                </p>
                <p className="font-body text-warm-white/50 text-sm">{b.sub}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </section>
  );
}

// ─── SECTION 8 — Offer ───────────────────────────────────────────────────────
function OfferSection() {
  return (
    <section className="py-20 px-5 bg-canvas relative overflow-hidden" id="comprar">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="max-w-lg mx-auto">
        <FadeUp className="text-center mb-10">
          <p className="font-display font-700 text-gold text-xs sm:text-sm uppercase tracking-[0.2em] mb-4">
            Oferta especial — Solo hoy
          </p>
          <h2 className="font-display font-900 text-3xl sm:text-4xl md:text-5xl text-warm-white leading-tight mb-4">
            Agrega el Acelerador de Construcción ahora por una{" "}
            <span className="text-gold">oferta única</span>
          </h2>
          <p className="font-body text-warm-white/55 text-base">
            Esta oferta está disponible{" "}
            <strong className="text-warm-white/80">únicamente en esta página</strong>{" "}
            y no volverá a aparecer.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="glass-gold rounded-3xl p-7 sm:p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />

            {/* Value stack */}
            <div className="mb-7 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-body text-warm-white/50">Módulo 1 — Orden de construcción</span>
                <span className="font-display font-700 price-strike text-warm-white/30">$9</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-body text-warm-white/50">Módulo 2 — Checklist de obra</span>
                <span className="font-display font-700 price-strike text-warm-white/30">$9</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-body text-warm-white/50">Módulo 3 — Evitar desperdicios</span>
                <span className="font-display font-700 price-strike text-warm-white/30">$9</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-body text-warm-white/50">Módulo 4 — Materiales que aceleran</span>
                <span className="font-display font-700 price-strike text-warm-white/30">$10</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-body text-warm-white/50">Módulo 5 — Construcción eficiente</span>
                <span className="font-display font-700 price-strike text-warm-white/30">$10</span>
              </div>
              <div className="h-px bg-gold/20 my-3" />
              <div className="flex items-center justify-between">
                <span className="font-display font-700 text-warm-white/60 text-sm">Valor total</span>
                <span className="font-display font-800 price-strike text-warm-white/40">$47</span>
              </div>
            </div>

            {/* Price reveal */}
            <div className="mb-8">
              <p className="font-body text-warm-white/50 text-sm mb-1">Hoy, solo por</p>
              <div className="flex items-end justify-center gap-2">
                <span className="font-display font-900 text-gold text-glow-gold leading-none" style={{ fontSize: "clamp(3rem, 10vw, 5rem)" }}>
                  $9,90
                </span>
                <span className="font-body text-warm-white/40 text-lg mb-2">USD</span>
              </div>
              <p className="font-body text-warm-white/40 text-xs mt-2">Pago único • Sin suscripciones • Tuyo para siempre</p>
            </div>

            {/* CTA */}
            <CTAButton size="xl">
              🚀 SÍ, QUIERO ACELERAR MI CONSTRUCCIÓN
            </CTAButton>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-5 text-warm-white/40 text-xs font-body">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-forest-light" />
                Pago 100% seguro
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-gold" />
                Acceso inmediato
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-forest-light" />
                Garantía 7 días
              </span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── SECTION 9 — Guarantee ───────────────────────────────────────────────────
function GuaranteeSection() {
  return (
    <section className="py-20 px-5 bg-canvas-soft">
      <div className="max-w-lg mx-auto">
        <FadeUp>
          <div className="glass-forest rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-forest/5 to-transparent pointer-events-none" />

            {/* Shield */}
            <motion.div
              className="w-20 h-20 rounded-3xl bg-forest/20 border-2 border-forest/40 flex items-center justify-center mx-auto mb-6"
              animate={{ boxShadow: ["0 0 20px rgba(61,122,82,0.2)", "0 0 40px rgba(61,122,82,0.5)", "0 0 20px rgba(61,122,82,0.2)"] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <Shield className="w-10 h-10 text-forest-light" />
            </motion.div>

            <p className="font-display font-800 text-forest-light text-xs uppercase tracking-[0.25em] mb-3">
              Garantía Total
            </p>
            <h3 className="font-display font-900 text-warm-white text-2xl sm:text-3xl mb-5">
              7 días de garantía incondicional
            </h3>
            <p className="font-body text-warm-white/65 text-base sm:text-lg leading-relaxed mb-6">
              Si por cualquier razón el Acelerador de Construcción no es lo que
              esperabas, te devolvemos el{" "}
              <strong className="text-warm-white">100% de tu dinero</strong>. Sin
              preguntas. Sin complicaciones.
            </p>
            <div className="glass rounded-2xl px-5 py-3 inline-block">
              <p className="font-display font-800 text-gold text-sm">
                El riesgo es 100% nuestro. La ganancia es 100% tuya.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── SECTION 10 — Final CTA ──────────────────────────────────────────────────
function FinalCTASection() {
  return (
    <section className="py-24 px-5 bg-canvas relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full bg-gold/6 blur-[90px] pointer-events-none" />

      <div className="max-w-xl mx-auto text-center">
        <FadeUp>
          <Sparkles className="w-10 h-10 text-gold mx-auto mb-6" />
          <h2 className="font-display font-900 text-3xl sm:text-4xl md:text-5xl text-warm-white leading-[1.1] mb-5">
            Una cabaña terminada más rápido significa{" "}
            <span className="text-gold text-glow-gold">dinero entrando más rápido</span>
          </h2>
          <p className="font-body text-warm-white/60 text-base sm:text-lg mb-10 max-w-md mx-auto">
            No dejes que tu cabaña sea una obra interminable. Con el Acelerador,
            tú controlas el ritmo — no las circunstancias.
          </p>
        </FadeUp>

        <FadeUp delay={0.1} className="max-w-md mx-auto">
          <CTAButton size="xl">
            ⚡ SÍ, QUIERO ACCESO INMEDIATO →
          </CTAButton>
          <p className="font-body text-warm-white/30 text-xs mt-4">
            ⏰ Esta oferta especial es válida solo por tiempo limitado en esta página
          </p>
        </FadeUp>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </section>
  );
}

// ─── SECTION 11 — FAQ ────────────────────────────────────────────────────────
const faqs = [
  {
    q: "¿Puedo obtener esto después si no lo compro ahora?",
    a: "No. Esta oferta solo está disponible en esta página, justo después de tu compra. Una vez que cierres esta página, perderás el precio especial de $9,90 y no volverá a estar disponible.",
  },
  {
    q: "¿Por qué el precio es tan bajo si el contenido vale tanto?",
    a: "Porque queremos que tengas todo lo que necesitas para triunfar con tu cabaña desde el día 1. Es una oferta de bienvenida diseñada para clientes que ya confiaron en nosotros.",
  },
  {
    q: "¿Cuándo recibiré acceso al Acelerador?",
    a: "Inmediatamente después de tu pago. Recibirás un email con tu acceso en menos de 5 minutos.",
  },
  {
    q: "¿Sirve para cualquier tipo de cabaña?",
    a: "Sí. El sistema fue diseñado para funcionar independientemente del estilo de cabaña — A-frame, container, tradicional o prefabricada.",
  },
  {
    q: "¿Y si no me sirve?",
    a: "Tienes 7 días de garantía total. Si no estás satisfecho por cualquier razón, te devolvemos el 100% de tu dinero sin preguntas.",
  },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 px-5 bg-canvas-soft">
      <div className="max-w-2xl mx-auto">
        <FadeUp className="text-center mb-12">
          <h2 className="font-display font-900 text-3xl sm:text-4xl text-warm-white">
            Preguntas frecuentes
          </h2>
        </FadeUp>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <div className="glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left group"
                >
                  <span className="font-display font-700 text-warm-white text-sm sm:text-base group-hover:text-gold transition-colors">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-warm-white/40" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-0">
                        <div className="h-px bg-white/8 mb-4" />
                        <p className="font-body text-warm-white/60 text-sm sm:text-base leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#040705] border-t border-white/6 py-10 px-5">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <span className="font-body text-warm-white/20 text-xs flex items-center gap-1.5">
            <Lock className="w-3 h-3" /> Pago seguro SSL
          </span>
          <span className="text-white/10">•</span>
          <span className="font-body text-warm-white/20 text-xs">
            Todas las tarjetas aceptadas
          </span>
          <span className="text-white/10">•</span>
          <span className="font-body text-warm-white/20 text-xs">
            Conversión automática de moneda
          </span>
        </div>
        <p className="font-body text-warm-white/20 text-xs">
          © 2025 Cabañas Rentables. Todos los derechos reservados.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href="#" className="font-body text-warm-white/20 text-xs hover:text-warm-white/40 transition-colors underline underline-offset-2">
            Política de Privacidad
          </a>
          <span className="text-white/10">•</span>
          <a href="#" className="font-body text-warm-white/20 text-xs hover:text-warm-white/40 transition-colors underline underline-offset-2">
            Términos y Condiciones
          </a>
        </div>
        <p className="font-body text-warm-white/10 text-xs max-w-lg mx-auto leading-relaxed">
          Este sitio no es parte de Meta Inc. ni de Google LLC. Resultados individuales pueden variar.
          Los testimonios mostrados son experiencias reales de clientes.
        </p>
      </div>
    </footer>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function UpsellPage() {
  return (
    <main className="min-h-screen bg-canvas text-warm-white overflow-x-hidden">
      <AlertBar />
      <HeroSection />
      <Divider />
      <PainSection />
      <ErrorSection />
      <SystemSection />
      <WhatYouGetSection />
      <BenefitsSection />

      {/* Mid-page CTA repeat */}
      <section className="py-14 px-5 bg-canvas">
        <div className="max-w-md mx-auto">
          <FadeUp className="text-center mb-6">
            <p className="font-display font-700 text-warm-white/50 text-sm">
              ¿Ya decidiste? No esperes más.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <CTAButton>🚀 AGREGAR A MI PEDIDO — $9,90</CTAButton>
          </FadeUp>
        </div>
      </section>

      <OfferSection />
      <GuaranteeSection />
      <FinalCTASection />
      <FAQSection />
      <Footer />
    </main>
  );
}
