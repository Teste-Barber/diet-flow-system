
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserData, NutritionResults } from '../types/nutrition';
import { dietPlans } from '../data/foodData';
import { Droplet, Target, Scale, Activity } from 'lucide-react';

interface ResultsProps {
  userData: UserData;
  results: NutritionResults;
  onRestart: () => void;
}

const Results = ({ userData, results, onRestart }: ResultsProps) => {
  const selectedDiet = dietPlans[userData.diet];
  const hasAllergies = userData.allergies && userData.allergies.length > 0 && !userData.allergies.includes('Nenhuma');

  const getRecommendedFoods = () => {
    const allergicFoods: string[] = [];
    
    if (userData.allergies?.includes('Lactose') || userData.allergies?.includes('Proteína do leite')) {
      allergicFoods.push('queijos', 'iogurte', 'leite', 'laticínios');
    }
    if (userData.allergies?.includes('Glúten')) {
      allergicFoods.push('pão', 'trigo', 'aveia', 'glúten');
    }
    if (userData.allergies?.includes('Ovo')) {
      allergicFoods.push('ovos', 'ovo');
    }
    if (userData.allergies?.includes('Frutos do mar')) {
      allergicFoods.push('frutos do mar', 'camarão', 'peixes');
    }

    const filterFoods = (foods: string[]) => {
      if (!hasAllergies) return foods;
      return foods.filter(food => 
        !allergicFoods.some(allergen => 
          food.toLowerCase().includes(allergen.toLowerCase())
        )
      );
    };

    return {
      proteins: filterFoods(userData.foodPreferences?.proteins || []),
      vegetables: filterFoods(userData.foodPreferences?.vegetables || []),
      greens: filterFoods(userData.foodPreferences?.greens || []),
      carbs: filterFoods(userData.foodPreferences?.carbs || [])
    };
  };

  const recommendedFoods = getRecommendedFoods();

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Resultados dos Cálculos */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-6 text-center">
            <Activity className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <p className="text-sm text-gray-600">TMB</p>
            <p className="text-2xl font-bold text-blue-700">{results.tmb}</p>
            <p className="text-xs text-gray-500">kcal/dia</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-6 text-center">
            <Scale className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <p className="text-sm text-gray-600">IMC</p>
            <p className="text-2xl font-bold text-green-700">{results.imc}</p>
            <p className="text-xs text-gray-500">{results.imcCategory}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100">
          <CardContent className="p-6 text-center">
            <Droplet className="h-8 w-8 mx-auto mb-2 text-cyan-600" />
            <p className="text-sm text-gray-600">Água</p>
            <p className="text-2xl font-bold text-cyan-700">{results.waterIntake}</p>
            <p className="text-xs text-gray-500">ml/dia</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100">
          <CardContent className="p-6 text-center">
            <Target className="h-8 w-8 mx-auto mb-2 text-orange-600" />
            <p className="text-sm text-gray-600">Meta</p>
            <p className="text-lg font-bold text-orange-700 capitalize">{userData.goal}</p>
            <p className="text-xs text-gray-500">Objetivo</p>
          </CardContent>
        </Card>
      </div>

      {/* Plano Alimentar */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center text-green-700">
            Seu Plano Alimentar - Dieta {selectedDiet.name}
          </CardTitle>
          <p className="text-center text-gray-600">{selectedDiet.focus}</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-blue-700 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                Proteínas
              </h3>
              {recommendedFoods.proteins.length > 0 ? (
                <ul className="space-y-1">
                  {recommendedFoods.proteins.map((protein, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-blue-300 rounded-full mr-2"></span>
                      {protein}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500 italic">Nenhuma proteína selecionada</p>
              )}
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-700 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                Legumes
              </h3>
              {recommendedFoods.vegetables.length > 0 ? (
                <ul className="space-y-1">
                  {recommendedFoods.vegetables.map((vegetable, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-green-300 rounded-full mr-2"></span>
                      {vegetable}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500 italic">Nenhum legume selecionado</p>
              )}
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-emerald-700 flex items-center">
                <span className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                Verduras
              </h3>
              {recommendedFoods.greens.length > 0 ? (
                <ul className="space-y-1">
                  {recommendedFoods.greens.map((green, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-emerald-300 rounded-full mr-2"></span>
                      {green}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500 italic">Nenhuma verdura selecionada</p>
              )}
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-orange-700 flex items-center">
                <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                Carboidratos
              </h3>
              {recommendedFoods.carbs.length > 0 ? (
                <ul className="space-y-1">
                  {recommendedFoods.carbs.map((carb, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-orange-300 rounded-full mr-2"></span>
                      {carb}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500 italic">Nenhum carboidrato selecionado</p>
              )}
            </div>
          </div>

          {hasAllergies && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <h4 className="text-red-700 font-semibold mb-2">⚠️ Alergias Consideradas:</h4>
              <p className="text-sm text-red-600">
                Alimentos foram filtrados considerando suas alergias: {userData.allergies?.filter(a => a !== 'Nenhuma').join(', ')}
              </p>
            </div>
          )}

          <div className="mt-8 text-center">
            <Button onClick={onRestart} className="bg-green-600 hover:bg-green-700">
              Criar Novo Plano
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Results;
