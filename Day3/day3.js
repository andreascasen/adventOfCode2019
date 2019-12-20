const { wire1, wire2 } = require('./data')

const findClosestIntersection = (wire1, wire2) => {
	const wire1Positions = mapWirePositions(wire1)
	const wire2Positions = mapWirePositions(wire2)
	let closestIntersectionDistance = 0
	
	let wire1Position
	let wire2Position

	loop1: for (let a = 0; a < wire1Positions.length; a++) {
		wire1Position = wire1Positions[a]
		for (let b = 0; b < wire2Positions.length; b++) {
			wire2Position = wire2Positions[b]
			if (positionsAreEqual(wire1Position, wire2Position)) {
				closestIntersectionDistance = wire1Position.distanceToStart
				break loop1
			}
		}
	}

	return closestIntersectionDistance
}

const positionsAreEqual = (pos1, pos2) => {
	return pos1.x === pos2.x && pos1.y === pos2.y
}

/**
 * @function mapWirePositions
 * @description - Takes in an array of wire path sections and returns a array of
 * step objects sorted by distanceToStart, in ascending order.
 * Each step object contains:
 * 		x: the X position
 * 		y: the Y position
 * 		distanceToStart: the distance to the 0,0 staring point
 * @param { String[] } wirePath
 */
const mapWirePositions = wirePath => {
	let currentPosition = {
		x: 0,
		y: 0
	}

	const steps = wirePath
		.reduce((stepsArray, pathSection) => {
			const {
				newSteps,
				newCurrentPosition
			} = parsePathSection(pathSection, currentPosition)
			currentPosition = newCurrentPosition
			stepsArray.splice(-1, 0, ...newSteps)
			return stepsArray
		}, [])
		.sort((a, b) => a.distanceToStart - b.distanceToStart)
	return steps
}

/**
 * @function parsePathSection
 * @description - Takes in a string representing a path section
 * and returns the steps taken on that path, as well as the new position
 * of the wire at the end of the path section.
 * @param { String } pathSection
 * @param { Object } currentPosition
 */
const parsePathSection = (pathSection, { x, y }) => {
	const direction = pathSection[0]
	const distance = parseInt(pathSection.slice(1))
	
	let newCurrentPosition = { x, y }
	let newSteps = []

	switch (direction) {
		case 'R':
			for (let i = 1; i <= distance; i++) {
				newSteps.push({
					x: x + i,
					y,
					distanceToStart: Math.abs(x + i) + Math.abs(y)
				})
			}
			newCurrentPosition.x = x + distance
			break
	
		case 'L':
			for (let i = 1; i <= distance; i++) {
				newSteps.push({
					x: x - i,
					y,
					distanceToStart: Math.abs(x - i) + Math.abs(y)
				})
			}
			newCurrentPosition.x = x - distance
			break
	
		case 'U':
			for (let i = 1; i <= distance; i++) {
				newSteps.push({
					x,
					y: y + i,
					distanceToStart: Math.abs(x) + Math.abs(y + i)
				})
			}
			newCurrentPosition.y = y + distance
			break
	
		case 'D':
			for (let i = 1; i <= distance; i++) {
				newSteps.push({
					x,
					y: y - i,
					distanceToStart: Math.abs(x) + Math.abs(y - i)
				})
			}
			newCurrentPosition.y = y - distance
			break
	}

	return { newSteps, newCurrentPosition }
}

module.exports = {
	parsePathSection,
	mapWirePositions,
	positionsAreEqual,
	findClosestIntersection
}

const closestIntersection = findClosestIntersection(wire1, wire2)
console.log('closestIntersection => ', closestIntersection)
