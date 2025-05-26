
export interface UserData {
  diet: 'mediterranea' | 'lowcarb' | 'cetogenica' | 'vegetariana';
  weight: number;
  height: number;
  age: number;
  gender: 'masculino' | 'feminino';
  goal: 'emagrecimento' | 'hipertrofia';
  allergies: string[];
  foodPreferences: {
    proteins: string[];
    vegetables: string[];
    greens: string[];
    carbs: string[];
  };
}

export interface NutritionResults {
  tmb: number;
  imc: number;
  imcCategory: string;
  waterIntake: number;
}

export interface FoodRecommendations {
  proteins: string[];
  vegetables: string[];
  greens: string[];
  carbs: string[];
  restricted: string[];
}
