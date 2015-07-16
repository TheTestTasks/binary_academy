// Man spec
(function () {
    'use strict';

    describe("Man", function() {
        it("call the live() method", function() {
            var fakeMan = new Man("John", 42);
            spyOn(fakeMan, "live");
            fakeMan.live();
            expect(fakeMan.live).toHaveBeenCalled();
        });

        it("method live() should return response", function() {
            var fakeMan = new Man("John", 42);            
            var response = fakeMan.live();
            expect(response).toEqual("I'm Alive.");
        });

        it("Man has correct name and age", function() {
            var fakeMan = new Man("John", 42);            
            expect(fakeMan.name).toEqual("John");
            expect(fakeMan.age).toEqual(42);
        });
    });
})();
