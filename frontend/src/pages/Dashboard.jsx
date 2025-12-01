import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent } from "../features/Event/eventApi";
import DashboardEventCard from "../components/DashboardEventCard";

const Dashboard = () => {
	const dispatch = useDispatch();
	const { events } = useSelector((state) => state.event);
	const { token } = useSelector((state) => state.auth);

	const handleDeleteEvent = (eventId) => {
		dispatch(deleteEvent({ eventId: eventId, token: token }));
	};

	return (
		<>
			<div className='w-[85%] mx-auto'>
				<h1 className=' font-bold text-5xl my-10'>Dashboard</h1>
				<div className='space-y-4 text-lg'>
					<div className='flex items-center justify-around font-semibold text-lg text-purple-800'>
						<div>Title</div>
						<div>Location</div>
						<div>Date</div>
						<div>Actions</div>
					</div>
					{events?.map((event) => (
						<DashboardEventCard
							event={event}
							handleDeleteEvent={handleDeleteEvent}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default Dashboard;
