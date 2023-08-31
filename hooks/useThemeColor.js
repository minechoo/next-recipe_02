import { useGlobalData } from './useGlobalContext';

export const useThemeClolor = () => {
	const { Theme } = useGlobalData();
	const ThemeClolors = {
		theme1: {
			point: 'orange',
		},
		theme2: {
			point: 'aqua',
		},
		theme3: {
			point: 'hotpink',
		},
	};

	return ThemeClolors[Theme];
};
