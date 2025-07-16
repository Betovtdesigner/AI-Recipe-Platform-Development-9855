import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiArrowLeft, FiUser, FiActivity, FiTarget, FiHeart } = FiIcons;

const QuizPage = () => {
  const navigate = useNavigate();
  const { saveUser } = useUser();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 'name',
      title: 'Qual é o seu nome?',
      subtitle: 'Como gostaria de ser chamado(a)?',
      type: 'text',
      icon: FiUser,
      placeholder: 'Digite seu nome...'
    },
    {
      id: 'gender',
      title: 'Qual é o seu gênero?',
      subtitle: 'Isso nos ajuda a personalizar melhor as receitas',
      type: 'choice',
      icon: FiUser,
      options: [
        { value: 'feminino', label: 'Feminino', emoji: '👩' },
        { value: 'masculino', label: 'Masculino', emoji: '👨' },
        { value: 'outro', label: 'Outro', emoji: '👤' }
      ]
    },
    {
      id: 'age',
      title: 'Qual é a sua idade?',
      subtitle: 'Isso nos ajuda a calcular suas necessidades nutricionais',
      type: 'number',
      icon: FiUser,
      placeholder: 'Digite sua idade...'
    },
    {
      id: 'biotype',
      title: 'Qual é o seu biótipo?',
      subtitle: 'Não sabe? Não se preocupe! Escolha a opção que mais combina com você',
      type: 'choice',
      icon: FiActivity,
      options: [
        { 
          value: 'ectomorfo', 
          label: 'Ectomorfo',
          description: 'Corpo magro, metabolismo rápido, dificuldade para ganhar peso',
          emoji: '🏃‍♂️'
        },
        { 
          value: 'mesomorfo', 
          label: 'Mesomorfo',
          description: 'Corpo atlético, ganha e perde peso facilmente, músculos definidos',
          emoji: '💪'
        },
        { 
          value: 'endomorfo', 
          label: 'Endomorfo',
          description: 'Corpo com tendência a acumular gordura, metabolismo mais lento',
          emoji: '🤸‍♀️'
        }
      ]
    },
    {
      id: 'goals',
      title: 'Quais são seus objetivos?',
      subtitle: 'Pode escolher mais de uma opção',
      type: 'multiple',
      icon: FiTarget,
      options: [
        { value: 'perda_peso', label: 'Perder peso', emoji: '⚖️' },
        { value: 'ganho_massa', label: 'Ganhar massa muscular', emoji: '💪' },
        { value: 'manutencao', label: 'Manter o peso atual', emoji: '🎯' },
        { value: 'definicao', label: 'Definir o corpo', emoji: '✨' },
        { value: 'energia', label: 'Mais energia', emoji: '⚡' },
        { value: 'detox', label: 'Desintoxicar', emoji: '🌿' }
      ]
    },
    {
      id: 'restrictions',
      title: 'Tem alguma restrição alimentar?',
      subtitle: 'Selecione todas que se aplicam',
      type: 'multiple',
      icon: FiHeart,
      options: [
        { value: 'vegetariano', label: 'Vegetariano', emoji: '🥗' },
        { value: 'vegano', label: 'Vegano', emoji: '🌱' },
        { value: 'sem_gluten', label: 'Sem glúten', emoji: '🚫' },
        { value: 'sem_lactose', label: 'Sem lactose', emoji: '🥛' },
        { value: 'diabetes', label: 'Diabetes', emoji: '🩺' },
        { value: 'nenhuma', label: 'Nenhuma restrição', emoji: '✅' }
      ]
    },
    {
      id: 'activity',
      title: 'Qual seu nível de atividade física?',
      subtitle: 'Isso nos ajuda a calcular suas necessidades calóricas',
      type: 'choice',
      icon: FiActivity,
      options: [
        { value: 'sedentario', label: 'Sedentário', description: 'Pouco ou nenhum exercício', emoji: '🛋️' },
        { value: 'leve', label: 'Leve', description: '1-3 dias por semana', emoji: '🚶' },
        { value: 'moderado', label: 'Moderado', description: '3-5 dias por semana', emoji: '🏃' },
        { value: 'intenso', label: 'Intenso', description: '6-7 dias por semana', emoji: '🏋️' },
        { value: 'muito_intenso', label: 'Muito Intenso', description: '2x por dia ou atleta', emoji: '🏆' }
      ]
    }
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Finalizar quiz
      const userProfile = {
        name: answers.name,
        gender: answers.gender,
        age: answers.age,
        biotype: answers.biotype,
        goals: answers.goals,
        dietaryRestrictions: answers.restrictions,
        activityLevel: answers.activity,
        createdAt: new Date().toISOString()
      };
      
      saveUser(userProfile);
      navigate('/dashboard');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const isStepValid = () => {
    const currentQuestion = questions[currentStep];
    const answer = answers[currentQuestion.id];
    
    if (currentQuestion.type === 'text' || currentQuestion.type === 'number') {
      return answer && answer.trim() !== '';
    }
    
    if (currentQuestion.type === 'choice') {
      return answer !== undefined;
    }
    
    if (currentQuestion.type === 'multiple') {
      return answer && answer.length > 0;
    }
    
    return false;
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1 
            className="text-3xl font-bold text-gray-900 mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Vamos personalizar sua experiência
          </motion.h1>
          <p className="text-gray-600">
            Etapa {currentStep + 1} de {questions.length}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="bg-white rounded-full h-3 shadow-inner">
            <motion.div 
              className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            className="bg-white rounded-3xl shadow-xl p-8 mb-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={currentQuestion.icon} className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {currentQuestion.title}
              </h2>
              <p className="text-gray-600">
                {currentQuestion.subtitle}
              </p>
            </div>

            {/* Question Content */}
            <div className="max-w-2xl mx-auto">
              {currentQuestion.type === 'text' && (
                <input
                  type="text"
                  placeholder={currentQuestion.placeholder}
                  value={answers[currentQuestion.id] || ''}
                  onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
                />
              )}

              {currentQuestion.type === 'number' && (
                <input
                  type="number"
                  placeholder={currentQuestion.placeholder}
                  value={answers[currentQuestion.id] || ''}
                  onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
                />
              )}

              {currentQuestion.type === 'choice' && (
                <div className="space-y-3">
                  {currentQuestion.options.map((option) => (
                    <motion.button
                      key={option.value}
                      onClick={() => handleAnswer(currentQuestion.id, option.value)}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                        answers[currentQuestion.id] === option.value
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{option.emoji}</span>
                        <div>
                          <div className="font-semibold text-gray-900">{option.label}</div>
                          {option.description && (
                            <div className="text-sm text-gray-600">{option.description}</div>
                          )}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}

              {currentQuestion.type === 'multiple' && (
                <div className="space-y-3">
                  {currentQuestion.options.map((option) => {
                    const isSelected = answers[currentQuestion.id]?.includes(option.value);
                    return (
                      <motion.button
                        key={option.value}
                        onClick={() => {
                          const currentAnswers = answers[currentQuestion.id] || [];
                          const newAnswers = isSelected
                            ? currentAnswers.filter(a => a !== option.value)
                            : [...currentAnswers, option.value];
                          handleAnswer(currentQuestion.id, newAnswers);
                        }}
                        className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                          isSelected
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{option.emoji}</span>
                          <div className="font-semibold text-gray-900">{option.label}</div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              currentStep === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:text-primary-600 hover:bg-white'
            }`}
          >
            <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
            Anterior
          </button>

          <button
            onClick={handleNext}
            disabled={!isStepValid()}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
              isStepValid()
                ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {currentStep === questions.length - 1 ? 'Finalizar' : 'Próximo'}
            <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;