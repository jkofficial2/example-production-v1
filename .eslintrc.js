module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        jest: true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "indent": [
            2,
            4
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/jsx-indent": [2, 4],
        "react/react-in-jsx-scope": "off",
        "no-undef": "warn",
        "@typescript-eslint/no-unused-vars": "off"
    },
    "globals": {
        "__dirname": true
    }
};
