module.exports = {
    roots: ['test'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  }

//   const { default: tsjPreset } = require('ts-jest/presets');
// module.exports = {
//     preset: 'ts-jest',
//     rootDir: './'    transform: {
//         ...tsjPreset.transform
//     },
//     testRegex: '(/test/.*\\.(test|spec))\\.[tj]sx?$',
//     moduleFileExtensions: [
//         "ts",
//         "tsx",
//         "js",
//         "jsx"
//     ],
//     moduleNameWrapper: {
//         '^@APP/(.*)$': '<rootDir>/src/baseTs/$1'
//     },
//     collectCoverageFrom: {
//         "**/baseTs/upperFirst.ts",
//         "**/baseTs/camelCase.ts",
//         "!**/node_modules/**",
//         "!**/vendor/**"
//     }
// }