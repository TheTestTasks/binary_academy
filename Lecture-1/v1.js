/**
 * Прототипное наследование через функции-конструкторы
 */

// Man
var Man = function(name, age) {    
    this.name = name;
    this.age = age;
}

Man.prototype.live = function() {
    console.log('Method "live" called');
};

// Student
var Student = function(name, age) {    
    Man.call(this, name, age);
    duckType(this);
};

Student.prototype = new Man();

Student.prototype.study = function() {
    console.log('Method "study" called');
};

// duckType
function duckType() {
    return typeof this.study === 'function' ? 'Student' : 'Man';
}

// test
var obj = new Student('John Doe', 42);
console.log(duckType.apply(obj));
