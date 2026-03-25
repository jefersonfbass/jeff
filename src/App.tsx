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
    title: "Bolinhos de Iogurte com Morango",
    category: "Doce Saudável",
    img: "https://i.ibb.co/chDs7dDc/bolinhos-de-iogurte-com-morango-e-cranberry-01-730x480.png",
    desc: "Fofinhos, nutritivos e com o sabor irresistível das frutas."
  },
  {
    title: "Empadinha Sem Glúten",
    category: "Salgado",
    img: "https://i.ibb.co/LDZ7RxLB/empadinha-sem-gluten-730x480.jpg",
    desc: "Massa que derrete na boca e recheio super saudável."
  },
  {
    title: "Lanchinhos Coloridos",
    category: "Variedade",
    img: "https://i.ibb.co/cSmmbSJL/images-1.jpg",
    desc: "Opções práticas para variar o cardápio da semana."
  },
  {
    title: "Frutas Divertidas",
    category: "Lanche",
    img: "https://i.ibb.co/tM1czCKV/images-2.jpg",
    desc: "Apresentação criativa que incentiva o consumo de frutas."
  },
  {
    title: "Muffins Nutritivos",
    category: "Salgado",
    img: "https://i.ibb.co/d0hWFj0W/images.jpg",
    desc: "Perfeitos para levar na lancheira e comer a qualquer hora."
  },
  {
    title: "Pão de Queijo Caseiro",
    category: "Clássico",
    img: "https://i.ibb.co/ZR0zpyq3/Pao-de-queijo-1.webp",
    desc: "O favorito das crianças em uma versão muito mais saudável."
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
          id={href.includes('V4L') ? 'checkout-basico' : 'checkout-completo'}
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
      <span>Essa condição termina em {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
    </div>
  );
};

const PurchaseNotification = () => {
  const purchases = [
    { name: "Ana Paula", plan: "Combo Completo", city: "São Paulo - SP" },
    { name: "Carla M.", plan: "Combo Básico", city: "Curitiba - PR" },
    { name: "Juliana S.", plan: "Combo Completo", city: "Rio de Janeiro - RJ" },
    { name: "Mariana F.", plan: "Combo Completo", city: "Belo Horizonte - MG" },
    { name: "Patrícia L.", plan: "Combo Básico", city: "Porto Alegre - RS" },
    { name: "Renata G.", plan: "Combo Completo", city: "Salvador - BA" },
    { name: "Beatriz C.", plan: "Combo Completo", city: "Fortaleza - CE" },
    { name: "Fernanda R.", plan: "Combo Básico", city: "Brasília - DF" },
  ];

  const [current, setCurrent] = React.useState(0);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const showNotification = () => {
      setVisible(true);
      setTimeout(() => setVisible(false), 4000); // Fica visível por apenas 4 segundos
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
              {purchases[current].name} acabou de comprar
            </p>
            <p className="text-[10px] text-brand-yellow font-bold">
              {purchases[current].plan}
            </p>
            <p className="text-[9px] text-white/80 font-medium">
              {purchases[current].city}
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
      {/* Faixa de Urgência */}
      <div className="bg-brand-yellow py-2 px-4 text-center flex items-center justify-center gap-2 font-bold text-red-600 sticky top-0 z-50 shadow-md">
        <Clock size={18} className="animate-pulse" />
        <span className="text-sm md:text-base uppercase tracking-tight animate-pulse">Desconto válido somente hoje.</span>
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
              LANCHEIRA SAUDÁVEL
            </h1>
            <p className="font-script text-2xl md:text-4xl text-brand-yellow mb-4">
              Saúde e praticidade no dia a dia
            </p>
            <p className="text-sm md:text-base font-bold opacity-80">
              por Nutri Mariana Silva
            </p>
          </div>

          {/* Foto da especialista */}
          <div className="relative mb-12 px-4 md:px-0">
            <div className="w-full max-w-[280px] sm:max-w-md md:max-w-lg relative z-10 mx-auto">
              <img 
                src="https://i.ibb.co/QFJjbsfH/Chat-GPT-Image-4-de-mar-de-2026-11-24-30-1.png" 
                alt="Especialista" 
                className="w-full h-auto rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="max-w-3xl text-center bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 mb-12">
            <h2 className="text-2xl md:text-4xl font-display font-extrabold text-brand-yellow mb-6 leading-tight">
              Você ainda compra lanche pronto para seu filho? Está perdendo Saúde, tempo e dinheiro.
            </h2>
            <p className="text-white text-lg md:text-xl mb-8 leading-relaxed">
              Com esse ebook você vai transformar a lancheira em um momento de nutrição real, sem perder horas na cozinha.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-brand-yellow font-bold text-lg mb-8">
              <Apple size={24} />
              <span>Receitas testadas e aprovadas por crianças!</span>
            </div>

            <CTAButton 
              pulse={true} 
              onClick={() => document.getElementById('combos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              QUERO GARANTIR MEU ACESSO AGORA!
            </CTAButton>
            
            <p className="text-white/80 text-sm mt-4 font-medium italic">
              Valor promocional por tempo limitado
            </p>
          </div>
        </div>
      </section>

      {/* 🟡 2) SEÇÃO DE IDENTIFICAÇÃO (FUNDO CLARO) */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>
            Você se identifica com alguma dessas situações?
          </SectionTitle>

          <div className="space-y-4 mb-16">
            {[
              { text: "Não tenho ideia do que colocar na lancheira hoje...", color: "bg-blue-500", rotate: "-1deg" },
              { text: "Meu filho só quer comer biscoito recheado e suco de caixinha.", color: "bg-red-500", rotate: "1deg" },
              { text: "Gasto muito dinheiro com lanches prontos no mercado.", color: "bg-brand-yellow text-slate-900", rotate: "-0.5deg" },
              { text: "Sinto culpa por não oferecer uma alimentação saudável.", color: "bg-green-500", rotate: "0.8deg" },
              { text: "Não tenho tempo para cozinhar receitas complicadas.", color: "bg-brand-pink", rotate: "-1.2deg" },
              { text: "A lancheira volta sempre cheia porque ele não comeu nada.", color: "bg-brand-orange", rotate: "0.5deg" },
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
              Se você disse SIM para alguma dessas...
            </h3>
            <p className="text-xl md:text-2xl font-medium text-slate-600">
              Este guia foi criado pensando exatamente em você e na saúde do seu pequeno!
            </p>
          </div>
        </div>
      </section>

      {/* 🟠 3) SEÇÃO PROMESSA (FUNDO LARANJA) */}
      <section className="py-24 bg-brand-orange text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
              Você vai receber <span className="text-brand-yellow">mais de 160 receitas exclusivas</span>
            </h2>
            <p className="text-xl md:text-2xl font-medium opacity-90">
              Tudo pensado para ser fácil, prático e muito econômico.
            </p>
          </div>

          <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl text-slate-800 mb-20">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 text-brand-orange flex items-center gap-2">
                <CheckCircle2 className="text-green-500" />
                Algumas das delícias que vai receber:
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Bolinhos nutritivos que não murcham",
                  "Pães caseiros de liquidificador",
                  "Sucos naturais que não oxidam rápido",
                  "Patês saudáveis e coloridos",
                  "Muffins salgados proteicos",
                  "Cookies de aveia sem açúcar",
                  "Opções para crianças com alergias",
                  "Dicas de conservação e congelamento"
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
              Dê uma olhadinha no que te espera...
            </h3>
            <p className="text-lg md:text-xl opacity-80">
              Receitas reais, feitas por mães reais, para crianças felizes!
            </p>
          </div>
        </div>
        
        <RecipeCarousel />
      </section>

      {/* 🟤 4) SEÇÃO O QUE VOCÊ VAI RECEBER */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <SectionTitle>Em resumo, você vai receber:</SectionTitle>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Receitas doces e Salgadas", icon: <Utensils className="text-brand-pink" size={32} />, color: "bg-pink-50", isBonus: false },
              { title: "Receitinhas com frutas e vegetais", icon: <Apple className="text-green-500" size={32} />, color: "bg-green-50", isBonus: true },
              { title: "Bebidas divertidas e saudáveis", icon: <Coffee className="text-blue-500" size={32} />, color: "bg-blue-50", isBonus: true },
              { title: "Delícias sem açúcar e farinha branca", icon: <Ban className="text-red-500" size={32} />, color: "bg-red-50", isBonus: true },
              { title: "Delícias veganas", icon: <Leaf className="text-emerald-500" size={32} />, color: "bg-emerald-50", isBonus: true },
              { title: "Mix receitas para alérgicos", icon: <ShieldCheck className="text-brand-yellow" size={32} />, color: "bg-yellow-50", isBonus: true },
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
                    BÔNUS
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
      <section id="por-que-escolher" className="py-24 px-4 bg-[#f5a623] relative overflow-hidden">
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
                Com o lancheira saudável, você vai :
              </h2>
            </motion.div>
          </div>

          <div className="flex flex-col gap-4 mb-20">
            {[
              { text: "Mandar lanches que seu filho realmente gosta e comem até o fim." },
              { text: "Reduzir (ou até eliminar) os industrializados e ultraprocessados da lancheira." },
              { text: "Ter tranquilidade por saber que está oferecendo alimentos que nutrem de verdade." },
              { text: "Parar de quebrar a cabeça todo dia para pensar no que mandar." },
              { text: "Sentir orgulho por conseguir cuidar da alimentação da sua família com leveza." },
              { text: "Ensinar bons hábitos alimentares sem precisar brigar ou forçar nada." },
              { text: "Ter sempre uma opção saudável pronta, mesmo na correria da semana." },
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
              E o mais importante:
            </p>
            <p className="text-lg md:text-xl font-medium text-white mb-10 max-w-2xl mx-auto leading-relaxed">
              Você vai ver seus filhos crescendo com mais saúde, energia e alegria, sabendo que isso começou com você.
            </p>
            <CTAButton 
              pulse={true}
              onClick={() => document.getElementById('combos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              QUERO TRANSFORMAR MINHA ROTINA AGORA!
            </CTAButton>
          </div>
        </div>
      </section>

      {/* 🟣 5) PROVA SOCIAL */}
      <section className="py-24 px-4 bg-pink-50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>O que dizem as alunas?</SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mariana Silva",
                role: "Mãe do Pedro",
                text: "comecei a fazer as receitas da lancheira e meu filho voltou com a lancheira vazia hoje 😍 nunca tinha acontecido isso kkk",
                img: "https://i.ibb.co/SDZPrMLS/1f32a36a38c347d28f36ae1ea51a9fa1.jpg"
              },
              {
                name: "Beatriz Oliveira",
                role: "Aluna do Ebook",
                text: "Comprei ontem e já testei 2 receitas hoje cedo. Muito mais fácil do que eu imaginava!",
                img: "https://i.ibb.co/jPxrF11T/68a968808f8951a151f98e4722bf10e7.jpg"
              },
              {
                name: "Fernanda Lima",
                role: "Mãe de seletivo",
                text: "Meu filho é super chato pra comer e gostou de duas receitas já",
                img: "https://i.ibb.co/F4szyYnh/701d4aa7766ae9564a082518821ad47a.jpg"
              },
              {
                name: "Cláudia Souza",
                role: "Mãe da Gabi",
                text: "Eu amei porque são receitas simples mesmo. Nada complicado.",
                img: "https://i.ibb.co/4n6vb4WT/fotoria-ai-professional-headshots-hero12.jpg"
              },
              {
                name: "Renata Costa",
                role: "",
                text: "Fiz no domingo e já deixei vários lanches prontos pra semana. Salvou minha rotina.",
                img: "https://i.ibb.co/BHhCf45S/5dc455c3dc47d62f833c362a2c59c5ed.jpg"
              },
              {
                name: "Patrícia Gomes",
                role: "",
                text: "Tem muita receita mesmo! Nem imaginei que teria tanta opção.",
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

        <div className="max-w-6xl mx-auto text-center text-white relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Combo Básico */}
            <div className="bg-white p-8 rounded-[40px] border-2 border-brand-pink/20 shadow-xl flex flex-col h-full text-slate-900">
              <div className="flex justify-center mb-4">
                <CountdownTimer />
              </div>
              <h3 className="text-2xl font-display font-black mb-2 text-brand-pink">COMBO BÁSICO</h3>
              <p className="text-sm text-slate-500 mb-6 font-medium">O essencial para começar</p>
              
              <div className="space-y-3 mb-8 text-left flex-grow">
                {[
                  "100 Receitas Lanchinho Saudável",
                  "Lanches doces e salgados"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="text-brand-pink shrink-0" size={18} />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <p className="text-lg line-through text-slate-400 mb-1">De R$ 37,90</p>
                <div className="flex flex-col items-center">
                  <span className="text-brand-pink font-display font-black text-4xl">
                    R$ 17,90
                  </span>
                </div>
              </div>

              <CTAButton 
                className="w-full py-4 text-lg" 
                pulse 
                href="https://checkout.materialinteligente.com/VCCL1O8SCV4L"
              >
                QUERO O BÁSICO
              </CTAButton>
            </div>

            {/* Combo Completo */}
            <div className="bg-white p-8 rounded-[40px] border-[6px] border-brand-yellow shadow-[0_0_30px_rgba(255,200,0,0.3)] flex flex-col h-full relative text-slate-900">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-yellow text-slate-900 px-8 py-2 rounded-full font-black text-sm shadow-lg z-20">
                OFERTA COMPLETA
              </div>
              
              <div className="flex justify-center mb-4 mt-4">
                <CountdownTimer />
              </div>
              <h3 className="text-2xl font-display font-black mb-2 text-brand-pink">COMBO COMPLETO</h3>
              <p className="text-sm text-slate-500 mb-6 font-medium">A experiência completa de nutrição</p>
              
              <div className="space-y-3 mb-8 text-left flex-grow">
                {[
                  "+160 Receitas Lanchinho Saudável (EXCLUSIVAS)",
                  "Lanches doces e salgados",
                  "Delícias sem açúcar e farinha branca",
                  "Mix receitas para alérgicos",
                  "Receitinhas com frutas e vegetais",
                  "Bebidas divertidas e saudáveis",
                  "Delícias veganas",
                  "Manual de Higienização dos potes e garrafas",
                  "Atualizações futuras gratuitas com novas receitas e cardápios",
                  "Acesso vitalício, acesse quando e onde quiser."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="text-brand-pink shrink-0" size={18} />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <p className="text-lg line-through text-slate-400 mb-1">De R$ 67,00</p>
                <div className="flex flex-col items-center">
                  <span className="text-brand-pink font-display font-black text-5xl">
                    R$ 27,90
                  </span>
                </div>
              </div>

              <CTAButton 
                className="w-full py-4 text-xl" 
                pulse 
                href="https://checkout.materialinteligente.com/VCCL1O8SCV6C"
              >
                QUERO O COMPLETO!
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
                      <span className="text-white font-black text-sm md:text-base tracking-tighter leading-none">DIAS DE</span>
                      <span className="text-white font-black text-sm md:text-base tracking-tighter leading-none">GARANTIA</span>
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
                      Garantia <br />
                      <span className="text-brand-yellow">Blindada</span> de <br />
                      7 Dias
                    </h3>
                  </div>
                </div>

                {/* Texto Explicativo */}
                <div className="flex-1 text-center md:text-left border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
                  <p className="text-lg text-white/90 leading-relaxed font-medium mb-4">
                    Experimente sem riscos! Se em até 7 dias você não estiver amando as receitas, eu devolvo 100% do seu investimento. Sem perguntas, sem burocracia.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-brand-yellow font-bold text-sm">
                      <ShieldCheck size={18} />
                      <span>Sua compra está 100% segura</span>
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
              DÚVIDAS <span className="text-brand-pink">FREQUENTES</span>
            </h2>
            <p className="text-slate-600">
              Tudo o que você precisa saber antes de garantir o seu acesso.
            </p>
          </div>

          <div className="bg-white rounded-[24px] p-5 md:p-8 shadow-lg border border-amber-200/50">
            {[
              {
                q: "Como recebo o acesso ao ebook?",
                a: "O acesso é enviado imediatamente para o seu e-mail cadastrado logo após a confirmação do pagamento. Você poderá baixar e começar a usar na mesma hora!"
              },
              {
                q: "As receitas são difíceis ou demoradas?",
                a: "De forma alguma! Todas as receitas foram testadas e selecionadas pensando na rotina corrida de pais e mães. São preparos práticos, rápidos e que não exigem habilidades avançadas na cozinha."
              },
              {
                q: "Serve para crianças de qual idade?",
                a: "As receitas são ideais para crianças em fase escolar (dos 2 aos 12 anos), mas por serem saudáveis e deliciosas, acabam sendo apreciadas por toda a família!"
              },
              {
                q: "Os ingredientes são caros ou difíceis de achar?",
                a: "Não. Priorizamos ingredientes simples, naturais e acessíveis que você encontra facilmente em qualquer supermercado ou feira local."
              },
              {
                q: "O pagamento é seguro?",
                a: "Sim, 100% seguro. Utilizamos as maiores e mais confiáveis plataformas de pagamento do Brasil, com criptografia de ponta para proteger seus dados."
              },
              {
                q: "Posso imprimir o material?",
                a: "Com certeza! O ebook é entregue em formato PDF de alta resolução, otimizado tanto para leitura em dispositivos móveis quanto para impressão, se você preferir ter o material físico na cozinha."
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
          © 2025 Lancheira Saudável - Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
