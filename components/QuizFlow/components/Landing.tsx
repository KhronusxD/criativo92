import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, BarChart3, FileText, ArrowRight } from 'lucide-react';
import { TOOL_LOGOS } from '../constants';

interface LandingProps {
  onStart: () => void;
}

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden bg-navy-950 text-white">
      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-green/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full text-center z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-medium text-brand-green mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
          </span>
          AUDITORIA DE LUCRO INVISÍVEL &trade;
        </div>

        <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
          Descubra quanto dinheiro sua empresa <span className="text-white border-b-4 border-brand-red/60">deixa na mesa</span> todos os meses.
        </h1>

        <h2 className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Uma auditoria digital gratuita, baseada em dados de <span className="text-white font-semibold">+150 projetos</span>, que identifica exatamente onde está o gargalo do seu crescimento.
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-10">
          {[
            { icon: ClockIcon, text: "Diagnóstico em 2 minutos" },
            { icon: BarChart3, text: "Análise de Tráfego & Vendas" },
            { icon: FileText, text: "Plano de Correção Imediata" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-slate-900/50 border border-slate-800 px-4 py-2 rounded-lg backdrop-blur-sm">
              <item.icon className="w-4 h-4 text-brand-green" />
              <span className="text-sm font-medium text-slate-200">{item.text}</span>
            </div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-navy-950 transition-all duration-200 bg-brand-green rounded-xl hover:bg-brand-greenLight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green focus:ring-offset-navy-900 w-full md:w-auto shadow-[0_0_20px_rgba(16,185,129,0.3)]"
        >
          INICIAR AUDITORIA DE LUCRO
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>

      <div className="absolute bottom-6 left-0 w-full text-center">
        <p className="text-xs text-slate-600 mb-3 uppercase tracking-wider font-semibold">Tecnologias Analisadas</p>
        <div className="flex justify-center gap-6 opacity-30 grayscale mix-blend-screen">
            {TOOL_LOGOS.map((logo, i) => (
               <span key={i} className="text-sm font-bold font-display">{logo}</span>
            ))}
        </div>
      </div>
    </div>
  );
};

const ClockIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

export default Landing;