
import { Card, CardContent } from '@/components/ui/card';

interface DietCardProps {
  diet: {
    name: string;
    description: string;
    focus: string;
    color: string;
  };
  isSelected: boolean;
  onClick: () => void;
}

const DietCard = ({ diet, isSelected, onClick }: DietCardProps) => {
  return (
    <Card 
      className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
        isSelected ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'
      }`}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className={`w-12 h-12 rounded-full ${diet.color} flex items-center justify-center mb-4 mx-auto`}>
          <span className="text-white font-bold text-lg">{diet.name[0]}</span>
        </div>
        <h3 className="text-xl font-semibold text-center mb-2">{diet.name}</h3>
        <p className="text-gray-600 text-sm text-center mb-3">{diet.description}</p>
        <p className="text-blue-600 text-xs text-center font-medium">{diet.focus}</p>
      </CardContent>
    </Card>
  );
};

export default DietCard;
