import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router";

const links = [
	{ path: "/", name: "Home" },
	{ path: "/explore", name: "Explore" },
	{ path: "/tickets", name: "My tickets" },
	{ path: "/dashboard", name: "Dashboard" },
];
const NavBar = () => {
	const { pathname } = useLocation();
	const { user, status } = useSelector((state) => state.auth);
	console.log(user, status);
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
					{user.user_name ? (
						<button className='border-2 border-red-500 bg-red-500 rounded-lg py-2 px-3 cursor-pointer'>
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
