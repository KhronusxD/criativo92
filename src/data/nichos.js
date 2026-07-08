// Configurações por nicho — sobrescrevem apenas o que muda em relação ao molde /light.
// Campos: meta, hero, cta, casesOrder, deposOrder, diagnostico.
// casesOrder/deposOrder são índices que reordenam os arrays base do SiteLight
// (cases base: 0=Celularis, 1=Rações Fortaleza, 2=Óticas Veja).
// (depos base: 0=Celularis, 1=Rações Fortaleza, 2=Óticas Veja, 3=House Vision,
//              4=iPro, 5=Inforcell, 6=Grill, 7=La Smart, 8=Isabella, 9=UNESCO)

export const nichos = {
  oticas: {
    meta: {
      title: 'Marketing para óticas em Manaus — Criativo 92',
      description: 'Marketing sob medida para óticas: mais clientes na sua região, marca forte e vendas previsíveis. Faça o diagnóstico gratuito.',
    },
    hero: {
      eyebrowFull: 'Marketing para óticas · ',
      eyebrowShort: 'Manaus, AM',
      titleHtml: 'Sua ótica vendendo <span class="accent">mais óculos</span>, sem brigar por preço',
      lead: 'Marketing feito para óticas: atraímos quem quer comprar óculos na sua região, valorizamos sua marca e transformamos a vitrine em fila de clientes.',
      ctaPrimary: 'Fazer diagnóstico gratuito',
      ctaGhost: 'Ver resultados',
      ctaGhostHref: '#cases',
      badges: ['Óticas Veja: R$150k → R$300k/mês', 'House Vision no portfólio'],
    },
    cta: {
      title: 'Pronto pra sua ótica vender mais?',
      lead: 'Faça o diagnóstico gratuito. Em poucos minutos você entende onde estão as oportunidades da sua ótica — e a gente monta o plano.',
    },
    casesOrder: [2, 0, 1],
    deposOrder: [2, 3, 0, 1, 8, 6, 7, 9],
    diagnostico: {
      titulo: 'Diagnóstico gratuito para óticas',
      intro: 'Responda 5 perguntas rápidas e receba um diagnóstico personalizado da sua ótica direto no WhatsApp.',
      perguntas: [
        { q: 'Quantas óticas (lojas) você tem?', opts: ['1 loja', '2 a 4 lojas', '5 lojas ou mais'] },
        { q: 'Qual seu maior desafio hoje?', opts: ['Atrair clientes novos', 'Concorrência brigando por preço', 'Marca pouco conhecida', 'Vender mais pra quem já é cliente'] },
        { q: 'Você já investe em anúncios (Meta/Google)?', opts: ['Não, nunca investi', 'Já tentei, mas sem resultado', 'Sim, invisto todo mês'] },
        { q: 'Qual o faturamento médio por mês?', opts: ['Até R$ 50 mil', 'R$ 50 mil a R$ 150 mil', 'R$ 150 mil a R$ 500 mil', 'Acima de R$ 500 mil'] },
        { q: 'Quando você quer começar?', opts: ['O quanto antes', 'Nos próximos 30 dias', 'Só pesquisando por enquanto'] },
      ],
    },
  },

  petshop: {
    meta: {
      title: 'Marketing para pet shops em Manaus — Criativo 92',
      description: 'Marketing para pet shops, clínicas veterinárias e indústria pet: mais tutores na sua loja e vendas previsíveis. Diagnóstico gratuito.',
    },
    hero: {
      eyebrowFull: 'Marketing para o mercado pet · ',
      eyebrowShort: 'Manaus, AM',
      titleHtml: 'Mais tutores na sua loja, <span class="accent">mais vendas</span> no balcão',
      lead: 'Marketing para pet shops, clínicas e indústria pet: do anúncio ao balcão, atraímos tutores da sua região prontos pra comprar.',
      ctaPrimary: 'Fazer diagnóstico gratuito',
      ctaGhost: 'Ver resultados',
      ctaGhostHref: '#cases',
      badges: ['Rações Fortaleza: R$2,5k → R$65k/mês', 'Especialistas em varejo pet'],
    },
    cta: {
      title: 'Pronto pra lotar seu pet shop?',
      lead: 'Faça o diagnóstico gratuito. Em poucos minutos você descobre onde estão as oportunidades do seu negócio pet — e a gente monta o plano.',
    },
    casesOrder: [1, 0, 2],
    deposOrder: [1, 0, 2, 3, 6, 8, 7, 9],
    diagnostico: {
      titulo: 'Diagnóstico gratuito para o mercado pet',
      intro: 'Responda 5 perguntas rápidas e receba um diagnóstico personalizado do seu negócio pet direto no WhatsApp.',
      perguntas: [
        { q: 'Qual é o seu negócio?', opts: ['Pet shop', 'Clínica veterinária', 'Indústria / distribuidora', 'Banho e tosa'] },
        { q: 'Qual seu maior desafio hoje?', opts: ['Atrair clientes novos', 'Concorrência brigando por preço', 'Marca pouco conhecida', 'Fidelizar e aumentar a recompra'] },
        { q: 'Você já investe em anúncios (Meta/Google)?', opts: ['Não, nunca investi', 'Já tentei, mas sem resultado', 'Sim, invisto todo mês'] },
        { q: 'Qual o faturamento médio por mês?', opts: ['Até R$ 30 mil', 'R$ 30 mil a R$ 100 mil', 'R$ 100 mil a R$ 300 mil', 'Acima de R$ 300 mil'] },
        { q: 'Quando você quer começar?', opts: ['O quanto antes', 'Nos próximos 30 dias', 'Só pesquisando por enquanto'] },
      ],
    },
  },

  celulares: {
    meta: {
      title: 'Marketing para lojas de celular em Manaus — Criativo 92',
      description: 'Marketing para lojas de celular e assistências: mais compradores na sua região, loja por loja. Diagnóstico gratuito.',
    },
    hero: {
      eyebrowFull: 'Marketing para lojas de celular · ',
      eyebrowShort: 'Manaus, AM',
      titleHtml: 'Transforme cada loja numa <span class="accent">máquina de vendas</span>',
      lead: 'Marketing para lojas de celular e assistências técnicas: atraímos compradores da sua região e enchemos o balcão, loja por loja.',
      ctaPrimary: 'Fazer diagnóstico gratuito',
      ctaGhost: 'Ver resultados',
      ctaGhostHref: '#cases',
      badges: ['Celularis: R$1,5k → R$50k/mês por loja', '9 lojas escaladas'],
    },
    cta: {
      title: 'Pronto pra escalar suas lojas?',
      lead: 'Faça o diagnóstico gratuito. Em poucos minutos você entende o potencial de cada loja — e a gente monta o plano pra escalar.',
    },
    casesOrder: [0, 1, 2],
    deposOrder: [0, 4, 5, 1, 2, 6, 7, 9],
    diagnostico: {
      titulo: 'Diagnóstico gratuito para lojas de celular',
      intro: 'Responda 5 perguntas rápidas e receba um diagnóstico personalizado da sua operação direto no WhatsApp.',
      perguntas: [
        { q: 'Quantas lojas você tem?', opts: ['1 loja', '2 a 5 lojas', '6 lojas ou mais'] },
        { q: 'Com o que você trabalha?', opts: ['Venda de aparelhos', 'Assistência técnica', 'Acessórios', 'Todos os anteriores'] },
        { q: 'Qual seu maior desafio hoje?', opts: ['Atrair clientes novos', 'Concorrência brigando por preço', 'Marca pouco conhecida', 'Vender mais por loja'] },
        { q: 'Você já investe em anúncios (Meta/Google)?', opts: ['Não, nunca investi', 'Já tentei, mas sem resultado', 'Sim, invisto todo mês'] },
        { q: 'Qual o faturamento médio por mês?', opts: ['Até R$ 50 mil', 'R$ 50 mil a R$ 200 mil', 'R$ 200 mil a R$ 1 milhão', 'Acima de R$ 1 milhão'] },
      ],
    },
  },
};
