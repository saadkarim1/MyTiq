import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router";
import { logout } from "../features/Auth/authApi";
import { getTokenFromLocalstorage } from "../features/Auth/authSlice";

const links = [
	{ path: "/", name: "Home" },
	{ path: "/explore", name: "Explore" },
	{ path: "/tickets", name: "My tickets" },
	{ path: "/dashboard", name: "Dashboard" },
];
const NavBar = () => {
	const { pathname } = useLocation();
	const dispatch = useDispatch();
	const { isLoggedIn, token } = useSelector((state) => state.auth);
	// const [token, setToken] = useState(null);

	useEffect(() => {
		// setToken(localStorage.getItem("api_token"));
		dispatch(getTokenFromLocalstorage());
	}, [isLoggedIn]);

	const handleLogout = () => {
		dispatch(logout(token));
		// setToken(localStorage.getItem("api_token"));
	};

	return (
		<div className={`bg-[#06041b] inset-x-0 sticky top-0 z-10`}>
			<div className='w-[85%] mx-auto  py-2 flex items-center justify-between'>
				<h1 className=' w-[33%] text-white text-[40px] font-bold'>
					eventPlace
				</h1>
				<ul className='w-[33%] flex items-center justify-center space-x-4 font-medium text-white text-[17px]'>
					{links.map((item) => (
						<li
							key={item.name}
							className={`${pathname === item.path && "text-purple-700  "}`}
						>
							<Link to={item.path}>{item.name}</Link>
						</li>
					))}
				</ul>
				<div className='w-[33%] flex items-center justify-end text-white space-x-3'>
					{token ? (
						<button
							onClick={handleLogout}
							className='border-2 border-red-500 bg-red-500 rounded-lg py-2 px-3 cursor-pointer'
						>
							Deconnexion
						</button>
					) : (
						<>
							<Link to={"/login"} className='cursor-pointer'>
								Login
							</Link>
							<Link
								to={"/register"}
								className='border-2 border-white rounded-lg py-2 px-3 cursor-pointer'
							>
								register
							</Link>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default NavBar;
