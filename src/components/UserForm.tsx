
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { UserData } from '../types/nutrition';
import { allergies, goals } from '../data/foodData';

interface UserFormProps {
  userData: Partial<UserData>;
  onUpdate: (data: Partial<UserData>) => void;
  onNext: () => void;
}

const UserForm = ({ userData, onUpdate, onNext }: UserFormProps) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!userData.weight || userData.weight <= 0) newErrors.weight = 'Peso é obrigatório';
    if (!userData.height || userData.height <= 0) newErrors.height = 'Altura é obrigatória';
    if (!userData.age || userData.age <= 0) newErrors.age = 'Idade é obrigatória';
    if (!userData.gender) newErrors.gender = 'Sexo é obrigatório';
    if (!userData.goal) newErrors.goal = 'Objetivo é obrigatório';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onNext();
    }
  };

  const handleAllergyChange = (allergy: string, checked: boolean) => {
    const currentAllergies = userData.allergies || [];
    if (checked) {
      onUpdate({ allergies: [...currentAllergies, allergy] });
    } else {
      onUpdate({ allergies: currentAllergies.filter(a => a !== allergy) });
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-green-700">
          Seus Dados Pessoais
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="weight">Peso (kg)</Label>
              <Input
                id="weight"
                type="number"
                value={userData.weight || ''}
                onChange={(e) => onUpdate({ weight: Number(e.target.value) })}
                className={errors.weight ? 'border-red-500' : ''}
              />
              {errors.weight && <p className="text-red-500 text-sm mt-1">{errors.weight}</p>}
            </div>

            <div>
              <Label htmlFor="height">Altura (cm)</Label>
              <Input
                id="height"
                type="number"
                value={userData.height || ''}
                onChange={(e) => onUpdate({ height: Number(e.target.value) })}
                className={errors.height ? 'border-red-500' : ''}
              />
              {errors.height && <p className="text-red-500 text-sm mt-1">{errors.height}</p>}
            </div>

            <div>
              <Label htmlFor="age">Idade (anos)</Label>
              <Input
                id="age"
                type="number"
                value={userData.age || ''}
                onChange={(e) => onUpdate({ age: Number(e.target.value) })}
                className={errors.age ? 'border-red-500' : ''}
              />
              {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
            </div>

            <div>
              <Label>Sexo</Label>
              <Select value={userData.gender || ''} onValueChange={(value: 'masculino' | 'feminino') => onUpdate({ gender: value })}>
                <SelectTrigger className={errors.gender ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="masculino">Masculino</SelectItem>
                  <SelectItem value="feminino">Feminino</SelectItem>
                </SelectContent>
              </Select>
              {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
            </div>
          </div>

          <div>
            <Label>Objetivo</Label>
            <Select value={userData.goal || ''} onValueChange={(value: 'emagrecimento' | 'hipertrofia') => onUpdate({ goal: value })}>
              <SelectTrigger className={errors.goal ? 'border-red-500' : ''}>
                <SelectValue placeholder="Selecione seu objetivo" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(goals).map(([key, goal]) => (
                  <SelectItem key={key} value={key}>{goal.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.goal && <p className="text-red-500 text-sm mt-1">{errors.goal}</p>}
          </div>

          <div>
            <Label className="text-lg font-semibold">Alergias e Intolerâncias</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
              {allergies.map((allergy) => (
                <div key={allergy} className="flex items-center space-x-2">
                  <Checkbox
                    id={allergy}
                    checked={(userData.allergies || []).includes(allergy)}
                    onCheckedChange={(checked) => handleAllergyChange(allergy, checked as boolean)}
                  />
                  <Label htmlFor={allergy} className="text-sm">{allergy}</Label>
                </div>
              ))}
            </div>
          </div>

          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
            Continuar para Preferências Alimentares
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default UserForm;
