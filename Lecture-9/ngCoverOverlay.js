(function() {
    
    angular
        .module('AlbumsApp')
        .directive('ngCoverOverlay', CoverOverlay);

    function CoverOverlay() {
        return {
            restrict: 'A',
            replace: false,
            transclude: false, 
            link: function(scope, element, attrs) {
                element.bind('click', function() {
                    var overlay = document.createElement('div');
                    overlay.className = 'overlay';
                    overlay.innerHTML = '<div><h2>' + scope.album.name + '</h2><img src="' + scope.album.cover+ '" alt=""></div>';

                    overlay.addEventListener('click', function(e) {
                        if (e.target.tagName == 'IMG') return;
                        var overrlay = document.querySelector('.overlay');
                        overrlay.parentNode.removeChild(overrlay);
                    }, false);

                    document.body.appendChild(overlay);
                });                    
            },
            template: ''
        }
    }
    
})();