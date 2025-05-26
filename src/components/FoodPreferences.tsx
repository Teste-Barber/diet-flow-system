
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { UserData } from '../types/nutrition';
import { dietPlans } from '../data/foodData';

interface FoodPreferencesProps {
  userData: UserData;
  onUpdate: (data: Partial<UserData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const FoodPreferences = ({ userData, onUpdate, onNext, onBack }: FoodPreferencesProps) => {
  const selectedDiet = dietPlans[userData.diet];

  const handleFoodToggle = (category: keyof UserData['foodPreferences'], food: string, checked: boolean) => {
    const currentPrefs = userData.foodPreferences || { proteins: [], vegetables: [], greens: [], carbs: [] };
    const currentCategory = currentPrefs[category] || [];
    
    const newCategory = checked 
      ? [...currentCategory, food]
      : currentCategory.filter(f => f !== food);

    onUpdate({
      foodPreferences: {
        ...currentPrefs,
        [category]: newCategory
      }
    });
  };

  const categories = [
    { key: 'proteins' as const, title: 'Proteínas', foods: selectedDiet.proteins },
    { key: 'vegetables' as const, title: 'Legumes', foods: selectedDiet.vegetables },
    { key: 'greens' as const, title: 'Verduras', foods: selectedDiet.greens },
    { key: 'carbs' as const, title: 'Carboidratos/Gorduras', foods: selectedDiet.carbs },
  ];

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-green-700">
          Preferências Alimentares - Dieta {selectedDiet.name}
        </CardTitle>
        <p className="text-center text-gray-600">{selectedDiet.description}</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map(({ key, title, foods }) => (
            <div key={key} className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              <div className="space-y-2">
                {foods.map((food) => (
                  <div key={food} className="flex items-center space-x-2">
                    <Checkbox
                      id={`${key}-${food}`}
                      checked={(userData.foodPreferences?.[key] || []).includes(food)}
                      onCheckedChange={(checked) => handleFoodToggle(key, food, checked as boolean)}
                    />
                    <Label htmlFor={`${key}-${food}`} className="text-sm">{food}</Label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={onBack}>
            Voltar
          </Button>
          <Button onClick={onNext} className="bg-green-600 hover:bg-green-700">
            Ver Meu Plano Alimentar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FoodPreferences;
