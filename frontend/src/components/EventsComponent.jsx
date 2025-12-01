import React from "react";
import EventCard from "./EventCard";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";
import { useSelector } from "react-redux";

const EventsComponent = () => {
	const { events, status } = useSelector((state) => state.event);

	return (
		<div className='w-[85%] mx-auto flex flex-col items-center space-y-6'>
			<div className='w-full grid grid-cols-4  gap-4'>
				{events.map((item, index) => (
					<EventCard key={index} />
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

export default EventsComponent;
