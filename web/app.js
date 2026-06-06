const STORAGE_KEY = "fat_loss_recipes_v1";

const MEALS = ["早餐", "午餐", "下午加餐", "晚餐"];

const FOODS = [
  { category: "蛋白质", name: "鸡蛋", calories: 143, protein: 12.6, note: "约50g/个" },
  { category: "蛋白质", name: "鸡胸肉", calories: 120, protein: 23.0, note: "建议生重" },
  { category: "蛋白质", name: "去皮鸡腿肉", calories: 125, protein: 19.0, note: "生重" },
  { category: "蛋白质", name: "瘦牛肉", calories: 125, protein: 20.0, note: "生重" },
  { category: "蛋白质", name: "牛腱子", calories: 142, protein: 21.7, note: "生重" },
  { category: "蛋白质", name: "猪里脊", calories: 155, protein: 20.2, note: "生重" },
  { category: "蛋白质", name: "瘦猪肉", calories: 143, protein: 20.3, note: "生重" },
  { category: "蛋白质", name: "虾仁", calories: 99, protein: 20.6, note: "生重" },
  { category: "蛋白质", name: "鳕鱼", calories: 82, protein: 17.9, note: "生重" },
  { category: "蛋白质", name: "三文鱼", calories: 208, protein: 20.4, note: "脂肪较高" },
  { category: "蛋白质", name: "金枪鱼", calories: 109, protein: 23.4, note: "水浸更低脂" },
  { category: "蛋白质", name: "北豆腐", calories: 116, protein: 9.2, note: "可替换肉类" },
  { category: "蛋白质", name: "南豆腐", calories: 87, protein: 5.7, note: "含水量更高" },
  { category: "蛋白质", name: "豆腐干", calories: 197, protein: 15.8, note: "热量较高" },
  { category: "主食", name: "燕麦", calories: 389, protein: 16.9, note: "干重" },
  { category: "主食", name: "米饭", calories: 116, protein: 2.6, note: "熟重" },
  { category: "主食", name: "糙米饭", calories: 111, protein: 2.6, note: "熟重" },
  { category: "主食", name: "土豆", calories: 77, protein: 2.0, note: "生重" },
  { category: "主食", name: "红薯", calories: 86, protein: 1.6, note: "生重" },
  { category: "主食", name: "玉米", calories: 112, protein: 4.0, note: "鲜玉米" },
  { category: "主食", name: "全麦面包", calories: 247, protein: 12.5, note: "看品牌标签" },
  { category: "主食", name: "面条", calories: 110, protein: 3.8, note: "熟重" },
  { category: "蔬菜", name: "西兰花", calories: 34, protein: 2.8, note: "生重" },
  { category: "蔬菜", name: "胡萝卜", calories: 41, protein: 0.9, note: "生重" },
  { category: "蔬菜", name: "西红柿", calories: 18, protein: 0.9, note: "生重" },
  { category: "蔬菜", name: "黄瓜", calories: 16, protein: 0.7, note: "生重" },
  { category: "蔬菜", name: "生菜", calories: 16, protein: 1.4, note: "生重" },
  { category: "蔬菜", name: "菠菜", calories: 23, protein: 2.9, note: "生重" },
  { category: "蔬菜", name: "小青菜", calories: 18, protein: 1.5, note: "生重" },
  { category: "蔬菜", name: "上海青", calories: 18, protein: 1.6, note: "生重" },
  { category: "蔬菜", name: "芹菜", calories: 14, protein: 0.7, note: "生重" },
  { category: "蔬菜", name: "青椒", calories: 22, protein: 1.0, note: "生重" },
  { category: "蔬菜", name: "彩椒", calories: 31, protein: 1.0, note: "生重" },
  { category: "蔬菜", name: "白菜", calories: 17, protein: 1.5, note: "生重" },
  { category: "蔬菜", name: "娃娃菜", calories: 13, protein: 1.9, note: "生重" },
  { category: "蔬菜", name: "冬瓜", calories: 12, protein: 0.4, note: "生重" },
  { category: "蔬菜", name: "蘑菇", calories: 24, protein: 2.7, note: "生重" },
  { category: "蔬菜", name: "香菇", calories: 26, protein: 2.2, note: "生重" },
  { category: "蔬菜", name: "洋葱", calories: 40, protein: 1.1, note: "生重" },
  { category: "蔬菜", name: "茄子", calories: 25, protein: 1.0, note: "生重" },
  { category: "蔬菜", name: "西葫芦", calories: 17, protein: 1.2, note: "生重" },
  { category: "水果", name: "橙子", calories: 47, protein: 0.9, note: "可食部" },
  { category: "水果", name: "苹果", calories: 52, protein: 0.3, note: "可食部" },
  { category: "水果", name: "香蕉", calories: 89, protein: 1.1, note: "可食部" },
  { category: "水果", name: "草莓", calories: 32, protein: 0.7, note: "可食部" },
  { category: "水果", name: "蓝莓", calories: 57, protein: 0.7, note: "可食部" },
  { category: "水果", name: "猕猴桃", calories: 61, protein: 1.1, note: "可食部" },
  { category: "饮品", name: "无糖豆浆", calories: 33, protein: 3.0, note: "100ml约100g" },
  { category: "饮品", name: "牛奶", calories: 54, protein: 3.3, note: "100ml约100g" },
  { category: "饮品", name: "脱脂牛奶", calories: 35, protein: 3.4, note: "100ml约100g" },
  { category: "乳制品", name: "无糖酸奶", calories: 63, protein: 3.5, note: "看品牌标签" },
  { category: "乳制品", name: "希腊酸奶", calories: 97, protein: 9.0, note: "无糖款差异较大" },
  { category: "油脂", name: "食用油", calories: 884, protein: 0, note: "烹调用油" },
  { category: "油脂", name: "橄榄油", calories: 884, protein: 0, note: "烹调用油" },
  { category: "坚果", name: "杏仁", calories: 579, protein: 21.2, note: "热量高，少量使用" },
  { category: "坚果", name: "核桃", calories: 654, protein: 15.2, note: "热量高，少量使用" }
];

const UNIT_OVERRIDES = {
  "鸡蛋": { unit: "个", unitWeight: 50 },
  "橙子": { unit: "个", unitWeight: 180 },
  "苹果": { unit: "个", unitWeight: 180 },
  "香蕉": { unit: "根", unitWeight: 120 },
  "猕猴桃": { unit: "个", unitWeight: 90 },
  "全麦面包": { unit: "片", unitWeight: 35 },
  "玉米": { unit: "根", unitWeight: 200 }
};

const MACRO_OVERRIDES = {
  "鸡蛋": { carbs: 1.1, fat: 9.5 },
  "鸡胸肉": { carbs: 0, fat: 2.0 },
  "去皮鸡腿肉": { carbs: 0, fat: 5.0 },
  "瘦牛肉": { carbs: 0, fat: 4.5 },
  "牛腱子": { carbs: 0, fat: 5.1 },
  "猪里脊": { carbs: 0.7, fat: 7.9 },
  "瘦猪肉": { carbs: 1.5, fat: 6.2 },
  "虾仁": { carbs: 0.2, fat: 1.7 },
  "鳕鱼": { carbs: 0, fat: 0.7 },
  "三文鱼": { carbs: 0, fat: 13.4 },
  "金枪鱼": { carbs: 0, fat: 1.0 },
  "北豆腐": { carbs: 3.0, fat: 8.1 },
  "南豆腐": { carbs: 2.6, fat: 5.8 },
  "豆腐干": { carbs: 11.5, fat: 11.0 },
  "燕麦": { carbs: 66.3, fat: 6.9 },
  "米饭": { carbs: 25.9, fat: 0.3 },
  "糙米饭": { carbs: 23.0, fat: 0.9 },
  "土豆": { carbs: 17.0, fat: 0.1 },
  "红薯": { carbs: 20.1, fat: 0.1 },
  "玉米": { carbs: 22.8, fat: 1.2 },
  "全麦面包": { carbs: 41.0, fat: 4.2 },
  "面条": { carbs: 22.0, fat: 0.4 },
  "西兰花": { carbs: 6.6, fat: 0.4 },
  "胡萝卜": { carbs: 9.6, fat: 0.2 },
  "西红柿": { carbs: 3.9, fat: 0.2 },
  "黄瓜": { carbs: 3.6, fat: 0.1 },
  "生菜": { carbs: 2.9, fat: 0.2 },
  "菠菜": { carbs: 3.6, fat: 0.4 },
  "小青菜": { carbs: 2.7, fat: 0.3 },
  "上海青": { carbs: 2.7, fat: 0.3 },
  "芹菜": { carbs: 3.0, fat: 0.2 },
  "青椒": { carbs: 5.1, fat: 0.2 },
  "彩椒": { carbs: 6.0, fat: 0.3 },
  "白菜": { carbs: 3.2, fat: 0.1 },
  "娃娃菜": { carbs: 2.4, fat: 0.1 },
  "冬瓜": { carbs: 2.6, fat: 0.2 },
  "蘑菇": { carbs: 3.3, fat: 0.3 },
  "香菇": { carbs: 5.2, fat: 0.3 },
  "洋葱": { carbs: 9.3, fat: 0.1 },
  "茄子": { carbs: 5.9, fat: 0.2 },
  "西葫芦": { carbs: 3.1, fat: 0.3 },
  "橙子": { carbs: 11.8, fat: 0.1 },
  "苹果": { carbs: 13.8, fat: 0.2 },
  "香蕉": { carbs: 22.8, fat: 0.3 },
  "草莓": { carbs: 7.7, fat: 0.3 },
  "蓝莓": { carbs: 14.5, fat: 0.3 },
  "猕猴桃": { carbs: 14.7, fat: 0.5 },
  "无糖豆浆": { carbs: 1.5, fat: 1.8 },
  "牛奶": { carbs: 5.0, fat: 2.8 },
  "脱脂牛奶": { carbs: 5.0, fat: 0.2 },
  "无糖酸奶": { carbs: 4.7, fat: 3.3 },
  "希腊酸奶": { carbs: 3.6, fat: 5.0 },
  "食用油": { carbs: 0, fat: 100 },
  "橄榄油": { carbs: 0, fat: 100 },
  "杏仁": { carbs: 21.6, fat: 49.9 },
  "核桃": { carbs: 13.7, fat: 65.2 }
};

const DEFAULT_RECIPE = {
  id: createId(),
  name: "鸡胸土豆减脂餐",
  meals: {
    "早餐": [
      item("鸡蛋", 2),
      item("燕麦", 40),
      item("无糖豆浆", 300),
      item("橙子", 1)
    ],
    "午餐": [
      item("鸡胸肉", 220),
      item("土豆", 250),
      item("西兰花", 300),
      item("胡萝卜", 100),
      item("食用油", 5)
    ],
    "下午加餐": [
      item("牛奶", 250),
      item("橙子", 1)
    ],
    "晚餐": [
      item("鸡胸肉", 200),
      item("土豆", 150),
      item("西兰花", 300),
      item("胡萝卜", 100),
      item("食用油", 5)
    ]
  }
};

const BUILT_IN_RECIPES = [
  DEFAULT_RECIPE,
  {
    id: createId(),
    name: "牛肉彩椒土豆餐",
    meals: {
      "早餐": [
        item("鸡蛋", 2),
        item("燕麦", 40),
        item("牛奶", 250),
        item("橙子", 1)
      ],
      "午餐": [
        item("瘦牛肉", 220),
        item("土豆", 250),
        item("西兰花", 250),
        item("西红柿", 200),
        item("彩椒", 150),
        item("食用油", 5)
      ],
      "下午加餐": [
        item("希腊酸奶", 150),
        item("苹果", 1)
      ],
      "晚餐": [
        item("鸡胸肉", 160),
        item("米饭", 150),
        item("菠菜", 250),
        item("蘑菇", 200),
        item("胡萝卜", 100),
        item("食用油", 5)
      ]
    }
  },
  {
    id: createId(),
    name: "鸡腿虾仁红薯餐",
    meals: {
      "早餐": [
        item("鸡蛋", 2),
        item("燕麦", 40),
        item("无糖豆浆", 300),
        item("香蕉", 1)
      ],
      "午餐": [
        item("去皮鸡腿肉", 220),
        item("红薯", 250),
        item("小青菜", 300),
        item("西红柿", 200),
        item("食用油", 8)
      ],
      "下午加餐": [
        item("牛奶", 250),
        item("猕猴桃", 1)
      ],
      "晚餐": [
        item("虾仁", 250),
        item("米饭", 150),
        item("西兰花", 300),
        item("彩椒", 150),
        item("洋葱", 100),
        item("食用油", 5)
      ]
    }
  },
  {
    id: createId(),
    name: "猪里脊鳕鱼蔬菜餐",
    meals: {
      "早餐": [
        item("鸡蛋", 2),
        item("燕麦", 45),
        item("无糖豆浆", 300),
        item("苹果", 1)
      ],
      "午餐": [
        item("猪里脊", 200),
        item("土豆", 250),
        item("芹菜", 250),
        item("青椒", 150),
        item("西红柿", 200),
        item("食用油", 5)
      ],
      "下午加餐": [
        item("希腊酸奶", 200),
        item("草莓", 200)
      ],
      "晚餐": [
        item("鳕鱼", 250),
        item("玉米", 0.8),
        item("菠菜", 300),
        item("冬瓜", 300),
        item("胡萝卜", 100),
        item("食用油", 5)
      ]
    }
  },
  {
    id: createId(),
    name: "牛腱番茄玉米餐",
    meals: {
      "早餐": [
        item("鸡蛋", 2),
        item("燕麦", 45),
        item("牛奶", 250),
        item("苹果", 1)
      ],
      "午餐": [
        item("牛腱子", 220),
        item("玉米", 0.8),
        item("西红柿", 250),
        item("西兰花", 300),
        item("彩椒", 100),
        item("食用油", 5)
      ],
      "下午加餐": [
        item("无糖酸奶", 200),
        item("橙子", 1)
      ],
      "晚餐": [
        item("鸡胸肉", 180),
        item("米饭", 180),
        item("小青菜", 300),
        item("蘑菇", 200),
        item("胡萝卜", 100),
        item("食用油", 5)
      ]
    }
  },
  {
    id: createId(),
    name: "豆腐虾仁鸡胸餐",
    meals: {
      "早餐": [
        item("鸡蛋", 2),
        item("燕麦", 40),
        item("无糖豆浆", 300),
        item("香蕉", 1)
      ],
      "午餐": [
        item("虾仁", 220),
        item("北豆腐", 200),
        item("土豆", 250),
        item("彩椒", 150),
        item("西红柿", 200),
        item("食用油", 5)
      ],
      "下午加餐": [
        item("牛奶", 250),
        item("草莓", 200)
      ],
      "晚餐": [
        item("鸡胸肉", 200),
        item("红薯", 220),
        item("菠菜", 300),
        item("香菇", 200),
        item("胡萝卜", 100),
        item("食用油", 5)
      ]
    }
  },
  {
    id: createId(),
    name: "瘦猪肉青椒番茄餐",
    meals: {
      "早餐": [
        item("鸡蛋", 2),
        item("全麦面包", 2),
        item("牛奶", 250),
        item("橙子", 1)
      ],
      "午餐": [
        item("瘦猪肉", 220),
        item("米饭", 200),
        item("青椒", 200),
        item("西红柿", 250),
        item("洋葱", 100),
        item("食用油", 5)
      ],
      "下午加餐": [
        item("无糖酸奶", 200),
        item("苹果", 1)
      ],
      "晚餐": [
        item("鳕鱼", 250),
        item("土豆", 250),
        item("西兰花", 300),
        item("胡萝卜", 150),
        item("食用油", 5)
      ]
    }
  },
  {
    id: createId(),
    name: "金枪鱼鸡腿糙米餐",
    meals: {
      "早餐": [
        item("鸡蛋", 2),
        item("燕麦", 45),
        item("无糖豆浆", 300),
        item("猕猴桃", 1)
      ],
      "午餐": [
        item("去皮鸡腿肉", 240),
        item("糙米饭", 220),
        item("彩椒", 150),
        item("洋葱", 120),
        item("小青菜", 250),
        item("食用油", 8)
      ],
      "下午加餐": [
        item("牛奶", 250),
        item("香蕉", 1)
      ],
      "晚餐": [
        item("金枪鱼", 220),
        item("土豆", 220),
        item("生菜", 250),
        item("黄瓜", 200),
        item("西红柿", 200),
        item("食用油", 5)
      ]
    }
  }
];

let recipes = [];
let currentId = null;

const recipeList = document.querySelector("#recipeList");
const recipeCount = document.querySelector("#recipeCount");
const recipeName = document.querySelector("#recipeName");
const mealSections = document.querySelector("#mealSections");
const totalCalories = document.querySelector("#totalCalories");
const totalProtein = document.querySelector("#totalProtein");
const totalCarbs = document.querySelector("#totalCarbs");
const totalFat = document.querySelector("#totalFat");
const proteinRatio = document.querySelector("#proteinRatio");
const carbsRatio = document.querySelector("#carbsRatio");
const fatRatio = document.querySelector("#fatRatio");
const foodCount = document.querySelector("#foodCount");
const foodSearch = document.querySelector("#foodSearch");
const foodTableBody = document.querySelector("#foodTableBody");
const foodOptions = document.querySelector("#foodOptions");

function item(name, amount) {
  const food = FOODS.find((entry) => entry.name === name);
  const meta = getFoodMeta(name);
  const macros = getFoodMacros(name);
  return {
    food: name,
    customName: "",
    quantity: amount,
    unit: meta.unit,
    amount: amountToWeight(amount, meta.unit, meta),
    calories: food?.calories ?? 0,
    protein: food?.protein ?? 0,
    carbs: macros.carbs,
    fat: macros.fat
  };
}

function getFoodMeta(name) {
  const food = FOODS.find((entry) => entry.name === name);
  const override = UNIT_OVERRIDES[name];
  if (override) return override;
  if (food?.category === "饮品") return { unit: "ml", unitWeight: 1 };
  return { unit: "g", unitWeight: 1 };
}

function getUnitOptions(name) {
  const meta = getFoodMeta(name);
  const options = [meta.unit, "g", "ml"];
  if (["个", "根", "片"].includes(meta.unit)) options.push(meta.unit);
  return [...new Set(options)];
}

function amountToWeight(quantity, unit, meta) {
  const value = Number(quantity) || 0;
  if (unit === "g" || unit === "ml") return value;
  return value * (Number(meta.unitWeight) || 1);
}

function quantityFromWeight(weight, unit, meta) {
  const value = Number(weight) || 0;
  if (unit === "g" || unit === "ml") return value;
  return value / (Number(meta.unitWeight) || 1);
}

function defaultQuantity(unit) {
  return unit === "g" || unit === "ml" ? 100 : 1;
}

function getFoodMacros(name) {
  return MACRO_OVERRIDES[name] ?? { carbs: 0, fat: 0 };
}

function findFoodByName(name) {
  return FOODS.find((food) => food.name === name);
}

function createId() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }
  return `recipe_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function cloneRecipe(recipe) {
  return JSON.parse(JSON.stringify(recipe));
}

function emptyRecipe() {
  return {
    id: createId(),
    name: "新菜谱",
    meals: Object.fromEntries(MEALS.map((meal) => [meal, []]))
  };
}

function loadRecipes() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    recipes = BUILT_IN_RECIPES.map(cloneRecipe);
    currentId = recipes[0].id;
    persist();
    return;
  }

  try {
    const parsed = JSON.parse(saved);
    recipes = normalizeRecipes(parsed);
    seedBuiltInRecipes();
    currentId = recipes[0]?.id ?? null;
  } catch {
    recipes = BUILT_IN_RECIPES.map(cloneRecipe);
    currentId = recipes[0].id;
    persist();
  }
}

function seedBuiltInRecipes() {
  let changed = false;
  BUILT_IN_RECIPES.forEach((builtIn) => {
    if (!recipes.some((recipe) => recipe.name === builtIn.name)) {
      recipes.push(cloneRecipe(builtIn));
      changed = true;
    }
  });
  if (changed) persist();
}

function normalizeRecipes(value) {
  const list = Array.isArray(value) ? value : [];
  return list.map((recipe) => ({
    id: recipe.id || createId(),
    name: recipe.name || "未命名菜谱",
    meals: Object.fromEntries(
      MEALS.map((meal) => [
        meal,
        Array.isArray(recipe.meals?.[meal])
          ? recipe.meals[meal].map(normalizeItem)
          : []
      ])
    )
  }));
}

function normalizeItem(value) {
  const food = value.food || "";
  const meta = getFoodMeta(food);
  const macros = getFoodMacros(food);
  const unit = value.unit || meta.unit;
  const amount = Number(value.amount) || 0;
  const quantity = value.quantity !== undefined
    ? Number(value.quantity) || 0
    : quantityFromWeight(amount, unit, meta);
  return {
    food,
    customName: value.customName || "",
    quantity,
    unit,
    amount,
    calories: Number(value.calories) || 0,
    protein: Number(value.protein) || 0,
    carbs: value.carbs !== undefined ? Number(value.carbs) || 0 : macros.carbs,
    fat: value.fat !== undefined ? Number(value.fat) || 0 : macros.fat
  };
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
}

function currentRecipe() {
  return recipes.find((recipe) => recipe.id === currentId) ?? recipes[0] ?? null;
}

function render() {
  renderRecipeList();
  renderEditor();
  renderFoods();
  renderFoodOptions();
}

function renderRecipeList() {
  recipeList.innerHTML = "";
  recipeCount.textContent = `${recipes.length} 个`;

  if (recipes.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "还没有菜谱";
    recipeList.append(empty);
    return;
  }

  recipes.forEach((recipe) => {
    const totals = calculateRecipe(recipe);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `recipe-item${recipe.id === currentId ? " active" : ""}`;
    button.innerHTML = `<strong>${escapeHtml(recipe.name)}</strong><span>约 ${round(totals.calories)} kcal</span>`;
    button.addEventListener("click", () => {
      currentId = recipe.id;
      render();
    });
    recipeList.append(button);
  });
}

function renderEditor() {
  const recipe = currentRecipe();
  mealSections.innerHTML = "";

  if (!recipe) {
    recipeName.value = "";
    totalCalories.textContent = "0 kcal";
    totalProtein.textContent = "0 g";
    totalCarbs.textContent = "0 g";
    totalFat.textContent = "0 g";
    proteinRatio.textContent = "0 kcal / 0%";
    carbsRatio.textContent = "0 kcal / 0%";
    fatRatio.textContent = "0 kcal / 0%";
    return;
  }

  recipeName.value = recipe.name;
  MEALS.forEach((mealName) => {
    const template = document.querySelector("#mealTemplate").content.cloneNode(true);
    const section = template.querySelector(".meal");
    const mealTotals = calculateMeal(recipe.meals[mealName]);
    section.dataset.meal = mealName;
    template.querySelector("h3").innerHTML = `${mealName}<span>${round(mealTotals.calories)} kcal</span>`;
    template.querySelector(".add-food").addEventListener("click", () => {
      recipe.meals[mealName].push(item("鸡胸肉", 100));
      persist();
      render();
    });

    const rows = template.querySelector(".food-rows");
    recipe.meals[mealName].forEach((entry, index) => {
      rows.append(createFoodRow(mealName, entry, index));
    });

    mealSections.append(template);
  });

  updateTotals();
}

function createFoodRow(mealName, entry, index) {
  const template = document.querySelector("#foodRowTemplate").content.cloneNode(true);
  const row = template.querySelector(".food-row");
  const foodInput = template.querySelector(".food-select");
  const quantity = template.querySelector(".quantity");
  const unitSelect = template.querySelector(".unit-select");
  const weightTotal = template.querySelector(".weight-total");
  const calories = template.querySelector(".cal-per-100");
  const protein = template.querySelector(".protein-per-100");
  const carbs = template.querySelector(".carbs-per-100");
  const fat = template.querySelector(".fat-per-100");
  const output = template.querySelector(".row-total");

  foodInput.value = entry.food || entry.customName || "";
  quantity.value = entry.quantity || "";
  calories.value = entry.calories || "";
  protein.value = entry.protein || "";
  carbs.value = entry.carbs || "";
  fat.value = entry.fat || "";

  const refreshUnitOptions = () => {
    const selectedName = entry.food;
    const options = selectedName ? getUnitOptions(selectedName) : ["g", "ml", "个", "根", "片"];
    const selectedUnit = entry.unit && options.includes(entry.unit) ? entry.unit : options[0];
    unitSelect.innerHTML = "";
    options.forEach((unit) => unitSelect.append(new Option(unit, unit)));
    unitSelect.value = selectedUnit;
    entry.unit = selectedUnit;
  };

  const syncEntry = (applyFoodDefaults = false) => {
    const typedName = foodInput.value.trim();
    const selected = findFoodByName(typedName);
    const previousFood = entry.food;
    entry.food = selected?.name || "";
    entry.customName = selected ? "" : typedName;

    if (selected && (applyFoodDefaults || selected.name !== previousFood)) {
      const selectedMeta = getFoodMeta(selected.name);
      const selectedMacros = getFoodMacros(selected.name);
      calories.value = selected.calories;
      protein.value = selected.protein;
      carbs.value = selectedMacros.carbs;
      fat.value = selectedMacros.fat;
      entry.unit = selectedMeta.unit;
      if (!quantity.value || selected.name !== previousFood) {
        quantity.value = defaultQuantity(selectedMeta.unit);
      }
      refreshUnitOptions();
    } else if (!selected && previousFood) {
      entry.unit = ["g", "ml", "个", "根", "片"].includes(entry.unit) ? entry.unit : "g";
      refreshUnitOptions();
    }

    const meta = selected ? getFoodMeta(selected.name) : { unit: unitSelect.value || "g", unitWeight: 1 };
    entry.quantity = Number(quantity.value) || 0;
    entry.unit = unitSelect.value || meta.unit;
    entry.amount = amountToWeight(entry.quantity, entry.unit, meta);
    entry.calories = Number(calories.value) || 0;
    entry.protein = Number(protein.value) || 0;
    entry.carbs = Number(carbs.value) || 0;
    entry.fat = Number(fat.value) || 0;
    updateWeightTotal(weightTotal, entry);
    updateRowTotal(output, entry);
    updateTotals();
    persist();
  };

  foodInput.addEventListener("input", () => syncEntry(true));

  unitSelect.addEventListener("change", () => syncEntry());

  [quantity, calories, protein, carbs, fat].forEach((input) => {
    input.addEventListener("input", () => syncEntry());
  });

  template.querySelector(".remove-row").addEventListener("click", () => {
    const recipe = currentRecipe();
    recipe.meals[mealName].splice(index, 1);
    persist();
    render();
  });

  refreshUnitOptions();
  updateWeightTotal(weightTotal, entry);
  updateRowTotal(output, entry);
  return row;
}

function updateWeightTotal(output, entry) {
  const text = `折算 ${round(entry.amount)} g`;
  output.value = text;
  output.textContent = text;
}

function updateRowTotal(output, entry) {
  const calories = entry.amount * entry.calories / 100;
  const protein = entry.amount * entry.protein / 100;
  const text = `${round(calories)} kcal / 蛋白 ${round(protein)} g`;
  output.value = text;
  output.textContent = text;
}

function updateTotals() {
  const recipe = currentRecipe();
  if (!recipe) return;

  const totals = calculateRecipe(recipe);
  const proteinCalories = totals.protein * 4;
  const carbsCalories = totals.carbs * 4;
  const fatCalories = totals.fat * 9;
  const macroCalories = proteinCalories + carbsCalories + fatCalories;

  totalCalories.textContent = `${round(totals.calories)} kcal`;
  totalProtein.textContent = `${round(totals.protein)} g`;
  totalCarbs.textContent = `${round(totals.carbs)} g`;
  totalFat.textContent = `${round(totals.fat)} g`;
  proteinRatio.textContent = `${round(proteinCalories)} kcal / ${ratio(proteinCalories, macroCalories)}`;
  carbsRatio.textContent = `${round(carbsCalories)} kcal / ${ratio(carbsCalories, macroCalories)}`;
  fatRatio.textContent = `${round(fatCalories)} kcal / ${ratio(fatCalories, macroCalories)}`;
  renderRecipeList();
  updateMealHeadingCalories(recipe);
}

function calculateRecipe(recipe) {
  return MEALS.reduce((totals, meal) => addTotals(totals, calculateMeal(recipe.meals[meal] || [])), emptyTotals());
}

function calculateMeal(items) {
  return items.reduce((totals, entry) => {
    const factor = (Number(entry.amount) || 0) / 100;
    totals.calories += factor * (Number(entry.calories) || 0);
    totals.protein += factor * (Number(entry.protein) || 0);
    totals.carbs += factor * (Number(entry.carbs) || 0);
    totals.fat += factor * (Number(entry.fat) || 0);
    return totals;
  }, emptyTotals());
}

function emptyTotals() {
  return { calories: 0, protein: 0, carbs: 0, fat: 0 };
}

function addTotals(a, b) {
  a.calories += b.calories;
  a.protein += b.protein;
  a.carbs += b.carbs;
  a.fat += b.fat;
  return a;
}

function ratio(part, total) {
  if (!total) return "0%";
  return `${Math.round(part / total * 100)}%`;
}

function updateMealHeadingCalories(recipe) {
  document.querySelectorAll(".meal").forEach((section) => {
    const mealName = section.dataset.meal;
    const headingValue = section.querySelector("h3 span");
    if (!headingValue) return;
    headingValue.textContent = `${round(calculateMeal(recipe.meals[mealName] || []).calories)} kcal`;
  });
}

function renderFoods() {
  const keyword = foodSearch.value.trim().toLowerCase();
  const filtered = FOODS.filter((food) => {
    const meta = getFoodMeta(food.name);
    const text = `${food.category} ${food.name} ${food.note} ${meta.unit} ${meta.unitWeight}`.toLowerCase();
    return text.includes(keyword);
  });

  foodTableBody.innerHTML = "";
  foodCount.textContent = `${filtered.length} 个`;

  filtered.forEach((food) => {
    const meta = getFoodMeta(food.name);
    const macros = getFoodMacros(food.name);
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${food.category}</td>
      <td>${food.name}</td>
      <td>${food.calories} kcal</td>
      <td>${food.protein} g</td>
      <td>${macros.carbs} g</td>
      <td>${macros.fat} g</td>
      <td>${meta.unit}</td>
      <td>${meta.unitWeight} g</td>
      <td>${food.note}</td>
    `;
    foodTableBody.append(row);
  });
}

function renderFoodOptions() {
  foodOptions.innerHTML = "";
  FOODS.forEach((food) => {
    const option = document.createElement("option");
    option.value = food.name;
    option.label = `${food.category} / ${food.calories} kcal`;
    foodOptions.append(option);
  });
}

function round(value) {
  return Math.round(value * 10) / 10;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function switchTab(tabName) {
  document.querySelectorAll(".tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabName);
  });
  document.querySelector("#recipesPanel").classList.toggle("active", tabName === "recipes");
  document.querySelector("#foodsPanel").classList.toggle("active", tabName === "foods");
}

document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", () => switchTab(button.dataset.tab));
});

foodSearch.addEventListener("input", renderFoods);

document.querySelector("#newRecipeBtn").addEventListener("click", () => {
  const recipe = emptyRecipe();
  recipes.push(recipe);
  currentId = recipe.id;
  persist();
  render();
});

document.querySelector("#saveRecipeBtn").addEventListener("click", () => {
  const recipe = currentRecipe();
  if (!recipe) return;
  recipe.name = recipeName.value.trim() || "未命名菜谱";
  persist();
  render();
});

recipeName.addEventListener("input", () => {
  const recipe = currentRecipe();
  if (!recipe) return;
  recipe.name = recipeName.value.trim() || "未命名菜谱";
  persist();
  renderRecipeList();
});

document.querySelector("#deleteRecipeBtn").addEventListener("click", () => {
  if (!currentRecipe()) return;
  if (!confirm("确定删除当前菜谱？")) return;

  recipes = recipes.filter((recipe) => recipe.id !== currentId);
  currentId = recipes[0]?.id ?? null;
  persist();
  render();
});

document.querySelector("#exportBtn").addEventListener("click", () => {
  const data = JSON.stringify(recipes, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "减肥餐菜谱.json";
  link.click();
  URL.revokeObjectURL(url);
});

document.querySelector("#importInput").addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  try {
    const text = await file.text();
    const imported = normalizeRecipes(JSON.parse(text));
    if (imported.length === 0) throw new Error("empty");
    recipes = imported;
    currentId = recipes[0].id;
    persist();
    render();
  } catch {
    alert("导入失败，请确认JSON文件格式正确。");
  } finally {
    event.target.value = "";
  }
});

loadRecipes();
render();
