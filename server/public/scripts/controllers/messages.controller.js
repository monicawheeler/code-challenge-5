myApp.controller("MessagesController", ['MessagesService', function(MessagesService){
	console.log('MessagesController loaded');
	
	const self = this;

	//Verify service is working and shared with the views
	self.message = MessagesService.message;

}]);