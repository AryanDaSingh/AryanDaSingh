#INITIALISATION
CompetitorName = []
CompetitorScore = []
num = 25

#INPUTS
for i in range(num):
	CompetitorName.append(input(f"Enter competitor {i+1} name: "))
	tempArr = []
	for j in range(5):
		while True:
			tempScore = int(input(f"Enter competitor {i+1} score in round {j+1}: "))
			tempArr.append(tempScore)
			if tempScore >= 0 and tempScore <= 100:
				break
			else:
				print("Invalid score, try again")
	CompetitorScore.append(tempArr)

#HIGHEST POINTS
for i in range(5):
	highestScore = [-1]
	highestIndex = [-1]
	for j in range(num):
		if CompetitorScore[j][i] > highestScore[0]:
			highestScore = [CompetitorScore[j][i]]
			highestIndex = [j]
		elif CompetitorScore[j][i] == highestScore[0]:
			highestScore.append(CompetitorScore[j][i])
			highestIndex.append(j)
	print(f"Medalists for game {i+1}:")
	for w in range(len(highestIndex)):
		print(f"Name: {CompetitorName[highestIndex[w]]}")

#HIGHEST TOTAL
highestTotal = [-1]
highestIndex = [-1]
for i in range(num):
	totalCalc = CompetitorScore[i][0] + CompetitorScore[i][1] + CompetitorScore[i][2] + CompetitorScore[i][3] + CompetitorScore[i][4]
	if totalCalc > highestTotal[0]:
		highestTotal = [totalCalc]
		highestIndex = [i]
	elif totalCalc == highestTotal:
		highestTotal.append(totalCalc)
		highestIndex.append(totalCalc)
print(f"Medalists for total points:")
for j in range(len(highestIndex)):
	print(f"Name: {CompetitorName[highestIndex[j]]}")
