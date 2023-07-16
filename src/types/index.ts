export enum EStuff {
  'INGREDIENT',
  'RECIPE',
  'COOK_WARE',
  'USER'
}

export const stuffNameConfig =  {
  [EStuff.INGREDIENT]: '食材',
  [EStuff.RECIPE]: '食谱',
  [EStuff.COOK_WARE]: '炊具',
  [EStuff.USER]: '用户'
}

export enum EDifficulty {
  'EASY',
  'INTERMEDIATE',
  'ADVANCED',
  'COMPLEX'
}

export const difficultyConfig =  {
  [EDifficulty.EASY]: '简单',
  [EDifficulty.INTERMEDIATE]: '中等',
  [EDifficulty.ADVANCED]: '高级',
  [EDifficulty.COMPLEX]: '复杂'
}

export enum EScreenSize {
  'XS'= 'XS',
  'SM'= 'SM',
  'MD'= 'MD',
  'LG'= 'LG',
  'XL'= 'XL',
  '2XL' = '2XL'
}
