const expect = require('chai').expect;
const FairnessApp = require('../FairnessApp.js');

describe("Fairness app", function() {
	it("return Fair if numbers passed are equal", function() {
		var his_share = 5;
		var her_share = 5;

		var result = FairnessApp.compare(his_share, her_share);

		expect(result).to.equal("Fair");
	});
});