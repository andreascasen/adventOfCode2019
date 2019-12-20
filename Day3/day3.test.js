const { expect } = require('chai')

const {
	parsePathSection,
	mapWirePositions,
	positionsAreEqual,
	findClosestIntersection
} = require('./day3')

describe('Day 3', () => {
	/** @function parsePathSection */
	it('Should correctly parse a path section', () => {
		expect(parsePathSection('R3', { x: 0, y: 0 })).to.be.eql({
			newCurrentPosition: { x: 3, y: 0 },
			newSteps: [
				{ x: 1, y: 0, distanceToStart: 1 },
				{ x: 2, y: 0, distanceToStart: 2 },
				{ x: 3, y: 0, distanceToStart: 3 }
			]
		})

		expect(parsePathSection('U3', { x: 2, y: -1 })).to.be.eql({
			newCurrentPosition: { x: 2, y: 2 },
			newSteps: [
				{ x: 2, y: 0, distanceToStart: 2 },
				{ x: 2, y: 1, distanceToStart: 3 },
				{ x: 2, y: 2, distanceToStart: 4 }
			]
		})
	})

	/** @function mapWirePositions */
	it('Should map a wires entire path into sorted steps', () => {
		const wire1 = ['R3', 'U2']
		expect(mapWirePositions(wire1)).to.be.eql([
			{ x: 1, y: 0, distanceToStart: 1 },
			{ x: 2, y: 0, distanceToStart: 2 },
			{ x: 3, y: 0, distanceToStart: 3 },
			{ x: 3, y: 1, distanceToStart: 4 },
			{ x: 3, y: 2, distanceToStart: 5 }
		])
	})

	/** @function positionsAreEqual */
	it('Should check if 2 positions are equal', () => {
		const pos1 = { x: 2, y: 4, distanceToStart: 6 }
		const pos2 = { x: 2, y: 4, distanceToStart: 6 }
		const pos3 = { x: 1, y: 5, distanceToStart: 6 }

		expect(positionsAreEqual(pos1, pos2)).to.be.equal(true)
		expect(positionsAreEqual(pos1, pos3)).to.be.equal(false)
	})

	/** @function findClosestIntersection */
	it('Should find the closest intersection between 2 wires', () => {
		const wire1 = ['R3', 'U2']
		const wire2 = ['D3', 'R3', 'U4']
		expect(findClosestIntersection(wire1, wire2))
			.to.be.equal(3)
	})
})