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
  <section id={id} className={`py-16 px-6 md:py-24 ${className}`}>
    <div className="max-w-4xl mx-auto">
      {children}
    </div>
  </section>
);

const Button = ({ children, className = "", primary = true, onClick, pulse = false }: { children: React.ReactNode, className?: string, primary?: boolean, onClick?: () => void, pulse?: boolean }) => (
  <motion.button 
    onClick={onClick}
    animate={pulse ? { scale: [1, 1.02, 1] } : {}}
    transition={pulse ? { duration: 2, repeat: Infinity } : {}}
    className={`
      px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg cursor-pointer
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-brand-ink">
              Método pouco conhecido para aliviar a <span className="text-brand-gold italic">dor na mandíbula</span> em até 7 dias
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 font-light italic">
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

            <Button onClick={scrollToOffer} className="w-full md:w-auto bg-brand-gold hover:bg-opacity-90">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Se você...</h2>
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
            <p className="text-brand-secondary font-bold text-lg md:text-xl uppercase tracking-widest mb-2">A boa notícia é:</p>
            <p className="text-lg md:text-xl leading-relaxed">Existe uma forma simples de aliviar essa tensão sem depender de tratamentos complicados.</p>
          </div>
        </div>
      </Section>

      {/* Solution Presentation */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold tracking-tighter text-xl mb-2 block">Apresentamos o:</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Método Mandíbula Leve – 7 Dias</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">🧠 Como funciona o método</h2>
        
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
        <div className="bg-brand-primary rounded-[3rem] p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">⚡ Diferente de tudo que você já viu</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-red-300 font-medium">
                <XCircle className="w-5 h-5" /> Nada complicado
              </div>
              <div className="flex items-center gap-3 text-red-300 font-medium">
                <XCircle className="w-5 h-5" /> Nada demorado
              </div>
              <div className="flex items-center gap-3 text-red-300 font-medium">
                <XCircle className="w-5 h-5" /> Nada genérico
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-green-300 font-bold">
                <CheckCircle2 className="w-5 h-5" /> Método simples
              </div>
              <div className="flex items-center gap-3 text-green-300 font-bold">
                <CheckCircle2 className="w-5 h-5" /> Rápido
              </div>
              <div className="flex items-center gap-3 text-green-300 font-bold">
                <CheckCircle2 className="w-5 h-5" /> Direto ao ponto
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What you get */}
      <Section className="bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">🧩 O que você vai receber hoje</h2>
        
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
      <Section id="offer" className="text-center px-4">
        <div className="max-w-xl mx-auto bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden">
          {/* Top Banner */}
          <div className="bg-brand-ink text-white py-4 px-6">
            <p className="text-xs font-bold tracking-[0.2em] uppercase opacity-70 mb-1">Oferta Exclusiva</p>
            <h2 className="text-2xl font-bold">Método Mandíbula Leve</h2>
          </div>

          <div className="p-8 md:p-12">
            {/* Price Tag */}
            <div className="mb-10 relative inline-block">
              <div className="absolute -top-6 -right-12 bg-red-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg animate-bounce">
                60% OFF
              </div>
              <p className="text-gray-400 line-through text-xl mb-1">De R$47</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-2xl font-bold text-brand-ink">R$</span>
                <span className="text-7xl font-black text-brand-ink tracking-tighter">19</span>
              </div>
              <p className="text-brand-gold font-bold text-sm mt-2">PAGAMENTO ÚNICO</p>
            </div>

            {/* Value List */}
            <div className="space-y-4 mb-10 text-left bg-gray-50 p-6 rounded-2xl border border-gray-100">
              {[
                "eBook Completo (Guia de Alívio)",
                "Programa de 7 Dias de Exercícios",
                "Áudio de Relaxamento Profundo",
                "Protocolo de Alívio Rápido (3 min)",
                "Acesso Vitalício e Imediato"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-brand-gold/20 p-1 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <Button 
                onClick={() => alert('Redirecionando para checkout...')} 
                pulse 
                className="w-full py-5 text-xl shadow-[0_10px_30px_rgba(197,160,89,0.3)]"
              >
                QUERO MEU ACESSO AGORA
              </Button>
              <p className="text-xs text-gray-400 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-500" /> 
                Ambiente seguro e criptografado
              </p>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-between gap-2">
              <div className="flex flex-col items-center gap-1 opacity-40 grayscale hover:grayscale-0 transition-all cursor-default">
                <Smartphone className="w-5 h-5" />
                <span className="text-[8px] uppercase font-black tracking-widest">Mobile</span>
              </div>
              <div className="flex flex-col items-center gap-1 opacity-40 grayscale hover:grayscale-0 transition-all cursor-default">
                <Zap className="w-5 h-5" />
                <span className="text-[8px] uppercase font-black tracking-widest">Imediato</span>
              </div>
              <div className="flex flex-col items-center gap-1 opacity-40 grayscale hover:grayscale-0 transition-all cursor-default">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-[8px] uppercase font-black tracking-widest">Seguro</span>
              </div>
              <div className="flex flex-col items-center gap-1 opacity-40 grayscale hover:grayscale-0 transition-all cursor-default">
                <Clock className="w-5 h-5" />
                <span className="text-[8px] uppercase font-black tracking-widest">Vitalício</span>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-12 flex flex-col items-center">
          <div className="w-28 h-28 mb-6 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-brand-gold/10 rounded-full animate-pulse" />
            <div className="w-24 h-24 bg-brand-gold/20 rounded-full border-4 border-brand-gold/30 flex flex-col items-center justify-center relative z-10">
              <span className="text-3xl font-black text-brand-gold leading-none">7</span>
              <span className="text-[10px] font-bold text-brand-gold uppercase tracking-tighter">DIAS</span>
            </div>
            <div className="absolute -bottom-1 bg-brand-gold text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest z-20 shadow-lg">
              Garantia
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">Garantia Incondicional de 7 Dias</h3>
          <p className="text-gray-600 max-w-md italic">
            "Se não gostar, é só pedir reembolso. Sem perguntas. O risco é todo meu."
          </p>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">💬 O que dizem quem já aplicou o método</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Histórias reais de pessoas que recuperaram a leveza na mandíbula em poucos dias.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Ana Paula",
              age: "34 anos",
              text: "Finalmente consegui dormir sem acordar com a boca travada. Os exercícios são simples e mudaram meu dia a dia. Sinto um alívio que não sentia há anos!",
              rating: 5
            },
            {
              name: "Ricardo S.",
              age: "42 anos",
              text: "Sempre tive estalos ao comer, e em menos de uma semana seguindo o método, o barulho diminuiu muito. Recomendo para quem sofre com DTM!",
              rating: 5
            },
            {
              name: "Juliana M.",
              age: "29 anos",
              text: "O guia é direto ao ponto. O áudio de relaxamento é maravilhoso para usar antes de dormir. Vale cada centavo!",
              rating: 5
            },
            {
              name: "Marcos T.",
              age: "38 anos",
              text: "Trabalho o dia todo no computador e a tensão na mandíbula era constante. Com o protocolo de 3 minutos, sinto alívio imediato durante o trabalho.",
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
      <Section className="bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">❓ Perguntas Frequentes</h2>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <FAQItem 
            question="Funciona mesmo?" 
            answer="Sim! O método é baseado em exercícios de relaxamento e alongamento miofascial que são amplamente utilizados para alívio de DTM. A chave é a constância na aplicação diária." 
          />
          <FAQItem 
            question="Preciso de algum equipamento especial?" 
            answer="Não. Tudo o que você precisa é das suas mãos e alguns minutos do seu dia. Todos os exercícios podem ser feitos confortavelmente em casa." 
          />
          <FAQItem 
            question="Quanto tempo preciso dedicar por dia?" 
            answer="Menos de 5 minutos. O programa foi desenhado para ser rápido e direto ao ponto, perfeito para quem tem uma rotina corrida." 
          />
          <FAQItem 
            question="Serve para qualquer pessoa?" 
            answer="Sim, o método é seguro para a maioria das pessoas. No entanto, se você tiver condições graves, cirurgias recentes na face ou dor extrema, recomendamos consultar um profissional de saúde antes de iniciar." 
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

