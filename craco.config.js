const path = require('path')
const CracoAlias = require('craco-alias')
// const { pathsToModuleNameMapper } = require("ts-jest");
// const { compilerOptions } = require("./tsconfig.json");

module.exports = {
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
      '@routes': path.resolve(__dirname, 'src/routes')
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
