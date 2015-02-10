Router.configure({
	layoutTemplate: "layout",
});

Router.route('/', {
	name: 'home',
	template: 'home',
	controller: 'PreloadController',
	'preload': {
		'styles': ['/assets/css/style.css',
				'/assets/css/normalize.css',
				'/assets/css/lemonade.css'],
		'async': ['/assets/js/uilang.js',
				'/assets/js/jquery.js',
				'/assets/js/application.js']
	}
});

Router.route('/dodonts', {
	name: 'dodonts',
	template: 'dodonts',
	controller: 'PreloadController',
	'preload': {
		'styles': ['/assets/css/other-styles.css',
				'/assets/css/lemonade.css']
	}
});

Router.route('/privacy', {
	name: 'privacy',
	template: 'privacy',
	controller: 'PreloadController',
	'preload': {
		'styles': ['/assets/css/other-styles.css',
				'/assets/css/lemonade.css']
	}
});

Router.route('/terms', {
	name: 'terms',
	template: 'terms',
	controller: 'PreloadController',
	'preload': {
		'styles': ['/assets/css/other-styles.css',
				'/assets/css/lemonade.css']
	}
});

Router.route('/sent', {
	name: 'sent',
	template: 'sent',
	controller: 'PreloadController',
	'preload': {
		'styles': ['/assets/css/other-styles.css',
				'/assets/css/lemonade.css']
	}
});




