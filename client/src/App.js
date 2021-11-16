import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import Header from "./Header";
import Menu from "./Menu";
import PastOrders from "./PastOrders";
import NewOrder from "./NewOrder";
import Customers from "./Customers";
import NewCustomer from "./NewCustomer";

const App = () => {
	return (
		<Router>
			<Fragment>
				<GlobalStyle />
				<Header />
				<Routes>
					<Route exact path="/" element={<Menu />} />
					<Route path="/pastorders" element={<PastOrders />} />
					<Route exact path="/neworder" element={<NewOrder />} />
					<Route exact path="/customers" element={<Customers />} />
					<Route exact path="/newcustomer" element={<NewCustomer />} />
				</Routes>
			</Fragment>
		</Router>
	);
};

export default App;
