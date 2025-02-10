import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import globals from 'globals';
import _import from 'eslint-plugin-import';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

const languageOptions = {
	globals: {
		...globals.node,
		// ...globals.jest
	},
	ecmaVersion: 2023,
};

export default [
	...fixupConfigRules(
		compat.extends(
			'eslint:recommended',
			'prettier',
			'plugin:import/recommended',
			'@pagseguro/eslint-config',
		),
	),
	{
		plugins: {
			import: fixupPluginRules(_import),
		},
		languageOptions,
		rules: {
			'require-await': 'off',
			'linebreak-style': 'off',
			'no-duplicate-imports': 'error',
			'no-unneeded-ternary': 'error',
			'prefer-object-spread': 'error',
			'import/no-unresolved': 'off',
			'comma-dangle': 'off',
			'no-console': 'off',
		},
	},
];
