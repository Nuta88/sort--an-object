"use strict";
function Car(year, carBrand) {
	this.year = year;
	this.carBrand = carBrand;
}

function compare(car1, car2) {
	if (car1.year !== car2.year) {
		return car1.year - car2.year;
	}
	if (car1.carBrand > car2.carBrand) {
		return 1;
	}
	if (car1.carBrand < car2.carBrand) {
		return -1;
	}
	return 0;
}
