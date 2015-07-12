(function() {
    
    angular
        .module('AlbumsApp')
        .service('ResourceProvider', ResourceProvider);

    function ResourceProvider($resource) {
        this.getAlbums = function($scope) {
            $scope.albums = $resource($scope.API_URL).query();
        };
    }
    
})();