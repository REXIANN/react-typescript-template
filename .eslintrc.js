module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    },
    "eslintConfig": {
        "extends": [
            "react-app",
            "react-app/jest"
        ],
        "overrides": [
            {
                "files": [
                    "**/*.stories.*"
                ],
                "rules": {
                    "import/no-anonymous-default-export": "off"
                }
            }
        ]
    },
};
