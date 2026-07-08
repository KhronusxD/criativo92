// Configurações por nicho — sobrescrevem apenas o que muda em relação ao molde /light.
// Campos: meta, hero, cta, casesOrder, deposOrder, diagUrl, estrategias, crencas.
// casesOrder/deposOrder são índices que reordenam os arrays base do SiteLight
// (cases base: 0=Celularis, 1=Rações Fortaleza, 2=Óticas Veja).
// (depos base: 0=Celularis, 1=Rações Fortaleza, 2=Óticas Veja, 3=House Vision,
//              4=iPro, 5=Inforcell, 6=Grill, 7=La Smart, 8=Isabella, 9=UNESCO)
// Conteúdo de crenças/estratégias baseado em pesquisa de mercado (Abióptica, Abinpet,
// CFMV 1.649/2025, benchmarks de busca local Google).

export const nichos = {
  oticas: {
    meta: {
      title: 'Marketing para óticas em Manaus — Criativo 92',
      description: 'Marketing sob medida para óticas: mais clientes na sua região, marca forte e vendas previsíveis. Faça o diagnóstico gratuito.',
    },
    diagUrl: '/diagnostico/oticas',
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
      lead: 'Faça o diagnóstico gratuito. Em poucos minutos você entende onde estão as oportunidades da sua ótica e a gente monta o plano.',
    },
    casesOrder: [2, 0, 1],
    deposOrder: [2, 3, 0, 1, 8, 6, 7, 9],
    estrategias: {
      titulo: 'O que faz ótica vender mais, na prática.',
      lead: 'Nada de fórmula genérica. Estas são as alavancas validadas no varejo óptico brasileiro:',
      itens: [
        { t: 'Exame de vista como porta de entrada', d: 'Toda venda de óculos de grau começa num exame. Campanha local ofertando avaliação, com agendamento pelo WhatsApp: quem faz o exame com você compra com você. É a promoção número 1 do setor há décadas, o digital só barateia a distribuição.' },
        { t: 'Dominar o Google do seu bairro', d: '76% de quem busca "ótica perto de mim" visita uma loja em até 24 horas. Perfil no Maps completo, avaliações e anúncio local na hora exata em que a pessoa sai do oftalmologista com a receita na mão.' },
        { t: 'Reativar a carteira no ciclo de troca', d: 'Óculos se troca a cada 2 ou 3 anos, e boa parte da sua carteira está com o óculos vencido agora. Lembrete no WhatsApp aos 18-24 meses e remarketing: vender pra quem já comprou custa uma fração de captar cliente novo.' },
        { t: 'Convênios com empresas da região', d: 'Parceria B2B com empresas, escolas e sindicatos: desconto pro funcionário, divulgação interna feita pelo parceiro. Fluxo previsível de clientes pré-vendidos com custo de aquisição quase zero.' },
      ],
    },
    crencas: {
      titulo: 'O que talvez você esteja pensando.',
      lead: 'Objeções que todo dono de ótica tem. Respondidas sem enrolação.',
      itens: [
        { crenca: 'Meu cliente compra por indicação, não por Instagram.', resposta: 'A indicação continua fechando a venda, mas hoje ela começa no Google: 76% de quem pesquisa "ótica perto de mim" visita uma loja em até 24 horas. O anúncio não substitui o boca a boca, ele multiplica: coloca sua ótica na frente de quem acabou de sair do oftalmologista com a receita na mão. Se você não aparece, o concorrente aparece.' },
        { crenca: 'Já impulsionei post e não deu nada. Anúncio é dinheiro queimado.', resposta: 'Impulsionar post otimiza pra curtida, não pra cliente na loja. Campanha de verdade captura quem busca "óculos de grau" na sua cidade e anuncia num raio de 3 a 5 km. Com ticket de R$ 250 a R$ 1.000 e margem de 30 a 60% em lentes, bastam 4 ou 5 clientes por mês pra campanha se pagar.' },
        { crenca: 'Óculos a pessoa precisa provar no rosto. Internet não vende isso.', resposta: 'Exato, e o anúncio não tenta vender online: ele traz a pessoa pra provar na SUA loja em vez de na do concorrente. A meta da campanha é exame agendado e visita, não e-commerce. O cliente já pesquisa modelo, preço e reputação no celular antes de entrar em qualquer loja.' },
        { crenca: 'Meu público é mais velho, não fica em rede social.', resposta: 'O público 50+ é um dos que mais crescem no Facebook e domina o WhatsApp. Quem compra multifocal, o produto de maior margem da ótica, está exatamente nessa faixa. E quem paga o óculos dos pais está no Instagram.' },
        { crenca: 'Não dá pra competir com as redes grandes.', resposta: 'A briga do anúncio local não é por verba nacional, é por um raio de 5 km. No Google Maps, uma ótica de bairro com perfil completo e avaliações aparece acima da rede grande pra quem busca perto. A rede nacional não faz campanha pro seu bairro. Você faz.' },
        { crenca: 'Já contratei agência e não funcionou.', resposta: 'A gente escuta isso toda semana, e o erro quase sempre é o mesmo: campanha de curtida, sem oferta e sem meta em reais. Exija da próxima: custo por exame agendado, campanha amarrada no WhatsApp e relatório de vendas, não de alcance. É exatamente assim que a gente trabalha.' },
      ],
    },
  },

  petshop: {
    meta: {
      title: 'Marketing para pet shops em Manaus — Criativo 92',
      description: 'Marketing para pet shops, clínicas veterinárias e indústria pet: mais tutores na sua loja e vendas previsíveis. Diagnóstico gratuito.',
    },
    diagUrl: '/diagnostico/petshop',
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
      lead: 'Faça o diagnóstico gratuito. Em poucos minutos você descobre onde estão as oportunidades do seu negócio pet e a gente monta o plano.',
    },
    casesOrder: [1, 0, 2],
    deposOrder: [1, 0, 2, 3, 6, 8, 7, 9],
    estrategias: {
      titulo: 'O que enche pet shop, na prática.',
      lead: 'O mercado pet fatura R$ 77 bilhões por ano no Brasil. Estas são as alavancas de quem cresce nele:',
      itens: [
        { t: 'Banho e tosa como porta de entrada', d: 'É o serviço de maior frequência do negócio: o cliente volta de 12 a 24 vezes por ano. Anúncio local com oferta de primeiro banho traz o tutor pra dentro, e cada visita vira ração, antipulgas e consulta.' },
        { t: 'Lembretes de vacina e banho no WhatsApp', d: 'Ração acaba a cada 30 dias, vacina tem data, banho é quinzenal. Quem ativa a base com lembrete na hora certa tem recompra até 3x maior do que quem espera o tutor lembrar sozinho. E não é spam: é cuidado com o pet.' },
        { t: 'Anúncio por raio de bairro', d: '60% dos tutores escolhem pet shop pela proximidade. Anúncio geossegmentado num raio de 3 km fala só com o seu bairro, incluindo cada família nova que se muda e escolhe um pet shop nas primeiras semanas.' },
        { t: 'Recorrência de ração e plano de banho', d: 'Alimentos são metade do faturamento do setor e a demanda já é recorrente. Plano mensal de ração entregue em casa ou pacote de banhos gera receita previsível e blinda seu cliente contra as redes grandes.' },
      ],
    },
    crencas: {
      titulo: 'O que talvez você esteja pensando.',
      lead: 'Objeções que todo dono de negócio pet tem. Respondidas sem enrolação.',
      itens: [
        { crenca: 'Tutor não escolhe pet shop por anúncio, escolhe pelo que é perto.', resposta: 'Verdade: 60% escolhem pela proximidade. E é exatamente isso que o anúncio explora, aparecendo só pra quem mora no seu raio de 3 km. Cada família que se muda pro bairro escolhe um pet shop nas primeiras semanas. Quem aparece leva um cliente que compra ração todo mês por anos.' },
        { crenca: 'Não tenho como competir com Petz e Cobasi.', resposta: 'Em preço de ração premium, não mesmo. Mas pequenos e médios ainda são quase metade do faturamento do setor. Sua arma é o que não escala: banho e tosa de confiança, atendimento que conhece o pet pelo nome, entrega rápida no bairro. O serviço traz o tutor; a recorrência de produto vem junto.' },
        { crenca: 'Já impulsionei foto de pet, deu like e nenhum cliente.', resposta: 'Like em pet é o engajamento mais barato da internet, e o mais inútil sem oferta e destino. O que converte é anúncio com oferta de entrada (primeiro banho com desconto, check-up com vacina) caindo direto no seu WhatsApp, num raio curto. O erro não foi anunciar; foi anunciar bonitinho sem pedir nada.' },
        { crenca: 'Banho e tosa dá pouco lucro, não vale anunciar.', resposta: 'Banho e tosa não é o lucro, é a esteira. O cliente entra na sua loja de 12 a 24 vezes por ano, e cada visita é oportunidade de ração, antipulgas e consulta. Anunciar banho é comprar um cliente de recorrência mensal pelo preço de um serviço avulso.' },
        { crenca: 'Sou veterinário, o conselho não deixa anunciar.', resposta: 'Isso mudou oficialmente em 2025: a Resolução 1.649 do CFMV liberou divulgar preço de consulta, formas de pagamento, especialidades e conteúdo educativo. Quem continua operando com a regra antiga está perdendo pra clínica vizinha que leu a resolução nova.' },
        { crenca: 'Marketing é custo que não cabe no meu momento.', resposta: 'Seu custo fixo (aluguel, banhista, veterinário) roda igual com agenda cheia ou vazia. Anúncio local pra ocupar horário ocioso de banho e consulta não é custo novo: é ocupação de capacidade que você já paga. E o setor pet cresce até em ano de crise.' },
      ],
    },
  },

  celulares: {
    meta: {
      title: 'Marketing para lojas de celular em Manaus — Criativo 92',
      description: 'Marketing para lojas de celular e assistências: mais compradores na sua região, loja por loja. Diagnóstico gratuito.',
    },
    diagUrl: '/diagnostico/celulares',
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
      lead: 'Faça o diagnóstico gratuito. Em poucos minutos você entende o potencial de cada loja e a gente monta o plano pra escalar.',
    },
    casesOrder: [0, 1, 2],
    deposOrder: [0, 4, 5, 1, 2, 6, 7, 9],
    estrategias: {
      titulo: 'O que enche loja de celular, na prática.',
      lead: '24 milhões de aparelhos chegam a assistências todo mês no Brasil. Estas são as alavancas de quem captura essa demanda:',
      itens: [
        { t: 'Anúncio de emergência: "pronto no mesmo dia"', d: '52% dos brasileiros já quebraram a tela, e quem quebra procura conserto AGORA, sem celular na mão. Anúncio local em "trocar tela perto de mim" com promessa de mesmo dia: quem aparece primeiro leva.' },
        { t: 'Clique direto pro WhatsApp', d: 'O brasileiro negocia celular no WhatsApp. Anúncio com objetivo de mensagem, orçamento transparente em minutos e resposta rápida: nesse mercado, quem responde primeiro fecha, não quem posta mais bonito.' },
        { t: 'Trade-in e seminovos revisados', d: '48% dos brasileiros planejam trocar de aparelho em 12 meses, mas o novo está caro. "Seu usado vale R$ X na troca" resolve a dor do cliente, aumenta o ticket e ainda vira estoque de seminovo com margem pra você.' },
        { t: 'Reputação como produto', d: 'O medo número 1 de quem tem um aparelho caro é entregar na mão errada. Avaliações no Google, garantia por escrito, vídeo da bancada: prova de confiança que o concorrente informal não pode anunciar.' },
      ],
    },
    crencas: {
      titulo: 'O que talvez você esteja pensando.',
      lead: 'Objeções que todo dono de loja de celular tem. Respondidas sem enrolação.',
      itens: [
        { crenca: 'Cliente de conserto só aparece quando quebra. Anúncio não cria essa demanda.', resposta: 'Não precisa criar: 52% dos brasileiros já quebraram a tela e 3 em cada 10 andam com ela trincada agora. Todo dia alguém no seu bairro digita "trocar tela perto de mim" em pânico. O anúncio não cria a demanda, intercepta a que já existe. A pergunta é se quem aparece primeiro é você ou o concorrente.' },
        { crenca: 'Anúncio só vai me trazer caçador de desconto.', resposta: 'Cliente compara preço quando você não dá outra régua. Anúncio comunicando peça de qualidade, garantia por escrito e "pronto no mesmo dia" atrai quem tem medo de perder o celular no conserto barato. Esse cliente paga mais e reclama menos.' },
        { crenca: 'Minha loja vive do movimento da rua, internet não muda isso.', resposta: 'O fluxo da rua decide onde a pessoa está; o celular decide onde ela gasta. 76% de quem busca "perto de mim" visita um negócio em até 24 horas. E ninguém deixa um aparelho de R$ 3 mil na sua bancada sem checar sua reputação no Google antes.' },
        { crenca: 'Serviço de R$ 200 não paga campanha.', resposta: 'Faça a conta do cliente inteiro, não do primeiro reparo: troca de tela vira película, capa e carregador na saída, volta quando a bateria vicia e é onde ele pergunta de seminovo na hora da troca (que 48% planejam nos próximos 12 meses). O reparo é a porta; o cliente é a casa.' },
        { crenca: 'Concorrência informal é desleal, marketing não resolve.', resposta: 'Você não ganha do informal no preço, e não precisa. O medo número 1 do cliente é entregar o aparelho na mão errada: perder dados, receber peça ruim, ficar sem garantia. Avaliações públicas, garantia por escrito, nota fiscal e vídeo da bancada: o informal não pode anunciar nada disso.' },
        { crenca: 'Vendo bem no WhatsApp, não preciso pagar anúncio.', resposta: 'Então você já tem o ativo mais valioso do funil: a máquina de fechar. Anúncio clique-pra-WhatsApp só enche o topo, jogando desconhecidos do bairro pra dentro da conversa onde você já sabe vender. Quem vive só de indicação cresce no ritmo da sorte; quem enche o WhatsApp cresce no ritmo da verba.' },
      ],
    },
  },
};
