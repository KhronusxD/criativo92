import React from 'react';
import { Button } from './Button';
import { 
  BarChart3, 
  TrendingUp, 
  AlertTriangle, 
  Users, 
  Smartphone, 
  Target, 
  CheckCircle2, 
  ArrowDown,
  Trophy,
  DollarSign,
  Star,
  Quote
} from 'lucide-react';

interface LandingPageProps {
  onStartQuiz: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStartQuiz }) => {
  return (
    <div className="min-h-screen bg-c92-bg overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-c92-bg/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-c92 rounded flex items-center justify-center font-bold text-black font-mono">C</div>
            <span className="text-white font-bold tracking-tighter text-xl">C92 <span className="text-c92">ACELERADORA</span></span>
          </div>
          <button onClick={onStartQuiz} className="hidden md:block text-sm font-bold text-white hover:text-c92 transition-colors">
            ÁREA DE MEMBROS
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-c92/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-c92 animate-pulse"></div>
            <span className="text-c92 font-mono text-xs md:text-sm tracking-widest uppercase">Sistema de Análise de Vendas C92</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
            Descubra exatamente o que está impedindo sua Loja de Celulares de <span className="text-transparent bg-clip-text bg-gradient-to-r from-c92 to-emerald-600 green-glow-text">dobrar o faturamento.</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            Responda nosso Diagnóstico Estratégico em 60 segundos e receba uma análise personalizada sobre como destravar seu estoque parado e escalar suas vendas de iPhones e serviços.
          </p>

          <div className="flex flex-col items-center gap-4">
            <Button onClick={onStartQuiz} pulsing withIcon className="text-lg px-10 py-5">
              INICIAR DIAGNÓSTICO GRATUITO
            </Button>
            <p className="text-zinc-500 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-c92" />
              Análise baseada em dados de mais de R$ 120 Milhões em vendas
            </p>
          </div>
        </div>
      </section>

      {/* Authority Stats Bar */}
      <section className="border-y border-zinc-800 bg-zinc-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
          <div className="p-8 flex flex-col items-center text-center group hover:bg-zinc-900/50 transition-colors">
            <div className="mb-2 p-3 bg-zinc-900 rounded-full group-hover:scale-110 transition-transform duration-300">
              <DollarSign className="w-6 h-6 text-c92" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">+R$ 120M</h3>
            <p className="text-zinc-500 text-sm font-mono uppercase tracking-wider">Vendas Geradas para Clientes</p>
          </div>
          
          <div className="p-8 flex flex-col items-center text-center group hover:bg-zinc-900/50 transition-colors">
            <div className="mb-2 p-3 bg-zinc-900 rounded-full group-hover:scale-110 transition-transform duration-300">
              <BarChart3 className="w-6 h-6 text-c92" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">+R$ 15M</h3>
            <p className="text-zinc-500 text-sm font-mono uppercase tracking-wider">Investidos em Tráfego Pago</p>
          </div>

          <div className="p-8 flex flex-col items-center text-center group hover:bg-zinc-900/50 transition-colors">
            <div className="mb-2 p-3 bg-zinc-900 rounded-full group-hover:scale-110 transition-transform duration-300">
              <Trophy className="w-6 h-6 text-c92" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">+850</h3>
            <p className="text-zinc-500 text-sm font-mono uppercase tracking-wider">Lojas Aceleradas no Brasil</p>
          </div>
        </div>
      </section>

      {/* Why Take the Quiz Section */}
      <section className="py-20 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Onde está o gargalo da sua operação?</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              A maioria dos lojistas acha que o problema é preço, mas nossos dados mostram que o erro geralmente está em um destes 3 pilares. O Quiz vai identificar qual é o seu:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-c92/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-c92/10 transition-colors">
                <Users className="w-7 h-7 text-c92" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Tráfego Desqualificado</h3>
              <p className="text-zinc-400 leading-relaxed">Você atrai curiosos, não compradores de iPhone. Seu custo por lead é alto e a qualidade é baixa.</p>
            </div>

            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-c92/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-c92/10 transition-colors">
                <Smartphone className="w-7 h-7 text-c92" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Falha na Oferta</h3>
              <p className="text-zinc-400 leading-relaxed">Seu estoque é bom, mas a percepção de valor está baixa. Você acaba brigando por preço e perdendo margem.</p>
            </div>

            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-c92/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-c92/10 transition-colors">
                <TrendingUp className="w-7 h-7 text-c92" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Processo Comercial</h3>
              <p className="text-zinc-400 leading-relaxed">O lead chega no WhatsApp, mas sua equipe não fecha. Falta script, falta follow-up e técnica de fechamento.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button onClick={onStartQuiz} variant="secondary">
              QUERO DESCOBRIR MEU GARGALO
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof & Results */}
      <section className="py-20 px-6 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          {/* Data Proof */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-c92/10 border border-c92/20 mb-6">
                 <Target className="w-4 h-4 text-c92" />
                 <span className="text-c92 text-xs font-bold uppercase">Resultados Comprovados</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                O resultado de quem ajustou a rota com a C92
              </h2>
              <p className="text-lg text-zinc-300 mb-8 border-l-4 border-c92 pl-4">
                "Lojas que aplicaram nossas correções viram aumento de <span className="text-c92 font-bold">30% a 150% no giro de estoque</span> em menos de 45 dias."
              </p>
              
              <div className="space-y-4">
                {[
                  "Aumento de 210% no lucro líquido no primeiro trimestre.",
                  "Redução do CAC (Custo por Cliente) em 45%.",
                  "Equipe de vendas convertendo 3x mais leads do WhatsApp."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-c92 shrink-0" />
                    <span className="text-zinc-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Abstract decorative elements simulating dashboards */}
              <div className="absolute -inset-4 bg-c92/20 blur-3xl rounded-full opacity-30"></div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="space-y-1">
                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Faturamento Mensal</div>
                    <div className="text-3xl font-bold text-white group-hover:text-c92 transition-colors">R$ 482.590,00</div>
                  </div>
                  <div className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" /> +124%
                  </div>
                </div>
                
                {/* Simulated Chart */}
                <div className="h-40 flex items-end justify-between gap-2">
                  {[30, 45, 35, 60, 50, 75, 65, 90, 85, 100].map((h, i) => (
                    <div key={i} className="w-full bg-zinc-800 rounded-t hover:bg-c92 transition-colors duration-300" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>
              
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 absolute -bottom-6 -left-6 z-20 w-64 shadow-xl">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                        <Smartphone className="text-white w-5 h-5"/>
                    </div>
                    <div>
                        <div className="text-sm text-zinc-400">Vendas de iPhones</div>
                        <div className="text-lg font-bold text-c92">127 Unidades</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="pt-12 border-t border-zinc-900">
             <h3 className="text-2xl font-bold text-white text-center mb-12">Quem aplicou e aprovou o método</h3>
             <div className="grid md:grid-cols-3 gap-6">
               
               {/* Testimonial 1 */}
               <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl hover:border-c92/30 transition-all">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-c92 fill-c92" />)}
                  </div>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-zinc-800 fill-zinc-800 transform rotate-180" />
                    <p className="text-zinc-300 text-sm relative z-10 leading-relaxed mb-6">
                      "Minha loja faturava 40k e eu não sabia mais o que fazer. O diagnóstico mostrou que eu perdia dinheiro na compra. Em 3 meses de C92, <span className="text-white font-bold">batemos 150k de faturamento</span>."
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-c92 border border-zinc-700">M</div>
                    <div>
                      <div className="text-white font-bold text-sm">Marcos Silva</div>
                      <div className="text-zinc-500 text-xs">Proprietário @ iTech Imports</div>
                    </div>
                  </div>
               </div>

               {/* Testimonial 2 */}
               <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl hover:border-c92/30 transition-all">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-c92 fill-c92" />)}
                  </div>
                  <p className="text-zinc-300 text-sm relative z-10 leading-relaxed mb-6">
                    "Eu achava que tráfego era só impulsionar botão. A C92 estruturou meu comercial e hoje <span className="text-white font-bold">recebemos 50 leads qualificados por dia</span>. A taxa de conversão triplicou."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-c92 border border-zinc-700">F</div>
                    <div>
                      <div className="text-white font-bold text-sm">Fernanda Costa</div>
                      <div className="text-zinc-500 text-xs">Sócia @ Apple Prime SP</div>
                    </div>
                  </div>
               </div>

               {/* Testimonial 3 */}
               <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl hover:border-c92/30 transition-all">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-c92 fill-c92" />)}
                  </div>
                  <p className="text-zinc-300 text-sm relative z-10 leading-relaxed mb-6">
                    "O que mais me impressionou foi a análise de estoque. Eu tinha 80k parado em aparelhos que não giravam. Destravamos isso em 20 dias e <span className="text-white font-bold">o caixa respirou novamente</span>."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-c92 border border-zinc-700">R</div>
                    <div>
                      <div className="text-white font-bold text-sm">Renan Oliveira</div>
                      <div className="text-zinc-500 text-xs">Fundador @ Rei do Xiaomi</div>
                    </div>
                  </div>
               </div>

             </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-zinc-900/30 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Como funciona o Diagnóstico C92?</h2>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12">
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold text-white mb-2">1. Mapeamento</h3>
                  <p className="text-zinc-400">Você responde perguntas rápidas sobre seu modelo de negócio (Físico/Online/Assistência).</p>
                </div>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-zinc-900 border-2 border-c92 rounded-full z-10 flex items-center justify-center order-1 md:order-2">
                   <span className="text-c92 text-xs font-bold">1</span>
                </div>
                 <div className="md:w-1/2 order-3 md:order-3 pl-16 md:pl-0"></div>
              </div>

              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 order-3 md:order-1"></div>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-zinc-900 border-2 border-c92 rounded-full z-10 flex items-center justify-center order-1 md:order-2">
                   <span className="text-c92 text-xs font-bold">2</span>
                </div>
                <div className="md:w-1/2 text-left order-2 md:order-3 pl-16 md:pl-0">
                  <h3 className="text-xl font-bold text-white mb-2">2. Análise</h3>
                  <p className="text-zinc-400">Nossa inteligência cruza seus dados com as estratégias que mais funcionam no mercado hoje.</p>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold text-white mb-2">3. Plano de Ação</h3>
                  <p className="text-zinc-400">Você recebe o direcionamento ou a oportunidade de uma consultoria com nossos especialistas.</p>
                </div>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-c92 rounded-full z-10 flex items-center justify-center order-1 md:order-2 green-glow">
                   <CheckCircle2 className="w-4 h-4 text-black" />
                </div>
                <div className="md:w-1/2 order-3 md:order-3 pl-16 md:pl-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-c92/10 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Seu próximo nível de faturamento está a um clique de distância.
          </h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Pare de "achar" e comece a ter certeza. Entenda os números da sua loja agora.
          </p>
          <Button onClick={onStartQuiz} pulsing fullWidth className="max-w-md text-xl py-6 shadow-2xl shadow-c92/20">
            FAZER DIAGNÓSTICO AGORA ➤
          </Button>
          <div className="mt-8 flex justify-center space-x-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholders for logos if needed */}
             <div className="h-8 w-24 bg-zinc-800 rounded"></div>
             <div className="h-8 w-24 bg-zinc-800 rounded"></div>
             <div className="h-8 w-24 bg-zinc-800 rounded"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <span className="text-white font-bold tracking-tighter">C92 <span className="text-c92">ACELERADORA</span></span>
          </div>
          <p className="text-zinc-600 text-sm">© 2024 C92 Aceleradora. Todos os direitos reservados.</p>
          <div className="flex gap-4">
             <a href="#" className="text-zinc-600 hover:text-white transition-colors">Termos</a>
             <a href="#" className="text-zinc-600 hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
};