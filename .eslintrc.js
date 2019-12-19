module.exports = {
	root: true,
	plugins: [
		'eslint-plugin',
		'@typescript-eslint',
		'import',
		'eslint-comments',
	],
	env: {
		es6: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	rules: {
		'@typescript-eslint/explicit-function-return-type': 'error',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/no-unused-vars': ['error', { 'args': 'none' }],
		'@typescript-eslint/no-inferrable-types': 0,
		'@typescript-eslint/semi': ['error', 'never'],
		'@typescript-eslint/require-await': 'off',
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/camelcase': 0,
		'@typescript-eslint/unbound-method': 0,
		'@typescript-eslint/member-delimiter-style': [2, {
			multiline: {
				delimiter: 'comma',
				requireLast: false
			},
			singleline: {
				delimiter: 'comma',
				requireLast: false
			}
		}],
		'@typescript-eslint/interface-name-prefix': 2,

		"no-unused-vars": ["error", { "vars": "all", "args": "none" }],
		"no-prototype-builtins": "off",

		'quotes': ['error', 'single'],
		'curly': 'error',
		'object-curly-spacing': ['error', 'always'],
		'template-curly-spacing': ['error', 'always'],

	  	'eslint-comments/disable-enable-pair': [
			'error',
			{
				allowWholeFile: true,
			},
		],
		'eslint-comments/no-aggregating-enable': 'error',
		'eslint-comments/no-duplicate-disable': 'error',
		'eslint-comments/no-unlimited-disable': 'error',
		'eslint-comments/no-unused-disable': 'error',
		'eslint-comments/no-unused-enable': 'error',
		'eslint-comments/no-use': [
			'error',
			{
		  		allow: [
					'eslint-disable',
					'eslint-disable-line',
					'eslint-disable-next-line',
					'eslint-enable',
		  		],
			},
	  	],
  
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-named-default': 'error',
		'import/no-self-import': 'error',
		'import/prefer-default-export': 0
	},
	overrides: [
		{
			files: ['*.js', '*.jsx'],
			rules: {
				'@typescript-eslint/explicit-function-return-type': 'off',
			}
		}
	],
	parserOptions: {
		"ecmaVersion": 2017
	}
}
