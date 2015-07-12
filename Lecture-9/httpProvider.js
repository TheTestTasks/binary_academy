(function() {
    
    angular
        .module('AlbumsApp')
        .service('HttpProvider', HttpProvider);

    function HttpProvider($http) {
        this.getAlbums = function(lsit, apiUrl) {
            $http.get(apiUrl).then(function(data, status, headers, config) {
                lsit.setAlbums(data.data);
            }); 
        };
    }
    
})();