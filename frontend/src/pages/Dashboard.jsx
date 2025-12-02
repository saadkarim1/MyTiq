import React, { useState } from "react";
import { useSelector } from "react-redux";
import DashboardEventCard from "../components/DashboardEventCard";
import { FaPlus } from "react-icons/fa";
import AddEventForm from "../components/AddEventForm";

const Dashboard = () => {
	const { events } = useSelector((state) => state.event);
	const [showAddEventPopup, setShowAddEventPopup] = useState(false);

	return (
		<>
			<div className='w-[85%] mx-auto'>
				<div className='flex items-center justify-between'>
					<h1 className=' font-bold text-5xl my-10'>Dashboard</h1>
					<button
						onClick={() => setShowAddEventPopup(true)}
						className='rounded-lg text-white bg-purple-600 px-4 py-2.5 cursor-pointer flex items-center space-x-2 hover:bg-purple-700 transition-colors duration-300 ease-in-out'
					>
						<FaPlus />
						<span>add event</span>
					</button>
				</div>
				<div className='space-y-4 text-lg'>
					<div className='flex items-center justify-around font-semibold text-lg text-purple-800'>
						<div>Image</div>
						<div>Title</div>
						<div>Location</div>
						<div>Date</div>
						<div>Actions</div>
					</div>
					{events?.map((event) => (
						<DashboardEventCard key={event.id} event={event} />
					))}
				</div>
				{showAddEventPopup && (
					<AddEventForm setShowAddEventPopup={setShowAddEventPopup} />
				)}
			</div>
		</>
	);
};

export default Dashboard;
