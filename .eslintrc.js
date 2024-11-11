const { EndOfLineState } = require('typescript');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off', // 함수 반환 타입의 명시를 권장
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 모듈 경계 타입의 명시를 권장
    '@typescript-eslint/no-explicit-any': 'off', // any 사용 경고
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto', // endOfLine 자동 설정
      },
    ],
  },
};
