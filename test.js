QUnit.test("function compare a>b test", function(assert) {
	var actual = compare(audi, bmw);
	var expected = 109;
	assert.deepEqual(actual, expected,
			"Return positive number");
});

QUnit.test("function compare a<b test", function(assert) {
	var actual = compare(bmw, nisssan);
	var expected = -114;
	assert.deepEqual(actual, expected,
			"Return negative number");
});

QUnit.test("function compare a===b test", function(assert) {
	var actual = compare(lexus, lexusTwo);
	var expected = 0;
	assert.deepEqual(actual, expected,
			"Return zero");
});
