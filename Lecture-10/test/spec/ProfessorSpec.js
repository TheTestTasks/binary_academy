// Professor spec
(function () {
    'use strict';

    describe("Professor", function() {        
        it("call the teach() method", function() {
            var fakeProfessor = new Professor("Bill", 60);
            spyOn(fakeProfessor, "teach");
            fakeProfessor.teach();
            expect(fakeProfessor.teach).toHaveBeenCalled();
        });

        it("method teach() should return response", function() {
            var fakeProfessor = new Professor("Bill", 60);
            var response = fakeProfessor.teach();
            expect(response).toEqual("I teach studends.");
        });

        it("Professor has correct name and age", function() {
            var fakeProfessor = new Professor("Bill", 60);
            expect(fakeProfessor.name).toEqual("Bill");
            expect(fakeProfessor.age).toEqual(60);
        });

        it("Professor inherits a Man's live() method", function() {
            var fakeProfessor = new Professor("Bill", 60);
            var response = fakeProfessor.live();
            expect(response).toEqual("I'm Alive.");
        });

        it("Professor do not have die() method", function() {
            var fakeProfessor = new Professor("Bill", 60);
            expect( function(){ fakeProfessor.die(); } ).toThrow(new TypeError("fakeProfessor.die is not a function"));            
        });
    });
})();
