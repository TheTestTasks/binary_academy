(function() {
    
    angular
        .module('AlbumsApp')
        .controller('ListController', ['$scope', 'HttpProvider', 'ResourceProvider', ListController]);

    function ListController($scope, HttpProvider, ResourceProvider) {
        $scope.API_URL = 'https://api.myjson.com/bins/25le2';
        $scope.albums = [];
        HttpProvider.getAlbums($scope);
        //ResourceProvider.getAlbums($scope);
    }

})();