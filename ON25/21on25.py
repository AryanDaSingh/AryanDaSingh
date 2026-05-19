#INITIALISATION
CompetitorName = []
CompetitorScore = []
qualiCount = [0,0,0]

#INPUT
for i in range(30):
	CompetitorName.append(input((f"Competitor {i+1} name: ")))
	tempArr = []
	for j in range(10):
		while True:
			tempScore = int(input(f"Competitor {i+1} round {j+1} score: "))
			if tempScore >= 0 and tempScore <= 30:
				break
			else:
				print("Invalid score, try again")
		tempArr.append(tempScore)
	CompetitorScore.append(tempArr)
	#LINEAR SEARCHES
	lowest = 31
	lowestIndex = -1
	highest = -1
	highestIndex = -1
	for x in range(10):
		if CompetitorScore[i][x] < lowest:
			lowest = CompetitorScore[i][x]
			lowestIndex = x
		elif CompetitorScore[i][x] > highest:
			highest = CompetitorScore[i][x]
			highestIndex = x
	#TOTAL SCORE
	TotalScore = 0
	for w in range(8):
		if w == highestIndex or w == lowestIndex:
			continue
		else:
			TotalScore += CompetitorScore[i][w]
	#QUALIFICATION
	print(f"Name: {CompetitorName[i]}")
	print(TotalScore)
	if TotalScore >= 210:
		print("Status: Qualified")
		qualiCount[0] += 1
	elif TotalScore >= 180 and TotalScore <= 209:
		print("Status: Reserve")
		qualiCount[1] += 1
	else:
		print("Status: Not Qualified")
		qualiCount[2] += 1

#OUTPUTS
print(f"{qualiCount[0]} competitor[s] have qualified")
print(f"{qualiCount[1]} competitor[s] are reserves")
print(f"{qualiCount[2]} competitor[s] did not qualify")