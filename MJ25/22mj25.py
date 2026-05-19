#FUNCTIONS
def Cuboid(base, depth, height):
	calculation = base * depth * height
	return calculation
def triangularPrism(base, depth, height):
	calculation = 0.5 * base * depth * height
	return calculation
def sphere(radius):
	calculation = (4/3) * 3.142 * (radius ** 3)
	return calculation

#MENU
while True:
	print("Would you like to:")
	print("(1): Calculate volume of a cuboid")
	print("(2): Calculate volume of a triangular prism")
	print("(3): Calculate volume of a sphere")
	print("(4): Exit program")
	choice = int(input("Enter choice: "))
	if choice == 1:
		base = float(input("Enter the base: "))
		depth = float(input("Enter the depth: "))
		height = float(input("Enter the height: "))
		print(f"Volume: {Cuboid(base, depth, height):.2f}")
	elif choice == 2:
		base = float(input("Enter the base: "))
		depth = float(input("Enter the depth: "))
		height = float(input("Enter the height: "))
		print(f"Volume: {triangularPrism(base, depth, height):.2f}")
	elif choice == 3:
		radius = float(input("Enter the radius: "))
		print(f"Volume: {sphere(radius):.2f}")
	elif choice == 4:
		break
	else:
		print("Invalid choice, try again")
