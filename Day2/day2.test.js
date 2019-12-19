const { expect } = require('chai')

const { intCodeComputer, findDesiredInputs } = require('./day2')

describe('Day 2', () => {
	it('Should correctly run the intCode computer', () => {
		const test1 = {
			input: [1,0,0,0,99],
			result: [2,0,0,0,99]
		}
		const test2 = {
			input: [1,1,1,4,99,5,6,0,99],
			result: [30,1,1,4,2,5,6,0,99]
		}
		const test3 = {
			input: [2,4,4,5,99,0],
			result: [2,4,4,5,99,9801]
		}

		expect(intCodeComputer(test1.input)).to.be.eql(test1.result)
	})
})