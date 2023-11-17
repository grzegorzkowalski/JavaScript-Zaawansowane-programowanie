module.exports = {
    root: true,
    env: {
        "browser": true,
        "es6": true
    },
    parserOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
        ecmaFeatures: {
            "modules": true
        }
    },
    rules: {
        "prefer-template": "off",
        "no-var": 0,
        "no-unused-vars": 0,
        "camelcase": 0,
        "no-nested-ternary": 0,
        "no-console": 0,
        "no-template-curly-in-string": 0,
        "no-self-compare": 0,
    },
    ignorePatterns: ["dist", "node_modules", "webpack.*"],
}


