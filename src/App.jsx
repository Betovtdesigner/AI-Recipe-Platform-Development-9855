import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import QuizPage from './pages/QuizPage';
import Dashboard from './pages/Dashboard';
import RecipeDetail from './pages/RecipeDetail';
import { UserProvider } from './context/UserContext';
import { RecipeProvider } from './context/RecipeContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-primary-600 font-medium">Carregando sua experiência culinária...</p>
        </div>
      </div>
    );
  }

  return (
    <UserProvider>
      <RecipeProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/recipe/:id" element={<RecipeDetail />} />
              </Routes>
            </AnimatePresence>
          </div>
        </Router>
      </RecipeProvider>
    </UserProvider>
  );
}

export default App;