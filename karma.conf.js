module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'module/*.js',
      'controller/*.js',
      'components/whoAmI/whoAmI.module.js',
      'service/user/user.module.js',
      'service/ajax/ajax.module.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-mocks/angular-mocks.js',
      '*!(.module|.spec).js',
      '!(bower_components)/**/*!(.module|.spec).js',
      'controller/*.js',
      'tests/*.test.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    exclude: ['e2e-tests/*.js'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
    ]

  });
};
