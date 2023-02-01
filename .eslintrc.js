module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/interface-name-prefix': 'off',
        'no-restricted-imports': 'off',
        // '@typescript-eslint/no-restricted-imports': [
        //     'warn',
        //     {
        //         name: 'react-redux',
        //         importNames: ['useSelector', 'useDispatch'],
        //         message:
        //             'Use typed hooks `useAppDispatch` and `useAppSelector` instead.',
        //     },
        // ],
    },
};
