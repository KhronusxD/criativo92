import React, { useState, useMemo } from 'react';
import { X } from 'lucide-react';
import Quiz from './components/Quiz';
import LoadingScreen from './components/LoadingScreen';
import LeadForm from './components/LeadForm';
import Results from './components/Results';
import ProgressBar from './components/ProgressBar';
import { QUESTIONS } from './constants';
import { AppStep, UserAnswers, QuestionOption, LeadData, DiagnosisResult } from './types';

interface QuizModalProps {
    onClose: () => void;
}

const QuizModal: React.FC<QuizModalProps> = ({ onClose }) => {
    const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.QUIZ);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<UserAnswers>({});
    const [leadData, setLeadData] = useState<LeadData | null>(null);

    // -- Handlers --

    const handleQuizAnswer = (option: QuestionOption) => {
        // Record answer
        const currentQ = QUESTIONS[currentQuestionIndex];
        setAnswers(prev => ({ ...prev, [currentQ.id]: option }));

        // Delay for animation then move next
        setTimeout(() => {
            if (currentQuestionIndex < QUESTIONS.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
            } else {
                setCurrentStep(AppStep.LOADING);
            }
        }, 400);
    };

    const handleLoadingComplete = () => {
        setCurrentStep(AppStep.GATE);
    };

    const handleLeadSubmit = (data: LeadData) => {
        setLeadData(data);
        // Here you would typically send data to backend/webhook
        console.log("Lead captured:", data, "Answers:", answers);
        setCurrentStep(AppStep.RESULTS);
    };

    // -- Logic for Results Generation --
    const result: DiagnosisResult = useMemo(() => {
        // 1. Calculate base score from answers
        let rawScore = 50; // Base score
        Object.values(answers).forEach((ans) => {
            const option = ans as QuestionOption;
            if (option.scoreImpact) rawScore += option.scoreImpact;
        });
        // Cap score
        const finalScore = Math.min(Math.max(rawScore, 15), 95);

        // 2. Determine Verdict based on "Pain" question (Question ID 3 in new constants)
        const painAnswer = answers[3]?.value;
        let verdictTitle = "Gargalo Desconhecido";
        let verdictDesc = "Sua operação possui falhas, mas precisamos de uma análise manual mais profunda.";
        let category = "Geral";

        switch (painAnswer) {
            case 'trafego':
                verdictTitle = "A Vitrine Invisível";
                verdictDesc = "Seu estoque é bom, mas ninguém o vê. Você está operando no escuro. Sem tráfego qualificado e constante, seu negócio depende de sorte ou indicação, o que impede a escala previsível da sua loja.";
                category = "Tráfego Pago";
                break;
            case 'vendas': // Was 'conversao'
                verdictTitle = "O Balde Furado";
                verdictDesc = "O seu gargalo é clássico. Você está pagando por tráfego ou gerando leads, mas sua equipe não fecha. Estima-se que você perca 40% da verba aqui por falta de script, follow-up e técnica de fechamento.";
                category = "Processo Comercial";
                break;
            case 'estoque': // Was 'publico' (sort of) or new
                verdictTitle = "Cemitério de Celulares";
                verdictDesc = "Você tem capital parado na prateleira. Aparelhos que não giram desvalorizam e matam seu fluxo de caixa. O erro está na estratégia de oferta e mix de produto.";
                category = "Gestão de Estoque";
                break;
            case 'margem':
                verdictTitle = "Corrida dos Ratos";
                verdictDesc = "Você vende muito mas não vê a cor do dinheiro. A briga por preço está corroendo seu lucro. É preciso reposicionar sua marca para vender valor, não apenas commodity.";
                category = "Precificação e Posicionamento";
                break;
        }

        return {
            score: finalScore,
            verdictTitle,
            verdictDescription: verdictDesc,
            category
        };
    }, [answers]);

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="fixed top-6 right-6 z-[60] text-zinc-400 hover:text-white bg-zinc-900/50 p-2 rounded-full border border-zinc-800 transition-colors"
            >
                <X className="w-6 h-6" />
            </button>

            <div className="w-full max-w-6xl mx-auto relative bg-c92-bg min-h-[50vh] flex flex-col items-center justify-center md:rounded-3xl border border-zinc-800/50 shadow-2xl overflow-hidden">

                {currentStep === AppStep.QUIZ && (
                    <div className="w-full absolute top-0 left-0">
                        <ProgressBar
                            currentStep={currentQuestionIndex + 1}
                            totalSteps={QUESTIONS.length}
                        />
                    </div>
                )}

                <div className="w-full py-12 md:py-8 min-h-[600px] flex items-center justify-center">
                    {currentStep === AppStep.QUIZ && (
                        <Quiz
                            question={QUESTIONS[currentQuestionIndex]}
                            onAnswer={handleQuizAnswer}
                            currentStepIndex={currentQuestionIndex + 1}
                        />
                    )}

                    {currentStep === AppStep.LOADING && (
                        <LoadingScreen onComplete={handleLoadingComplete} />
                    )}

                    {currentStep === AppStep.GATE && (
                        <LeadForm onSubmit={handleLeadSubmit} />
                    )}

                    {currentStep === AppStep.RESULTS && leadData && (
                        <Results result={result} leadData={leadData} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuizModal;
