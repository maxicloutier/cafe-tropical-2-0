"use strict";

// Import the needed node_modules
const express = require("express");
const morgan = require("morgan");
const {
	getCustomerInfo,
	getMenuItems,
	getOrders,
	addNewCustomer,
	addNewOrder,
} = require("./handlers");

const app = express()
	// Below are methods that are included in express(). We chain them for convenience.
	// --------------------------------------------------------------------------------

	// This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
	.use(morgan("tiny"))
	.use(express.json())

	// Nothing to modify above this line
	// ---------------------------------
	// Endpoints 👇

	.get("/customers", getCustomerInfo)
	.get("/menu", getMenuItems)
	.get("/orders", getOrders)
	.post("/customers", addNewCustomer)
	.post("/orders", addNewOrder);

// Endpoints 👆
// ---------------------------------
// Nothing to modify below this line

// this is our catch all endpoint.
app.get("*", (req, res) => {
	res.status(404).json({
		status: 404,
		message: "Oops! Something went wrong.",
	});
});

// Node spins up our server and sets it to listen on port 8000.
app.listen(8000, () => console.log(`Listening on port 8000`));
