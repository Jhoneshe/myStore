/**
 * Created by Oliver on 2016/6/9.
 */
angular.module("myApp").controller("welcomeCtrl",function ($scope,$interval,$state) {
    $scope.sec = 5;

    $scope.load = function() {
        $interval(function () {
            $scope.sec--;
            if ($scope.sec <= 0){
                $state.go("tabs.home");
            }
        },1000,5);
    };
    
    /*$scope.isShow = false;
    $scope.onSlideChanged = function(){
        if($ionicSlideBoxDelegate.currentIndex() == $ionicSlideBoxDelegate.slidesCount() - 1){
            $scope.isShow = true;
        }
    };*/
});