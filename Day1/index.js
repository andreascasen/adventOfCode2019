const { day1Inputs } = require('./data')

/**
 * @function calculateFuel
 * @param { Number } mass
 */
const calculateFuel = (mass) => Math.floor(mass / 3) - 2

const calculateTotalFuel = modules => modules.reduce((totalFuelNeeded, singleModule) => {
	totalFuelNeeded += calculateFuel(singleModule)
	return totalFuelNeeded
}, 0)

calculateTotalFuel(day1Inputs) // 3393938
