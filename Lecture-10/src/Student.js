// Student
var Student = function(name, age) {    
    Man.call(this, name, age);
};

Student.prototype = new Man();

Student.prototype.study = function() {
    return "I like to study.";
};
