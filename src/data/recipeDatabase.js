export const recipeDatabase = [
  // Receitas para Ectomorfo
  {
    id: 1,
    name: "Smoothie Proteico de Banana e Aveia",
    category: "Café da Manhã",
    prepTime: "5 min",
    difficulty: "Fácil",
    calories: 450,
    protein: 25,
    carbs: 65,
    fat: 12,
    suitableFor: ["ectomorfo"],
    goals: ["ganho_massa", "energia"],
    ingredients: [
      "1 banana média",
      "1/2 xícara de aveia",
      "1 scoop de whey protein",
      "200ml de leite integral",
      "1 colher de sopa de pasta de amendoim",
      "1 colher de chá de mel",
      "Gelo a gosto"
    ],
    instructions: [
      "Adicione todos os ingredientes no liquidificador",
      "Bata por 2 minutos até ficar homogêneo",
      "Sirva imediatamente em um copo grande",
      "Decore com fatias de banana se desejar"
    ],
    tips: "Consuma logo após o treino para máxima absorção de proteínas",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Frango Grelhado com Batata Doce",
    category: "Almoço",
    prepTime: "25 min",
    difficulty: "Médio",
    calories: 520,
    protein: 45,
    carbs: 55,
    fat: 8,
    suitableFor: ["ectomorfo", "mesomorfo"],
    goals: ["ganho_massa", "manutencao"],
    ingredients: [
      "200g de peito de frango",
      "1 batata doce média",
      "1 colher de sopa de azeite",
      "Temperos: alho, cebola, ervas finas",
      "Sal e pimenta a gosto",
      "Suco de 1/2 limão"
    ],
    instructions: [
      "Tempere o frango com sal, pimenta e limão",
      "Corte a batata doce em fatias grossas",
      "Grelhe o frango por 8 minutos de cada lado",
      "Asse a batata doce por 20 minutos a 200°C",
      "Sirva quente com salada verde"
    ],
    tips: "A batata doce fornece carboidratos de liberação lenta, ideal para ectomorfos",
    image: "https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?w=500&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Salada de Quinoa com Legumes",
    category: "Jantar",
    prepTime: "15 min",
    difficulty: "Fácil",
    calories: 380,
    protein: 18,
    carbs: 50,
    fat: 12,
    suitableFor: ["endomorfo", "mesomorfo"],
    goals: ["perda_peso", "manutencao"],
    ingredients: [
      "1 xícara de quinoa cozida",
      "1/2 pepino picado",
      "1 tomate médio picado",
      "1/4 xícara de cenoura ralada",
      "2 colheres de sopa de azeite",
      "Suco de 1 limão",
      "Folhas de hortelã"
    ],
    instructions: [
      "Cozinhe a quinoa conforme instruções da embalagem",
      "Deixe esfriar completamente",
      "Misture todos os vegetais picados",
      "Tempere com azeite, limão e sal",
      "Decore com folhas de hortelã"
    ],
    tips: "Rica em proteínas vegetais e fibras, ideal para o jantar",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Omelete de Claras com Espinafre",
    category: "Café da Manhã",
    prepTime: "10 min",
    difficulty: "Fácil",
    calories: 220,
    protein: 28,
    carbs: 8,
    fat: 6,
    suitableFor: ["endomorfo", "mesomorfo"],
    goals: ["perda_peso", "definicao"],
    ingredients: [
      "4 claras de ovo",
      "1 ovo inteiro",
      "1 xícara de espinafre fresco",
      "1 colher de chá de azeite",
      "Sal e pimenta a gosto",
      "Orégano seco"
    ],
    instructions: [
      "Bata as claras com o ovo inteiro",
      "Refogue o espinafre rapidamente",
      "Despeje os ovos na frigideira",
      "Adicione o espinafre por cima",
      "Dobre a omelete e sirva quente"
    ],
    tips: "Alto teor proteico e baixo carboidrato, perfeito para definição",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Salmão com Aspargos Grelhados",
    category: "Jantar",
    prepTime: "20 min",
    difficulty: "Médio",
    calories: 420,
    protein: 35,
    carbs: 12,
    fat: 25,
    suitableFor: ["ectomorfo", "mesomorfo", "endomorfo"],
    goals: ["ganho_massa", "manutencao", "definicao"],
    ingredients: [
      "180g de filé de salmão",
      "200g de aspargos",
      "1 colher de sopa de azeite",
      "Alho picado",
      "Limão",
      "Sal e pimenta",
      "Ervas finas"
    ],
    instructions: [
      "Tempere o salmão com sal, pimenta e limão",
      "Grelhe por 4 minutos de cada lado",
      "Refogue os aspargos com alho",
      "Finalize com ervas finas",
      "Sirva com uma fatia de limão"
    ],
    tips: "Rico em ômega-3, excelente para recuperação muscular",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Bowl de Açaí Proteico",
    category: "Lanche",
    prepTime: "8 min",
    difficulty: "Fácil",
    calories: 350,
    protein: 20,
    carbs: 45,
    fat: 15,
    suitableFor: ["ectomorfo", "mesomorfo"],
    goals: ["ganho_massa", "energia"],
    ingredients: [
      "100g de polpa de açaí",
      "1/2 banana congelada",
      "1 scoop de whey protein",
      "1 colher de sopa de granola",
      "Frutas vermelhas",
      "Coco ralado",
      "Mel a gosto"
    ],
    instructions: [
      "Bata o açaí com banana e whey",
      "Despeje em uma tigela",
      "Decore com granola e frutas",
      "Finalize com coco e mel",
      "Sirva imediatamente"
    ],
    tips: "Antioxidantes naturais e proteínas para recuperação",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=500&h=300&fit=crop"
  },
  {
    id: 7,
    name: "Wrap de Frango com Abacate",
    category: "Almoço",
    prepTime: "12 min",
    difficulty: "Fácil",
    calories: 480,
    protein: 32,
    carbs: 35,
    fat: 22,
    suitableFor: ["ectomorfo", "mesomorfo"],
    goals: ["ganho_massa", "manutencao"],
    ingredients: [
      "1 tortilla integral",
      "150g de frango desfiado",
      "1/2 abacate maduro",
      "Folhas de alface",
      "Tomate cereja",
      "Iogurte natural",
      "Temperos a gosto"
    ],
    instructions: [
      "Amasse o abacate com um garfo",
      "Tempere o frango desfiado",
      "Espalhe o abacate na tortilla",
      "Adicione frango, alface e tomate",
      "Enrole bem apertado e corte ao meio"
    ],
    tips: "Gorduras boas do abacate ajudam na absorção de vitaminas",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop"
  },
  {
    id: 8,
    name: "Sopa de Lentilha com Legumes",
    category: "Jantar",
    prepTime: "30 min",
    difficulty: "Médio",
    calories: 320,
    protein: 22,
    carbs: 48,
    fat: 6,
    suitableFor: ["endomorfo", "mesomorfo"],
    goals: ["perda_peso", "manutencao"],
    ingredients: [
      "1 xícara de lentilha",
      "Cenoura picada",
      "Aipo picado",
      "Cebola média",
      "Alho",
      "Caldo de legumes",
      "Temperos naturais"
    ],
    instructions: [
      "Refogue a cebola e alho",
      "Adicione cenoura e aipo",
      "Junte a lentilha e caldo",
      "Cozinhe por 25 minutos",
      "Tempere e sirva quente"
    ],
    tips: "Rica em fibras e proteínas vegetais, muito saciante",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=300&fit=crop"
  },
  {
    id: 9,
    name: "Panqueca de Aveia com Frutas",
    category: "Café da Manhã",
    prepTime: "15 min",
    difficulty: "Médio",
    calories: 380,
    protein: 18,
    carbs: 55,
    fat: 10,
    suitableFor: ["ectomorfo", "mesomorfo"],
    goals: ["ganho_massa", "energia"],
    ingredients: [
      "1/2 xícara de aveia",
      "2 ovos",
      "1 banana madura",
      "1 colher de chá de mel",
      "Canela em pó",
      "Frutas vermelhas",
      "Iogurte grego"
    ],
    instructions: [
      "Bata todos os ingredientes secos",
      "Adicione ovos e banana amassada",
      "Cozinhe em frigideira antiaderente",
      "Vire quando dourar",
      "Sirva com frutas e iogurte"
    ],
    tips: "Carboidratos complexos para energia duradoura",
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=500&h=300&fit=crop"
  },
  {
    id: 10,
    name: "Salada Caesar com Frango",
    category: "Almoço",
    prepTime: "18 min",
    difficulty: "Médio",
    calories: 420,
    protein: 38,
    carbs: 15,
    fat: 24,
    suitableFor: ["mesomorfo", "endomorfo"],
    goals: ["definicao", "manutencao"],
    ingredients: [
      "Alface romana",
      "180g de peito de frango",
      "Parmesão ralado",
      "Croutons integrais",
      "Molho caesar light",
      "Anchovas (opcional)",
      "Limão"
    ],
    instructions: [
      "Grelhe o frango temperado",
      "Corte a alface em fatias",
      "Misture com molho caesar",
      "Adicione frango em fatias",
      "Finalize com parmesão e croutons"
    ],
    tips: "Versão mais saudável do clássico, rica em proteínas",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&h=300&fit=crop"
  },
  // Continuando com mais receitas...
  {
    id: 11,
    name: "Iogurte Grego com Granola Caseira",
    category: "Lanche",
    prepTime: "5 min",
    difficulty: "Fácil",
    calories: 280,
    protein: 20,
    carbs: 35,
    fat: 8,
    suitableFor: ["ectomorfo", "mesomorfo", "endomorfo"],
    goals: ["ganho_massa", "manutencao", "definicao"],
    ingredients: [
      "200g de iogurte grego",
      "2 colheres de granola",
      "1 colher de mel",
      "Frutas vermelhas",
      "Nozes picadas",
      "Canela em pó"
    ],
    instructions: [
      "Coloque o iogurte em uma tigela",
      "Adicione o mel e misture",
      "Decore com granola e frutas",
      "Finalize com nozes e canela",
      "Sirva gelado"
    ],
    tips: "Probióticos naturais para saúde intestinal",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&h=300&fit=crop"
  },
  {
    id: 12,
    name: "Risotto de Quinoa com Cogumelos",
    category: "Jantar",
    prepTime: "35 min",
    difficulty: "Difícil",
    calories: 390,
    protein: 16,
    carbs: 58,
    fat: 12,
    suitableFor: ["ectomorfo", "mesomorfo"],
    goals: ["ganho_massa", "manutencao"],
    ingredients: [
      "1 xícara de quinoa",
      "200g de cogumelos variados",
      "Caldo de legumes",
      "Cebola picada",
      "Alho",
      "Vinho branco",
      "Parmesão ralado"
    ],
    instructions: [
      "Refogue cebola e alho",
      "Adicione quinoa e torre levemente",
      "Acrescente vinho e deixe evaporar",
      "Adicione caldo aos poucos",
      "Misture cogumelos refogados",
      "Finalize com parmesão"
    ],
    tips: "Versão saudável do risotto tradicional",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500&h=300&fit=crop"
  },
  {
    id: 13,
    name: "Smoothie Verde Detox",
    category: "Lanche",
    prepTime: "5 min",
    difficulty: "Fácil",
    calories: 180,
    protein: 8,
    carbs: 28,
    fat: 4,
    suitableFor: ["endomorfo", "mesomorfo"],
    goals: ["perda_peso", "detox"],
    ingredients: [
      "1 maçã verde",
      "1 xícara de espinafre",
      "1/2 pepino",
      "Suco de 1 limão",
      "1 colher de chá de gengibre",
      "200ml de água de coco",
      "Hortelã fresca"
    ],
    instructions: [
      "Corte a maçã e pepino",
      "Adicione todos os ingredientes no liquidificador",
      "Bata até ficar homogêneo",
      "Coe se preferir",
      "Sirva com gelo e hortelã"
    ],
    tips: "Excelente para hidratação e desintoxicação",
    image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=500&h=300&fit=crop"
  },
  {
    id: 14,
    name: "Peixe Assado com Ervas",
    category: "Jantar",
    prepTime: "25 min",
    difficulty: "Médio",
    calories: 380,
    protein: 42,
    carbs: 8,
    fat: 18,
    suitableFor: ["ectomorfo", "mesomorfo", "endomorfo"],
    goals: ["ganho_massa", "definicao", "manutencao"],
    ingredients: [
      "200g de filé de peixe branco",
      "Ervas frescas (tomilho, alecrim)",
      "Azeite extra virgem",
      "Limão",
      "Alho",
      "Sal e pimenta",
      "Vegetais para acompanhar"
    ],
    instructions: [
      "Tempere o peixe com sal e pimenta",
      "Regue com azeite e limão",
      "Adicione ervas e alho",
      "Asse por 15 minutos a 180°C",
      "Sirva com vegetais grelhados"
    ],
    tips: "Proteína magra e saborosa, rica em ômega-3",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&h=300&fit=crop"
  },
  {
    id: 15,
    name: "Tapioca Proteica",
    category: "Café da Manhã",
    prepTime: "10 min",
    difficulty: "Fácil",
    calories: 320,
    protein: 22,
    carbs: 42,
    fat: 6,
    suitableFor: ["ectomorfo", "mesomorfo"],
    goals: ["ganho_massa", "energia"],
    ingredients: [
      "3 colheres de goma de tapioca",
      "1 scoop de whey protein",
      "1 ovo",
      "Queijo cottage",
      "Tomate cereja",
      "Manjericão",
      "Sal a gosto"
    ],
    instructions: [
      "Misture tapioca com whey",
      "Adicione água aos poucos",
      "Faça a massa na frigideira",
      "Recheie com ovo mexido",
      "Adicione cottage e tomate",
      "Finalize com manjericão"
    ],
    tips: "Sem glúten e rica em proteínas",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&h=300&fit=crop"
  },
  {
    id: 16,
    name: "Chili Vegetariano",
    category: "Almoço",
    prepTime: "40 min",
    difficulty: "Médio",
    calories: 350,
    protein: 18,
    carbs: 52,
    fat: 8,
    suitableFor: ["endomorfo", "mesomorfo"],
    goals: ["perda_peso", "manutencao"],
    ingredients: [
      "1 xícara de feijão preto",
      "1 xícara de feijão vermelho",
      "Tomates picados",
      "Pimentão colorido",
      "Cebola",
      "Alho",
      "Cominho e páprica",
      "Caldo de legumes"
    ],
    instructions: [
      "Refogue cebola e alho",
      "Adicione pimentões picados",
      "Junte tomates e temperos",
      "Acrescente os feijões",
      "Cozinhe por 30 minutos",
      "Ajuste temperos e sirva"
    ],
    tips: "Rico em fibras e proteínas vegetais",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop"
  },
  {
    id: 17,
    name: "Mousse de Chocolate Proteico",
    category: "Sobremesa",
    prepTime: "15 min",
    difficulty: "Fácil",
    calories: 180,
    protein: 15,
    carbs: 12,
    fat: 8,
    suitableFor: ["ectomorfo", "mesomorfo", "endomorfo"],
    goals: ["ganho_massa", "definicao", "manutencao"],
    ingredients: [
      "1 abacate maduro",
      "2 colheres de cacau em pó",
      "1 scoop de whey chocolate",
      "1 colher de mel",
      "Leite de amêndoas",
      "Essência de baunilha",
      "Frutas vermelhas"
    ],
    instructions: [
      "Bata o abacate até cremoso",
      "Adicione cacau e whey",
      "Acrescente mel e baunilha",
      "Ajuste consistência com leite",
      "Leve à geladeira por 2 horas",
      "Sirva com frutas vermelhas"
    ],
    tips: "Sobremesa saudável e rica em proteínas",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=500&h=300&fit=crop"
  },
  {
    id: 18,
    name: "Salada de Grão de Bico",
    category: "Almoço",
    prepTime: "20 min",
    difficulty: "Fácil",
    calories: 340,
    protein: 16,
    carbs: 48,
    fat: 10,
    suitableFor: ["endomorfo", "mesomorfo"],
    goals: ["perda_peso", "manutencao"],
    ingredients: [
      "1 xícara de grão de bico cozido",
      "Pepino picado",
      "Tomate cereja",
      "Cebola roxa",
      "Salsa fresca",
      "Azeite e limão",
      "Tahine (opcional)"
    ],
    instructions: [
      "Escorra bem o grão de bico",
      "Pique todos os vegetais",
      "Misture em uma tigela grande",
      "Tempere com azeite e limão",
      "Adicione salsa picada",
      "Deixe marinar por 10 minutos"
    ],
    tips: "Fonte completa de proteínas vegetais",
    image: "https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=500&h=300&fit=crop"
  },
  {
    id: 19,
    name: "Frittata de Vegetais",
    category: "Jantar",
    prepTime: "25 min",
    difficulty: "Médio",
    calories: 280,
    protein: 20,
    carbs: 12,
    fat: 16,
    suitableFor: ["mesomorfo", "endomorfo"],
    goals: ["definicao", "manutencao"],
    ingredients: [
      "6 ovos",
      "Abobrinha em fatias",
      "Tomate cereja",
      "Cebola",
      "Pimentão",
      "Queijo de cabra",
      "Ervas frescas"
    ],
    instructions: [
      "Refogue os vegetais levemente",
      "Bata os ovos temperados",
      "Despeje sobre os vegetais",
      "Adicione queijo por cima",
      "Leve ao forno por 15 minutos",
      "Sirva morna ou fria"
    ],
    tips: "Versátil e pode ser consumida quente ou fria",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&h=300&fit=crop"
  },
  {
    id: 20,
    name: "Energia Ball de Tâmaras",
    category: "Lanche",
    prepTime: "12 min",
    difficulty: "Fácil",
    calories: 220,
    protein: 8,
    carbs: 32,
    fat: 12,
    suitableFor: ["ectomorfo", "mesomorfo"],
    goals: ["energia", "ganho_massa"],
    ingredients: [
      "1 xícara de tâmaras sem caroço",
      "1/2 xícara de amêndoas",
      "2 colheres de cacau",
      "1 colher de óleo de coco",
      "Coco ralado",
      "Essência de baunilha"
    ],
    instructions: [
      "Processe as tâmaras até formar pasta",
      "Adicione amêndoas e cacau",
      "Misture óleo de coco e baunilha",
      "Forme bolinhas com as mãos",
      "Passe no coco ralado",
      "Leve à geladeira por 1 hora"
    ],
    tips: "Energia natural e saudável para pré-treino",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&h=300&fit=crop"
  }
];

// Função para gerar mais receitas dinamicamente
export const generateMoreRecipes = () => {
  const baseRecipes = [
    {
      name: "Quinoa Bowl Mediterrâneo",
      category: "Almoço",
      suitableFor: ["endomorfo", "mesomorfo"],
      goals: ["perda_peso", "manutencao"]
    },
    {
      name: "Smoothie de Manga e Coco",
      category: "Lanche",
      suitableFor: ["ectomorfo"],
      goals: ["ganho_massa", "energia"]
    },
    {
      name: "Sopa de Abóbora com Gengibre",
      category: "Jantar",
      suitableFor: ["endomorfo"],
      goals: ["perda_peso", "detox"]
    },
    {
      name: "Hambúrguer de Lentilha",
      category: "Almoço",
      suitableFor: ["mesomorfo", "endomorfo"],
      goals: ["manutencao", "ganho_massa"]
    },
    {
      name: "Pudim de Chia com Frutas",
      category: "Sobremesa",
      suitableFor: ["ectomorfo", "mesomorfo", "endomorfo"],
      goals: ["ganho_massa", "manutencao", "definicao"]
    }
  ];

  // Esta função pode ser expandida para gerar receitas dinamicamente
  // Por enquanto, retorna as receitas base
  return baseRecipes;
};