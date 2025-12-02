import React from "react";
import { FaRegCalendarMinus } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router";

const EventCard = ({ event }) => {
	return (
		<div className='border border-slate-200 rounded-3xl bg-white p-3 space-y-3 hover:shadow-[0_0px_14px_rgba(0,0,0,0.25)]  transition-shadow duration-300 ease-in-out'>
			<Link to={`/events/${event.id}`}>
				<div className='block h-40 object-cover '>
					<img
						src='src/assets/event1.jpeg'
						alt=''
						className='w-full h-full  rounded-xl'
					/>
				</div>
				<h1 className='text-xl font-semibold'>{event?.title}</h1>
				<div>
					<div className='flex items-center text-black/60 space-x-1.5 font-medium'>
						<FaRegCalendarMinus />
						<p className='text-[14px]'>{event?.date}</p>
					</div>
					<div className='flex items-center text-black/60 space-x-1.5 font-medium'>
						<IoLocationSharp />
						<p className='text-[14px]'>{event?.location}</p>
					</div>
				</div>
				<div className='rounded-full text-center border-2 border-purple-700 text-purple-700 bg-purple-200 px-3 py-1.5 font-semibold'>
					{event.price} Dh
				</div>
			</Link>
		</div>
	);
};

export default EventCard;
