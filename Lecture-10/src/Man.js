// Man
var Man = function(name, age) {    
    this.name = name;
    this.age = age;
}

Man.prototype.live = function() {
    return "I'm Alive.";
};