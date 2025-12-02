import React, { useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import EditPopup from "./EditPopup";
import { deleteEvent } from "../features/Event/eventApi";
import { useDispatch, useSelector } from "react-redux";

const DashboardEventCard = ({ event }) => {
	const dispatch = useDispatch();
	const [showEditPopup, setShowEditPopup] = useState(false);
	const { token } = useSelector((state) => state.auth);

	const handleDeleteEvent = () => {
		dispatch(deleteEvent({ eventId: event.id, token: token }));
	};
	
	return (
		<div
			key={event.id}
			className='rounded-xl border-2 bg-white border-purple-500 w-full py-2 flex items-center justify-around'
		>
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
				<span
					onClick={() => {
						setShowEditPopup(true);
						// setEvent(event);
					}}
					className='text-sky-600 p-1.5 text-2xl border-2 cursor-pointer border-sky-500 bg-sky-100 rounded-lg'
				>
					<MdModeEdit />
				</span>
				<span
					onClick={handleDeleteEvent}
					className='text-red-600 p-1.5 text-2xl border-2 cursor-pointer border-red-500 bg-red-100 rounded-lg'
				>
					<MdDelete />
				</span>
			</div>
			{showEditPopup && (
				<EditPopup
					event={event}
					token={token}
					setShowEditPopup={setShowEditPopup}
				/>
			)}
		</div>
	);
};

export default DashboardEventCard;
