import React from "react";

const NavBar = () => {
	return (
		<div className='z-10 w-[85%] mx-auto inset-x-0 fixed top-0 py-3 flex items-center justify-between'>
			<h1 className=' w-[33%] text-white text-[40px] font-bold'>eventPlace</h1>
			<ul className='w-[33%] flex items-center justify-center space-x-4 font-medium text-white text-[17px]'>
				<li>Home</li>
				<li>Home</li>
				<li>Home</li>
			</ul>
			<div className='w-[33%] flex items-center justify-end text-white space-x-3'>
				<button>Login</button>
				<button className='border-2 border-white rounded-lg py-2 px-3'>
					register
				</button>
			</div>
		</div>
	);
};

export default NavBar;
