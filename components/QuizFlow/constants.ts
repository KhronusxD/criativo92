import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    category: "O Contexto",
    text: "Qual modelo de negócio melhor define sua operação com Celulares hoje?",
    options: [
      { id: 'store', label: "Loja Física (Rua ou Shopping)", value: "loja_fisica" },
      { id: 'online', label: "Loja 100% Online (Instagram/Site)", value: "online" },
      { id: 'tech', label: "Assistência Técnica + Venda de Aparelhos", value: "assistencia" },
      { id: 'office', label: "Escritório / Showroom (Atendimento Agendado)", value: "escritorio" },
    ]
  },
  {
    id: 2,
    category: "O Volume",
    text: "Qual é a sua média mensal de faturamento bruto atual?",
    options: [
      { id: 'start', label: "Até R$ 30.000 / mês", value: "iniciante", scoreImpact: 5 },
      { id: 'grow', label: "De R$ 30.000 a R$ 80.000 / mês", value: "crescimento", scoreImpact: 15 },
      { id: 'scale', label: "De R$ 80.000 a R$ 200.000 / mês", value: "escala", scoreImpact: 25 },
      { id: 'pro', label: "Acima de R$ 200.000 / mês", value: "pro", scoreImpact: 35 },
    ]
  },
  {
    id: 3,
    category: "O Gargalo",
    text: "O que mais te impede de vender mais iPhones/Xiaomis hoje?",
    options: [
      { id: 'stock', label: "Estoque parado (Aparelhos não giram)", value: "estoque", scoreImpact: 10 },
      { id: 'leads', label: "Pouca gente chamando no WhatsApp (Tráfego)", value: "trafego", scoreImpact: 20 },
      { id: 'sales', label: "Muita gente chama, mas poucos compram (Fechamento)", value: "vendas", scoreImpact: 15 },
      { id: 'margin', label: "Margem de lucro muito baixa (Concorrência)", value: "margem", scoreImpact: 5 },
    ]
  },
  {
    id: 4,
    category: "O Tráfego",
    text: "Como você investe em anúncios (Tráfego Pago) hoje?",
    options: [
      { id: 'none', label: "Não invisto, dependo 100% do orgânico", value: "nenhum", scoreImpact: 0 },
      { id: 'boost', label: "Apenas impulsiono posts no Instagram", value: "basico", scoreImpact: 10 },
      { id: 'manager', label: "Tenho um gestor/agência, mas o resultado é ruim", value: "intermediario", scoreImpact: 15 },
      { id: 'pro', label: "Invisto forte e tenho bom retorno (ROI positivo)", value: "avancado", scoreImpact: 30 },
    ]
  },
  {
    id: 5,
    category: "A Equipe",
    text: "Quem é responsável por responder os clientes hoje?",
    options: [
      { id: 'solo', label: "Eu mesmo(a) faço tudo (Compro, vendo, posto)", value: "euquipe", scoreImpact: 5 },
      { id: 'team', label: "Tenho vendedores, mas eles perdem muita venda", value: "equipe_fraca", scoreImpact: 10 },
      { id: 'pro_team', label: "Tenho um time comercial treinado e agressivo", value: "equipe_forte", scoreImpact: 25 },
      { id: 'bot', label: "Uso automação/robô para atender", value: "automacao", scoreImpact: 15 },
    ]
  }
];

export const TOOL_LOGOS = [
  "Apple",
  "Xiaomi",
  "Samsung",
  "Instagram",
  "WhatsApp"
];