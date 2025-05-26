
export const dietPlans = {
  mediterranea: {
    name: 'Mediterrânea',
    description: 'Azeite de oliva, peixes, grãos integrais, legumes e frutas',
    focus: 'Saúde cardiovascular e manutenção de peso',
    color: 'bg-blue-500',
    proteins: ['Peixes (salmão, sardinha)', 'Frutos do mar', 'Ovos', 'Queijos', 'Iogurte grego', 'Nozes e castanhas'],
    vegetables: ['Tomate', 'Pimentão', 'Abobrinha', 'Berinjela', 'Alcachofra', 'Cebola'],
    greens: ['Espinafre', 'Rúcula', 'Alface', 'Manjericão', 'Salsa', 'Orégano'],
    carbs: ['Quinoa', 'Arroz integral', 'Aveia', 'Pão integral', 'Batata doce', 'Frutas']
  },
  lowcarb: {
    name: 'Low Carb',
    description: 'Redução de carboidratos, aumento de proteínas e gorduras boas',
    focus: 'Emagrecimento e controle glicêmico',
    color: 'bg-green-500',
    proteins: ['Frango', 'Carne vermelha', 'Peixes', 'Ovos', 'Queijos', 'Whey protein'],
    vegetables: ['Brócolis', 'Couve-flor', 'Abobrinha', 'Pepino', 'Pimentão', 'Aspargos'],
    greens: ['Espinafre', 'Couve', 'Rúcula', 'Alface', 'Agrião', 'Acelga'],
    carbs: ['Abacate', 'Oleaginosas', 'Coco', 'Azeite', 'Manteiga', 'Sementes']
  },
  cetogenica: {
    name: 'Cetogênica',
    description: 'Ingestão muito baixa de carboidratos e alta em gorduras',
    focus: 'Perda de gordura rápida e aumento de foco',
    color: 'bg-purple-500',
    proteins: ['Carnes vermelhas', 'Frango', 'Peixes gordos', 'Ovos', 'Bacon', 'Queijos'],
    vegetables: ['Brócolis', 'Couve-flor', 'Espinafre', 'Abobrinha', 'Pepino', 'Cogumelos'],
    greens: ['Rúcula', 'Alface', 'Couve', 'Acelga', 'Agrião', 'Manjericão'],
    carbs: ['Abacate', 'Azeite', 'Manteiga', 'Coco', 'MCT', 'Oleaginosas']
  },
  vegetariana: {
    name: 'Vegetariana',
    description: 'Sem carnes; inclui ovos, laticínios, grãos, vegetais e leguminosas',
    focus: 'Alimentação plant-based com proteínas completas',
    color: 'bg-orange-500',
    proteins: ['Ovos', 'Queijos', 'Iogurte', 'Feijões', 'Lentilhas', 'Grão-de-bico'],
    vegetables: ['Brócolis', 'Cenoura', 'Beterraba', 'Abobrinha', 'Pimentão', 'Tomate'],
    greens: ['Espinafre', 'Couve', 'Rúcula', 'Alface', 'Agrião', 'Acelga'],
    carbs: ['Quinoa', 'Arroz integral', 'Aveia', 'Batata doce', 'Frutas', 'Pães integrais']
  }
};

export const allergies = [
  'Lactose',
  'Glúten', 
  'Proteína do leite',
  'Ovo',
  'Frutos do mar',
  'Nenhuma'
];

export const goals = {
  emagrecimento: {
    name: 'Emagrecimento',
    benefits: ['Perda de gordura', 'Redução de medidas', 'Aumento de energia', 'Melhora da autoestima']
  },
  hipertrofia: {
    name: 'Hipertrofia',
    benefits: ['Ganho de massa muscular', 'Aumento de força', 'Melhora da composição corporal', 'Autoestima']
  }
};
