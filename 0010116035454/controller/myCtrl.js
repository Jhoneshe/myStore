/**
 * Created by Oliver on 2016/6/10.
 */
angular.module("myApp").controller("myCtrl",function ($scope,$http) {
   
    $scope.products = [];
        $scope.chosedPid = "";
    
    $http.get("json/products.json").success(function (data) {
           $scope.products = data;
    });

    $scope.chosedProduct = {};
    
    $scope.doShow = function (id) {
        $scope.chosedPid = id;

        var arr = $scope.products;
        angular.forEach(arr,function (product) {
            if (product.pId == $scope.chosedPid){
                $scope.chosedProduct = product;
            }
        });
    };

});