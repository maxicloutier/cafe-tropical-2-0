import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Customers = () => {
	const [customers, setCustomers] = useState(null);

	useEffect(() => {
		fetch("/customers")
			.then((res) => res.json())
			.then((data) => {
				setCustomers(data.data);
			})
			.catch((error) => {});
	}, []);

	return <div></div>;
};

export default Customers;
