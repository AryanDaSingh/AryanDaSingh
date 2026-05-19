#INITIALISATION
from random import randint
NumberGenerated = [1, 2] #[PLAYER][NUMBER]
PlayerNames = []

#NAME
while True:
	player1Name = input("Player 1 name: ")
	check = input(f"Is {player1Name} correct (y/n): ").lower()
	if check == "y":
		PlayerNames.append(player1Name)
		break
	else:
		continue

while True:
	player2Name = input("Player 2 name: ")
	check = input(f"Is {player2Name} correct (y/n): ").lower()
	if check == "y":
		PlayerNames.append(player2Name)
		break
	else:
		continue

#POPULATION
for i in range(100):
	player1Number = randint(1,6)
	player2Number = randint(1,6)
	NumberGenerated.append([player1Number, player2Number])

#CALCULATION
player1Total = 0
for i in range(100):
	player1Total += NumberGenerated[i+2][0]

player2Total = 0
for i in range(100):
	player2Total += NumberGenerated[i+2][1]

#TIEBREAKER
while player1Total == player2Total:
	player1Total += randint(1,6)
	player2Total += randint(1,6)

#OUTPUT
if player1Total > player2Total:
	print(f"1st:\nName: {player1Name}\nPoints: {player1Total}")
	print(f"2nd:\nName: {player2Name}\nPoints: {player2Total}")
else:
	print(f"1st:\nName: {player2Name}\nPoints: {player2Total}")
	print(f"2nd:\nName: {player1Name}\nPoints: {player1Total}")
