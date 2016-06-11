/**
 * Created by Oliver on 2016/6/6.
 */
var myApp = angular.module("myApp", ['ionic']);
myApp.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('bottom');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');


    $stateProvider.state("tabs",{
        url: "/tabs",
        abstract: true,
        templateUrl: "views/tabs/tabs.html"
    });
    $stateProvider.state("welcome",{
        url: "/welcome", 
        templateUrl: "views/welcome/welcome.html",
        controller: "welcomeCtrl"
    });
    $stateProvider.state("tabs.home",{
        url: "/home",
        views:{
            "view-home":{templateUrl: "views/home/home.html",controller: "homeCtrl"}
        }
    });
    $stateProvider.state("search",{
        url: "/search",
        templateUrl: "views/search/search.html"
        
    });
    $stateProvider.state("details",{
        url: "/details",
        templateUrl: "views/details/details.html"
    });
    $stateProvider.state("tabs.category",{
        url: "/category",
        views:{
            "view-category":{templateUrl: "views/category/category.html"}
        }
    });
    $stateProvider.state("tabs.find",{
        url: "/find",
        views:{
            "view-find":{templateUrl: "views/find/find.html"}
        }
    });
    $stateProvider.state("tabs.service",{
        url: "/service",
        views:{
            "view-service":{templateUrl: "views/service/service.html"}
        }
    });
    
    $urlRouterProvider.otherwise("/welcome");
});