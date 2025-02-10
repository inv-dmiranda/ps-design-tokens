import {
	androidComposePresetConfig,
	androidPresetConfig,
	cssPresetConfig,
	iosPresetConfig,
	iosSwiftPresetConfig,
	iosSwiftSeparateEnumsPresetConfig,
	tailwindPresetConfig,
} from './configs';
import StyleDictionary from 'style-dictionary';

// Pegamos a plataforma via argumento da CLI (Ex: `node build.js web`)
const platform = process.argv[2];

if (!platform) {
	console.error(
		'❌ Nenhuma plataforma especificada. Use: node build.js [web|ios|android]',
	);
	process.exit(1);
}

// Verifica se a plataforma informada existe na configuração
const config = {
	source: ['tokens/**/*.json'],
	platforms: {
		android: androidPresetConfig,
		androidCompose: androidComposePresetConfig,
		css: cssPresetConfig,
		ios: iosPresetConfig,
		iosSwift: iosSwiftPresetConfig,
		iosSwiftSeparateEnums: iosSwiftSeparateEnumsPresetConfig,
		tailwind: tailwindPresetConfig,
	},
};

// Se a plataforma for inválida, exibe erro
if (!config.platforms[platform]) {
	console.error(
		`❌ Plataforma inválida: '${platform}'. Escolha entre: web, ios, android.`,
	);
	process.exit(1);
}

// Inicializa o Style Dictionary com a plataforma escolhida
const sd = new StyleDictionary({
	source: config.source,
	platforms: {
		[platform]: config.platforms[platform],
	},
});

sd.buildAllPlatforms();
console.log(`✅ Plataforma '${platform}' gerada com sucesso!`);
