
import { UserData, NutritionResults } from '../types/nutrition';

export const calculateTMB = (weight: number, height: number, age: number, gender: 'masculino' | 'feminino'): number => {
  if (gender === 'masculino') {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
};

export const calculateIMC = (weight: number, height: number): number => {
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
};

export const getIMCCategory = (imc: number): string => {
  if (imc < 18.5) return 'Abaixo do peso';
  if (imc <= 24.9) return 'Peso normal';
  if (imc <= 29.9) return 'Sobrepeso';
  return 'Obesidade';
};

export const calculateWaterIntake = (weight: number): number => {
  return weight * 35; // ml por dia
};

export const calculateNutritionResults = (userData: UserData): NutritionResults => {
  const tmb = calculateTMB(userData.weight, userData.height, userData.age, userData.gender);
  const imc = calculateIMC(userData.weight, userData.height);
  const imcCategory = getIMCCategory(imc);
  const waterIntake = calculateWaterIntake(userData.weight);

  return {
    tmb: Math.round(tmb),
    imc: Math.round(imc * 100) / 100,
    imcCategory,
    waterIntake
  };
};
