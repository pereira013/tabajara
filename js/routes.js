angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.aEscola', {
    url: '/page_escola',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aEscola.html',
        controller: 'aEscolaCtrl'
      }
    }
  })

  .state('menu.desenvolvimentoMobileHBrido', {
    url: '/page_hibrido',
    views: {
      'side-menu21': {
        templateUrl: 'templates/desenvolvimentoMobileHBrido.html',
        controller: 'desenvolvimentoMobileHBridoCtrl'
      }
    }
  })

  .state('menu.curso', {
    url: '/page_curso',
    views: {
      'side-menu21': {
        templateUrl: 'templates/curso.html',
        controller: 'cursoCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.contato', {
    url: '/page_contato',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contato.html',
        controller: 'contatoCtrl'
      }
    }
  })

  .state('menu.mensagem', {
    url: '/page_msg_eric',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mensagem.html',
        controller: 'mensagemCtrl'
      }
    }
  })

  .state('menu.mensagem2', {
    url: '/page_msg_andre',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mensagem2.html',
        controller: 'mensagem2Ctrl'
      }
    }
  })

  .state('page', {
    url: '/page7',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page_escola')

  

});