import { squarefeet2acres } from "../squarefeet2acres.js";

describe("test squarefeet2acres", function() {
    it("tests 100000 sq.ft", function() {
        let squarefeet = 100000;
        let acres = squarefeet2acres(squarefeet);
        expect(acres.toFixed(2)).toBe("2.30");
    });
});

describe("test squarefeet2acres", function() {
        it("tests 125000 sq.ft", function() {
            let squarefeet = 125000;
            let acres = squarefeet2acres(squarefeet);
            expect(acres.toFixed(2)).toBe("2.87");
    });
});

describe("test squarefeet2acres", function() {
    it("tests 350000 sq.ft", function() {
        let squarefeet = 350000;
        let acres = squarefeet2acres(squarefeet);
        expect(acres.toFixed(2)).toBe("8.03");
    });
});