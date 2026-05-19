#INITIALISATION
from random import randint
RandomNumber = []
CountedNumber = [
	[1,0],
	[2,0],
	[3,0],
	[4,0],
	[5,0],
	[6,0],
	[7,0],
	[8,0],
	[9,0],
	[10,0]
]
Chance = [0,0,0,0,0,0,0,0,0,0]

#GENERATION
for i in range(100000):
	RandomNumber.append(randint(1,10))

#FREQUENCY
for i in range(100000):
	match RandomNumber[i]:
		case 1:
			CountedNumber[0][1] += 1
		case 2:
			CountedNumber[1][1] += 1
		case 3:
			CountedNumber[2][1] += 1
		case 4:
			CountedNumber[3][1] += 1
		case 5:
			CountedNumber[4][1] += 1
		case 6:
			CountedNumber[5][1] += 1
		case 7:
			CountedNumber[6][1] += 1
		case 8:
			CountedNumber[7][1] += 1
		case 9:
			CountedNumber[8][1] += 1
		case 10:
			CountedNumber[9][1] += 1

#BUBBLE SORT
for i in range(9):
	for j in range(9):
		if CountedNumber[j][1] < CountedNumber[j+1][1]:
			CountedNumber[j], CountedNumber[j+1] = CountedNumber[j+1], CountedNumber[j]

#FREQUENCY CALCULATION
for i in range(10):
	match CountedNumber[i][0]:
		case 1:
			Chance[0] = CountedNumber[i][1]/100000
		case 2:
			Chance[1] = CountedNumber[i][1]/100000
		case 3:
			Chance[2] = CountedNumber[i][1]/100000
		case 4:
			Chance[3] = CountedNumber[i][1]/100000
		case 5:
			Chance[4] = CountedNumber[i][1]/100000
		case 6:
			Chance[5] = CountedNumber[i][1]/100000
		case 7:
			Chance[6] = CountedNumber[i][1]/100000
		case 8:
			Chance[7] = CountedNumber[i][1]/100000
		case 9:
			Chance[8] = CountedNumber[i][1]/100000
		case 10:
			Chance[9] = CountedNumber[i][1]/100000

#OUTPUTS
for i in range(10):
	match CountedNumber[i][0]:
		case 1:
			print(f"Number: {CountedNumber[i][0]}")
			print(f"Chance: {Chance[0]:.4f}")
		case 2:
			print(f"Number: {CountedNumber[i][0]}")
			print(f"Chance: {Chance[1]:.4f}")
		case 3:
			print(f"Number: {CountedNumber[i][0]}")
			print(f"Chance: {Chance[2]:.4f}")
		case 4:
			print(f"Number: {CountedNumber[i][0]}")
			print(f"Chance: {Chance[3]:.4f}")
		case 5:
			print(f"Number: {CountedNumber[i][0]}")
			print(f"Chance: {Chance[4]:.4f}")
		case 6:
			print(f"Number: {CountedNumber[i][0]}")
			print(f"Chance: {Chance[5]:.4f}")
		case 7:
			print(f"Number: {CountedNumber[i][0]}")
			print(f"Chance: {Chance[6]:.4f}")
		case 8:
			print(f"Number: {CountedNumber[i][0]}")
			print(f"Chance: {Chance[7]:.4f}")
		case 9:
			print(f"Number: {CountedNumber[i][0]}")
			print(f"Chance: {Chance[8]:.4f}")
		case 10:
			print(f"Number: {CountedNumber[i][0]}")
			print(f"Chance: {Chance[9]:.4f}")