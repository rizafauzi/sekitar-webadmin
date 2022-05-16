module.exports = {
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  '**/*.{js,jsx,ts,tsx}': 'yarn lint --cache --fix',
  '**/*.{js,jsx,ts,tsx,json,css,scss}': ['prettier --write']
}
