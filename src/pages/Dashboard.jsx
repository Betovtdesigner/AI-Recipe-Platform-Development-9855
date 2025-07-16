import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useRecipes } from '../context/RecipeContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiHeart, FiClock, FiTrendingUp, FiStar, FiChef, FiCalendar, FiSettings } = FiIcons;

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useUser();
  const { getDailyRecipe, getPersonalizedRecipes, favoriteRecipes, toggleFavorite } = useRecipes();
  const [dailyRecipe, setDailyRecipe] = useState(null);
  const [suggestedRecipes, setSuggestedRecipes] = useState([]);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    if (!user) {
      navigate('/');
      return;
    }

    // Definir saudação baseada no gênero e horário
    const hour = new Date().getHours();
    let timeGreeting = '';
    
    if (hour < 12) timeGreeting = 'Bom dia';
    else if (hour < 18) timeGreeting = 'Boa tarde';
    else timeGreeting = 'Boa noite';

    const genderGreeting = user.gender === 'feminino' ? 'querida' : 
                          user.gender === 'masculino' ? 'querido' : 'querida pessoa';
    
    setGreeting(`${timeGreeting}, ${genderGreeting} ${user.name}!`);

    // Buscar receita diária
    const recipe = getDailyRecipe(user);
    setDailyRecipe(recipe);

    // Buscar receitas sugeridas
    const suggested = getPersonalizedRecipes(user).slice(0, 6);
    setSuggestedRecipes(suggested);
  }, [user, navigate, getDailyRecipe, getPersonalizedRecipes]);

  const getBiotypeInfo = (biotype) => {
    const info = {
      ectomorfo: {
        name: 'Ectomorfo',
        description: 'Metabolismo rápido, foco em ganho de massa',
        color: 'from-blue-500 to-purple-500',
        emoji: '🏃‍♂️'
      },
      mesomorfo: {
        name: 'Mesomorfo',
        description: 'Corpo atlético, equilibrio entre ganho e perda',
        color: 'from-green-500 to-teal-500',
        emoji: '💪'
      },
      endomorfo: {
        name: 'Endomorfo',
        description: 'Metabolismo lento, foco em queima de gordura',
        color: 'from-orange-500 to-red-500',
        emoji: '🤸‍♀️'
      }
    };
    return info[biotype] || info.mesomorfo;
  };

  const biotypeInfo = getBiotypeInfo(user?.biotype);

  if (!user) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="bg-primary-500 w-12 h-12 rounded-full flex items-center justify-center">
                <SafeIcon icon={FiChef} className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">IA Culinária</h1>
                <p className="text-sm text-gray-600">Sua assistente pessoal de receitas</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/quiz')}
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <SafeIcon icon={FiSettings} className="w-6 h-6" />
              </button>
              <button
                onClick={logout}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Greeting Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{greeting}</h2>
          <p className="text-gray-600">
            Que tal descobrir uma receita deliciosa para hoje?
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          className={`bg-gradient-to-r ${biotypeInfo.color} rounded-3xl p-6 mb-8 text-white`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{biotypeInfo.emoji}</span>
                <h3 className="text-xl font-bold">{biotypeInfo.name}</h3>
              </div>
              <p className="text-white/90 mb-4">{biotypeInfo.description}</p>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <SafeIcon icon={FiUser} className="w-4 h-4" />
                  <span>{user.age} anos</span>
                </div>
                <div className="flex items-center gap-1">
                  <SafeIcon icon={FiTrendingUp} className="w-4 h-4" />
                  <span>{user.goals?.length || 0} objetivos</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-white/20 rounded-lg p-3">
                <div className="text-2xl font-bold">{suggestedRecipes.length}</div>
                <div className="text-sm text-white/80">Receitas disponíveis</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Daily Recipe */}
        {dailyRecipe && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <SafeIcon icon={FiCalendar} className="w-6 h-6 text-primary-600" />
              Receita do Dia
            </h3>
            
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={dailyRecipe.image}
                    alt={dailyRecipe.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                      {dailyRecipe.category}
                    </span>
                    <button
                      onClick={() => toggleFavorite(dailyRecipe.id)}
                      className={`p-2 rounded-full transition-colors ${
                        favoriteRecipes.includes(dailyRecipe.id)
                          ? 'text-red-500 hover:text-red-600'
                          : 'text-gray-400 hover:text-red-500'
                      }`}
                    >
                      <SafeIcon icon={FiHeart} className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{dailyRecipe.name}</h4>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-gray-900">{dailyRecipe.calories}</div>
                      <div className="text-sm text-gray-600">Calorias</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-gray-900">{dailyRecipe.protein}g</div>
                      <div className="text-sm text-gray-600">Proteína</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <SafeIcon icon={FiClock} className="w-4 h-4" />
                      <span>{dailyRecipe.prepTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <SafeIcon icon={FiStar} className="w-4 h-4" />
                      <span>{dailyRecipe.difficulty}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => navigate(`/recipe/${dailyRecipe.id}`)}
                    className="w-full bg-primary-600 text-white py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors"
                  >
                    Ver Receita Completa
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Suggested Recipes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Receitas Recomendadas</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestedRecipes.map((recipe, index) => (
              <motion.div
                key={recipe.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => navigate(`/recipe/${recipe.id}`)}
              >
                <div className="relative">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-48 object-cover"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(recipe.id);
                    }}
                    className={`absolute top-3 right-3 p-2 rounded-full bg-white/80 transition-colors ${
                      favoriteRecipes.includes(recipe.id)
                        ? 'text-red-500 hover:text-red-600'
                        : 'text-gray-400 hover:text-red-500'
                    }`}
                  >
                    <SafeIcon icon={FiHeart} className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-secondary-100 text-secondary-600 px-2 py-1 rounded-full text-xs font-medium">
                      {recipe.category}
                    </span>
                    <span className="text-sm text-gray-600">{recipe.prepTime}</span>
                  </div>
                  
                  <h4 className="font-bold text-gray-900 mb-2">{recipe.name}</h4>
                  
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{recipe.calories} cal</span>
                    <span>{recipe.protein}g proteína</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;