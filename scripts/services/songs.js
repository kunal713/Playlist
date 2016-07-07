app.factory('Songs', ['$http', function($http){
		return{
			get: function(){
				return $http.get('/api/songs.json').then(function(response){
					return response.data;
				});
			} 
		};
	}])