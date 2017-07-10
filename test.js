QUnit.test("added objects with constractor", function(assert) {
	var audi = new Car(2010, "audi");
	var bmw = new Car(1901, "bmw");
	var lexus = new Car(2010, "lexus");
	var lexusTwo = new Car(2010, "lexus");
	var toyota = new Car(2009, "toyota");
	var nisssan = new Car(2015, "nisssan");
	var input = [ bmw, audi, lexus, toyota, nisssan, lexusTwo ];
	var expected = [ bmw, audi, lexus, toyota, nisssan, lexusTwo ];
	assert.deepEqual(input, expected, "Two arrays must be the same in value");
});

QUnit.test("function compare a>b test", function(assert) {
	var audi = new Car(2010, "audi");
	var bmw = new Car(1901, "bmw");
	var actual = compare(audi, bmw);
	var expected = 109;
	assert.deepEqual(actual, expected, "Return positive number");
});

QUnit.test("function compare a<b test", function(assert) {
	var nisssan = new Car(2015, "nisssan");
	var bmw = new Car(1901, "bmw");
	var actual = compare(bmw, nisssan);
	var expected = -114;
	assert.deepEqual(actual, expected, "Return negative number");
});

QUnit.test("function compare a===b test", function(assert) {
	var lexus = new Car(2010, "lexus");
	var lexusTwo = new Car(2010, "lexus");
	var actual = compare(lexus, lexusTwo);
	var expected = 0;
	assert.deepEqual(actual, expected, "Return zero");
});

QUnit.test("sort method test", function(assert) {
	var audi = new Car(2010, "audi");
	var bmw = new Car(1901, "bmw");
	var lexus = new Car(2010, "lexus");
	var lexusTwo = new Car(2010, "lexus");
	var toyota = new Car(2009, "toyota");
	var nisssan = new Car(2015, "nisssan");
	var input = [ bmw, audi, lexus, toyota, nisssan, lexusTwo ];
	var actual = input.sort(compare);
	var expected = [ bmw, toyota, audi, lexus, lexusTwo, nisssan ];
	assert.deepEqual(actual, expected, "Return positive number");
});
