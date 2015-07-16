// Professor
var Professor = function(name, age) {    
    Man.call(this, name, age);
};

Professor.prototype = new Man();

Professor.prototype.teach = function() {
    return "I teach studends.";
};