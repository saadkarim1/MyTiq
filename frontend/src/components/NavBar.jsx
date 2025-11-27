import React, { useState } from "react";
import { Link, useLocation } from "react-router";

const links = [
	{ path: "/", name: "Home" },
	{ path: "/explore", name: "Explore" },
	{ path: "/", name: "My tickets" },
];
const NavBar = () => {
	const [navBar, setNavBar] = useState(false);
	const { pathname } = useLocation();

	const showNavBarBackGround = () => {
		if (window.scrollY >= 80) {
			setNavBar(true);
		} else {
			setNavBar(false);
		}
	};
	console.log(pathname);
	window.addEventListener("scroll", showNavBarBackGround);

	return (
		<div className={`${navBar && "bg-[#06041b]"} inset-x-0 fixed top-0 z-10`}>
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
					<Link to={"/login"} className='cursor-pointer'>
						Login
					</Link>
					<Link
						to={"/register"}
						className='border-2 border-white rounded-lg py-2 px-3 cursor-pointer'
					>
						register
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
