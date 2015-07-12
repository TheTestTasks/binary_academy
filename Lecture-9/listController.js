(function() {
    
    var API_URL = 'https://api.myjson.com/bins/25le2';

    angular
        .module('AlbumsApp')
        .controller('ListController', ['$scope', 'HttpProvider', 'ResourceProvider', ListController]);

    function ListController($scope, HttpProvider, ResourceProvider) {
        var list = this;
        
        list.albums = [];
        list.setAlbums = function(albums) {
            list.albums = albums;
        }

        HttpProvider.getAlbums(list, API_URL);
        //ResourceProvider.getAlbums(list, API_URL);
    }

})();