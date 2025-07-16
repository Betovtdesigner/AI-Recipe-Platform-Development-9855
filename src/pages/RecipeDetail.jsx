import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowLeft, FiClock, FiStar, FiHeart, FiUsers, FiCheck, FiInfo } = FiIcons;

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getRecipeById, toggleFavorite, favoriteRecipes } = useRecipes();
  const [recipe, setRecipe] = useState(null);
  const [activeTab, setActiveTab] = useState('ingredients');
  const [checkedIngredients, setCheckedIngredients] = useState([]);
  const [completedSteps, setCompletedSteps] = useState([]);

  useEffect(() => {
    const recipeData = getRecipeById(parseInt(id));
    setRecipe(recipeData);
  }, [id, getRecipeById]);

  const toggleIngredient = (index) => {
    setCheckedIngredients(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleStep = (index) => {
    setCompletedSteps(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-primary-600 font-medium">Carregando receita...</p>
        </div>
      </div>
    );
  }

  const isFavorite = favoriteRecipes.includes(recipe.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
              Voltar
            </button>
            
            <button
              onClick={() => toggleFavorite(recipe.id)}
              className={`p-2 rounded-full transition-colors ${
                isFavorite
                  ? 'text-red-500 hover:text-red-600'
                  : 'text-gray-400 hover:text-red-500'
              }`}
            >
              <SafeIcon icon={FiHeart} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Recipe Header */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-primary-500 px-3 py-1 rounded-full text-sm font-medium">
                  {recipe.category}
                </span>
                <span className="bg-black/30 px-3 py-1 rounded-full text-sm">
                  {recipe.difficulty}
                </span>
              </div>
              <h1 className="text-3xl font-bold mb-2">{recipe.name}</h1>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <SafeIcon icon={FiClock} className="w-4 h-4" />
                  <span>{recipe.prepTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <SafeIcon icon={FiUsers} className="w-4 h-4" />
                  <span>1 porção</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Nutrition Info */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <SafeIcon icon={FiInfo} className="w-5 h-5 text-primary-600" />
            Informações Nutricionais
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-primary-50 rounded-xl">
              <div className="text-2xl font-bold text-primary-600">{recipe.calories}</div>
              <div className="text-sm text-gray-600">Calorias</div>
            </div>
            <div className="text-center p-4 bg-secondary-50 rounded-xl">
              <div className="text-2xl font-bold text-secondary-600">{recipe.protein}g</div>
              <div className="text-sm text-gray-600">Proteína</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <div className="text-2xl font-bold text-green-600">{recipe.carbs}g</div>
              <div className="text-sm text-gray-600">Carboidratos</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-xl">
              <div className="text-2xl font-bold text-orange-600">{recipe.fat}g</div>
              <div className="text-sm text-gray-600">Gorduras</div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab('ingredients')}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === 'ingredients'
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                Ingredientes
              </button>
              <button
                onClick={() => setActiveTab('instructions')}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === 'instructions'
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                Modo de Preparo
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'ingredients' && (
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Ingredientes ({recipe.ingredients.length})
                </h3>
                {recipe.ingredients.map((ingredient, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer ${
                      checkedIngredients.includes(index)
                        ? 'bg-primary-50 text-primary-900'
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => toggleIngredient(index)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      checkedIngredients.includes(index)
                        ? 'bg-primary-500 border-primary-500'
                        : 'border-gray-300'
                    }`}>
                      {checkedIngredients.includes(index) && (
                        <SafeIcon icon={FiCheck} className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <span className={checkedIngredients.includes(index) ? 'line-through' : ''}>
                      {ingredient}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'instructions' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Modo de Preparo ({recipe.instructions.length} passos)
                </h3>
                {recipe.instructions.map((instruction, index) => (
                  <motion.div
                    key={index}
                    className={`flex gap-4 p-4 rounded-lg transition-colors cursor-pointer ${
                      completedSteps.includes(index)
                        ? 'bg-green-50 text-green-900'
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => toggleStep(index)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      completedSteps.includes(index)
                        ? 'bg-green-500 text-white'
                        : 'bg-primary-500 text-white'
                    }`}>
                      {completedSteps.includes(index) ? (
                        <SafeIcon icon={FiCheck} className="w-4 h-4" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={completedSteps.includes(index) ? 'line-through' : ''}>
                        {instruction}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Tips */}
        {recipe.tips && (
          <motion.div
            className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-2xl p-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <SafeIcon icon={FiStar} className="w-5 h-5 text-secondary-600" />
              Dica da Chef
            </h3>
            <p className="text-gray-700">{recipe.tips}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetail;