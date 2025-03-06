import { convertAirQualityIndex } from "../convertAirQualityIndex.js";

describe("test convertAirQualityIndex", function() {
    it("Tests air quality", function() {
    let air = 19;
    let quality = convertAirQualityIndex(air);
    expect(quality).toBe("Good");
    });
});
describe("test convertAirQualityIndex", function() {
    it("Tests air quality", function() {
    let air = 72;
    let quality = convertAirQualityIndex(air);
    expect(quality).toBe("Moderate");
    });
});
describe("test convertAirQualityIndex", function() {
    it("Tests air quality", function() {
    let air = 101;
    let quality = convertAirQualityIndex(air);
    expect(quality).toBe("Unhealthy for Sensitive Groups");
    });
});
describe("test convertAirQualityIndex", function() {
    it("Tests air quality", function() {
    let air = 153;
    let quality = convertAirQualityIndex(air);
    expect(quality).toBe("Unhealthy");
    });
});
describe("test convertAirQualityIndex", function() {
    it("Tests air quality", function() {
    let air = 204;
    let quality = convertAirQualityIndex(air);
    expect(quality).toBe("Very Unhealthy");
    });
});
describe("test convertAirQualityIndex", function() {
    it("Tests air quality", function() {
    let air = 302;
    let quality = convertAirQualityIndex(air);
    expect(quality).toBe("Hazardous");
    });
});