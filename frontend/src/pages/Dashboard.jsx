import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { deleteEvent } from "../features/Event/eventApi";

const Dashboard = () => {
	const dispatch = useDispatch();
	const { events } = useSelector((state) => state.event);
	const { token } = useSelector((state) => state.auth);
	console.log(events);

	const handleDeleteEvent = (eventId) => {
		dispatch(deleteEvent({ eventId: eventId, token: token }));
	};
	return (
		<div className='w-[85%] mx-auto'>
			<h1 className=' font-bold text-5xl my-10'>Dashboard</h1>
			<div className='space-y-4 text-lg'>
				<div className='flex items-center justify-around font-semibold text-lg text-purple-800'>
					<div>Title</div>
					<div>Location</div>
					<div>Date</div>
					<div>Actions</div>
					<div>{events?.length}</div>
				</div>
				{events?.map((event) => (
					<div className='rounded-xl border-2 bg-white border-purple-500 w-full py-2 flex items-center justify-around'>
						<div className=' w-[25%] flex items-center justify-center'>
							{event.title}
						</div>
						<div className=' w-[25%] flex items-center justify-center'>
							{event.date}
						</div>
						<div className=' w-[25%] flex items-center justify-center'>
							{event.location}
						</div>
						<div className='flex items-center w-[25%] justify-center space-x-2'>
							<span className='text-sky-600 p-1.5 text-2xl border-2 cursor-pointer border-sky-500 bg-sky-100 rounded-lg'>
								<MdModeEdit />
							</span>
							<span
								onClick={() => handleDeleteEvent(event.id)}
								className='text-red-600 p-1.5 text-2xl border-2 cursor-pointer border-red-500 bg-red-100 rounded-lg'
							>
								<MdDelete />
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Dashboard;
