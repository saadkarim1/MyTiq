import React from "react";
import { FaRegCalendarMinus } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const EventCard = () => {
	return (
		<div className='border border-slate-200 rounded-3xl bg-white p-3 space-y-3 hover:shadow-[0_0px_14px_rgba(0,0,0,0.25)]  transition-shadow duration-300 ease-in-out'>
			<div className='block h-40 object-cover '>
				<img
					src='src/assets/event1.jpeg'
					alt=''
					className='w-full h-full  rounded-xl'
				/>
			</div>
			<h1 className='text-xl font-semibold'>Event Title</h1>
			<div>
				<div className='flex items-center text-black/60 space-x-1.5 font-medium'>
					<FaRegCalendarMinus />
					<p className='text-[14px]'>Fri, 15 Sep 2025</p>
				</div>
				<div className='flex items-center text-black/60 space-x-1.5 font-medium'>
					<IoLocationSharp />
					<p className='text-[14px]'>Casablanca, Morocco</p>
				</div>
			</div>
			<div className='flex items-center justify-between mb-1'>
				<div className='-space-y-1'>
					<p className='text-black/60'>Orgnized by</p>
					<p className='text-purple-700 font-medium'>Work event</p>
				</div>
				<button className='rounded-lg text-purple-700 border-2 border-purple-700 hover:text-white hover:bg-purple-700 transition-colors duration-300 ease-in-out px-3 py-1.5 cursor-pointer font-medium'>
					Buy now
				</button>
			</div>
		</div>
	);
};

export default EventCard;
