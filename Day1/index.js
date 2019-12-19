const { day1Inputs } = require('./data')

const calculateTotalFuel = function(mass) {
	const fuelNeeded = Math.floor(mass / 3) - 2
	let totalFuel = 0
  
	if (fuelNeeded > 0) {
		totalFuel += fuelNeeded + calculateTotalFuel(fuelNeeded)
	}
  
	return totalFuel
}
  
fuelRequirements = function(modules) {
	return modules.reduce((totalFuel, singleModule) => totalFuel + calculateTotalFuel(singleModule), 0)
}

console.log(fuelRequirements(day1Inputs)) // 3393938
