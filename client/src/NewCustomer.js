import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NewCustomer = () => {
	const initialState = {};

	const [formData, setFormData] = useState(null);

	const data = {};

	const navigate = useNavigate();

	fetch("/customers", {
		method: "POST",
		body: JSON.stringify(data),
		headers: { "Content-Type": "application/json" },
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.status === 200) {
				navigate.push("/");
			} else {
				alert(`${data.message}`);
			}
		});

	return <div></div>;
};

export default NewCustomer;
