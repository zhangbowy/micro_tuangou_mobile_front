module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint src --fix', 'prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.vue': ['eslint src --fix', 'stylelint --fix', 'git add .'],
  '*.{scss,less,styl,css,html}': ['stylelint --fix', 'prettier --write', 'git add .'],
  '*.md': ['prettier --write'],
};
