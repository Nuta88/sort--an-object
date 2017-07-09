"use strict";
function Car(year, carBrand) {
	this.year = year;
	this.carBrand = carBrand; 
}

var audi = new Car(2010, "audi");
var bmw = new Car(1901, "bmw");
var lexus = new Car(2010, "lexus");
var lexusTwo = new Car(2010, "lexus");
var toyota = new Car(2009, "toyota");
var nisssan = new Car(2015, "nisssan");
var arr = [ bmw, audi, lexus, toyota, nisssan, lexusTwo ];

function compare(objectOne, ObjectTwo) {
	if (objectOne.year !== ObjectTwo.year) {
		return objectOne.year - ObjectTwo.year;
	}
	if (objectOne.carBrand > ObjectTwo.carBrand) {
		return 1;
	}
	if (objectOne.carBrand < ObjectTwo.carBrand) {
		return -1;
	}
		return 0;
}

arr.sort(compare);
