const path = require('path')
const CracoAlias = require('craco-alias')
// const { pathsToModuleNameMapper } = require("ts-jest");
// const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  style: {
    postOptions: {
      plugins: [require('tailwindcss'), require('autoprefixer')]
    }
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: './src',
        /* tsConfigPath should point to the file where "baseUrl" and "paths"
          are specified */
        tsConfigPath: './tsconfig.paths.json'
      }
    }
  ],
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@configs': path.resolve(__dirname, 'src/configs'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  },
  jest: {
    configure: {
      preset: 'ts-jest'
      // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
      //   prefix: "<rootDir>/src/",
      // }),
    }
  }
}
