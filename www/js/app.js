// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    $rootScope.isDeviceTablet = false;
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(false);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    screen.unlockOrientation();

  });

})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.discover', {
    url: '/discover',
    views: {
      'menuContent': {
        templateUrl: 'templates/discover.html'
      },
      'tabletLandscape': {
        templateUrl: ''
      }
    }
  })

  /*discover sub-states*/
  .state('app.buying_power', {
      url: '/discover/buying_power',
      views: {
        'menuContent': {
          templateUrl: 'templates/discover_content/buying_power.html',
        },
        'tabletLandscape': {
          templateUrl: ''
        }
      }
  })

  .state('app.credits', {
      url: '/discover/credits',
      views: {
        'menuContent': {
          templateUrl: 'templates/discover_content/credits.html',
        },
        'tabletLandscape': {
          templateUrl: ''
        }
      }
  })

  .state('app.currency_terms', {
      url: '/discover/currency_terms',
      views: {
        'menuContent': {
          templateUrl: 'templates/discover_content/currency_terms.html',
        },
        'tabletLandscape': {
          templateUrl: ''
        }
      }
  })

  .state('app.expedition_costs', {
      url: '/discover/expedition_costs',
      views: {
        'menuContent': {
          templateUrl: 'templates/discover_content/expedition_costs.html',
        },
        'tabletLandscape': {
          templateUrl: ''
        }
      }
  })

  .state('app.interview', {
      url: '/discover/interview',
      views: {
        'menuContent': {
          templateUrl: 'templates/discover_content/interview.html',
        },
        'tabletLandscape': {
          templateUrl: ''
        }
      }
  })

  .state('app.out_about', {
      url: '/discover/out_about',
      views: {
        'menuContent': {
          templateUrl: 'templates/discover_content/out_about.html',
        },
        'tabletLandscape': {
          templateUrl: ''
        }
      }
  })

  .state('app.calculator', {
      url: '/calculator',
      views: {
        'menuContent': {
          templateUrl: 'templates/calculator.html'
        },
        'tabletLandscape': {
          templateUrl: 'templates/past_calculations.html',
          controller: 'PastCalculationsCtrl'
        }
      }
    })

    .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings.html',
          controller: 'SettingsCtrl'
        },
        'tabletLandscape': {
          templateUrl: ''
        }
      }
    })
    .state('app.pdfview', {
        url: '/past_calculations/pdfview',
        views: {
        'menuContent': {
        templateUrl: 'templates/pdfview.html',
        },
        'tabletLandscape': {
        templateUrl: ''
        }
        }
    })

  .state('app.past_calculations', {
    url: '/past_calculations',
    views: {
      'menuContent': {
        templateUrl: 'templates/past_calculations.html',
        controller: 'PastCalculationsCtrl'
      },
      'tabletLandscape': {
        templateUrl: ''
      }

    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/calculator');
});
