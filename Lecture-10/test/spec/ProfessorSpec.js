// Professor spec
(function () {
    'use strict';

    describe("Professor", function() {        
        it("call the teach() method", function() {
            var fakeProfessor = new Professor("Bill", 60, "Computer science");
            spyOn(fakeProfessor, "teach");
            fakeProfessor.teach();
            expect(fakeProfessor.teach).toHaveBeenCalled();
        });

        it("method teach() should return response", function() {
            var fakeProfessor = new Professor("Bill", 60, "Computer science");
            var response = fakeProfessor.teach();
            expect(response).toEqual("I teach studends.");
        });

        it("Professor has correct name, age and science", function() {
            var fakeProfessor = new Professor("Bill", 60, "Computer science");
            expect(fakeProfessor.name).toEqual("Bill");
            expect(fakeProfessor.age).toEqual(60);
            expect(fakeProfessor.science).toEqual("Computer science");
        });

        it("Professor inherits a Man's live() method", function() {
            var fakeProfessor = new Professor("Bill", 60, "Computer science");
            var response = fakeProfessor.live();
            expect(response).toEqual("I'm Alive.");
        });

        it("Professor do not have die() method", function() {
            var fakeProfessor = new Professor("Bill", 60, "Computer science");
            expect( function(){ fakeProfessor.die(); } ).toThrow(new TypeError("fakeProfessor.die is not a function"));            
        });
    });
})();
