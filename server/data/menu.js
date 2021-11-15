const foods = [
	{
		item: "Chicken breast",
		price: 12.5,
		overcooked: 5,
		lastOrdered: "November 11th 2021, 12:30 pm",
		lengthFridge: "3 days",
	},
	{
		item: "Fried chicken",
		price: 10.5,
		overcooked: 6,
		lastOrdered: "November 9th 2021, 5:34 pm",
		lengthFridge: "4 days",
	},
	{
		item: "Ribs",
		price: 15.5,
		overcooked: 4,
		lastOrdered: "November 5th 2021, 7:23 pm",
		lengthFridge: "5 days",
	},
	{
		item: "Meat loaf",
		price: 9.25,
		overcooked: 7,
		lastOrdered: "November 5th 2021, 7:23 pm",
		lengthFridge: "1 week",
	},
	{
		item: "Bacon and cheese omelette",
		price: 8.5,
		overcooked: 3,
		lastOrdered: "November 3rd 2021, 10:30 am",
		lengthFridge: "8 days",
	},
	{
		item: "Pancakes",
		price: 7.75,
		overcooked: 7,
		lastOrdered: "November 3rd 2021, 10:30 am",
		lengthFridge: "10 days",
	},
	{
		item: "Fish and chips",
		price: 12.5,
		overcooked: 7,
		lastOrdered: "November 2nd 2021, 6:12 pm",
		lengthFridge: "6 days",
	},
	{
		item: "Toasted reubens",
		price: 8.5,
		overcooked: 5,
		lastOrdered: "November 8th 2021, 11:57 am",
		lengthFridge: "1 week",
	},
	{
		item: "Club sandwich",
		price: 10.25,
		overcooked: 8,
		lastOrdered: "November 7th 2021, 12:57 pm",
		lengthFridge: "5 days",
	},
	{
		item: "Hamburger",
		price: 9.5,
		overcooked: 9,
		lastOrdered: "November 6th 2021, 6:45 pm",
		lengthFridge: "5 days",
	},
	{
		item: "Onion rings",
		price: 6.5,
		overcooked: 10,
		lastOrdered: "November 6th 2021, 6:45 pm",
		lengthFridge: "4 weeks",
	},
	{
		item: "Grilled cheese",
		price: 7.5,
		overcooked: 6,
		lastOrdered: "November 4th 2021, 7:06 pm",
		lengthFridge: "15 days",
	},
	{
		item: "Pork chops",
		price: 11.5,
		overcooked: 5,
		lastOrdered: "November 4th 2021, 7:06 pm",
		lengthFridge: "6 days",
	},
	{
		item: "Cobb salad",
		price: 10.5,
		overcooked: 0,
		lastOrdered: "November 4th 2021, 7:06 pm",
		lengthFridge: "5 days",
	},
	{
		item: "Steak",
		price: 13.75,
		overcooked: 3,
		lastOrdered: "October 31st 2021, 6:13 pm",
		lengthFridge: "4 days",
	},
	{
		item: "Souvlaki",
		price: 10.75,
		overcooked: 6,
		lastOrdered: "November 7th 2021, 1:12 pm",
		lengthFridge: "5 days",
	},
	{
		item: "Turkey sandwich",
		price: 8.5,
		overcooked: 0,
		lastOrdered: "November 1st 2021, 11:42 am",
		lengthFridge: "8 days",
	},
	{
		item: "Spaghetti and meatballs",
		price: 10.25,
		overcooked: 1,
		lastOrdered: "November 10th 2021, 7:27 pm",
		lengthFridge: "3 days",
	},
	{
		item: "Mac and cheese",
		price: 10.75,
		overcooked: 4,
		lastOrdered: "November 8th 2021, 12:00 pm",
		lengthFridge: "3 weeks",
	},
	{
		item: "Caesar salad",
		price: 8.25,
		overcooked: 0,
		lastOrdered: "November 5th 2021, 5:40 pm",
		lengthFridge: "5 days",
	},
	{
		item: "Chili",
		price: 9.75,
		overcooked: 10,
		lastOrdered: "November 12th 2021, 6:25 pm",
		lengthFridge: "6 days",
	},
	{
		item: "Chocolate cake",
		price: 3.5,
		overcooked: 0,
		lastOrdered: "November 7th 2021, 12:57 pm",
		lengthFridge: "2 weeks",
	},
	{
		item: "Apple pie",
		price: 3.75,
		overcooked: 0,
		lastOrdered: "November 9th 2021, 5:34 pm",
		lengthFridge: "2 weeks",
	},
];

const drinks = [
	{
		item: "Coffee",
		price: 2,
		lastOrdered: "November 10th 2021, 3:25 pm",
	},
	{
		item: "Orange juice",
		price: 1.5,
		lastOrdered: "October 28th 2021, 9:45 am",
	},
	{
		item: "Coke",
		price: 2,
		lastOrdered: "November 2nd 2021, 12:38 pm",
	},
	{
		item: "Whiskey",
		price: 6.75,
		lastOrdered: "November 10th 2021, 6:21 pm",
	},
	{
		item: "Champagne",
		price: 9.75,
		lastOrdered: "November 11th 2021, 12:30 pm",
	},
	{
		item: "Vodka soda",
		price: 6.25,
		lastOrdered: "November 5th 2021, 7:23 pm",
	},
	{
		item: "Beer",
		price: 5,
		lastOrdered: "November 7th 2021, 12:57 pm",
	},
	{
		item: "Protein shake",
		price: 5,
		lastOrdered: "November 3rd 2021, 10:30 am",
	},
	{
		item: "Martini",
		price: 7.5,
		lastOrdered: "November 9th 2021, 8:15 pm",
	},
	{
		item: "Scotch",
		price: 6.75,
		lastOrdered: "November 2nd 2021, 6:12 pm",
	},
	{
		item: "Strawberry milkshake",
		price: 4,
		lastOrdered: "November 4th 2021, 4:28 pm",
	},
	{
		item: "Negroni",
		price: 6,
		lastOrdered: "November 5th 2021, 7:23 pm",
	},
	{
		item: "Wine",
		price: 6,
		lastOrdered: "November 9th 2021, 5:34 pm",
	},
	{
		item: "Rum and coke",
		price: 6.75,
		lastOrdered: "November 4th 2021, 7:06 pm",
	},
	{
		item: "Bloody mary",
		price: 5.75,
		lastOrdered: "November 8th 2021, 11:57 am",
	},
	{
		item: "Daiquiri",
		price: 6,
		lastOrdered: "November 4th 2021, 7:06 pm",
	},
	{
		item: "Gin and tonic",
		price: 6.75,
		lastOrdered: "November 4th 2021, 7:06 pm",
	},
	{
		item: "Long island iced tea",
		price: 8,
		lastOrdered: "November 10th 2021, 7:56 pm",
	},
	{
		item: "Margarita",
		price: 6.75,
		lastOrdered: "October 17th 2021, 2:37 pm",
	},
	{
		item: "Mojito",
		price: 6.25,
		lastOrdered: "November 5th 2021, 6:35 pm",
	},
	{
		item: "Old fashioned",
		price: 6.5,
		lastOrdered: "November 3rd 2021, 5:02 pm",
	},
	{
		item: "Mimosa",
		price: 5.5,
		lastOrdered: "November 3rd 2021, 10:30 am",
	},
];

module.exports = { foods, drinks };
