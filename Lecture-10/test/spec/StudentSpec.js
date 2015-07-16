// Stident spec
(function () {
    'use strict';

    describe("Student", function() {        
        it("call the study() method", function() {
            var fakeStudent = new Student("Jack", 18);
            spyOn(fakeStudent, "study");
            fakeStudent.study();
            expect(fakeStudent.study).toHaveBeenCalled();
        });

        it("method study() should return response", function() {
            var fakeStudent = new Student("Jack", 18);
            var response = fakeStudent.study();
            expect(response).toEqual("I like to study.");
        });

        it("Student has correct name and age", function() {
            var fakeStudent = new Student("Jack", 18);
            expect(fakeStudent.name).toEqual("Jack");
            expect(fakeStudent.age).toEqual(18);
        });

        it("Student inherits a Man's live() method", function() {
            var fakeStudent = new Student("Jack", 18);
            var response = fakeStudent.live();
            expect(response).toEqual("I'm Alive.");
        });

        it("Student do not have die() method", function() {
            var fakeStudent = new Student("Jack", 18);
            expect( function(){ fakeStudent.die(); } ).toThrow(new TypeError("fakeStudent.die is not a function"));            
        });
    });
})();
