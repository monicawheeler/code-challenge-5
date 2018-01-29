myApp.service('MessagesService', ['$http', function($http){
	console.log('MessagesService loaded');

	const self = this;
	
	self.messagesReturned = {list: []};

	// post message
	self.submitMessage = function(message) {
		$http.post('/messages', message)
		.then(function(response) {
			self.getMessages();
		})
		.catch(function(response) {
			console.log('error on POST request');
		})
	}
	
	// get messages 
    self.getMessages = function() {
        $http.get('/messages')
            .then(function(response){
				// console.log('get messages', response.data);
                self.messagesReturned.list = response.data;
            })
            .catch(function(response){
                console.log('error on GET request');
            })
	}

    // delete message by Id
    self.deleteMessage = function (messageId) {
        $http.delete(`/messages/${messageId}`)
        .then(function (response) {
            self.getMessages();
        })
        .catch(function (response) {
            console.log('error on deleteMessage :', response);
        })
    }

	self.getMessages();

}]);