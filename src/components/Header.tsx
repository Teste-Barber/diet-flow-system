
import { Utensils } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-6 px-4">
      <div className="container mx-auto flex items-center justify-center">
        <Utensils className="mr-3 h-8 w-8" />
        <h1 className="text-3xl font-bold">NutriFácil</h1>
      </div>
      <p className="text-center mt-2 text-green-100">
        Seu sistema de planejamento alimentar personalizado
      </p>
    </header>
  );
};

export default Header;
