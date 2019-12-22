import unittest
import day3

class TestDay3(unittest.TestCase):
	def test_positions_are_equal(self):
		pos1 = { 'x': 2, 'y': 4, 'distanceToStart': 6 }
		pos2 = { 'x': 2, 'y': 4, 'distanceToStart': 6 }
		pos3 = { 'x': 1, 'y': 5, 'distanceToStart': 6 }

		self.assertEqual(
			day3.positions_are_equal(pos1, pos2),
			True
		)

	def test_parse_pathsection(self):
		self.assertEqual(
			day3.parse_path_section('R3', { 'x': 0, 'y': 0 }),
			{
				'newCurrentPosition': { 'x': 3, 'y': 0 },
				'newSteps': [
					{ 'x': 1, 'y': 0, 'distanceToStart': 1 },
					{ 'x': 2, 'y': 0, 'distanceToStart': 2 },
					{ 'x': 3, 'y': 0, 'distanceToStart': 3 }
				]
			}
		)

	def test_map_wire_positions(self):
		map_wire = ['R3', 'U2']
		self.assertEqual(
			day3.map_wire_positions(map_wire),
			[
				{ 'x': 1, 'y': 0, 'distanceToStart': 1 },
				{ 'x': 2, 'y': 0, 'distanceToStart': 2 },
				{ 'x': 3, 'y': 0, 'distanceToStart': 3 },
				{ 'x': 3, 'y': 1, 'distanceToStart': 4 }
			]
		)

unittest.main()