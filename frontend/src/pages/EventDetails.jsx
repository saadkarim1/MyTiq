import React from "react";
import { Link, useParams } from "react-router";
import { IoArrowBack } from "react-icons/io5";

const EventDetails = () => {
	let { id } = useParams();
	// console.log(id);
	return (
		<div className='pt-30 h-screen w-[85%] mx-auto'>
			<div className='rounded-xl text-3xl w-fit p-4 cursor-pointer hover:bg-[#f1f1f1]'>
				<Link>
					<IoArrowBack />
				</Link>
			</div>
			{/* <div className='w-full h-full'> */}
			{/* <img src='src/assets/houda4.png' alt='image not found' className='w-full h-full' /> */}
			{/* </div> */}
		</div>
	);
};

export default EventDetails;
