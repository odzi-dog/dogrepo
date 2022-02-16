import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

// Registering languages
register('en', () => import('./languages/en.json'));
register('ru', () => import('./languages/ru.json'));

// Initializing extension
init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromNavigator()
});
