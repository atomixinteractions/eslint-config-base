module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  plugins: [
    'import',
    'unicorn',
  ],
  extends: ['airbnb-base', 'plugin:unicorn/recommended'],
  rules: {
    strict: 'off',
    'no-unused-vars': ['warn', { ignoreRestSiblings: false }],
    semi: ['error', 'never'],
    'no-confusing-arrow': 'off',

    'no-magic-numbers': ['warn', {
      ignore: [1, 0, -1],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],

    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      functions: 'ignore',
    }],

    'operator-linebreak': ['error', 'after', {
      overrides: {
        '?': 'before',
        ':': 'before',
        '&&': 'before',
        '+': 'before',
        '||': 'before',
      } },
    ],
    'brace-style': ['error', 'stroustrup'],
    'quote-props': ['error', 'as-needed'],
    'no-plusplus': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'implicit-arrow-linebreak': ['error', 'beside'],

    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }
    ],

    'import/no-unresolved': 'off',
    'import/extensions': ['error', 'never',
      [
        'json', 'json5',
        'less', 'css', 'scss', 'sass', 'styl',
        'jpeg', 'jpg', 'png', 'svg', 'bmp', 'gif',
      ].reduce((obj, ext) => Object.assign(obj, { [ext]: 'always' }), {}),
    ],

    'import/order': ['warn', {
      groups: [
        ['builtin', 'external'],
        ['internal', 'parent'],
        ['sibling', 'index'],
      ],
      'newlines-between': 'ignore',
    }],

    'import/newline-after-import': ['warn', { count: 2 }],
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',

    'unicorn/catch-error-name': ['error', { name: 'error' }],
    'unicorn/no-fn-reference-in-iterator': 'off',
  },
}
