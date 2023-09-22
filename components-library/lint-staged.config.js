module.exports = {
  '**/*.ts?(x)': [
    'npm run format:fix',
    'npm run eslint',
    () => 'npm run type:check', // This is running the type:check for all files, because can not use tsconfig if run on individual files
    'npm run format:check',
  ],
};
