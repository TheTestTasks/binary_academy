(function() {
    
    angular
        .module('AlbumsApp')
        .service('ResourceProvider', ResourceProvider);

    function ResourceProvider($resource) {
        this.getAlbums = function(lsit, apiUrl) {
            lsit.setAlbums($resource(apiUrl).query());
        };
    }
    
})();