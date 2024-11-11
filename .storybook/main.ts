import type { StorybookConfig } from '@storybook-vue/nuxt';

const config: StorybookConfig = {
	core: {
		disableTelemetry: true,
	},
	framework: {
		name: '@storybook-vue/nuxt',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	stories: [
		'../stories/**/*.mdx',
		'../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
};

export default config;
