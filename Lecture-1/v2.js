/**
 * Наследование через конструкцию Object.create()
 */

// Man
var Man = {
    constructor: function(name, age) {
        this.name = name;
        this.age = age;
        return this;
    },
    
    live: function() {
        console.log('Method "live" called');
    }
};

// Student
var Student = Object.create(Man);
Student.constructor = function(name, age) {
    Man.constructor.apply(this, arguments);
    return this;
};
Student.study = function() {
    console.log('Method "study" called');
};

// duckType
function duckType() {
    return typeof this.study === 'function' ? 'Student' : 'Man';
}

// test
var obj = Object.create(Student).constructor('John Doe', 42);
console.log(duckType.apply(obj));
