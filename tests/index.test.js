const { translate } = require('../src/index');

describe('translate function', function () {

    test("when given 'apple' returns 'appleway'", function() {
        expect(translate("apple")).toEqual("appleway");
    });

    test("when given 'else' returns 'elseway'", function() {
        expect(translate("apple")).toEqual("appleway");
    });

    test("when given 'giraffe' returns 'iraffegay'", function() {
        expect(translate("giraffe")).toEqual("iraffegay");
    });

    test("when given 'llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch' returns 'anfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogochllay'", function() {
        expect(translate("llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch")).toEqual("anfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogochllay");
    });

    test("when given 'hello world' throws error", function() {
        expect(() => translate("hello world")).toThrow("input must be one word");
    });

    test("when given an empty string, return 'ay'", function() {
        expect(translate("")).toEqual("ay");
    });

    test("when given a number '3', throws error", function() {
        expect(() => translate(3)).toThrow("input must not be an integer");
    });

    test("when given a number '3' and a letter 'a', return 'a3ay", function() {
        expect(translate(3 + "a")).toEqual("a3ay");
    });
    
    test("when given a number '3' and a letter 'a', return 'a3ay", function() {
        expect(translate(3 + "a")).toEqual("a3ay");
    });
    
    test("when given a special character '!' return !ay", function() {
        expect(translate("!")).toEqual("!ay");
    });
        
});