import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PastOrders = () => {
	const [orders, setOrders] = useState(null);

	useEffect(() => {
		fetch("/orders")
			.then((res) => res.json())
			.then((data) => {
				setOrders(data.data);
			})
			.catch((error) => {});
	}, []);

	return <div></div>;
};

export default PastOrders;
