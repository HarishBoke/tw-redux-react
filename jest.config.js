module.exports = {
	setupFilesAfterEnv: ['<rootDir>/config/setupEnzyme.js'],
	collectCoverage: true,
	collectCoverageFrom: [
		"app/**/*.js",
		"!app/store/configureStore.js"
	],
	coverageReporters: ['json', 'lcov', 'text-summary'],
	coverageThreshold: {
		global: {
			statements: 0,
			branches: 0,
			functions: 0,
			lines: 0,
		},
	},
	testPathIgnorePatterns: ['coverage'],
};
