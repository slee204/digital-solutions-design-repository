import { create } from '@storybook/theming';

export default create({
	base: 'light',
	brandTitle: 'CSATS',
	brandUrl: 'https://csats.com',
	brandImage: 'https://s3.amazonaws.com/csats.com/images/csats-logo-white-250W.png',
	colorPrimary: '#254e5e',
	colorSecondary: '#00aabb',

	appBg: '#254e5e',
	appContentBg: 'white',
	appBorderColor: '#7b7b7b',
	appBorderRadius: '7',

	// Typography
	fontBase: '"Open Sans", sans-serif',
	fontCode: 'monospace',
	// Text colors
	textColor: 'black',
	textInverseColor: '#254e5e',

	// Toolbar default and active colors
	barTextColor: '#767676',
	barSelectedColor: '#00aabb',
	barBg: '#e5e5e5',

	// Form colors
	inputBg: 'white',
	inputBorder: '#cccccc',
	inputTextColor: 'black'
});
