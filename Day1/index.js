const { day1Inputs } = require('./data')

/**
 * @function calculateFuel
 * @param { Number } mass
 */
const calculateFuel = (mass) => Math.floor(mass / 3) - 2

const calcFuelForModules = modules => modules.reduce((totalFuelNeeded, singleModule) => {
	totalFuelNeeded += calculateFuel(singleModule)
	return totalFuelNeeded
}, 0)

const calcFuelForFuel = (totalFuel, lastFuelAdded) => {
	let extraFuelNeeded = calculateFuel(lastFuelAdded)
	if (extraFuelNeeded <= 0) {
		/** No fuel needs to be added */
		return totalFuel
	}
	console.log('info => ', {
		totalFuel,
		lastFuelAdded,
		extraFuelNeeded
	})
	
	const newTotalFuel = totalFuel + extraFuelNeeded
	return calcFuelForFuel(newTotalFuel, extraFuelNeeded)
}

const calculateTotalFuel = (modules) => {
	const initialFuelNeeded = calcFuelForModules(modules)
	const fuel4Fuel = calcFuelForFuel(initialFuelNeeded, initialFuelNeeded)
	console.log('Data => ', {
		initialFuelNeeded,
		fuel4Fuel
	})
	const totalFuel = initialFuelNeeded + fuel4Fuel
	console.log('Total Fuel => ', totalFuel)
	return totalFuel
}

calculateTotalFuel(day1Inputs) // 3393938
