#INITIALISATION
Options = []
Votes = []
VoteCount = []

#INPUT THE NUMBER OF OPTIONS
while True: #Indefinate loop for validation
    OptionsNum = int(input("Enter the number of options: ")) #Take input of number of options
    if OptionsNum >= 2 and OptionsNum <= 12: #Condition statement for validation
        break

#INPUT THE NUMBER OF VOTERS
while True: #Indefinate loop
    VoterNum = int(input("Enter the number of voters: ")) #Take input of the number of voters
    if VoterNum >= 2 and VoterNum <= 1000:
        break
