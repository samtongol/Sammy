angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('contacts', {
    url: '/page1',
    templateUrl: 'templates/contacts.html',
    controller: 'contactsCtrl'
  })

  .state('info', {
    url: '/page2',
    templateUrl: 'templates/info.html',
    controller: 'infoCtrl'
  })

  .state('info2', {
    url: '/page3',
    templateUrl: 'templates/info2.html',
    controller: 'info2Ctrl'
  })

  .state('info3', {
    url: '/page4',
    templateUrl: 'templates/info3.html',
    controller: 'info3Ctrl'
  })

  .state('info4', {
    url: '/page5',
    templateUrl: 'templates/info4.html',
    controller: 'info4Ctrl'
  })

  .state('info5', {
    url: '/page6',
    templateUrl: 'templates/info5.html',
    controller: 'info5Ctrl'
  })

  .state('info6', {
    url: '/page7',
    templateUrl: 'templates/info6.html',
    controller: 'info6Ctrl'
  })

$urlRouterProvider.otherwise('/page1')


});