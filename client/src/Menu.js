import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Menu = () => {
	const [menu, setMenu] = useState(null);

	useEffect(() => {
		fetch("/menu")
			.then((res) => res.json())
			.then((data) => {
				setMenu(data.data);
			})
			.catch((error) => {});
	}, []);

	return <Wrapper></Wrapper>;
};

const Wrapper = styled.div``;

export default Menu;
