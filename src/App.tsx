import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Apple, 
  Heart, 
  Star, 
  Clock, 
  Users, 
  BookOpen, 
  ArrowRight, 
  MessageCircle,
  ShieldCheck,
  Zap,
  ChevronLeft,
  ChevronRight,
  Utensils,
  Coffee,
  Leaf,
  Ban,
  Calendar,
  Wallet,
  Smile,
  Layers,
  Sparkles,
  ChevronDown
} from 'lucide-react';

const recipes = [
  {
    title: "Muffins de Yogur con Fresas",
    category: "Dulce Saludable",
    img: "https://i.ibb.co/chDs7dDc/bolinhos-de-iogurte-com-morango-e-cranberry-01-730x480.png",
    desc: "Esponjosos, nutritivos y com el sabor irresistible de la fruta fresca."
  },
  {
    title: "Empanaditas Sin Gluten",
    category: "Salado",
    img: "https://i.ibb.co/LDZ7RxLB/empadinha-sem-gluten-730x480.jpg",
    desc: "Masa que se deshace en la boca y relleno súper saludable."
  },
  {
    title: "Meriendas Coloridas",
    category: "Variedad",
    img: "https://i.ibb.co/cSmmbSJL/images-1.jpg",
    desc: "Opciones prácticas para variar el menú de la semana."
  },
  {
    title: "Frutas Divertidas",
    category: "Snack",
    img: "https://i.ibb.co/tM1czCKV/images-2.jpg",
    desc: "Presentación creativa que incentiva el consumo de frutas."
  },
  {
    title: "Muffins Nutritivos",
    category: "Salado",
    img: "https://i.ibb.co/d0hWFj0W/images.jpg",
    desc: "Perfectos para llevar en la lonchera y comer a cualquier hora."
  },
  {
    title: "Pan de Bono Casero",
    category: "Clásico",
    img: "https://i.ibb.co/ZR0zpyq3/Pao-de-queijo-1.webp",
    desc: "El favorito de los niños en una versión mucho más saludable."
  }
];

const RecipeCarousel = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex"
        animate={{
          x: [0, "-50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ width: "fit-content" }}
      >
        {/* Duplicamos a lista para criar o efeito infinito perfeito */}
        {[...recipes, ...recipes].map((recipe, i) => (
          <div 
            key={i} 
            className="flex-shrink-0 w-[300px] md:w-[450px] aspect-video overflow-hidden"
          >
            <img
              src={recipe.img}
              alt={recipe.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const FloatingCard = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-10, 10, -10] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute bg-white p-3 rounded-2xl shadow-xl z-20 flex items-center gap-2 border-2 border-brand-pink/20 ${className}`}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <h2 className={`text-3xl md:text-5xl font-display font-extrabold text-center mb-12 leading-tight ${className}`}>
    {children}
  </h2>
);

const CTAButton = ({ children, className = "", pulse = false, onClick, href }: { children: React.ReactNode, className?: string, pulse?: boolean, onClick?: () => void, href?: string }) => {
  const baseStyles = "bg-brand-green text-white font-display font-black text-xl md:text-2xl py-5 px-10 rounded-full shadow-button uppercase tracking-wider cursor-pointer text-center flex items-center justify-center transition-all";
  
  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    animate: pulse ? { scale: [1, 1.05, 1] } : {},
    transition: pulse ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : {},
  };

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={pulse ? { scale: [1, 1.05, 1] } : {}}
        transition={pulse ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : {}}
        className="w-full"
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          data-utmify-checkout="true"
          className={`${baseStyles} inline-block w-full no-underline ${className}`}
        >
          {children}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${className}`}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string; key?: React.Key }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-base md:text-lg font-bold text-slate-800 pr-8 group-hover:text-brand-pink transition-colors">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-brand-pink/60 shrink-0"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-slate-600 text-sm md:text-base leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = React.useState(15 * 60);

  React.useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center gap-2 text-red-600 font-bold text-xs md:text-sm bg-red-50 px-3 py-1.5 rounded-full border border-red-100 animate-bounce">
      <Clock size={14} />
      <span>Esta oferta termina en {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
    </div>
  );
};

const PurchaseNotification = () => {
  const purchases = [
    { name: "Ana Lucía", plan: "Acceso Completo" },
    { name: "Carla M.", plan: "Acceso Completo" },
    { name: "Juliana S.", plan: "Acceso Completo" },
    { name: "Mariana F.", plan: "Acceso Completo" },
    { name: "Patrícia L.", plan: "Acceso Completo" },
    { name: "Renata G.", plan: "Acceso Completo" },
    { name: "Beatriz C.", plan: "Acceso Completo" },
    { name: "Fernanda R.", plan: "Acceso Completo" },
  ];

  const [current, setCurrent] = React.useState(0);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const showNotification = () => {
      setVisible(true);
      setTimeout(() => setVisible(false), 4000); // Se mantiene visible por 4 segundos
    };

    const initialTimer = setTimeout(showNotification, 3000);

    const cycleTimer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % purchases.length);
      showNotification();
    }, 15000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(cycleTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          className="fixed bottom-4 left-4 z-[100] bg-emerald-500 py-1.5 px-3 rounded-xl shadow-2xl border border-white/20 flex items-center gap-3 max-w-[260px]"
        >
          <div className="bg-white/20 p-1.5 rounded-full">
            <CheckCircle2 className="text-white" size={16} />
          </div>
          <div className="flex flex-col">
            <p className="text-[11px] font-bold text-white leading-tight">
              {purchases[current].name} acaba de comprar
            </p>
            <p className="text-[10px] text-brand-yellow font-bold">
              {purchases[current].plan}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <PurchaseNotification />
      {/* Barra de Urgencia */}
      <div className="bg-brand-yellow py-2 px-4 text-center flex items-center justify-center gap-2 font-bold text-red-600 sticky top-0 z-50 shadow-md">
        <Clock size={18} className="animate-pulse" />
        <span className="text-sm md:text-base uppercase tracking-tight animate-pulse">Descuento válido solo hoy.</span>
      </div>

      {/* 🔴 1) HERO SECTION (FUNDO ROSA FORTE) */}
      <section className="relative bg-brand-pink pt-16 pb-24 px-4 overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-10 left-10 opacity-20 rotate-12">
          <Apple size={80} className="text-white" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20 -rotate-12">
          <Zap size={80} className="text-white" />
        </div>
        <div className="absolute top-1/2 right-0 opacity-10">
          <div className="w-64 h-64 rounded-full border-8 border-white"></div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
          <div className="text-center text-white mb-12">
            <h1 className="text-4xl md:text-7xl font-display font-black mb-2 drop-shadow-lg">
              LONCHERA SALUDABLE
            </h1>
            <p className="font-script text-2xl md:text-4xl text-brand-yellow mb-4">
              Salud y practicidad día a día
            </p>
            <p className="text-sm md:text-base font-bold opacity-80">
              por Nutri Mariana Silva
            </p>
          </div>

          {/* Foto da especialista */}
          <div className="relative mb-12 px-4 md:px-0">
            <div className="w-full max-w-[280px] sm:max-w-md md:max-w-lg relative z-10 mx-auto">
              <img 
                src="https://i.ibb.co/yBfZN5wg/Chat-GPT-Image-7-de-mai-de-2026-14-43-50-removebg-preview.png" 
                alt="Especialista" 
                className="w-full h-auto rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="max-w-3xl text-center bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 mb-12">
            <h2 className="text-2xl md:text-4xl font-display font-extrabold text-brand-yellow mb-6 leading-tight">
              ¿Sigues comprando snacks procesados para tus hijos? Estás perdiendo salud, tiempo y dinero.
            </h2>
            <p className="text-white text-lg md:text-xl mb-8 leading-relaxed">
              Con este ebook transformarás la lonchera en un momento de nutrición real, sin pasar horas en la cocina.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-brand-yellow font-bold text-lg mb-8">
              <Apple size={24} />
              <span>¡Recetas probadas y aprobadas por niños!</span>
            </div>

            <CTAButton 
              pulse={true} 
              onClick={() => document.getElementById('combos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              ¡QUIERO GARANTIZAR MI ACCESO AHORA!
            </CTAButton>
            
            <p className="text-white/80 text-sm mt-4 font-medium italic">
              Valor promocional por tiempo limitado
            </p>
          </div>
        </div>
      </section>

      {/* 🟡 2) SEÇÃO DE IDENTIFICAÇÃO (FUNDO CLARO) */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>
            ¿Te identificas con alguna de estas situaciones?
          </SectionTitle>

          <div className="space-y-4 mb-16">
            {[
              { text: "No tengo idea de qué poner en la lonchera hoy...", color: "bg-blue-500", rotate: "-1deg" },
              { text: "Mi hijo solo quiere comer galletas rellenas y jugos de cajita.", color: "bg-red-500", rotate: "1deg" },
              { text: "Gasto mucho dinero en snacks procesados del mercado.", color: "bg-brand-yellow text-slate-900", rotate: "-0.5deg" },
              { text: "Siento culpa por no ofrecer una alimentación saludable.", color: "bg-green-500", rotate: "0.8deg" },
              { text: "No tengo tiempo para cocinar recetas complicadas.", color: "bg-brand-pink", rotate: "-1.2deg" },
              { text: "La lonchera siempre vuelve llena porque no comió nada.", color: "bg-brand-orange", rotate: "0.5deg" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ transform: `rotate(${item.rotate})` }}
                className={`${item.color} p-6 rounded-xl shadow-strong text-white font-display font-bold text-xl md:text-2xl text-center`}
              >
                {item.text}
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-display font-black text-brand-pink mb-4">
              Si dijiste que SÍ a alguna de estas...
            </h3>
            <p className="text-xl md:text-2xl font-medium text-slate-600">
              ¡Esta guía fue creada pensando exactamente en ti y en la salud de tu pequeño!
            </p>
          </div>
        </div>
      </section>

      {/* 🟠 3) SEÇÃO PROMESSA (FUNDO LARANJA) */}
      <section className="py-24 bg-brand-orange text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
              Recibirás <span className="text-brand-yellow">más de 160 recetas exclusivas</span>
            </h2>
            <p className="text-xl md:text-2xl font-medium opacity-90">
              Todo pensado para ser fácil, práctico y muy económico.
            </p>
          </div>

          <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl text-slate-800 mb-20">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 text-brand-orange flex items-center gap-2">
                <CheckCircle2 className="text-green-500" />
                Algunas de las delicias que recibirás:
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Muffins nutritivos que no se bajan",
                  "Panes caseros de licuadora",
                  "Jugos naturales de larga duración",
                  "Patés saludables y coloridos",
                  "Muffins salados proteicos",
                  "Cookies de avena sin azúcar",
                  "Opciones para niños con alergias",
                  "Tips de conservación y congelado"
                ].map((recipe, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg font-medium">
                    <div className="mt-1 bg-green-100 p-1 rounded-full">
                      <CheckCircle2 size={18} className="text-green-600" />
                    </div>
                    {recipe}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-display font-black mb-4">
              Echa un vistazo a lo que te espera...
            </h3>
            <p className="text-lg md:text-xl opacity-80">
              ¡Recetas reales, hechas por madres reales, para niños felices!
            </p>
          </div>
        </div>
        
        <RecipeCarousel />
      </section>

      {/* 🟤 4) SEÇÃO O QUE VOCÊ VAI RECEBER */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <SectionTitle>En resumen, recibirás:</SectionTitle>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Recetas dulces y saladas", icon: <Utensils className="text-brand-pink" size={32} />, color: "bg-pink-50", isBonus: false },
              { title: "Recetitas con frutas y vegetales", icon: <Apple className="text-green-500" size={32} />, color: "bg-green-50", isBonus: true },
              { title: "Bebidas divertidas y saludables", icon: <Coffee className="text-blue-500" size={32} />, color: "bg-blue-50", isBonus: true },
              { title: "Delicias sin azúcar y harinas refinadas", icon: <Ban className="text-red-500" size={32} />, color: "bg-red-50", isBonus: true },
              { title: "Delicias veganas", icon: <Leaf className="text-emerald-500" size={32} />, color: "bg-emerald-50", isBonus: true },
              { title: "Mix de recetas para alérgicos", icon: <ShieldCheck className="text-brand-yellow" size={32} />, color: "bg-yellow-50", isBonus: true },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-xl border-2 border-slate-200 flex flex-col items-center text-center hover:shadow-2xl hover:border-brand-pink/30 transition-all relative overflow-hidden"
              >
                {item.isBonus && (
                  <div className="absolute top-3 right-[-35px] bg-brand-pink text-white text-[10px] font-bold py-1 px-10 rotate-45 shadow-sm">
                    BONO
                  </div>
                )}
                <div className={`mb-6 p-4 ${item.color} rounded-2xl`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-black text-slate-900 leading-tight">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 NOVA SEÇÃO PERSUASIVA (ESTILO IMAGEM) */}
      <section id="por-que-elegir" className="py-24 px-4 bg-[#f5a623] relative overflow-hidden">
        {/* Elementos decorativos sutis */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10"><Apple size={80} /></div>
          <div className="absolute bottom-20 right-10"><Heart size={60} /></div>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-[#f5a623] border-2 border-[#a61d33] rounded-3xl px-8 py-6 shadow-xl"
            >
              <h2 className="text-2xl md:text-4xl font-display font-black text-[#a61d33] leading-tight">
                Con la lonchera saludable lograrás:
              </h2>
            </motion.div>
          </div>

          <div className="flex flex-col gap-4 mb-20">
            {[
              { text: "Enviar meriendas que a tu hijo realmente le gusten y se coma todo." },
              { text: "Reducir (o enviar a cero) los ultraprocesados en la lonchera." },
              { text: "Tener la tranquilidad de saber que ofreces comida que nutre de verdad." },
              { text: "Dejar de romperte la cabeza cada día pensando en qué enviar." },
              { text: "Sentir orgullo por cuidar la alimentación de tu familia con facilidad." },
              { text: "Enseñar buenos hábitos alimentarios sin peleas ni presiones." },
              { text: "Tener siempre una opción saludable lista, incluso en los días más locos." },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#a61d33] p-5 md:p-6 rounded-[25px] shadow-lg flex items-center gap-4 text-white"
              >
                <div className="bg-white rounded-xl p-2 flex-shrink-0">
                  <CheckCircle2 className="text-[#a61d33]" size={24} />
                </div>
                <p className="text-lg md:text-xl font-medium leading-tight">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl md:text-3xl font-display font-black text-[#a61d33] mb-4">
              Y lo más importante:
            </p>
            <p className="text-lg md:text-xl font-medium text-white mb-10 max-w-2xl mx-auto leading-relaxed">
              Verás a tus hijos creciendo con más salud, energía y alegría, sabiendo que eso empezó contigo.
            </p>
            <CTAButton 
              pulse={true}
              onClick={() => document.getElementById('combos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              ¡QUIERO TRANSFORMAR MI RUTINA AHORA!
            </CTAButton>
          </div>
        </div>
      </section>

      {/* 🟣 5) PROVA SOCIAL */}
      <section className="py-24 px-4 bg-pink-50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>¿Qué dicen las alumnas?</SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sofía",
                role: "Madre de Pedro",
                text: "Empecé a hacer las recetas de la lonchera y mi hijo volvió hoy con la lonchera vacía 😍 nunca había pasado esto jaja",
                img: "https://i.ibb.co/SDZPrMLS/1f32a36a38c347d28f36ae1ea51a9fa1.jpg"
              },
              {
                name: "Valentina",
                role: "Alumna del Ebook",
                text: "Lo compré ayer y ya probé 2 recetas hoy temprano. ¡Mucho más fácil de lo que imaginaba!",
                img: "https://i.ibb.co/jPxrF11T/68a968808f8951a151f98e4722bf10e7.jpg"
              },
              {
                name: "Camila",
                role: "Madre preocupada",
                text: "Mi hijo es súper exigente para comer y ya le gustaron dos recetas",
                img: "https://i.ibb.co/F4szyYnh/701d4aa7766ae9564a082518821ad47a.jpg"
              },
              {
                name: "Lucía",
                role: "Madre de Gabi",
                text: "Me encantó porque son recetas simples de verdad. Nada complicado.",
                img: "https://i.ibb.co/4n6vb4WT/fotoria-ai-professional-headshots-hero12.jpg"
              },
              {
                name: "Daniela",
                role: "Emprendedora",
                text: "Hice las recetas el domingo y ya dejé varias listas para la semana. Salvó mi rutina.",
                img: "https://i.ibb.co/BHhCf45S/5dc455c3dc47d62f833c362a2c59c5ed.jpg"
              },
              {
                name: "Mariana",
                role: "Madre de dos",
                text: "¡Tiene muchísimas recetas! Ni me imaginé que tendría tantas opciones.",
                img: "https://i.ibb.co/KzKn69YY/images.jpg"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-xl relative"
              >
                <div className="absolute -top-4 -right-4 bg-brand-pink p-3 rounded-full shadow-lg">
                  <Heart className="text-white fill-current" size={24} />
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.img} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full border-4 border-pink-100"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-display font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-brand-yellow fill-current" />)}
                </div>
                <p className="text-slate-600 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔵 6) OFERTA FINAL */}
      <section id="combos" className="py-24 px-4 bg-brand-pink relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 rotate-45"><Zap size={120} /></div>
          <div className="absolute bottom-10 right-10 -rotate-12"><Star size={120} /></div>
        </div>

        <div className="max-w-3xl mx-auto text-center text-white relative z-10">
          <div className="flex justify-center">
            {/* Única Oferta */}
            <div className="bg-white p-8 rounded-[40px] border-[6px] border-brand-yellow shadow-[0_0_30px_rgba(255,200,0,0.3)] flex flex-col h-full relative text-slate-900 max-w-2xl w-full">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-yellow text-slate-900 px-8 py-2 rounded-full font-black text-sm shadow-lg z-20 uppercase">
                Oferta Especial
              </div>
              
              <div className="flex justify-center mb-4 mt-4">
                <CountdownTimer />
              </div>
              <h3 className="text-2xl font-display font-black mb-2 text-brand-pink uppercase">Acceso Completo</h3>
              <p className="text-sm text-slate-500 mb-6 font-medium">Todo lo que necesitas para transformar la alimentación de tu familia</p>
              
              <div className="space-y-3 mb-8 text-left flex-grow">
                {[
                  "+160 Recetas de Merienda Saludable (EXCLUSIVAS)",
                  "Snacks dulces y salados",
                  "Delicias sin azúcar ni harina refinada",
                  "Mix de recetas para alérgicos",
                  "Recetitas con frutas y vegetales",
                  "Bebidas divertidas y saludables",
                  "Delicias veganas",
                  "Manual de Higienização de recipientes",
                  "Actualizaciones futuras gratuitas",
                  "Acceso de por vida, cuando y donde quieras"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="text-brand-pink shrink-0" size={18} />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <p className="text-lg line-through text-slate-400 mb-1">De US$ 19,97</p>
                <div className="flex flex-col items-center">
                  <span className="text-brand-pink font-display font-black text-5xl">
                    US$ 7,97
                  </span>
                </div>
              </div>

              <CTAButton 
                className="w-full py-4 text-xl" 
                pulse 
                href="https://pay.hotmart.com/G105737527Q?checkoutMode=10"
              >
                ¡QUIERO ACCEDER AHORA!
              </CTAButton>
            </div>
          </div>

          {/* Selo de Garantia Estilo Imagem */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white/15 backdrop-blur-md rounded-[40px] p-8 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden group">
              {/* Brilho de fundo */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl"></div>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative z-10">
                {/* Lado Esquerdo: O Número e Estrelas */}
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <motion.span 
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      className="text-8xl md:text-[120px] font-display font-black leading-none bg-clip-text text-transparent bg-gradient-to-b from-yellow-100 via-brand-yellow to-yellow-700 drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
                    >
                      7
                    </motion.span>
                    <div className="flex flex-col items-center -mt-2">
                      <span className="text-white font-black text-sm md:text-base tracking-tighter leading-none uppercase">Días de</span>
                      <span className="text-white font-black text-sm md:text-base tracking-tighter leading-none uppercase">Garantía</span>
                      <div className="flex gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="text-brand-yellow fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Divisor Vertical */}
                  <div className="h-24 w-px bg-white/20 mx-2 hidden md:block"></div>

                  {/* Texto Principal do Selo */}
                  <div className="text-left">
                    <h3 className="text-2xl md:text-4xl font-display font-black text-white leading-[0.9] uppercase">
                      Garantía <br />
                      <span className="text-brand-yellow">Blindada</span> de <br />
                      7 Días
                    </h3>
                  </div>
                </div>

                {/* Texto Explicativo */}
                <div className="flex-1 text-center md:text-left border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
                  <p className="text-lg text-white/90 leading-relaxed font-medium mb-4">
                    ¡Pruébalo sin riesgos! Si en 7 días no estás amando las recetas, te devuelvo el 100% de tu inversión. Sin preguntas, sin burocracia.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-brand-yellow font-bold text-sm">
                      <ShieldCheck size={18} />
                      <span>Tu compra es 100% segura</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          

          

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-amber-100/60">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-black text-slate-900 mb-3">
              DUDAS <span className="text-brand-pink">FRECUENTES</span>
            </h2>
            <p className="text-slate-600">
              Todo lo que necesitas saber antes de asegurar tu acceso.
            </p>
          </div>

          <div className="bg-white rounded-[24px] p-5 md:p-8 shadow-lg border border-amber-200/50">
            {[
              {
                q: "¿Cómo recibo el acceso al ebook?",
                a: "El acceso se envía inmediatamente a tu correo electrónico registrado justo después de la confirmación del pago. ¡Podrás descargarlo y empezar a usarlo al instante!"
              },
              {
                q: "¿Las recetas son difíciles o tardadas?",
                a: "¡Para nada! Todas las recetas fueron probadas y seleccionadas pensando en la rutina ajetreada de padres y madres. Son preparaciones prácticas, rápidas y que no exigen habilidades avanzadas en la cocina."
              },
              {
                q: "¿Sirve para niños de qué edad?",
                a: "Las recetas son ideales para niños en etapa escolar (de los 2 a los 12 años), pero por ser saludables y deliciosas, ¡terminan siendo disfrutadas por toda la familia!"
              },
              {
                q: "¿Los ingredientes son caros o difíciles de hallar?",
                a: "No. Priorizamos ingredientes simples, naturales y accesíveis que encuentras fácilmente en cualquier supermercado o feria local."
              },
              {
                q: "¿El pago es seguro?",
                a: "Sí, 100% seguro. Utilizamos las plataformas de pago más confiables, con encriptación de punta para proteger tus datos."
              },
              {
                q: "¿Puedo imprimir el material?",
                a: "¡Claro que sí! El ebook se entrega en formato PDF de alta resolución, optimizado tanto para lectura en dispositivos móviles como para impresión."
              }
            ].map((item, index) => (
              <FAQItem key={index} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-white text-center">
        <p className="text-sm opacity-50">
          © 2025 Lonchera Saludable - Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
