
# NutriFácil - Sistema de Planejamento Alimentar Personalizado

## 📋 Descrição do Projeto

O NutriFácil é um sistema web desenvolvido para auxiliar usuários no planejamento alimentar personalizado, considerando suas preferências dietéticas, objetivos pessoais e restrições alimentares. O sistema oferece recomendações baseadas em diferentes tipos de dieta e realiza cálculos nutricionais importantes.

## 🎯 Objetivos

- **Personalização Completa**: Permitir ao usuário montar seu plano alimentar conforme suas preferências e objetivos
- **Cálculos Nutricionais**: Implementar funcionalidades de cálculo de TMB, IMC e consumo de água
- **Diversidade de Dietas**: Oferecer suporte a 4 tipos principais de dieta (Mediterrânea, Low Carb, Cetogênica, Vegetariana)
- **Gestão de Restrições**: Considerar alergias e intolerâncias alimentares nas recomendações
- **Interface Intuitiva**: Proporcionar uma experiência de usuário fluida e responsiva

## 🚀 Funcionalidades

### 1. Seleção de Dietas
- **Mediterrânea**: Foco em saúde cardiovascular com azeite, peixes, grãos integrais
- **Low Carb**: Redução de carboidratos para emagrecimento e controle glicêmico
- **Cetogênica**: Muito baixo carboidrato e alta gordura para perda rápida
- **Vegetariana**: Sem carnes, incluindo ovos, laticínios e leguminosas

### 2. Coleta de Dados Pessoais
- Peso, altura, idade e sexo
- Objetivo (emagrecimento ou hipertrofia)
- Alergias e intolerâncias (lactose, glúten, ovo, frutos do mar, etc.)

### 3. Cálculos Automáticos
- **TMB (Taxa de Metabolismo Basal)**: Usando fórmula de Mifflin-St Jeor
  - Homens: TMB = 10×peso + 6,25×altura – 5×idade + 5
  - Mulheres: TMB = 10×peso + 6,25×altura – 5×idade – 161
- **IMC (Índice de Massa Corporal)**: peso / (altura/100)²
- **Consumo de Água**: 35ml × peso(kg)

### 4. Recomendações Personalizadas
- Seleção de alimentos por categoria (proteínas, legumes, verduras, carboidratos)
- Filtragem automática baseada em alergias
- Recomendações específicas por tipo de dieta

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 18 com TypeScript
- **Styling**: Tailwind CSS
- **Componentes**: shadcn/ui
- **Ícones**: Lucide React
- **Build Tool**: Vite
- **Estado**: React Hooks (useState)

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── Header.tsx       # Cabeçalho da aplicação
│   ├── DietCard.tsx     # Card de seleção de dieta
│   ├── UserForm.tsx     # Formulário de dados pessoais
│   ├── FoodPreferences.tsx # Seleção de preferências alimentares
│   └── Results.tsx      # Exibição dos resultados
├── data/                # Dados estáticos
│   └── foodData.ts      # Informações sobre dietas e alimentos
├── types/               # Definições de tipos TypeScript
│   └── nutrition.ts     # Interfaces do sistema
├── utils/               # Funções utilitárias
│   └── calculations.ts  # Cálculos nutricionais
└── pages/
    └── Index.tsx        # Página principal
```

## 🎨 Design e UX

### Paleta de Cores
- **Verde**: Elementos principais e natureza
- **Azul**: Informações e dados
- **Laranja**: Energia e motivação
- **Gradientes**: Transições suaves entre cores

### Princípios de Design
- **Hierarquia Visual**: Cards organizados e tipografia clara
- **Responsividade**: Layout adaptável para mobile e desktop
- **Feedback Visual**: Estados de hover e seleção
- **Acessibilidade**: Contraste adequado e navegação intuitiva

## 🧪 Funcionalidades de Teste

### Casos de Teste Implementados
1. **Validação de Formulário**: Campos obrigatórios e tipos corretos
2. **Cálculos Matemáticos**: Verificação das fórmulas TMB, IMC e água
3. **Filtragem de Alergias**: Remoção automática de alimentos problemáticos
4. **Navegação**: Fluxo completo entre as telas
5. **Responsividade**: Teste em diferentes tamanhos de tela

### Cenários de Uso
- Usuário com múltiplas alergias
- Diferentes combinações de dieta e objetivo
- Validação de dados extremos (peso/altura)

## 📊 Resultados Esperados

O sistema deve fornecer:
- Plano alimentar personalizado baseado na dieta escolhida
- Cálculos precisos de TMB, IMC e consumo de água
- Recomendações filtradas por alergias
- Interface intuitiva e responsiva
- Experiência completa em 4 etapas simples

## 🚀 Como Executar

1. **Instalação das dependências**:
```bash
npm install
```

2. **Execução em modo desenvolvimento**:
```bash
npm run dev
```

3. **Build para produção**:
```bash
npm run build
```

## 🔮 Futuras Melhorias

- Integração com banco de dados para salvar planos
- Sistema de login e perfis de usuário
- Geração de PDF com o plano alimentar
- Calculadora de macronutrientes
- Integração com APIs de receitas
- Sistema de notificações para hidratação
- Acompanhamento de progresso

## 👥 Contribuição

Este projeto foi desenvolvido como sistema de planejamento nutricional personalizado, priorizando a experiência do usuário e a precisão dos cálculos nutricionais.

## 📝 Licença

Projeto desenvolvido para fins educacionais e de demonstração de habilidades em desenvolvimento web com React e TypeScript.
