import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  BookOpen, 
  Smartphone, 
  Clock, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp,
  Play,
  Star,
  Zap,
  Volume2
} from 'lucide-react';

// --- Components ---

const Section = ({ children, className = "", id }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-12 px-6 md:py-24 ${className}`}>
    <div className="max-w-4xl mx-auto">
      {children}
    </div>
  </section>
);

const Button = ({ children, className = "", primary = true, onClick, pulse = false }: { children: React.ReactNode, className?: string, primary?: boolean, onClick?: () => void, pulse?: boolean }) => (
  <motion.button 
    onClick={onClick}
    animate={pulse ? { scale: [1, 1.05, 1] } : {}}
    transition={pulse ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" } : {}}
    className={`
      px-8 py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg cursor-pointer
      ${primary 
        ? 'bg-brand-gold text-white hover:bg-opacity-90 shadow-brand-gold/20' 
        : 'bg-white text-brand-primary border-2 border-brand-primary hover:bg-brand-primary hover:text-white'}
      ${className}
    `}
  >
    {children}
  </motion.button>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="w-full flex justify-between items-center text-left font-medium text-lg text-brand-ink cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const scrollToOffer = () => {
    const element = document.getElementById('offer');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const today = new Date();
  const formattedDate = today.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen selection:bg-brand-secondary selection:text-white">
      {/* Top Bar */}
      <div className="bg-brand-ink py-2 px-4 text-center">
        <p className="text-white text-xs md:text-sm font-medium tracking-wide uppercase">
          Oferta especial disponível apenas hoje - {formattedDate}
        </p>
      </div>

      {/* Hero Section */}
      <header className="relative bg-white pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-brand-primary blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-secondary blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold tracking-wide uppercase">
              Acesso Imediato
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-brand-ink">
              Método pouco conhecido para aliviar a <span className="text-brand-gold italic">dor na mandíbula</span> em até 7 dias
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 font-light italic px-4">
              Descubra como reduzir a tensão, os estalos e o desconforto da mandíbula com uma rotina simples de poucos minutos por dia.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-10 max-w-md mx-auto"
            >
              <img 
                src="https://i.ibb.co/SXr4VsyW/M-todo-Mand-bula-Leve-Guia-Completo.png" 
                alt="Método Mandíbula Leve Guia Completo" 
                className="w-full h-auto drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <Button onClick={scrollToOffer} pulse className="w-full md:w-auto bg-brand-gold hover:bg-opacity-90">
              COMEÇAR AGORA E ALIVIAR MINHA MANDÍBULA
            </Button>
            <p className="mt-4 text-sm text-gray-500 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Sem remédios e sem complicação
            </p>
          </motion.div>
        </div>
      </header>

      {/* Pain Points Section */}
      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Se você...</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "sente dor na mandíbula ao falar ou mastigar",
            "ouve estalos ao abrir a boca",
            "acorda com a mandíbula travada ou cansada",
            "sente tensão constante no rosto"
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              <XCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-700">{item}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl font-medium text-brand-ink mb-2">
            👉 então você pode estar sofrendo com <span className="text-brand-gold underline decoration-brand-secondary underline-offset-4">Disfunção Temporomandibular</span>
          </p>
          <p className="text-gray-500 italic">E o pior... A maioria das pessoas ignora isso até a dor piorar.</p>
        </div>
      </Section>

      {/* Agitation Section */}
      <Section className="bg-brand-ink text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-10 text-center flex flex-col md:flex-row items-center justify-center gap-2">
            <span className="text-3xl">⚠️</span> Essa tensão acumulada pode:
          </h2>
          <ul className="space-y-8 mb-12">
            {[
              "Se tornar uma dor crônica e constante",
              "Gerar dores de cabeça e enxaquecas frequentes",
              "Dificultar sua fala e mastigação no dia a dia",
              "Aumentar o estresse e o cansaço facial"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-lg md:text-xl opacity-90">
                <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2.5 flex-shrink-0" />
                <span className="leading-tight">{item}</span>
              </li>
            ))}
          </ul>
          <div className="p-8 bg-white/5 rounded-3xl border border-white/10 text-center">
            <p className="text-xl md:text-2xl font-serif italic mb-6 leading-relaxed">
              "E quanto mais você ignora... mais difícil fica aliviar depois."
            </p>
            <p className="text-brand-secondary font-bold text-sm sm:text-base md:text-xl uppercase tracking-tight sm:tracking-wider mb-2">A boa notícia é:</p>
            <p className="text-lg md:text-xl leading-relaxed">Existe uma forma simples de aliviar essa tensão sem depender de tratamentos complicados.</p>
          </div>
        </div>
      </Section>

      {/* Solution Presentation */}
      <Section className="bg-white">
        <div className="text-center mb-16 px-4">
          <span className="text-brand-gold font-bold tracking-tighter text-lg md:text-xl mb-2 block uppercase">Apresentamos o:</span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">Método Mandíbula Leve – 7 Dias</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Um programa simples e guiado que te ajuda a recuperar a sensação de leveza com menos de 5 minutos por dia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Reduzir a tensão", desc: "Técnicas específicas para relaxar a musculatura facial.", icon: <Zap className="w-8 h-8" /> },
            { title: "Aliviar a dor", desc: "Exercícios suaves que combatem o desconforto diário.", icon: <CheckCircle2 className="w-8 h-8" /> },
            { title: "Recuperar leveza", desc: "Sinta sua mandíbula solta e relaxada novamente.", icon: <Star className="w-8 h-8" /> }
          ].map((benefit, i) => (
            <div key={i} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-gold/10 text-brand-gold rounded-2xl flex items-center justify-center mx-auto mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it Works */}
      <Section className="bg-brand-bg border-y border-gray-100">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">🧠 Como funciona o método</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-brand-primary" /> Guia (eBook)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Você vai entender o que causa sua tensão, os hábitos que pioram a dor e exatamente como começar a aliviar.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <Smartphone className="w-6 h-6 text-brand-primary" /> Área Prática Interativa
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Acesso a 7 dias de exercícios guiados com progresso passo a passo. É como um "mini app" te guiando todos os dias.
                </p>
              </div>
            </div>
          </div>

          <div className="relative p-8 bg-white rounded-3xl shadow-2xl border border-gray-100">
            <div className="absolute -top-4 -right-4 bg-brand-secondary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              7 DIAS DE PROGRESSO
            </div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <div key={day} className={`flex items-center gap-4 p-3 rounded-xl border ${day === 1 ? 'bg-brand-primary/5 border-brand-primary/20' : 'bg-gray-50 border-gray-100'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${day === 1 ? 'bg-brand-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {day}
                  </div>
                  <div className="flex-grow">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className={`h-full bg-brand-primary ${day === 1 ? 'w-full' : 'w-0'}`} />
                    </div>
                  </div>
                  <div className="text-xs font-bold text-gray-400">DIA {day}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Differential */}
      <Section>
        <div className="bg-brand-primary rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">⚡ Diferente de tudo que você já viu</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center gap-2 sm:gap-3 text-red-300 font-medium text-sm sm:text-base md:text-lg">
                <XCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> Nada complicado
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-red-300 font-medium text-sm sm:text-base md:text-lg">
                <XCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> Nada demorado
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-red-300 font-medium text-sm sm:text-base md:text-lg">
                <XCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> Nada genérico
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 sm:gap-3 text-green-300 font-bold text-sm sm:text-base md:text-lg">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> Método simples
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-green-300 font-bold text-sm sm:text-base md:text-lg">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> Rápido
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-green-300 font-bold text-sm sm:text-base md:text-lg">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> Direto ao ponto
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What you get */}
      <Section className="bg-gray-50">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">🧩 O que você vai receber hoje</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "eBook completo",
                "Acesso ao programa de 7 dias",
                "Exercícios guiados",
                "Sistema de progresso",
                "Acesso imediato",
                "Suporte exclusivo"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <img 
              src="https://i.ibb.co/SXr4VsyW/M-todo-Mand-bula-Leve-Guia-Completo.png" 
              alt="Método Mandíbula Leve Guia Completo" 
              className="w-full h-auto drop-shadow-2xl rounded-3xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Bonus */}
        <div className="mt-12 p-8 bg-brand-secondary/10 rounded-3xl border-2 border-dashed border-brand-secondary">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand-secondary text-white p-2 rounded-lg">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-brand-secondary">BÔNUS EXCLUSIVOS</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Volume2 className="w-10 h-10 text-brand-secondary flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg mb-1">Áudio de relaxamento</h4>
                <p className="text-gray-600 text-sm">Frequências sonoras projetadas para relaxar a musculatura profunda.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Zap className="w-10 h-10 text-brand-secondary flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg mb-1">Protocolo de alívio rápido</h4>
                <p className="text-gray-600 text-sm">O que fazer em crises de dor aguda. Alívio em apenas 3 minutos.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Offer Section */}
      <Section id="offer" className="px-4 py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-secondary/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 rounded-full mb-4 border border-brand-gold/20">
              <Star className="w-4 h-4 text-brand-gold fill-brand-gold" />
              <span className="text-xs font-black text-brand-gold uppercase tracking-[0.2em]">Junte-se a +1.247 pessoas transformadas</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Sua Nova Vida Começa <span className="text-brand-gold">Hoje</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
              Não deixe para amanhã o alívio que você pode ter em poucos minutos.
            </p>
          </div>

          <div className="bg-brand-ink rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] border border-white/10 relative">
            {/* Top Ribbon */}
            <div className="absolute top-12 -right-12 bg-brand-gold text-brand-ink px-12 py-2 font-black text-xs uppercase tracking-[0.2em] transform rotate-45 z-20 shadow-xl">
              Mais Vendido
            </div>

            {/* Urgency Bar */}
            <div className="bg-brand-gold py-3 px-4 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-white/20 animate-[pulse_2s_infinite]" />
              <p className="relative text-brand-ink text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
                ⚠️ ÚLTIMAS VAGAS: O preço subirá para R$ 97,00 em breve
              </p>
            </div>

            <div className="flex flex-col lg:flex-row">
              {/* Left: Content & Value */}
              <div className="flex-1 p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="mb-10">
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    O que você vai <span className="text-brand-gold underline decoration-brand-gold/30 underline-offset-8">receber:</span>
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">Acesso imediato a todo o ecossistema de alívio Mandíbula Leve.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 mb-12">
                  {[
                    { text: "eBook Mandíbula Leve", desc: "O guia mestre de alívio", icon: <BookOpen className="w-5 h-5" /> },
                    { text: "Vídeo-Aulas Práticas", desc: "Execução perfeita", icon: <Play className="w-5 h-5" /> },
                    { text: "Áudio Anti-Bruxismo", desc: "Sono profundo e reparador", icon: <Volume2 className="w-5 h-5" /> },
                    { text: "Checklist de Hábitos", desc: "Sua rotina blindada", icon: <CheckCircle2 className="w-5 h-5" /> }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-ink transition-all shadow-lg">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-white font-bold text-base">{item.text}</p>
                        <p className="text-gray-500 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-8 bg-gradient-to-br from-brand-gold/20 to-transparent rounded-3xl border border-brand-gold/30 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Zap size={80} />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-brand-gold text-brand-ink p-1.5 rounded-lg">
                      <Zap className="w-4 h-4 fill-brand-ink" />
                    </div>
                    <span className="text-brand-gold font-black text-xs uppercase tracking-[0.2em]">Bônus de Ação Rápida</span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">Protocolo SOS Alívio em 3 Minutos</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    A técnica secreta usada por especialistas para destravar a mandíbula instantaneamente em momentos de crise.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 line-through text-sm">Valor: R$ 47,00</span>
                    <span className="text-green-400 font-black text-sm uppercase tracking-widest">Hoje: GRÁTIS</span>
                  </div>
                </div>
              </div>

              {/* Right: Pricing & Action */}
              <div className="w-full lg:w-[450px] p-8 md:p-16 bg-gradient-to-b from-white/[0.05] to-transparent flex flex-col justify-center items-center relative">
                {/* Social Proof Bubble */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-brand-ink px-4 py-2 rounded-2xl shadow-2xl border border-gray-200 flex items-center gap-2 whitespace-nowrap">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-6 h-6 rounded-full border-2 border-white" alt="User" referrerPolicy="no-referrer" />
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-tighter">98% de satisfação dos alunos</span>
                </div>

                <div className="text-center mb-12">
                  <p className="text-gray-500 line-through text-2xl mb-2 font-medium">De R$ 97,00</p>
                  <div className="flex items-start justify-center">
                    <span className="text-3xl font-bold text-white/40 mt-3 mr-1">R$</span>
                    <div className="flex flex-col items-center">
                      <span className="text-[10rem] md:text-[12rem] font-black text-white tracking-tighter leading-[0.8]">29</span>
                      <div className="flex items-center gap-3 -mt-4">
                        <span className="text-4xl font-bold text-white/60">,90</span>
                        <div className="px-3 py-1 bg-green-500 text-white text-xs font-black rounded-full uppercase tracking-widest shadow-lg shadow-green-500/20">
                          70% OFF
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-brand-gold font-black text-xs mt-8 tracking-[0.4em] uppercase">Pagamento Único • Sem Taxas</p>
                </div>

                <div className="w-full space-y-8">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-brand-gold rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <Button 
                      onClick={() => window.open('https://pay.cakto.com.br/3qxvx6z_822860', '_blank')} 
                      pulse 
                      className="relative w-full py-8 text-2xl font-black shadow-2xl transform transition-all hover:scale-[1.03] active:scale-[0.97]"
                    >
                      QUERO MEU ACESSO AGORA
                    </Button>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex flex-col items-center gap-4">
                      <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 rounded-xl border border-white/10">
                        <ShieldCheck className="w-5 h-5 text-green-500" />
                        <span className="text-[11px] text-gray-300 uppercase font-black tracking-[0.15em]">Ambiente 100% Seguro</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-500 text-[10px] text-center uppercase font-bold tracking-widest leading-relaxed">
                      Seu acesso será enviado imediatamente <br /> para o seu e-mail após a confirmação.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Footer */}
            <div className="bg-black/60 border-t border-white/10 py-10 px-8">
              <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
                {[
                  { icon: <Smartphone size={20} />, text: "Acesso Mobile" },
                  { icon: <Zap size={20} />, text: "Entrega Imediata" },
                  { icon: <ShieldCheck size={20} />, text: "Garantia Incondicional" },
                  { icon: <Star size={20} />, text: "Suporte 24/7" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                    <span className="text-brand-gold">{item.icon}</span>
                    <span className="text-xs font-black uppercase tracking-[0.25em]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="mt-20 bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full -mr-16 -mt-16" />
            
            <div className="relative flex-shrink-0">
              <div className="w-40 h-40 bg-brand-gold/10 rounded-full flex items-center justify-center p-4">
                <div className="w-full h-full bg-brand-gold/20 rounded-full border-4 border-brand-gold/30 flex flex-col items-center justify-center relative">
                  <span className="text-5xl font-black text-brand-gold leading-none">7</span>
                  <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">DIAS</span>
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-brand-gold text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-2xl">
                GARANTIA
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 text-brand-ink">Minha Garantia Blindada</h3>
              <p className="text-gray-600 text-lg leading-relaxed italic mb-6">
                "Eu confio tanto no Método Mandíbula Leve que eu tiro todo o risco das suas costas. Se em 7 dias você não sentir que sua mandíbula está mais solta e relaxada, eu te devolvo cada centavo. Sem perguntas, sem letras miúdas."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-brand-gold" />
                </div>
                <p className="text-sm font-bold text-brand-ink uppercase tracking-widest">Sua satisfação ou seu dinheiro de volta</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">💬 O que dizem quem já aplicou o método</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Histórias reais de pessoas que recuperaram a leveza na mandíbula em poucos dias.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Ana Paula",
              age: "34 anos",
              text: "Eu sofria com bruxismo há anos e acordava todos os dias com dor de cabeça e a mandíbula travada. Depois de apenas 4 dias seguindo o Método Mandíbula Leve, a tensão sumiu. Pela primeira vez em muito tempo, acordei descansada e sem dor. É libertador!",
              rating: 5
            },
            {
              name: "Ricardo S.",
              age: "42 anos",
              text: "Os estalos na minha mandíbula eram tão altos que eu tinha vergonha de comer perto das pessoas. O guia é extremamente prático e os exercícios de 5 minutos realmente funcionam. Os estalos diminuíram 90% e a dor ao mastigar desapareceu. Recomendo demais!",
              rating: 5
            },
            {
              name: "Juliana M.",
              age: "29 anos",
              text: "O que mais me surpreendeu foi o Protocolo SOS. Eu trabalho sob muita pressão e sinto a mandíbula travar durante o dia. Aplicar a técnica de 3 minutos me dá um alívio imediato. O áudio de relaxamento também é incrível, durmo muito melhor agora.",
              rating: 5
            },
            {
              name: "Marcos T.",
              age: "38 anos",
              text: "Já tinha tentado de tudo, até placas caras, mas nada resolvia a causa da tensão. Esse método vai direto na raiz do problema. É simples, barato e muito eficiente. Minha qualidade de vida mudou completamente em uma semana.",
              rating: 5
            }
          ].map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 relative"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center font-bold text-brand-gold">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-bold text-brand-ink">{testimonial.name}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{testimonial.age}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-white border-t border-gray-100">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-brand-ink">Dúvidas Frequentes</h2>
          <p className="text-gray-500 text-lg">Tudo o que você precisa saber para começar sua jornada de alívio.</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          <FAQItem 
            question="O Método Mandíbula Leve realmente funciona?" 
            answer="Sim! O método foi desenvolvido com base em técnicas comprovadas de relaxamento muscular e liberação miofascial. Ele ataca a raiz da tensão acumulada nos músculos da mastigação. Milhares de alunos já relataram alívio significativo nos primeiros 7 dias de aplicação consistente." 
          />
          <FAQItem 
            question="Como eu recebo o acesso ao conteúdo?" 
            answer="O acesso é imediato! Assim que seu pagamento for confirmado (o que acontece em segundos no cartão ou Pix), você receberá um e-mail automático com seu login e senha para nossa plataforma exclusiva de membros." 
          />
          <FAQItem 
            question="Preciso comprar algum aparelho ou remédio?" 
            answer="Absolutamente não. O método é 100% natural e focado em exercícios manuais e consciência corporal. Você só precisará das suas mãos e de 5 minutos do seu dia, sem gastos extras com placas ou medicamentos." 
          />
          <FAQItem 
            question="Por quanto tempo terei acesso ao método?" 
            answer="O seu acesso é VITALÍCIO. Isso significa que você paga uma única vez e pode consultar o guia, as aulas e os áudios de relaxamento para sempre, sempre que sentir necessidade de um alívio rápido." 
          />
          <FAQItem 
            question="E se eu não sentir melhora ou não gostar do conteúdo?" 
            answer="Nós removemos todo o risco das suas costas. Você tem uma Garantia Incondicional de 7 dias. Se por qualquer motivo você achar que o método não é para você, basta nos enviar um e-mail e devolveremos 100% do seu dinheiro, sem perguntas." 
          />
          <FAQItem 
            question="Tenho dores muito fortes, posso fazer os exercícios?" 
            answer="Os exercícios são suaves e desenhados para relaxar, não para forçar. No entanto, se você estiver em um pós-operatório recente ou tiver uma condição clínica grave diagnosticada, recomendamos que mostre o guia ao seu dentista ou fisioterapeuta antes de iniciar." 
          />
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-brand-ink text-white/60 text-center text-sm">
        <div className="max-w-4xl mx-auto">
          <p className="mb-6">
            © 2026 Método Mandíbula Leve. Todos os direitos reservados.
          </p>
          <p className="max-w-2xl mx-auto leading-relaxed">
            ⚠️ AVISO FINAL: Este material é educativo e não substitui acompanhamento profissional. Os resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </footer>
    </div>
  );
}

