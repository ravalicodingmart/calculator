var app=angular.module('myApp',[])
app.controller('myCtrl',function($scope){
	
$scope.data = {};
$scope.buttons = [1,2,3,4,5,6,7,8,9,'+',0,'-','*','/'];
$scope.data.tes="0";

$scope.changeInput = function(val){
	console.log(val);
	
    $scope.data.tes +=  String(val);
  
}
 
 $scope.display= function(){
  	$scope.data.tes=eval($scope.data.tes.toString())

  }


});