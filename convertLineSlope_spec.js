import { convertLineSlope } from "../convertLineSlope.js";

describe("test convertLineSlope", function() {
    it("tests slope", function() {
        let x1 = 3;
        let x2 = 6;
        let y1 = 4;
        let y2 = 16; 
        let slope = convertLineSlope(x1, y1, x2, y2)
        expect(slope.toFixed(2)).toBe("4.00");
    });
});

describe("test convertLineSlope", function() {
    it("tests slope", function() {
        let x1 = 14;
        let x2 = 23;
        let y1 = 8;
        let y2 = 17; 
        let slope = convertLineSlope(x1, y1, x2, y2)
        expect(slope.toFixed(2)).toBe("1.00");
    });
});

describe("test convertLineSlope", function() {
    it("tests slope", function() {
        let x1 = 5;
        let x2 = 50;
        let y1 = 8;
        let y2 = 64; 
        let slope = convertLineSlope(x1, y1, x2, y2)
        expect(slope.toFixed(2)).toBe("1.24");
    });
});