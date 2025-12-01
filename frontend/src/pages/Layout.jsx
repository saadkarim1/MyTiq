import React, { useEffect } from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import { useDispatch } from "react-redux";
import { getAllEvents } from "../features/Event/eventApi";

const Layout = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllEvents());
	}, []);
	return (
		<div>
			<NavBar />
			<Outlet />
		</div>
	);
};

export default Layout;
