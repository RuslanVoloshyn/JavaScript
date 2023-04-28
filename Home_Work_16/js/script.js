//Human data
function Human(pName, pAge) {
	this.persName = pName;
	this.persAge = pAge;

	this.showHumanInfo = function () {
		console.log(`Ім'я людини:${this.persName}, вік ${this.persAge} років`);
	};
}
//A car description
function Car(cBrand, cModel, yearExtract, licensePlate) {
	this.carBrand = cBrand;
	this.carModel = cModel;
	this.carYear = yearExtract;
	this.carNuber = licensePlate;

	this.setCarOwner = function (cOwner) {
		if (cOwner.persAge > 18) {
			this.carOwner = cOwner;
		} else {
			console.log(`Вибач але тобі не має ще 18`);
		}
	};

	this.showCarInfo = function () {
		console.log(
			`Марка ${this.carBrand} Модель ${this.carModel} Рік 
			${this.carYear} Номер реєстраційни ${this.carNuber}`
		);
		this.carOwner.showHumanInfo();
	};
}

//human
const artem = new Human("Artem", 19);
const kasia = new Human("Kasia", 23);
const ruslan = new Human("Ruslan", 17);

//car
const toyota = new Car("Toyota", "Auris", 2023, "AB5264SR");
const skoda = new Car("Skoda", "Octavia", 2019, "AB5524SR");
const honda = new Car("Honda", "Civic", 2021, "AB52964SR");

//Присвоєня власників
toyota.setCarOwner(ruslan);
console.log(`-------`);

//Присвоєня власників
skoda.setCarOwner(kasia);
skoda.showCarInfo();
console.log(`--------`);
//Присвоєня власників
honda.setCarOwner(artem);
honda.showCarInfo();
