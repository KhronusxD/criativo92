import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Calendar, AlertTriangle, ArrowRight, Download, CheckCircle } from 'lucide-react';
import { DiagnosisResult, LeadData } from '../types';

interface ResultsProps {
  result: DiagnosisResult;
  leadData: LeadData;
}

const Results: React.FC<ResultsProps> = ({ result, leadData }) => {
  // Chart Data for Gauge
  const data = [
    { name: 'Score', value: result.score, color: result.score > 70 ? '#00E676' : result.score > 40 ? '#fbbf24' : '#ef4444' }, // #00E676 is c92.DEFAULT
    { name: 'Remaining', value: 100 - result.score, color: '#27272a' }, // zinc-800
  ];

  return (
    <div className="flex flex-col items-center justify-center p-6 w-full max-w-5xl mx-auto text-white">
      <div className="w-full">
        <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
          <div>
            <p className="text-zinc-400 text-sm uppercase tracking-wider mb-1">Relatório Gerado para</p>
            <h1 className="text-2xl font-display font-bold text-white max-w-lg truncate">{leadData.name} <span className="text-zinc-500 font-normal text-sm">| {leadData.website || "Website não informado"}</span></h1>
          </div>
          <div className="flex items-center gap-2 bg-c92/10 border border-c92/20 px-4 py-2 rounded-lg">
            <CheckCircle className="w-5 h-5 text-c92" />
            <span className="text-c92 text-sm font-medium">Análise Finalizada</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
          {/* Score Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden"
          >
            <h3 className="text-zinc-400 font-medium mb-4">Saúde Digital</h3>
            <div className="w-full h-[180px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="100%"
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={0}
                    dataKey="value"
                    stroke="none"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center pb-2">
                <span className={`text-4xl font-bold ${result.score > 70 ? 'text-c92' : 'text-amber-400'}`}>
                  {result.score}%
                </span>
              </div>
            </div>
            <p className={`mt-2 text-sm font-medium px-3 py-1 rounded-full ${result.score > 70 ? 'bg-c92/10 text-c92' : 'bg-amber-500/10 text-amber-400'}`}>
              {result.score > 70 ? "Bom Potencial" : "Atenção Requerida"}
            </p>
          </motion.div>

          {/* Verdict Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 relative"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <AlertTriangle className="w-32 h-32 text-red-500" />
            </div>

            <div className="relative z-10">
              <h3 className="text-red-400 font-bold uppercase tracking-wide text-sm mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" /> Ponto Crítico Identificado
              </h3>
              <h2 className="text-3xl font-display font-bold text-white mb-4">
                O Veredito: <span className="text-white border-b-2 border-red-500/50">{result.verdictTitle}</span>
              </h2>
              <p className="text-zinc-300 leading-relaxed text-lg mb-6">
                {result.verdictDescription}
              </p>

              <div className="bg-zinc-950/50 border border-zinc-700 rounded-lg p-4 flex gap-4 items-start">
                <div className="p-2 bg-red-500/10 rounded-md">
                  <Download className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Perda Estimada</h4>
                  <p className="text-sm text-zinc-400">Com base nas suas respostas, estima-se que você esteja desperdiçando cerca de <span className="text-white font-bold">40% da sua verba</span> nesta etapa.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-c92/5 to-zinc-900 border border-c92/30 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-c92 to-transparent opacity-50"></div>

          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Plano de Recuperação Personalizado
          </h2>
          <p className="text-zinc-300 max-w-2xl mx-auto mb-8">
            O relatório completo foi enviado para <b>{leadData.email}</b>. Mas, como detectamos um erro crítico de <span className="text-white font-semibold underline decoration-c92">{result.category}</span>, abrimos uma vaga extra na agenda do nosso estrategista sênior.
          </p>

          <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black transition-all duration-200 bg-c92 rounded-xl hover:bg-c92/90 shadow-[0_0_30px_rgba(0,230,118,0.3)] hover:scale-105 group">
            <Calendar className="mr-2 w-5 h-5" />
            AGENDAR SESSÃO DE IMPLEMENTAÇÃO (GRATUITO)
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="mt-4 text-xs text-zinc-500">Vaga reservada por 15 minutos.</p>
        </motion.div>

        <footer className="mt-12 text-center text-zinc-600 text-sm">
          <p>&copy; {new Date().getFullYear()} C92 Aceleradora. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

export default Results;