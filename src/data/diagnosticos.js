// Fluxos de diagnóstico por nicho: máquina de estados estilo Typeform.
// Tipos de nó:
//   statement: tela de conteúdo (usada p/ responder objeção, mostrar resultado e investimento) -> next
//   question:  pergunta com opções; cada opção pode ter next próprio (ramificação) e flag (qualificação)
//   form:      formulário final (nome, empresa, número, instagram) -> next
// Flags de desqualificação: fat_baixo, sem_verba, pesquisando
// O nó especial 'result' é renderizado pelo engine (apto/não apto).

export const WA = 'https://wa.me/5592981074692';
export const INVESTIMENTO_MIN = 'R$ 3.000/mês';

export const diagnosticos = {
  // ============================================================ ÓTICAS
  oticas: {
    label: 'Óticas',
    caseRef: 'Óticas Veja: de R$ 150 mil para R$ 300 mil/mês',
    start: 'intro',
    nodes: {
      intro: { type: 'statement', eyebrow: 'Diagnóstico gratuito · Óticas', title: 'Sua ótica tem espaço pra vender mais. Vamos descobrir quanto.', body: 'Algumas perguntas rápidas (leva uns 2 minutos). No caminho, você já vê o que funciona pra óticas como a sua. No final, a gente te diz com honestidade se faz sentido conversar.', cta: 'Começar →', next: 'q_lojas' },

      q_lojas: { type: 'question', q: 'Quantas lojas a sua ótica tem?', opts: [
        { t: '1 loja' }, { t: '2 a 4 lojas' }, { t: '5 lojas ou mais' },
      ], next: 'q_desafio' },

      q_desafio: { type: 'question', q: 'Qual é o maior desafio da ótica hoje?', opts: [
        { t: 'Atrair cliente novo pra loja', next: 'st_atrair' },
        { t: 'Concorrência brigando por preço', next: 'st_preco' },
        { t: 'Minha marca é pouco conhecida', next: 'st_marca' },
        { t: 'Fazer quem já comprou voltar', next: 'st_recompra' },
      ] },

      st_atrair: { type: 'statement', eyebrow: 'O que funciona', title: 'Cliente de ótica não aparece por acaso. Ele pesquisa.', body: '"Ótica perto de mim", "exame de vista", "lente pra miopia". 76% de quem busca "perto de mim" visita uma loja em até 24 horas. Quem aparece nessa hora leva o cliente; quem não aparece, doa ele pro concorrente. Campanha local no Google + Instagram com oferta de exame de vista é o caminho mais curto pra encher a loja.', next: 'q_anuncios' },
      st_preco: { type: 'statement', eyebrow: 'O que funciona', title: 'Quem briga por preço perde pra quem briga por marca.', body: 'Óculos é saúde e estética, não commodity. Quando a ótica constrói autoridade (conteúdo, prova social, vitrine digital), o cliente para de comparar centavos e passa a comprar confiança. Foi assim que a Óticas Veja dobrou: de R$ 150 mil pra R$ 300 mil/mês, sem baixar preço.', next: 'q_anuncios' },
      st_marca: { type: 'statement', eyebrow: 'O que funciona', title: 'Marca desconhecida é loja vazia em rua movimentada.', body: 'Presença digital constante muda isso mais rápido do que você imagina: perfil ativo, vídeos da loja, avaliações no Google e anúncio local. A Óticas Veja virou referência na região e dobrou a meta de vendas com esse combo.', next: 'q_anuncios' },
      st_recompra: { type: 'statement', eyebrow: 'O que funciona', title: 'Seu maior ativo é quem já comprou de você.', body: 'Receita de óculos vence, lente arranha, armação sai de moda. Com a base organizada e campanhas de retorno (WhatsApp + remarketing), a segunda venda custa uma fração da primeira. Pouca ótica faz isso. Quem faz, fatura.', next: 'q_anuncios' },

      q_anuncios: { type: 'question', q: 'Você já investe em anúncios (Meta ou Google)?', opts: [
        { t: 'Nunca investi', next: 'st_nunca' },
        { t: 'Já tentei, não funcionou', next: 'q_erro' },
        { t: 'Invisto todo mês', next: 'st_otimizar' },
      ] },

      st_nunca: { type: 'statement', eyebrow: 'Sendo direto', title: '"Meu cliente vem por indicação"... até o concorrente anunciar.', body: 'Indicação é ótima e continua valendo. O problema: ela não escala e não é previsível. Anúncio local bem feito não substitui a indicação, multiplica ela, porque coloca sua ótica na frente de quem já está procurando óculos na sua região.', next: 'q_faturamento' },
      q_erro: { type: 'question', q: 'O que você acha que deu errado?', opts: [
        { t: 'Fiz por conta própria (impulsionar post)' },
        { t: 'Contratei agência que não entendia do varejo' },
        { t: 'Investi pouco tempo ou pouca verba' },
        { t: 'Sinceramente, não sei dizer' },
      ], next: 'st_erro' },
      st_erro: { type: 'statement', eyebrow: 'A gente vê isso todo dia', title: 'Anúncio sem estratégia é rifa. Com estratégia, é matemática.', body: 'A maioria das tentativas frustradas tem a mesma raiz: sem oferta clara, sem segmentação local e sem leitura de dados. Nosso método começa pelo diagnóstico exatamente pra não repetir esse filme. Cada real tem que voltar com juros, e você acompanha os números.', next: 'q_faturamento' },
      st_otimizar: { type: 'statement', eyebrow: 'Bom sinal', title: 'Você já sabe que funciona. A pergunta é: quanto está ficando na mesa?', body: 'Quem já investe todo mês geralmente tem 20% a 40% de resultado preso em campanhas sem otimização, criativos cansados e verba mal distribuída. É o cenário onde nossa gestão mais gera salto rápido.', next: 'q_faturamento' },

      q_faturamento: { type: 'question', q: 'Qual o faturamento médio mensal da ótica (somando as lojas)?', opts: [
        { t: 'Até R$ 30 mil', flag: 'fat_baixo' },
        { t: 'R$ 30 mil a R$ 100 mil' },
        { t: 'R$ 100 mil a R$ 300 mil' },
        { t: 'Acima de R$ 300 mil' },
      ], next: 'st_investimento' },

      st_investimento: { type: 'statement', eyebrow: 'Transparência antes de tudo', title: 'Nosso trabalho começa em R$ 3.000/mês.', body: 'Isso cobre estratégia, criativos, gestão e a verba de anúncios pra começar com força. Pra calibrar a régua: a Óticas Veja opera nessa lógica e saiu de R$ 150 mil pra R$ 300 mil/mês. Investimento sem retorno é custo; nosso trabalho é fazer virar receita.', next: 'q_verba' },
      q_verba: { type: 'question', q: 'Um investimento a partir de R$ 3.000/mês cabe no seu momento?', opts: [
        { t: 'Cabe, se trouxer retorno' },
        { t: 'Agora não cabe', flag: 'sem_verba' },
      ], next: 'q_urgencia' },

      q_urgencia: { type: 'question', q: 'Se fizer sentido, quando você quer começar?', opts: [
        { t: 'O quanto antes' },
        { t: 'Nos próximos 30 dias' },
        { t: 'Só pesquisando por enquanto', flag: 'pesquisando' },
      ], next: 'input_nome' },

      input_nome: { type: 'form', q: 'Pra fechar, seus dados:', fields: [
        { k: 'nome', label: 'Nome', placeholder: 'Seu nome' },
        { k: 'empresa', label: 'Nome da empresa', placeholder: 'Nome da ótica' },
        { k: 'numero', label: 'Número (WhatsApp)', placeholder: '(92) 9 0000-0000', type: 'tel' },
        { k: 'instagram', label: '@ do Instagram', placeholder: '@suaotica', opt: true },
      ], next: 'result' },
    },
    apto: {
      title: 'sua ótica está pronta pra crescer.',
      body: 'Pelo seu cenário, dá pra montar um plano com previsibilidade: presença local forte, oferta certa e mídia otimizada. Recebemos suas respostas e o próximo passo é uma conversa rápida: clica abaixo que seu diagnóstico chega pronto no nosso WhatsApp.',
    },
    naoApto: {
      title: 'sendo honestos: ainda não é o momento.',
      body: 'Pelo que você respondeu, investir R$ 3.000/mês agora forçaria o caixa, e a gente não coloca cliente em risco pra bater meta. O que recomendamos pra esse momento:',
      dicas: [
        'Capriche no Google Maps: fotos reais da loja, horário atualizado e peça avaliação a cada venda.',
        'Grave vídeos simples do dia a dia (provador, chegada de armações, antes/depois de lentes).',
        'Organize os contatos de quem já comprou e ative por WhatsApp quando a receita vencer.',
      ],
    },
  },

  // ============================================================ PETSHOP
  petshop: {
    label: 'Mercado pet',
    caseRef: 'Rações Fortaleza: R$ 2,5 mil investidos, R$ 65 mil/mês em vendas',
    start: 'intro',
    nodes: {
      intro: { type: 'statement', eyebrow: 'Diagnóstico gratuito · Mercado pet', title: 'Tem tutor de sobra na sua região. Vamos levar eles até você.', body: 'Algumas perguntas rápidas (2 minutos). No caminho, você vê o que funciona no mercado pet de verdade. No final, a gente te fala com honestidade se faz sentido conversar.', cta: 'Começar →', next: 'q_negocio' },

      q_negocio: { type: 'question', q: 'Qual é o seu negócio?', opts: [
        { t: 'Pet shop' }, { t: 'Clínica veterinária' }, { t: 'Banho e tosa' }, { t: 'Indústria / distribuidora pet' },
      ], next: 'q_desafio' },

      q_desafio: { type: 'question', q: 'Qual é o maior desafio hoje?', opts: [
        { t: 'Atrair tutores novos', next: 'st_atrair' },
        { t: 'Concorrência e guerra de preço na ração', next: 'st_preco' },
        { t: 'Marca pouco conhecida no bairro', next: 'st_marca' },
        { t: 'Fazer o cliente voltar todo mês', next: 'st_recorrencia' },
      ] },

      st_atrair: { type: 'statement', eyebrow: 'O que funciona', title: 'Tutor escolhe pelo bairro. E pesquisa antes de ir.', body: '"Pet shop perto de mim", "banho e tosa", "ração barata". 60% dos tutores escolhem pela proximidade, e o anúncio por raio coloca sua loja na frente do tutor do seu bairro na hora da decisão. O banho e tosa é a porta de entrada perfeita: traz o tutor pra dentro e a ração e o resto vêm junto.', next: 'q_anuncios' },
      st_preco: { type: 'statement', eyebrow: 'O que funciona', title: 'Na guerra de preço da ração, quem ganha é quem cria vínculo.', body: 'Ração é recorrente: o tutor compra todo mês de alguém. Programas de recompra, lembrete de vacina e atendimento por WhatsApp transformam comprador de ocasião em cliente fiel. A Rações Fortaleza transformou R$ 2,5 mil de mídia em R$ 65 mil/mês exatamente com esse jogo.', next: 'q_anuncios' },
      st_marca: { type: 'statement', eyebrow: 'O que funciona', title: 'No pet, quem tem a marca mais querida do bairro fatura mais.', body: 'Conteúdo com pet é o mais compartilhável que existe: antes/depois do banho, resgates, dicas de tutor. Com constância e anúncio local, sua marca vira a primeira lembrança do bairro. E primeira lembrança vira primeira compra.', next: 'q_anuncios' },
      st_recorrencia: { type: 'statement', eyebrow: 'O que funciona', title: 'O lucro do pet shop está na recorrência, não na primeira venda.', body: 'Ração acaba a cada 30 dias, vacina tem data, banho é semanal. Quem organiza a base e ativa por WhatsApp no momento certo vende de novo sem pagar mídia de novo. É margem pura que a maioria deixa na mesa.', next: 'q_anuncios' },

      q_anuncios: { type: 'question', q: 'Você já investe em anúncios (Meta ou Google)?', opts: [
        { t: 'Nunca investi', next: 'st_nunca' },
        { t: 'Já tentei, não funcionou', next: 'q_erro' },
        { t: 'Invisto todo mês', next: 'st_otimizar' },
      ] },

      st_nunca: { type: 'statement', eyebrow: 'Sendo direto', title: '"Meu movimento é do bairro, não preciso de anúncio". Será?', body: 'Seu movimento é do bairro justamente porque o alcance é local. Anúncio por raio faz o bairro inteiro te conhecer, não só quem passa na porta. E o custo pra aparecer pra milhares de tutores da região é menor que um panfleto.', next: 'q_faturamento' },
      q_erro: { type: 'question', q: 'O que você acha que deu errado?', opts: [
        { t: 'Fiz por conta própria (impulsionar post)' },
        { t: 'Contratei agência que não entendia o varejo pet' },
        { t: 'Investi pouco tempo ou pouca verba' },
        { t: 'Sinceramente, não sei dizer' },
      ], next: 'st_erro' },
      st_erro: { type: 'statement', eyebrow: 'A gente vê isso todo dia', title: 'Anúncio sem estratégia é rifa. Com estratégia, é matemática.', body: 'Quase toda tentativa frustrada tem a mesma raiz: sem oferta de entrada, sem raio certo, sem leitura de número. Nosso método começa pelo diagnóstico pra não repetir o filme: cada real precisa voltar com juros, e você acompanha tudo.', next: 'q_faturamento' },
      st_otimizar: { type: 'statement', eyebrow: 'Bom sinal', title: 'Você já sabe que funciona. Quanto está ficando na mesa?', body: 'Quem já roda mídia geralmente tem 20% a 40% de resultado preso em campanha sem otimização e criativo cansado. No pet, com recorrência na jogada, otimizar mídia + ativar a base costuma dar salto rápido.', next: 'q_faturamento' },

      q_faturamento: { type: 'question', q: 'Qual o faturamento médio mensal do negócio?', opts: [
        { t: 'Até R$ 20 mil', flag: 'fat_baixo' },
        { t: 'R$ 20 mil a R$ 60 mil' },
        { t: 'R$ 60 mil a R$ 200 mil' },
        { t: 'Acima de R$ 200 mil' },
      ], next: 'st_investimento' },

      st_investimento: { type: 'statement', eyebrow: 'Transparência antes de tudo', title: 'Nosso trabalho começa em R$ 3.000/mês.', body: 'Isso cobre estratégia, criativos, gestão e a verba de anúncios pra começar com força. Pra calibrar: a Rações Fortaleza investe R$ 2,5 mil só de mídia e tira R$ 65 mil/mês em vendas. Investimento sem retorno é custo; nosso trabalho é fazer virar receita.', next: 'q_verba' },
      q_verba: { type: 'question', q: 'Um investimento a partir de R$ 3.000/mês cabe no seu momento?', opts: [
        { t: 'Cabe, se trouxer retorno' },
        { t: 'Agora não cabe', flag: 'sem_verba' },
      ], next: 'q_urgencia' },

      q_urgencia: { type: 'question', q: 'Se fizer sentido, quando você quer começar?', opts: [
        { t: 'O quanto antes' },
        { t: 'Nos próximos 30 dias' },
        { t: 'Só pesquisando por enquanto', flag: 'pesquisando' },
      ], next: 'input_nome' },

      input_nome: { type: 'form', q: 'Pra fechar, seus dados:', fields: [
        { k: 'nome', label: 'Nome', placeholder: 'Seu nome' },
        { k: 'empresa', label: 'Nome da empresa', placeholder: 'Nome do pet shop' },
        { k: 'numero', label: 'Número (WhatsApp)', placeholder: '(92) 9 0000-0000', type: 'tel' },
        { k: 'instagram', label: '@ do Instagram', placeholder: '@seupetshop', opt: true },
      ], next: 'result' },
    },
    apto: {
      title: 'seu negócio pet está pronto pra crescer.',
      body: 'Pelo seu cenário, dá pra montar um plano com previsibilidade: anúncio local, oferta de entrada e recorrência ativada. Clica abaixo que seu diagnóstico chega pronto no nosso WhatsApp e a gente conversa.',
    },
    naoApto: {
      title: 'sendo honestos: ainda não é o momento.',
      body: 'Pelo que você respondeu, investir R$ 3.000/mês agora forçaria o caixa, e a gente não coloca cliente em risco pra bater meta. Pra esse momento, recomendamos:',
      dicas: [
        'Capriche no Google Maps: fotos, horário e peça avaliação a cada atendimento.',
        'Poste antes/depois de banho e tosa: é o conteúdo que mais engaja no pet.',
        'Anote o ciclo de ração dos clientes e mande lembrete por WhatsApp perto de acabar.',
      ],
    },
  },

  // ============================================================ CELULARES
  celulares: {
    label: 'Lojas de celular',
    caseRef: 'Celularis: R$ 1,5 mil por loja virando R$ 50 mil/mês, em 9 lojas',
    start: 'intro',
    nodes: {
      intro: { type: 'statement', eyebrow: 'Diagnóstico gratuito · Lojas de celular', title: 'Cada loja sua pode vender mais. Vamos descobrir quanto.', body: 'Algumas perguntas rápidas (2 minutos). No caminho, você vê o que funciona nesse mercado de verdade. No final, a gente fala com honestidade se faz sentido conversar.', cta: 'Começar →', next: 'q_lojas' },

      q_lojas: { type: 'question', q: 'Quantas lojas você tem?', opts: [
        { t: '1 loja' }, { t: '2 a 5 lojas' }, { t: '6 lojas ou mais' },
      ], next: 'q_operacao' },

      q_operacao: { type: 'question', q: 'O que é mais forte na sua operação?', opts: [
        { t: 'Venda de aparelhos' }, { t: 'Assistência técnica' }, { t: 'Acessórios' }, { t: 'Tudo isso junto' },
      ], next: 'q_desafio' },

      q_desafio: { type: 'question', q: 'Qual é o maior desafio hoje?', opts: [
        { t: 'Atrair mais gente pra loja', next: 'st_atrair' },
        { t: 'Concorrência e marketplace esmagando a margem', next: 'st_preco' },
        { t: 'Marca pouco conhecida', next: 'st_marca' },
        { t: 'Fazer cada loja vender mais', next: 'st_escala' },
      ] },

      st_atrair: { type: 'statement', eyebrow: 'O que funciona', title: 'Quem quebra a tela procura conserto AGORA.', body: '"Trocar tela perto de mim", "iPhone usado", "assistência". 52% dos brasileiros já quebraram a tela, e quem quebra procura AGORA, sem celular na mão. Quem aparece primeiro leva. Anúncio local + WhatsApp respondendo rápido é a máquina de encher loja mais previsível desse mercado.', next: 'q_anuncios' },
      st_preco: { type: 'statement', eyebrow: 'O que funciona', title: 'Contra marketplace, sua arma é o que ele não tem: agilidade e confiança.', body: 'Conserto no mesmo dia, aparelho na mão na hora, trade-in do usado, garantia local com rosto. Quem comunica isso bem para de competir por preço com a internet inteira e passa a vender conveniência, com margem.', next: 'q_anuncios' },
      st_marca: { type: 'statement', eyebrow: 'O que funciona', title: 'Nesse mercado, confiança vale mais que desconto.', body: 'Celular é compra de valor alto e medo de golpe. Marca com presença constante, avaliações, vitrine em vídeo e prova social vende mais caro que o concorrente informal. A Celularis construiu isso e cada loja virou máquina de R$ 50 mil/mês.', next: 'q_anuncios' },
      st_escala: { type: 'statement', eyebrow: 'O que funciona', title: 'Escalar loja a loja é jogo de método, não de sorte.', body: 'Campanha por raio de cada unidade, verba distribuída pelo potencial de cada loja e leitura semanal dos números. Foi exatamente assim que a Celularis levou 9 lojas a retornar R$ 50 mil/mês cada, investindo R$ 1,5 mil por unidade.', next: 'q_anuncios' },

      q_anuncios: { type: 'question', q: 'Você já investe em anúncios (Meta ou Google)?', opts: [
        { t: 'Nunca investi', next: 'st_nunca' },
        { t: 'Já tentei, não funcionou', next: 'q_erro' },
        { t: 'Invisto todo mês', next: 'st_otimizar' },
      ] },

      st_nunca: { type: 'statement', eyebrow: 'Sendo direto', title: '"Anúncio atrai curioso, não comprador". Depende de quem faz.', body: 'Anúncio genérico atrai curioso mesmo. Anúncio com oferta certa (troca de tela, entrada facilitada, trade-in) e raio certo atrai quem já está com o problema na mão. A Celularis prova: R$ 1,5 mil por loja, R$ 50 mil de retorno.', next: 'q_faturamento' },
      q_erro: { type: 'question', q: 'O que você acha que deu errado?', opts: [
        { t: 'Fiz por conta própria (impulsionar post)' },
        { t: 'Contratei agência que não entendia o varejo' },
        { t: 'Investi pouco tempo ou pouca verba' },
        { t: 'Sinceramente, não sei dizer' },
      ], next: 'st_erro' },
      st_erro: { type: 'statement', eyebrow: 'A gente vê isso todo dia', title: 'Anúncio sem estratégia é rifa. Com estratégia, é matemática.', body: 'Quase toda tentativa frustrada tem a mesma raiz: sem oferta de entrada, sem segmentação local, sem leitura de dados. Nosso método começa pelo diagnóstico pra não repetir o filme: cada real precisa voltar com juros.', next: 'q_faturamento' },
      st_otimizar: { type: 'statement', eyebrow: 'Bom sinal', title: 'Você já sabe que funciona. Quanto está ficando na mesa?', body: 'Quem já roda mídia geralmente tem 20% a 40% de resultado preso em campanhas sem otimização e criativos cansados. Com múltiplas lojas, redistribuir verba pelo potencial de cada unidade costuma dar salto rápido.', next: 'q_faturamento' },

      q_faturamento: { type: 'question', q: 'Qual o faturamento médio mensal (somando as lojas)?', opts: [
        { t: 'Até R$ 30 mil', flag: 'fat_baixo' },
        { t: 'R$ 30 mil a R$ 100 mil' },
        { t: 'R$ 100 mil a R$ 500 mil' },
        { t: 'Acima de R$ 500 mil' },
      ], next: 'st_investimento' },

      st_investimento: { type: 'statement', eyebrow: 'Transparência antes de tudo', title: 'Nosso trabalho começa em R$ 3.000/mês.', body: 'Isso cobre estratégia, criativos, gestão e a verba de anúncios pra começar com força. Pra calibrar: na Celularis, R$ 1,5 mil de mídia por loja retorna R$ 50 mil/mês por unidade. Investimento sem retorno é custo; nosso trabalho é fazer virar receita.', next: 'q_verba' },
      q_verba: { type: 'question', q: 'Um investimento a partir de R$ 3.000/mês cabe no seu momento?', opts: [
        { t: 'Cabe, se trouxer retorno' },
        { t: 'Agora não cabe', flag: 'sem_verba' },
      ], next: 'q_urgencia' },

      q_urgencia: { type: 'question', q: 'Se fizer sentido, quando você quer começar?', opts: [
        { t: 'O quanto antes' },
        { t: 'Nos próximos 30 dias' },
        { t: 'Só pesquisando por enquanto', flag: 'pesquisando' },
      ], next: 'input_nome' },

      input_nome: { type: 'form', q: 'Pra fechar, seus dados:', fields: [
        { k: 'nome', label: 'Nome', placeholder: 'Seu nome' },
        { k: 'empresa', label: 'Nome da empresa', placeholder: 'Nome da loja' },
        { k: 'numero', label: 'Número (WhatsApp)', placeholder: '(92) 9 0000-0000', type: 'tel' },
        { k: 'instagram', label: '@ do Instagram', placeholder: '@sualoja', opt: true },
      ], next: 'result' },
    },
    apto: {
      title: 'sua operação está pronta pra escalar.',
      body: 'Pelo seu cenário, dá pra montar um plano loja a loja com previsibilidade: oferta de entrada, anúncio local e leitura semanal de número. Clica abaixo que seu diagnóstico chega pronto no nosso WhatsApp e a gente conversa.',
    },
    naoApto: {
      title: 'sendo honestos: ainda não é o momento.',
      body: 'Pelo que você respondeu, investir R$ 3.000/mês agora forçaria o caixa, e a gente não coloca cliente em risco pra bater meta. Pra esse momento, recomendamos:',
      dicas: [
        'Capriche no Google Maps: fotos da loja, avaliações e horário sempre atualizado.',
        'Poste vídeos curtos de consertos e chegadas de aparelhos: prova de confiança.',
        'Atenda rápido no WhatsApp: em conserto, quem responde primeiro leva o cliente.',
      ],
    },
  },
};
