import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { editEvent } from "../features/Event/eventApi";

const EditPopup = ({ event, setShowEditPopup, token }) => {
	const dispatch = useDispatch();
	const [dataForm, setDataForm] = useState({
		title: event.title,
		capacity: event.capacity,
		price: event.price,
		location: event.location,
		date: event.date,
	});
	const handleOnChange = (e) => {
		setDataForm({ ...dataForm, [e.target.name]: e.target.value });
	};

	const handleEdit = (e) => {
		e.preventDefault();
		console.log(dataForm);
		dispatch(editEvent({ eventId: event.id, token: token, data: dataForm }));
		setShowEditPopup(false);
	};

	return (
		<div className='fixed inset-0 flex items-center justify-center bg-black/50 z-50'>
			<div className='bg-white w-[35%] p-6 rounded-xl max-h-[80vh] overflow-scroll'>
				<div className=' w-full flex items-center justify-end text-2xl mb-2 text-slate-600'>
					<IoClose
						onClick={() => setShowEditPopup(false)}
						className='cursor-pointer'
					/>
				</div>
				<form
					className='flex flex-col space-y-2'
					onSubmit={(e) => handleEdit(e)}
				>
					<div className=''>
						<img
							src='src/assets/event1.jpeg'
							alt=''
							className='w-full h-40 rounded-xl'
						/>
					</div>
					<div>
						<label
							htmlFor='title'
							className='text-sm font-semibold text-[#4C2010] my-2'
						>
							Title
						</label>
						<input
							id='title'
							type='text'
							placeholder='Enter artwork title'
							value={dataForm.title}
							name='title'
							onChange={(e) => handleOnChange(e)}
							className='w-full border-2 border-purple-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#c35b1f] bg-white shadow-sm'
						/>
					</div>
					<div>
						<label
							htmlFor='location'
							className='text-sm font-semibold text-[#4C2010] my-2'
						>
							Location
						</label>
						<input
							id='location'
							type='text'
							placeholder='Enter artwork title'
							value={dataForm.location}
							name='location'
							onChange={(e) => handleOnChange(e)}
							className='w-full border-2 border-purple-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#c35b1f] bg-white shadow-sm'
						/>
					</div>
					<div>
						<label
							htmlFor='date'
							className='text-sm font-semibold text-[#4C2010] my-2'
						>
							Date
						</label>
						<input
							id='date'
							type='date'
							placeholder='Enter artwork title'
							value={dataForm.date}
							name='date'
							onChange={(e) => handleOnChange(e)}
							className='w-full border-2 border-purple-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#c35b1f] bg-white shadow-sm'
						/>
					</div>
					<div>
						<label
							htmlFor='capacity'
							className='text-sm font-semibold text-[#4C2010] my-2'
						>
							Capacity
						</label>
						<input
							id='capacity'
							type='number'
							placeholder='Enter artwork title'
							value={dataForm.capacity}
							name='capacity'
							onChange={(e) => handleOnChange(e)}
							className='w-full border-2 border-purple-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#c35b1f] bg-white shadow-sm'
						/>
					</div>
					<div>
						<label
							htmlFor='price'
							className='text-sm font-semibold text-[#4C2010] my-2'
						>
							Price
						</label>
						<input
							id='price'
							type='number'
							placeholder='Enter artwork title'
							value={dataForm.capacity}
							name='price'
							onChange={(e) => handleOnChange(e)}
							className='w-full border-2 border-purple-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#c35b1f] bg-white shadow-sm'
						/>
					</div>
					<button
						type='submit'
						className='bg-purple-600 text-white p-2 rounded-lg mt-1 cursor-pointer '
					>
						Edit
					</button>
				</form>
			</div>
		</div>
	);
};

export default EditPopup;
