/** @type {import('style-dictionary').PlatformConfig} */
export const iosPresetConfig = {
	transformGroup: 'ios',
	buildPath: 'build/ios/',
	files: [
		{
			destination: 'StyleDictionaryColor.h',
			format: 'ios/colors.h',
			options: {
				className: 'StyleDictionaryColor',
				type: 'StyleDictionaryColorName',
			},
			filter: {
				$type: 'color',
			},
		},
		{
			destination: 'StyleDictionaryColor.m',
			format: 'ios/colors.m',
			options: {
				className: 'StyleDictionaryColor',
				type: 'StyleDictionaryColorName',
			},
			filter: {
				$type: 'color',
			},
		},
		{
			destination: 'StyleDictionarySize.h',
			format: 'ios/static.h',
			options: {
				className: 'StyleDictionarySize',
				type: 'float',
			},
			filter: {
				$type: 'dimension',
			},
		},
		{
			destination: 'StyleDictionarySize.m',
			format: 'ios/static.m',
			options: {
				className: 'StyleDictionarySize',
				type: 'float',
			},
			filter: {
				$type: 'dimension',
			},
		},
	],
};

/** @type {import('style-dictionary').PlatformConfig} */
export const iosSwiftPresetConfig = {
	transformGroup: 'ios-swift',
	buildPath: 'build/ios-swift/',
	files: [
		{
			destination: 'StyleDictionary+Class.swift',
			format: 'ios-swift/class.swift',
			options: {
				className: 'StyleDictionaryClass',
			},
		},
		{
			destination: 'StyleDictionary+Enum.swift',
			format: 'ios-swift/enum.swift',
			options: {
				className: 'StyleDictionaryEnum',
			},
		},
		{
			destination: 'StyleDictionary+Struct.swift',
			format: 'ios-swift/any.swift',
			options: {
				className: 'StyleDictionaryStruct',
				imports: 'SwiftUI',
				objectType: 'struct',
				accessControl: 'internal',
			},
		},
	],
};

/** @type {import('style-dictionary').PlatformConfig} */
export const iosSwiftSeparateEnumsPresetConfig = {
	transformGroup: 'ios-swift-separate',
	buildPath: 'build/ios-swift/',
	files: [
		{
			destination: 'StyleDictionaryColor.swift',
			format: 'ios-swift/enum.swift',
			options: {
				className: 'StyleDictionaryColor',
			},
			filter: {
				$type: 'color',
			},
		},
		{
			destination: 'StyleDictionarySize.swift',
			format: 'ios-swift/enum.swift',
			options: {
				className: 'StyleDictionarySize',
			},
			filter: {
				$type: 'dimension',
			},
		},
	],
};
