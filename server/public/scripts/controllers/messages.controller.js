myApp.controller("MessagesController", ['MessagesService', function(MessagesService){
	console.log('MessagesController loaded');
	
	const self = this;
	
	self.messagesReturned = MessagesService.messagesReturned;

	// run the getMessages function
	self.getMessages = function() {
		MessagesService.getMessages();
	}

    // run the submitMessages function
    self.submitMessage = function(message) {
		MessagesService.submitMessage(message);
	  }

}]);