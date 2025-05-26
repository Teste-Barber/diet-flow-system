
import { useState } from 'react';
import Header from '../components/Header';
import DietCard from '../components/DietCard';
import UserForm from '../components/UserForm';
import FoodPreferences from '../components/FoodPreferences';
import Results from '../components/Results';
import { UserData } from '../types/nutrition';
import { dietPlans } from '../data/foodData';
import { calculateNutritionResults } from '../utils/calculations';

type Step = 'diet' | 'form' | 'preferences' | 'results';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<Step>('diet');
  const [userData, setUserData] = useState<Partial<UserData>>({
    allergies: [],
    foodPreferences: { proteins: [], vegetables: [], greens: [], carbs: [] }
  });

  const updateUserData = (data: Partial<UserData>) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  const handleDietSelect = (dietKey: string) => {
    updateUserData({ diet: dietKey as UserData['diet'] });
    setCurrentStep('form');
  };

  const handleFormNext = () => {
    setCurrentStep('preferences');
  };

  const handlePreferencesNext = () => {
    setCurrentStep('results');
  };

  const handleRestart = () => {
    setUserData({
      allergies: [],
      foodPreferences: { proteins: [], vegetables: [], greens: [], carbs: [] }
    });
    setCurrentStep('diet');
  };

  const results = userData as UserData && currentStep === 'results' 
    ? calculateNutritionResults(userData as UserData)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-orange-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {currentStep === 'diet' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
              Escolha sua Dieta
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(dietPlans).map(([key, diet]) => (
                <DietCard
                  key={key}
                  diet={diet}
                  isSelected={userData.diet === key}
                  onClick={() => handleDietSelect(key)}
                />
              ))}
            </div>
          </div>
        )}

        {currentStep === 'form' && (
          <UserForm
            userData={userData}
            onUpdate={updateUserData}
            onNext={handleFormNext}
          />
        )}

        {currentStep === 'preferences' && userData.diet && (
          <FoodPreferences
            userData={userData as UserData}
            onUpdate={updateUserData}
            onNext={handlePreferencesNext}
            onBack={() => setCurrentStep('form')}
          />
        )}

        {currentStep === 'results' && results && userData.diet && (
          <Results
            userData={userData as UserData}
            results={results}
            onRestart={handleRestart}
          />
        )}
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 NutriFácil - Sistema de Planejamento Alimentar Personalizado</p>
          <p className="text-sm text-gray-400 mt-2">
            Desenvolvido para auxiliar no planejamento nutricional baseado em preferências pessoais
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
