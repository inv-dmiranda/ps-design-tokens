/** @type {import('style-dictionary').PlatformConfig} */
export const androidPresetConfig = {
	transformGroup: 'android',
	buildPath: 'build/android/',
	files: [
		{
			destination: 'font_dimens.xml',
			format: 'android/fontDimens',
		},
		{
			destination: 'colors.xml',
			format: 'android/colors',
		},
	],
};

/** @type {import('style-dictionary').PlatformConfig} */
export const androidComposePresetConfig = {
	transformGroup: 'compose',
	buildPath: 'build/compose/',
	files: [
		{
			destination: 'StyleDictionaryColor.kt',
			format: 'compose/object',
			options: {
				className: 'StyleDictionaryColor',
				packageName: 'StyleDictionaryColor',
			},
			filter: {
				$type: 'color',
			},
		},
		{
			destination: 'StyleDictionarySize.kt',
			format: 'compose/object',
			options: {
				className: 'StyleDictionarySize',
				packageName: 'StyleDictionarySize',
				type: 'float',
			},
			filter: {
				$type: 'dimension',
			},
		},
	],
};
