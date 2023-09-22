// WIP, not usable
// const path = require('path');

// const buildEslintCommand = (filenames, command) =>
//   `${command} --file ${filenames.join(' --file ')}`;

// const formaFix = filenames => 'npm run format:fix';
// const lint = filenames => buildEslintCommand(filenames, 'npm run lint');
// const typeCheck = filenames => buildEslintCommand(filenames, 'npm run type:check');
// const formatCheck = filenames => buildEslintCommand(filenames, 'format:check');

// module.exports = {
//   '*.{js,jsx,ts,tsx}': [formaFix, lint, typeCheck, formatCheck],
// };

module.exports = {
  'src/**/*.{ts,tsx}': [
    'npm run format:fix',
    'npm run eslint',
    () => 'npm run type:check', // This is running the type:check for all files, because can not use tsconfig if run on individual files
    'npm run format:check',
  ],
  'src/**/*.{js,jsx}': ['npm run format:fix', 'npm run eslint', 'npm run format:check'],
};
