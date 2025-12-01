import React, { useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import EditPopup from "./EditPopup";

const DashboardEventCard = ({ event, handleDeleteEvent }) => {
	const [showEditPopup, setShowEditPopup] = useState(false);
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
					onClick={() => handleDeleteEvent(event.id)}
					className='text-red-600 p-1.5 text-2xl border-2 cursor-pointer border-red-500 bg-red-100 rounded-lg'
				>
					<MdDelete />
				</span>
			</div>
			{showEditPopup && (
				<EditPopup event={event} setShowEditPopup={setShowEditPopup} />
			)}
		</div>
	);
};

export default DashboardEventCard;
