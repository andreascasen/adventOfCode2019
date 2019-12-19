const { data, test1, test2, test3 } = require('./data')

data[1] = 12
data[2] = 2

const intCodeComputer = (intCode) => {
	let currentPosition = 0
	let firstValue
	let secondValue
	let resultPosition
	
	const parseIntCode = () => {
		switch (intCode[currentPosition]) {
			case 1:
				firstValue = intCode[intCode[currentPosition + 1]]
				secondValue = intCode[intCode[currentPosition + 2]]
				resultPosition = intCode[currentPosition + 3]
				intCode[resultPosition] = firstValue + secondValue
				currentPosition += 4
				parseIntCode()
				break
			case 2:
				firstValue = intCode[intCode[currentPosition + 1]]
				secondValue = intCode[intCode[currentPosition + 2]]
				resultPosition = intCode[currentPosition + 3]
				intCode[resultPosition] = firstValue * secondValue
				currentPosition += 4
				parseIntCode()
				break
			default:
				break
		}		
	}

	parseIntCode()

	return intCode
}

const findDesiredInputs = () => {
	const desiredResult = 19690720
	
	let correctNoun = 0
	let correctVerb = 0
	let intCode = [...data]

	loop1: for (let noun = 0; noun < 100; noun++) {
		for (let verb = 0; verb < 100; verb++) {
			intCode = [...data]

			intCode[1] = noun
			intCode[2] = verb

			const intCodeZero = intCodeComputer(intCode)[0]

			if (intCodeZero === desiredResult) {
				correctNoun = noun
				correctVerb = verb
				break loop1
			}
		}

	}

	return 100 * correctNoun + correctVerb
}

module.exports = { intCodeComputer, findDesiredInputs }

console.log('Result => ', findDesiredInputs())
