import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiStar, FiHeart, FiTrendingUp, FiUsers, FiCheck } = FiIcons;

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: FiStar,
      title: "IA Personalizada",
      description: "Receitas adaptadas ao seu biótipo e objetivos únicos"
    },
    {
      icon: FiHeart,
      title: "1000+ Receitas",
      description: "Biblioteca completa de receitas saudáveis e saborosas"
    },
    {
      icon: FiTrendingUp,
      title: "Resultados Reais",
      description: "Acompanhe seu progresso e alcance seus objetivos"
    },
    {
      icon: FiUsers,
      title: "Comunidade",
      description: "Conecte-se com pessoas que compartilham seus objetivos"
    }
  ];

  const benefits = [
    "Receitas personalizadas para seu biótipo",
    "Planos alimentares adaptados ao seu gênero",
    "Sugestões diárias sem repetição",
    "Acompanhamento nutricional detalhado",
    "Interface intuitiva e moderna"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Sua IA Culinária
              <br />
              Personalizada
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Descubra receitas saudáveis e deliciosas adaptadas ao seu biótipo, 
              objetivos e preferências pessoais. Nunca mais fique sem inspiração na cozinha!
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button
                onClick={() => navigate('/quiz')}
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                Começar Agora
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-2 text-primary-100">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-300 fill-current" />
                  ))}
                </div>
                <span className="text-sm">4.9/5 - Mais de 10.000 usuários satisfeitos</span>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce-subtle"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que escolher nossa IA?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tecnologia avançada combinada com conhecimento nutricional para criar 
              a experiência culinária perfeita para você.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-primary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={feature.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Transforme sua alimentação com inteligência
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Nossa IA analisa seu perfil completo para criar um plano alimentar 
                personalizado que se adapta ao seu estilo de vida e objetivos.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-primary-500 rounded-full p-1">
                      <SafeIcon icon={FiCheck} className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3">
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-6 text-white">
                  <h3 className="text-2xl font-bold mb-4">Receita do Dia</h3>
                  <div className="space-y-3">
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="font-medium">Salmão Grelhado com Quinoa</p>
                      <p className="text-sm text-primary-100">Perfeito para seu biótipo mesomorfo</p>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Calorias: 420</span>
                      <span>Proteína: 35g</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Pronto para revolucionar sua alimentação?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Junte-se a milhares de pessoas que já transformaram seus hábitos alimentares 
              com nossa IA personalizada.
            </p>
            <button
              onClick={() => navigate('/quiz')}
              className="bg-white text-primary-600 px-10 py-4 rounded-full font-semibold text-xl hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-3"
            >
              Começar Minha Jornada
              <SafeIcon icon={FiArrowRight} className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;