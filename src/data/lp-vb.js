// Versão B das LPs de nicho — sales page long-form (Funil Site).
// Copy dos docs "copys LPs" (Prompt-Mestre), sem travessões, prova com material real.
// CTA sempre leva ao diagnóstico do nicho (questionário que qualifica).

const R2 = 'https://pub-03976d682fc84dd499f28b1d0c91d8ed.r2.dev/videos';

export const lpVB = {
  oticas: {
    slug: 'oticas',
    label: 'Óticas',
    diagUrl: '/diagnostico/oticas',
    img: {
      trabalho: '/vb/oticas-trabalho.webp', trabalhoAlt: 'Atendente de ótica ajustando o óculos no rosto de um cliente sorrindo, em Manaus',
      trabalhoCap: 'A cadeira de exame cheia e a agenda girando, do jeito que tem que ser.',
      cliente: '/vb/oticas-cliente.webp', clienteAlt: 'Exame de vista sendo feito numa ótica em Manaus',
      clienteCap: 'Cliente saindo com o óculos completo, não com um "vou pensar".',
    },
    heroC: {
      eyebrow: 'Para óticas de Manaus',
      headline: 'Colocamos R$ 600 mil a mais por ano no caixa da Óticas Veja, em poucos meses. Dá pra fazer o mesmo pela sua ótica.',
      sub: 'Anúncios rastreados do clique até o óculos vendido. Você atende; a Criativo 92 enche a agenda.',
      trust: 'Óticas Veja e outras óticas de Manaus confiam na Criativo 92.',
    },
    meta: {
      title: 'Encha a agenda da sua ótica — Criativo 92',
      description: 'O sistema que enche sua ótica de exames agendados e mostra, em número, quanto cada real de anúncio voltou em venda de óculos. Diagnóstico gratuito.',
    },
    hero: {
      kicker: 'Para donos de ótica em Manaus cansados de virar "consultório de graça": o cliente faz o exame, experimenta a armação com você e compra no mais barato.',
      headline: 'Encha a agenda da sua ótica de exames e pare de perder o cliente pro "mais barato" depois que ele já experimentou o óculos com você.',
      sub: 'Chega de postar bonito e torcer pra alguém aparecer. A Criativo 92 monta pra sua ótica um sistema de marketing rastreado, do anúncio até o óculos vendido, feito por quem já trabalha com óticas aqui de Manaus. Você cuida da loja; a gente enche a agenda.',
      badges: ['+100 marcas atendidas', 'Óticas Veja: +R$ 600 mil por ano', 'Sem compromisso'],
    },
    lead: [
      'Você conhece essa cena de cor.',
      'O cliente entra, faz o exame, elogia o atendimento, experimenta três armações, tira foto no espelho e diz a frase que você já sabe o que vem depois: "vou pensar".',
      'Duas semanas depois você descobre que ele "pensou" na ótica popular do lado e comprou lá, mais barato, o óculos que ele escolheu na sua loja.',
      'Não foi seu atendimento. Não foi sua qualidade. Foi que, do lado de fora da sua ótica, ninguém sabe que você existe, e quem chega, chega sem estar pronto pra comprar de verdade.',
    ],
    problema: {
      titulo: 'A verdade incômoda: hoje sua ótica depende de sorte.',
      intro: 'Depende de o cliente passar na frente. De alguém indicar. De a data comercial ajudar. E quando o movimento cai, você não sabe dizer por quê, nem o que fazer pra ele voltar.',
      bullets: [
        'A cadeira de exame fica vazia em dia de semana.',
        'A rede e as óticas populares gastam pesado em anúncio e levam o cliente que você atenderia melhor.',
        'Você já tentou impulsionar post, talvez já pagou agência, e o que voltou foi curtida, não cliente com dinheiro no bolso.',
        'E o pior: você não tem a menor ideia de quanto cada real gasto em marketing trouxe de volta em venda.',
      ],
      fecho: 'Cada semana assim é margem que escorre e cliente que compra do concorrente um óculos que era pra ser seu.',
    },
    mecanismo: {
      intro: 'Aqui está o que quase ninguém te conta:',
      destaque: 'O problema nunca foi a sua ótica. Foi o seu marketing estar medindo a coisa errada.',
      pontos: [
        { t: 'Usa o exame de vista como isca', d: 'Exame agendado é o gancho de entrada mais poderoso de uma ótica, porque quem senta na cadeira pra medir o grau está a um passo de comprar o óculos completo.' },
        { t: 'Rastreia cada real até a venda', d: 'Você para de adivinhar. Vê na tela: este anúncio trouxe X agendamentos, que viraram Y óculos vendidos. Marketing deixa de ser gasto e vira investimento com retorno visível.' },
        { t: 'Tira você da guerra de preço', d: 'Quando o cliente chega já sabendo quem você é e por que sua ótica é diferente, ele para de comparar só o número na etiqueta.' },
      ],
      fecho: 'É isso que separa postar e torcer de ter previsibilidade.',
    },
    solucao: {
      intro: 'Somos uma agência de marketing full-service de Manaus, com especialização em óticas. Não entregamos "post". Montamos e operamos o sistema inteiro que transforma anúncio em agenda cheia e agenda cheia em óculos vendido:',
      itens: [
        'Tráfego pago (Meta e Google) desenhado pra atrair quem está prestes a trocar de óculos, não curioso.',
        'Página e anúncios que posicionam sua ótica como referência, e não como "mais uma barata".',
        'Rastreamento de verdade, do clique no anúncio até a venda no balcão.',
        'Conteúdo e criativos que constroem autoridade em vez de só encher o feed.',
      ],
      fecho: 'Você continua fazendo o que faz de melhor, atender bem e vender óculos. A gente cuida de encher a sua agenda.',
    },
    beneficios: [
      { t: 'Agenda de exame cheia, inclusive na semana, não só no fim de mês.' },
      { t: 'Mais óculos completos vendidos, porque o exame puxa a venda maior (lente + armação).' },
      { t: 'Você enxerga o retorno: um painel mostra quanto cada anúncio trouxe de volta em venda.' },
      { t: 'Sai da guerra de preço: o cliente chega já valorizando sua ótica.' },
      { t: 'Cliente voltando: estrutura pra trazer de volta quem já comprou.' },
      { t: 'Achado no Google local: quem procura ótica perto encontra você primeiro.' },
    ],
    prova: {
      stat: { n: '+R$ 600 mil', l: 'por ano na Óticas Veja (de R$ 150 mil a R$ 200 mil/mês)' },
      video: { src: `${R2}/video-oticas-veja.mp4`, poster: '/fotos/case-otica-veja.jpg' },
      depo: { q: 'Em poucos meses saímos de R$ 150 mil para R$ 200 mil por mês. São R$ 50 mil a mais todo mês, R$ 600 mil no ano.', quem: 'Carlos Vega', loja: 'Óticas Veja' },
    },
    fechamento: {
      p1: 'Sua ótica não precisa de mais um post bonito. Precisa de gente sentando na cadeira de exame toda semana, e saindo de lá com um óculos completo.',
      p2: 'Você pode continuar dependendo da sorte e do movimento da rua, ou pode ter um sistema que enche sua agenda e te mostra exatamente o que está funcionando.',
      ps: 'Mesmo que você não feche nada com a Criativo 92, sai do diagnóstico com um plano do que fazer pra encher sua agenda. O risco é todo nosso: o único jeito de perder é deixar a cadeira de exame vazia mais um mês.',
    },
    faq: [
      { q: 'Já impulsionei post e não deu em nada. Por que agora seria diferente?', a: 'Porque impulsionar post mira curtida; a gente mira venda. A diferença é o sistema por trás: atrair quem está pronto pra comprar e rastrear cada real até a venda. Você vai ver o retorno, não torcer por ele.' },
      { q: 'Quanto custa?', a: 'Os valores o Fernando te apresenta no diagnóstico, já pensados pro tamanho e o momento da sua ótica. A conversa do diagnóstico é gratuita justamente pra desenhar a proposta certa pro seu caso.' },
      { q: 'Agência não entende de ótica.', a: 'A Criativo 92 é especializada em óticas de Manaus: a gente conhece a lógica do exame que puxa o óculos completo, da recorrência de grau e da briga com a rede e a popular. Não é marketing genérico.' },
      { q: 'Vou atrair só curioso e quem quer orçamento.', a: 'O sistema é montado pra qualificar: atrai quem tem intenção real de trocar de óculos e filtra curioso antes de chegar em você. Cliente melhor, não só mais gente.' },
      { q: 'Não tenho tempo pra ficar cuidando disso.', a: 'Esse é o ponto. É full-service: você cuida da ótica, a Criativo 92 opera o marketing inteiro. Seu trabalho é atender bem quem a gente traz.' },
    ],
  },

  petshop: {
    slug: 'petshop',
    label: 'Pet shop',
    diagUrl: '/diagnostico/petshop',
    img: {
      trabalho: '/vb/petshop-trabalho.webp', trabalhoAlt: 'Banho e tosa de um cachorro numa pet shop em Manaus',
      trabalhoCap: 'Agenda de banho e tosa girando o mês inteiro, não só na sorte.',
      cliente: '/vb/petshop-cliente.webp', clienteAlt: 'Tutor comprando ração no balcão de uma pet shop em Manaus',
      clienteCap: 'Tutor voltando todo mês, não só quando lembra.',
    },
    heroC: {
      eyebrow: 'Para pet shops de Manaus',
      headline: 'A Rações Fortaleza investe R$ 2,5 mil e tira R$ 65 mil por mês. Dá pra fazer o mesmo pela sua pet shop.',
      sub: 'Anúncios rastreados até a venda no balcão, feitos pra recorrência. Você cuida dos bichos; a Criativo 92 enche a agenda.',
      trust: 'Rações Fortaleza e outras marcas pet de Manaus confiam na Criativo 92.',
    },
    meta: {
      title: 'Encha a agenda da sua pet shop — Criativo 92',
      description: 'O sistema que enche sua pet shop de clientes e faz o tutor voltar todo mês, com cada real de anúncio rastreado até a venda. Diagnóstico gratuito.',
    },
    hero: {
      kicker: 'Para donos de pet shop em Manaus que trabalham de sol a sol, amam o que fazem, mas cansaram de depender da sorte, da indicação e de baixar preço pra encher a agenda.',
      headline: 'Encha a agenda de banho e tosa da sua pet shop e faça o cliente voltar todo mês, sem viver na base do desconto.',
      sub: 'Chega de postar foto de cachorro fofo e torcer pra alguém aparecer. A Criativo 92 monta pra sua pet shop um sistema de marketing rastreado, do anúncio até a venda no balcão, feito por quem já trabalha com pet shop aqui de Manaus. Você cuida dos bichos; a gente enche a agenda.',
      badges: ['+100 marcas atendidas', 'Case Rações Fortaleza: R$2,5k → R$65k/mês', 'Sem compromisso'],
    },
    lead: [
      'Você abre a loja todo dia com a mesma pergunta na cabeça: "hoje o movimento vem?".',
      'Tem semana que a agenda de tosa lota. Tem semana que a cadeira fica vazia e você não sabe por quê. Você já postou, já impulsionou, talvez já pagou alguém pra "cuidar das redes", e o que voltou foi seguidor, não cliente com o cachorro embaixo do braço.',
      'Enquanto isso, o cliente bom, aquele que traria o pet todo mês, some. E só volta quando lembra. Ou quando o concorrente do lado faz uma promoção mais barata que a sua.',
      'Não é falta de esforço seu. É que ninguém do lado de fora sabe que a sua pet shop é a melhor opção do bairro, e não existe nada trazendo esse cliente de volta de forma constante.',
    ],
    problema: {
      titulo: 'A real: hoje a sua pet shop vive de sorte e de boca a boca.',
      intro: 'E boca a boca não tem botão de "aumentar". Quando o movimento cai, você não tem o que fazer, só esperar e torcer.',
      bullets: [
        'A agenda de banho e tosa fica furada no meio da semana.',
        'O cliente compra a ração uma vez e some: some pro atacadão, pro mais barato, pro concorrente que apareceu primeiro.',
        'Você baixa preço pra não perder venda e vê a sua margem, que já é apertada, encolher mais.',
        'E você não faz ideia de quanto cada real gasto em marketing trouxe de volta em cliente de verdade.',
      ],
      fecho: 'Cada mês assim é recorrência que escorre pelo ralo: clientes que eram pra voltar todo mês e não voltam.',
    },
    mecanismo: {
      intro: 'Aqui está o que muda o jogo:',
      destaque: 'O problema nunca foi a sua pet shop. Foi o seu marketing medir curtida em vez de recorrência.',
      pontos: [
        { t: 'Enche a agenda com quem mora perto e tem pet', d: 'Não é audiência aleatória, é o dono de cachorro e gato do seu bairro, na hora que ele precisa de banho, tosa ou ração.' },
        { t: 'Rastreia cada real até a venda', d: 'Você para de adivinhar. Vê na tela: este anúncio trouxe X clientes, que gastaram Y no balcão. Marketing vira investimento com retorno visível.' },
        { t: 'Trabalha a recorrência', d: 'Estrutura pra trazer o cliente de volta todo mês, a diferença entre vender uma vez e ter um cliente que volta o ano inteiro.' },
      ],
      fecho: 'É isso que separa depender de sorte de ter previsibilidade.',
    },
    solucao: {
      intro: 'Somos uma agência de marketing full-service de Manaus, com trabalho de verdade em pet shop. Não entregamos "post bonito". Montamos e operamos o sistema inteiro que transforma anúncio em agenda cheia e cliente de uma vez em cliente de todo mês:',
      itens: [
        'Tráfego pago (Meta e Google) mirando dono de pet do seu bairro, não curioso.',
        'Página e anúncios que mostram sua pet shop como a melhor opção da região, não a mais barata.',
        'Rastreamento de verdade, do clique no anúncio até a venda no balcão.',
        'Conteúdo e criativos que constroem autoridade e trazem o cliente de volta.',
      ],
      fecho: 'Você continua fazendo o que ama, cuidar dos bichos e atender bem. A gente cuida de encher a sua agenda e trazer o cliente de volta.',
    },
    beneficios: [
      { t: 'Agenda de banho e tosa cheia, inclusive no meio da semana.' },
      { t: 'Cliente voltando todo mês: o ouro do pet shop é a recorrência de banho, tosa e ração.' },
      { t: 'Você enxerga o retorno: um painel mostra quanto cada anúncio trouxe de volta em venda.' },
      { t: 'Ticket maior: combos, planos de banho e produto vendidos junto, não só o serviço avulso.' },
      { t: 'Achado no Google local: quem procura "pet shop perto de mim" encontra você primeiro.' },
      { t: 'Feito pra pet shop: quem fala com você entende de recorrência, de bairro e da rotina da loja.' },
    ],
    prova: {
      stat: { n: 'R$ 2,5k → R$ 65k', l: 'de mídia por mês, na Rações Fortaleza' },
      video: { src: `${R2}/video-racoes-fortaleza.mp4`, poster: '/fotos/case-fortaleza.jpg' },
      depo: { q: 'Investimos R$ 2,5 mil e voltaram R$ 65 mil no mês. A Criativo 92 entende de resultado, não de vaidade.', quem: 'Fernanda Lopes', loja: 'Rações Fortaleza' },
    },
    fechamento: {
      p1: 'Sua pet shop não precisa de mais um post bonito. Precisa de agenda cheia e de cliente voltando todo mês, não só quando lembra.',
      p2: 'Você pode continuar dependendo da sorte, da indicação e do desconto, ou pode ter um sistema que enche a sua agenda e te mostra exatamente o que está dando certo.',
      ps: 'Mesmo que você não feche nada com a Criativo 92, sai do diagnóstico com um plano pra encher a agenda e trazer o cliente de volta. O risco é todo nosso: o único jeito de perder é deixar a cadeira de tosa vazia mais um mês.',
    },
    faq: [
      { q: 'Já impulsionei post e não deu em nada. Por que agora seria diferente?', a: 'Porque impulsionar mira curtida; a gente mira cliente no balcão. O sistema atrai o dono de pet do seu bairro e rastreia cada real até a venda. Você vê o retorno, não torce por ele.' },
      { q: 'Pet shop de bairro não escala / meu movimento já vem do bairro.', a: 'O boca a boca é ótimo, mas não tem botão de aumentar. A gente não substitui a sua vizinhança: multiplica ela, trazendo mais gente do bairro e fazendo quem já é cliente voltar mais vezes.' },
      { q: 'Quanto custa?', a: 'Os valores o Fernando te apresenta no diagnóstico, já pensados pro tamanho e o momento da sua pet shop. A conversa é gratuita justamente pra desenhar a proposta certa pro seu caso.' },
      { q: 'Agência não entende de pet shop / a última me enrolou.', a: 'Justo. Por isso a gente começa mostrando resultado e rastreamento, não promessa. E falamos a língua do pet shop: recorrência, banho e tosa, bairro. Você vê o que está funcionando na tela.' },
      { q: 'Não tenho tempo pra ficar gravando vídeo e cuidando disso.', a: 'Esse é o ponto do full-service: você cuida dos bichos, a Criativo 92 cuida do marketing inteiro. Seu trabalho é atender bem quem a gente traz.' },
    ],
  },

  celulares: {
    slug: 'celulares',
    label: 'Lojas de celular',
    diagUrl: '/diagnostico/celulares',
    img: {
      trabalho: '/vb/celulares-trabalho.webp', trabalhoAlt: 'Técnico trocando a tela de um celular na bancada de uma loja em Manaus',
      trabalhoCap: 'Bancada cheia e conserto no mesmo dia, do jeito que fecha venda.',
      cliente: '/vb/celulares-cliente.webp', clienteAlt: 'Vendedor mostrando um celular a um casal no balcão de uma loja em Manaus',
      clienteCap: 'Comprador de verdade fechando no balcão, não curioso.',
    },
    heroC: {
      eyebrow: 'Para lojas de celular de Manaus',
      headline: 'Na Celularis, R$ 1,5 mil por loja viraram R$ 50 mil por mês. Em 9 lojas. Dá pra fazer o mesmo pela sua.',
      sub: 'Anúncios rastreados do clique até a venda, sem brigar de preço com o marketplace. Você vende; a Criativo 92 traz o cliente.',
      trust: 'Celularis, iPro e outras lojas de celular de Manaus confiam na Criativo 92.',
    },
    meta: {
      title: 'Encha sua loja de celular de compradores — Criativo 92',
      description: 'Pare de brigar de preço com o marketplace. Venda volume com anúncios rastreados que mostram, em número, quanto cada real voltou em venda. Diagnóstico gratuito.',
    },
    hero: {
      kicker: 'Para donos de loja de celular em Manaus cansados de brigar de preço com o marketplace e de anunciar sem saber se o dinheiro voltou.',
      headline: 'Encha sua loja de celular de clientes com dinheiro no bolso e veja, em número, quanto cada real de anúncio voltou em venda.',
      sub: 'Chega de impulsionar promoção e torcer pra dar movimento. A Criativo 92 monta pra sua loja um sistema de anúncios rastreado, do clique até a venda no balcão ou no WhatsApp, feito por quem já trabalha com loja de celular aqui de Manaus. Você vende; a gente traz o cliente certo.',
      badges: ['+100 marcas atendidas', 'Case Celularis: R$1,5k → R$50k/mês por loja', 'Sem compromisso'],
    },
    lead: [
      'Você conhece esse ciclo.',
      'Faz uma promoção, impulsiona um post, o WhatsApp enche... de curioso. Gente perguntando preço, pedindo o menor valor, sumindo depois. No fim do mês você olha pra trás e não sabe dizer: aquele dinheiro que você botou em anúncio, voltou? Quanto? De qual anúncio veio a venda?',
      'E toda vez que o marketplace ou o informal baixa o preço, você baixa junto, e vê a sua margem, que já é fina, virar pó.',
      'Não é que anúncio não funcione. É que você está anunciando no escuro, sem saber o que traz venda e o que só queima dinheiro.',
    ],
    problema: {
      titulo: 'A verdade é dura: hoje você vende no volume da promoção, e a promoção come a sua margem.',
      intro: 'Sem promoção, o movimento cai. Com promoção, a margem some. E você fica preso nesse aperto, correndo atrás de giro sem nunca ter previsibilidade.',
      bullets: [
        'O WhatsApp enche de curioso caçando o menor preço, e o comprador de verdade se perde no meio.',
        'O marketplace e o informal ditam o preço, e você corre atrás.',
        'Você anuncia, mas não faz ideia de qual anúncio trouxe venda, então não sabe o que escalar nem o que cortar.',
        'E o acessório, o seguro, o crediário, o que aumentaria seu ticket, ficam na mesa.',
      ],
      fecho: 'Cada mês assim é dinheiro de anúncio queimado sem retorno rastreado e margem escorrendo na guerra de preço.',
    },
    mecanismo: {
      intro: 'Aqui está o que muda o jogo:',
      destaque: 'O problema nunca foi o seu preço. Foi anunciar sem enxergar de onde vem a venda.',
      pontos: [
        { t: 'Atrai comprador, não curioso', d: 'Anúncio desenhado pra chamar quem está pronto pra comprar celular, não quem só quer saber o menor preço.' },
        { t: 'Rastreia cada real até a venda', d: 'Você vê na tela: este anúncio custou X e trouxe Y em venda. Fim do achismo: você escala o que dá ROI e corta o que queima dinheiro.' },
        { t: 'Aumenta o ticket', d: 'Estrutura pra vender acessório, seguro e crediário junto, e pra fazer o cliente antigo voltar pro upgrade.' },
      ],
      fecho: 'É isso que separa anunciar no escuro de vender com previsibilidade.',
    },
    solucao: {
      intro: 'Somos uma agência de marketing full-service de Manaus, com trabalho de verdade em loja de celular. Não entregamos "post". Montamos e operamos o sistema inteiro que transforma anúncio em WhatsApp cheio de comprador, e comprador em venda rastreada:',
      itens: [
        'Tráfego pago (Meta e Google) mirando quem está pronto pra comprar, não pechincheiro.',
        'Anúncios e ofertas que geram movimento rápido sem te prender só ao menor preço.',
        'Rastreamento de verdade, do clique no anúncio até a venda no balcão ou no WhatsApp.',
        'Estrutura de ticket pra vender acessório, seguro e crediário, e trazer o cliente antigo de volta.',
      ],
      fecho: 'Você continua fazendo o que faz melhor, vender. A gente cuida de encher a sua loja do cliente certo e te mostrar o retorno de cada real.',
    },
    beneficios: [
      { t: 'WhatsApp e loja cheios de comprador, não de curioso caçando o menor preço.' },
      { t: 'ROI na tela: você vê quanto cada anúncio custou e quanto trouxe em venda.' },
      { t: 'Movimento rápido: campanha no ar em poucos dias, resultado que aparece cedo.' },
      { t: 'Ticket maior: acessório, seguro e crediário vendidos junto, não deixados na mesa.' },
      { t: 'Sai da guerra de preço: quando você mede o retorno, para de depender só de promoção.' },
      { t: 'Cliente antigo voltando: estrutura pra recompra e upgrade de quem já comprou.' },
    ],
    prova: {
      stat: { n: 'R$ 1,5k → R$ 50k', l: 'por mês em cada uma das 9 lojas, na Celularis' },
      video: { src: `${R2}/video-ipro.mp4`, poster: '/fotos/case-celularis.jpg' },
      depo: { q: 'Cada loja virou uma máquina de vendas. R$ 1.500 investidos voltam como R$ 50 mil por mês, e isso em 9 unidades.', quem: 'Rodrigo Nunes', loja: 'Celularis' },
    },
    fechamento: {
      p1: 'Sua loja não precisa de mais uma promoção que come a margem. Precisa de comprador no WhatsApp e de saber, em número, o que traz venda.',
      p2: 'Você pode continuar anunciando no escuro e brigando de preço com o marketplace, ou pode ter um sistema que enche sua loja do cliente certo e te mostra o ROI de cada real.',
      ps: 'Mesmo que você não feche nada com a Criativo 92, sai do diagnóstico sabendo onde seu anúncio está queimando dinheiro e o que fazer pra vender mais. O risco é todo nosso: o único jeito de perder é continuar anunciando no escuro mais um mês.',
    },
    faq: [
      { q: 'Já tentei tráfego e não deu ROI.', a: 'Quase sempre o problema não é o anúncio, é não ter rastreamento pra saber o que trouxe venda e o que só queimou verba. A gente monta o rastreamento primeiro: você vê o retorno na tela e a gente escala só o que dá lucro.' },
      { q: 'Meu negócio é preço / sem promoção ninguém compra.', a: 'Preço traz curioso; sistema traz comprador. Quando você mede de onde vem a venda, para de depender só de promoção e ainda aumenta o ticket com acessório, seguro e crediário. Você continua competitivo, mas para de brigar só no preço.' },
      { q: 'Quanto custa?', a: 'Os valores o Fernando te apresenta no diagnóstico, já pensados pro giro e o momento da sua loja. A conversa é gratuita justamente pra desenhar a proposta certa pro seu caso.' },
      { q: 'Vem só curioso e pechincheiro.', a: 'O sistema é montado pra qualificar: atrai quem está pronto pra comprar e filtra o pechincheiro antes de chegar em você. Menos curioso, mais venda.' },
      { q: 'Não tenho tempo nem estrutura pra isso.', a: 'Esse é o ponto do full-service: você vende, a Criativo 92 opera o marketing inteiro e te entrega o cliente e o número. Seu trabalho é fechar.' },
    ],
  },
};

// Blocos fixos (iguais nos 3 nichos), da copy do Prompt-Mestre.
export const VB_OFERTA = {
  eyebrow: 'A oferta',
  titulo: 'Antes de qualquer proposta, a gente te mostra o mapa.',
  intro: 'No Diagnóstico de Crescimento gratuito, a Criativo 92 senta com você (uns 30 minutos, presencial ou online) e te entrega:',
  itens: [
    { t: 'Onde seu negócio está perdendo cliente hoje: os furos entre "alguém te procura" e "alguém compra".' },
    { t: 'O plano pra encher sua agenda ou seu WhatsApp do cliente certo.' },
    { t: 'Como seria o rastreamento no seu caso: o que dá pra medir e acompanhar de verdade.' },
    { t: 'Pelo menos uma ação prática que você aplica mesmo que não feche nada com a gente.' },
  ],
  fecho: 'Sem custo. Sem enrolação. Você sai da conversa com clareza, decidindo com informação, não no escuro.',
};

export const VB_GARANTIAS = [
  { ic: 'bonus', t: 'Bônus', d: 'Ao agendar, você recebe antes da reunião o Dossiê de Resultados da Criativo 92: o que trava o seu nicho hoje, como a gente resolve e resultados reais. Você já chega sabendo com quem está falando.' },
  { ic: 'shield', t: 'Risco zero', d: 'O diagnóstico é gratuito e sem compromisso. Se no fim da conversa você achar que não é pra você agora, tudo bem: sai com o diagnóstico na mão do mesmo jeito.' },
  { ic: 'clock', t: 'Poucas vagas', d: 'Cada diagnóstico é feito à mão, um a um. Por isso o Fernando abre poucas vagas por semana. E enquanto você pensa, o concorrente do lado está anunciando pro seu cliente agora.' },
];

export const VB_CTA = { label: 'Quero meu Diagnóstico de Crescimento gratuito', sub: 'Responda 4 perguntas rápidas (menos de 2 minutos) e o Fernando entra em contato pra marcar.' };
