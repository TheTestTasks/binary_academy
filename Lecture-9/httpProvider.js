(function() {
    
    angular
        .module('AlbumsApp')
        .service('HttpProvider', HttpProvider);

    function HttpProvider($http) {
        this.getAlbums = function($scope) {
            $http.get($scope.API_URL).then(function(data, status, headers, config) {
                $scope.albums = data.data;
            }); 
        };
    }
    
})();