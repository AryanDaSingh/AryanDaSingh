#INITIALISATION
Video = []
for row in range(10000):
	Video.append(["", "", "", ""])
videoCount = 0
Results = []
for row in range(20):
	Results.append(["", "", "", ""])

#MENU
while True:
	print("Welcome to the Menu")
	print("Would you like to:")
	print("(1): Add a new video to the library")
	print("(2): Search for an existing video by title")
	print("(3): Exit Menu")
	while True:
		choice = int(input())
		if choice >= 1 and choice <= 3:
			break
		else:
			print("Invalid choice, try again.")
	if choice == 1:
		while True:
			Video[videoCount][0] = input("Please enter the video title: ")
			Video[videoCount][1] = input("Please enter the format: ")
			Video[videoCount][2] = input("Please enter the year of release: ")
			Video[videoCount][3] = input("Please enter the storage code: ")
			videoCount += 1
			print("Would you like to:")
			print("(1): Add another video")
			print("(2): Return to Menu")
			choiceV = int(input())
			if choiceV == 2:
				break
	elif choice == 2:
		for row in range(20):
			Results[row] = ["", "", "", ""]
		resultCount = 0
		titleSearch = input("Please enter the title being searched for: ")
		for i in range(videoCount):
			if Video[i][0].lower() == titleSearch.lower():
				tempArr = [Video[i][0], Video[i][1], Video[i][2], Video[i][3]]
				Results[i] = tempArr
				resultCount += 1
		print("Results:")
		if resultCount == 0:
			print(f"Sorry, no videos with the title {titleSearch} were found")
		else:
			for i in range(resultCount):
				print(f"{i}:")
				print(f"Title: {Results[i][0]}")
				print(f"Format: {Results[i][1]}")
				print(f"Release year: {Results[i][2]}")
				print(f"Storage code: {Results[i][3]}")
	elif choice == 3:
		print("Thank you for using the Menu!")
		print("Exiting Menu")
		break
