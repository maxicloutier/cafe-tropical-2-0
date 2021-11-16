"use strict";

const { customers } = require("./data/customers");
const { menu } = require("./data/menu");
const { orders } = require("./data/orders");

const { v4: uuidv4 } = require("uuid");
const moment = require("moment");

// Function to get all customers' information.
const getCustomerInfo = (req, res) => {
	if (customers.length > 0) {
		res.status(200).json({
			status: 200,
			message: "Success",
			data: customers,
		});
	} else {
		res.status(400).json({
			status: 400,
			message: "Something went wrong",
		});
	}
};

// Function to get all menu items.
const getMenuItems = (req, res) => {
	if (menu) {
		res.status(200).json({
			status: 200,
			message: "Success",
			data: menu,
		});
	} else {
		res.status(400).json({
			status: 400,
			message: "Something went wrong",
		});
	}
};

// Function to get the list of all orders.
const getOrders = (req, res) => {
	if (orders.length > 0) {
		res.status(200).json({
			status: 200,
			message: "Success",
			data: orders,
		});
	} else {
		res.status(400).json({
			status: 400,
			message: "Something went wrong",
		});
	}
};

// Function to store a new customer's information.
const addNewCustomer = (req, res) => {
	const { name, type, favDrink, favFood } = req.body;

	if (name !== "" && type !== "" && favDrink !== "" && favFood !== "") {
		const newCustomer = {
			id: uuidv4(),
			name: name,
			type: type,
			favDrink: favDrink,
			favFood: favFood,
		};

		customers.push(newCustomer);

		res.status(200).json({
			status: 200,
			message: "Success",
			data: newCustomer,
		});
	} else {
		res.status(400).json({
			status: 400,
			message: "Twyla! Please make sure that all fields are filled in.",
		});
	}
};

// Function to store a customer's order.
const addNewOrder = (req, res) => {
	const { items, tone, numOfCustomers, totalBill, billPerPerson, feedback } = req.body;

	if (
		items !== "" &&
		tone !== "" &&
		numOfCustomers !== "" &&
		totalBill !== "" &&
		billPerPerson !== "" &&
		feedback !== ""
	) {
		const newOrder = {
			hour: moment().format("MMMM Do YYYY, h:mm a"),
			items: items,
			tone: tone,
			numOfCustomers: numOfCustomers,
			totalBill: totalBill,
			billPerPerson: billPerPerson,
			feedback: feedback,
		};

		orders.push(newOrder);

		res.status(200).json({
			status: 200,
			message: "Success",
			data: newOrder,
		});
	} else {
		res.status(400).json({
			status: 400,
			message: "Twyla! Please make sure that all fields are filled in.",
		});
	}
};

module.exports = { getCustomerInfo, getMenuItems, getOrders, addNewCustomer, addNewOrder };
