import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Database, Server, Lock } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [status, setStatus] = useState("Conectando aos servidores...");

  useEffect(() => {
    const sequence = [
      { text: "Analisando perfil de tráfego...", time: 800 },
      { text: "Calculando projeção de perda...", time: 1600 },
      { text: "Gerando plano de correção...", time: 2400 },
      { text: "Finalizando auditoria...", time: 3000 }
    ];

    sequence.forEach(({ text, time }) => {
      setTimeout(() => setStatus(text), time);
    });

    const timer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center p-4 text-center w-full min-h-[400px]">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-c92/20 rounded-full blur-xl animate-pulse"></div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <RefreshCw className="w-16 h-16 text-c92" />
        </motion.div>
      </div>

      <h2 className="text-2xl font-bold font-display text-white mb-2">Processando Análise...</h2>
      <p className="text-zinc-400 font-mono text-sm h-6">{status}</p>

      <div className="mt-12 grid grid-cols-3 gap-8 opacity-50">
        <div className="flex flex-col items-center gap-2">
          <Database className="w-6 h-6 text-zinc-500" />
          <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Dados</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Server className="w-6 h-6 text-zinc-500" />
          <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Algoritmo</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Lock className="w-6 h-6 text-zinc-500" />
          <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Seguro</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;