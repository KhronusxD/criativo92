import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = Math.min(((currentStep) / totalSteps) * 100, 100);

  return (
    <div className="w-full">
      <div className="h-1.5 w-full bg-zinc-900">
        <div
          className="h-full bg-gradient-to-r from-c92 to-c92/80 transition-all duration-700 ease-out shadow-[0_0_10px_rgba(0,230,118,0.5)]"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="absolute top-3 right-4 text-xs font-mono text-zinc-500">
        {Math.round(progress)}% COMPLETO
      </div>
    </div>
  );
};

export default ProgressBar;