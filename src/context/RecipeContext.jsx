import React, { createContext, useContext, useState, useEffect } from 'react';
import { recipeDatabase } from '../data/recipeDatabase';

const RecipeContext = createContext();

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error('useRecipes must be used within a RecipeProvider');
  }
  return context;
};

export const RecipeProvider = ({ children }) => {
  const [usedRecipes, setUsedRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    const savedUsedRecipes = localStorage.getItem('usedRecipes');
    const savedFavorites = localStorage.getItem('favoriteRecipes');
    
    if (savedUsedRecipes) {
      setUsedRecipes(JSON.parse(savedUsedRecipes));
    }
    
    if (savedFavorites) {
      setFavoriteRecipes(JSON.parse(savedFavorites));
    }
  }, []);

  const getPersonalizedRecipes = (userProfile) => {
    const { biotype, gender, dietaryRestrictions, goals } = userProfile;
    
    let filteredRecipes = recipeDatabase.filter(recipe => {
      // Filtrar por biótipo
      if (!recipe.suitableFor.includes(biotype)) return false;
      
      // Filtrar por restrições alimentares
      if (dietaryRestrictions?.length > 0) {
        const hasRestriction = dietaryRestrictions.some(restriction => 
          recipe.restrictions?.includes(restriction)
        );
        if (hasRestriction) return false;
      }
      
      // Filtrar por objetivos
      if (goals?.length > 0) {
        const matchesGoal = goals.some(goal => 
          recipe.goals?.includes(goal)
        );
        if (!matchesGoal) return false;
      }
      
      return true;
    });

    // Remover receitas já usadas
    filteredRecipes = filteredRecipes.filter(recipe => 
      !usedRecipes.includes(recipe.id)
    );

    // Se restaram poucas receitas, resetar as usadas
    if (filteredRecipes.length < 10) {
      setUsedRecipes([]);
      filteredRecipes = recipeDatabase.filter(recipe => {
        if (!recipe.suitableFor.includes(biotype)) return false;
        
        if (dietaryRestrictions?.length > 0) {
          const hasRestriction = dietaryRestrictions.some(restriction => 
            recipe.restrictions?.includes(restriction)
          );
          if (hasRestriction) return false;
        }
        
        if (goals?.length > 0) {
          const matchesGoal = goals.some(goal => 
            recipe.goals?.includes(goal)
          );
          if (!matchesGoal) return false;
        }
        
        return true;
      });
    }

    return filteredRecipes;
  };

  const getDailyRecipe = (userProfile) => {
    const availableRecipes = getPersonalizedRecipes(userProfile);
    
    if (availableRecipes.length === 0) return null;
    
    // Usar a data atual como seed para consistência
    const today = new Date().toDateString();
    const seed = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const randomIndex = seed % availableRecipes.length;
    
    const selectedRecipe = availableRecipes[randomIndex];
    
    // Marcar como usada
    const newUsedRecipes = [...usedRecipes, selectedRecipe.id];
    setUsedRecipes(newUsedRecipes);
    localStorage.setItem('usedRecipes', JSON.stringify(newUsedRecipes));
    
    return selectedRecipe;
  };

  const toggleFavorite = (recipeId) => {
    const newFavorites = favoriteRecipes.includes(recipeId)
      ? favoriteRecipes.filter(id => id !== recipeId)
      : [...favoriteRecipes, recipeId];
    
    setFavoriteRecipes(newFavorites);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
  };

  const getRecipeById = (id) => {
    return recipeDatabase.find(recipe => recipe.id === id);
  };

  return (
    <RecipeContext.Provider value={{
      getPersonalizedRecipes,
      getDailyRecipe,
      toggleFavorite,
      getRecipeById,
      favoriteRecipes,
      usedRecipes
    }}>
      {children}
    </RecipeContext.Provider>
  );
};