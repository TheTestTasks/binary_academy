// Professor
var Professor = function(name, age, science) {    
    Man.call(this, name, age);
    this.science = science;
};

Professor.prototype = new Man();

Professor.prototype.teach = function() {
    return "I teach studends.";
};