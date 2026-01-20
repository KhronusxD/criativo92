import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LeadData } from '../types';
import { Lock, Send, CheckCircle } from 'lucide-react';

interface LeadFormProps {
  onSubmit: (data: LeadData) => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<LeadData>({
    name: '',
    email: '',
    whatsapp: '',
    website: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call delay
    setTimeout(() => {
      onSubmit(formData);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center p-4 w-full relative overflow-hidden">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl z-10 relative">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-c92 shadow-[0_0_20px_rgba(0,230,118,0.8)] rounded-full"></div>

        <div className="text-center mb-8 mt-4">
          <div className="inline-flex items-center gap-2 text-c92 mb-4 bg-c92/10 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
            <CheckCircle className="w-3 h-3" /> Análise Concluída
          </div>
          <h2 className="text-2xl font-display font-bold text-white mb-2">Sua Auditoria está pronta.</h2>
          <p className="text-zinc-400 text-sm">
            Identificamos <span className="text-red-400 font-semibold">3 pontos críticos</span>. Informe onde devemos enviar o relatório completo e o Plano de Recuperação.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-zinc-500 mb-1 ml-1">NOME COMPLETO</label>
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-zinc-950 border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-c92 focus:ring-1 focus:ring-c92 transition-all placeholder-zinc-600"
              placeholder="Ex: João Silva"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-medium text-zinc-500 mb-1 ml-1">E-MAIL CORPORATIVO</label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-zinc-950 border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-c92 focus:ring-1 focus:ring-c92 transition-all placeholder-zinc-600"
              placeholder="joao@empresa.com.br"
            />
          </div>

          <div>
            <label htmlFor="whatsapp" className="block text-xs font-medium text-zinc-500 mb-1 ml-1">WHATSAPP</label>
            <input
              required
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full bg-zinc-950 border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-c92 focus:ring-1 focus:ring-c92 transition-all placeholder-zinc-600"
              placeholder="Para envio rápido do plano"
            />
          </div>

          <div>
            <label htmlFor="website" className="block text-xs font-medium text-zinc-500 mb-1 ml-1">SITE DA EMPRESA</label>
            <input
              required
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full bg-zinc-950 border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-c92 focus:ring-1 focus:ring-c92 transition-all placeholder-zinc-600"
              placeholder="www.suaempresa.com.br"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-c92 hover:bg-c92/90 text-black font-bold py-4 rounded-lg shadow-lg shadow-c92/20 transition-all flex items-center justify-center gap-2 mt-6"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin h-4 w-4 border-2 border-black border-t-transparent rounded-full" /> Processando...
              </span>
            ) : (
              <>
                LIBERAR MEU DIAGNÓSTICO AGORA <Lock className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </form>

        <p className="text-center text-xs text-zinc-600 mt-6 flex items-center justify-center gap-1">
          <Lock className="w-3 h-3" /> Seus dados estão protegidos e não enviamos spam.
        </p>
      </div>
    </div>
  );
};

export default LeadForm;