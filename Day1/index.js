const { day1Inputs } = require('./data')

/**
 * @function calculateFuel
 * @description - Calculates the amout of fuel needed for a specific mass
 * @param { Number } mass
 */
const calculateFuel = (mass) => Math.floor(mass / 3) - 2

/**
 * @function calcFuelForModules
 * @description - Calculates the total fuel needed for an array of modules with different masses
 * @param { Number[] } modules 
 */
const calcFuelForModules = modules => modules.reduce((totalFuelNeeded, singleModule) => {
	totalFuelNeeded += calculateFuel(singleModule)
	return totalFuelNeeded
}, 0)

/**
 * @function calcFuelForModules
 * @description - Calculates the extra fuel needed once the mass of the initial fuel is taken into account
 * @param { Number } totalFuel
 * @param { Number } lastFuelAdded
 */
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

/**
 * @function calculateTotalFuel
 * @description - Calculates the toal fuel needed to carry the total mass of an array of modules
 * plus the mass of the fuel needed to carry them.
 * @param { Number[] } modules
 */
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
