module.exports = {
  "collectCoverage": true,
  "collectCoverageFrom": [
    "src/**/*.{js,jsx}",
    "!**/node_modules/**",
  ],
  "coveragePathIgnorePatterns": [
    "src/index.js",
    "src/reducers/*.js",
  ],
  "coverageDirectory": "<rootDir>/.jest",
  "coverageThreshold": {
    "global": {
      "branches": 40,
      "functions": 40,
      "lines": 40,
      "statements": 40,
    },
  },
  "moduleNameMapper": {
    "\\.(scss)$": "identity-obj-proxy",
    "\\.(jpg)$": "identity-obj-proxy",
    "\\.(png)$": "identity-obj-proxy",
    "\\.(svg)$": "<rootDir>/src/__mocks__/mock-asset.js",
  },
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupFiles": ["<rootDir>/jest.setupFile.js"],
  "setupTestFrameworkScriptFile": "<rootDir>/jest.setupTests.js",
};
