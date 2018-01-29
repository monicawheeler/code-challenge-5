myApp.service('MessagesService', ['$http', function($http){
	console.log('MessagesService loaded');

	const self = this;
	
	self.message = "Hello from the MessagesService!";

}]);