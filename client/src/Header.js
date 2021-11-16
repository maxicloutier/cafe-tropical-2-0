import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<Wrapper>
			<SiteNameDiv>
				<SiteNameLink to="/" exact="true">
					<SiteName>CAFÉ TROPICAL 2.0</SiteName>
				</SiteNameLink>
			</SiteNameDiv>
			<NavDiv>
				<NavBar>
					<StyledLink to="/">Menu</StyledLink>
					<StyledLink to="/pastorders">Past Orders</StyledLink>
					<StyledLink to="/neworder">New Order</StyledLink>
					<StyledLink to="/customers">Customers</StyledLink>
					<StyledLink to="/newcustomer">New Customer</StyledLink>
				</NavBar>
			</NavDiv>
		</Wrapper>
	);
};

const Wrapper = styled.header`
	width: 100vw;
	display: flex;
	min-height: 65px;
	position: sticky;
	top: 0;
	border-bottom: solid 4px orange;
	z-index: 100;
	margin-bottom: 20px;
	background-color: white;
`;

const SiteNameDiv = styled.div`
	position: relative;
	width: 600px;
`;

const SiteNameLink = styled(Link)`
	text-decoration: none;
	color: black;
	margin: 0;
	position: absolute;
	top: 50%;
	-ms-transform: translateY(-50%);
	transform: translateY(-50%);
	padding-left: 35px;
`;

const SiteName = styled.h1`
	display: flex;
	font-size: 35px;
	font-weight: 600;
	align-items: center;
`;

const NavDiv = styled.div`
	width: 100%;
	position: relative;
`;

const NavBar = styled.nav`
	display: flex;
	width: 100%;
	justify-content: space-evenly;
	margin: 0;
	position: absolute;
	top: 50%;
	-ms-transform: translateY(-50%);
	transform: translateY(-50%);
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: black;
	font-weight: 600;
	font-size: 19px;
`;

export default Header;
