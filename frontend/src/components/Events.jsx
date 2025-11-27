import React from "react";
import EventCard from "./EventCard";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

const Events = () => {
	return (
		<div className='w-[85%] mx-auto py-25 flex flex-col items-center'>
			<h1 className='text-center font-bold text-5xl'>Featured Events</h1>
			<div className='w-full grid grid-cols-4 my-10 gap-4'>
				{[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
					<EventCard />
				))}
			</div>
			<Link
				to={"explore"}
				className='flex items-center space-x-2 rounded-lg text-purple-700 border-2 border-purple-700 hover:text-white hover:bg-purple-700 transition-colors duration-300 ease-in-out px-3 py-2 cursor-pointer font-medium'
			>
				<span>SEE MORE EVENTS</span>
				<FaArrowRightLong />
			</Link>
		</div>
	);
};

export default Events;
