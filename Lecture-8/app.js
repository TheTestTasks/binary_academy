// app
var app = angular.module("ListsApp", []);

app.controller("ListController", function($scope) {

    $scope.itemsService = $scope.type == 'product' ? new ProductsService() : new CustomersService();
    $scope.visible = true;
    $scope.visibleButtonTitle = 'Hide';

    $scope.items = [];
    for (var i=0; i<3; i++) {
        $scope.items.push($scope.itemsService.getRandomItem());
    }        

    $scope.add = function() {        
        $scope.items.push($scope.itemsService.getRandomItem());
    };

    $scope.remove = function(index) {        
        $scope.items.splice(index, 1);        
    };

    $scope.toggleVisible = function() {
        $scope.visible = !$scope.visible;
        $scope.visibleButtonTitle = $scope.visible ? 'Hide' : 'Show';      
    };
});

app.filter('formatted', function() {
    return function(input, scope) {
        return 'User: ' + input.toUpperCase();
    }
});


// services (list items providers)
var ProductsService = function() {
    this.products = ['Phone', 'TV', 'Camera', 'Laptop', 'Tablet', 'Watch', 'Fitness tracker'];
    this.getRandomItem = function() {
        return { 
            name: _getRandomArrayItem(this.products), 
            price: _getRandomNumber(100, 1000) 
        }
    }
}

var CustomersService = function() {
    this.names = ['Marie Diaz', 'Ninon Lemaire', 'Carter Warren', 'Amanda Russell', 'Miquel Kars', 'Matéo Meyer', 'Luis Romero', 'Cristobal Rojas', 'Eli Bell', 'Miss Süeda'];
    this.cities = ['Ilmajoki', 'Kalgoorlie', 'Metz', 'Lemi', 'Stirling', 'Beaumont', 'Bergen', 'Sevilla', 'Edgewood', 'Busselton'];
    this.getRandomItem = function() {
        return {
            avatar: "http://api.adorable.io/avatars/40/"+(Math.ceil(Math.random()*100))+".png",
            name: _getRandomArrayItem(this.names),             
            age: _getRandomNumber(18, 42),
            city: _getRandomArrayItem(this.cities),
        }
    }
}


// helpers
function _getRandomArrayItem(items) {
    return items[Math.floor(Math.random()*items.length)]
}

function _getRandomNumber(min, max) {
    return min + Math.floor(Math.random()*max);
}
