import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "../features/Event/eventApi";

const AddEventForm = ({ setShowAddEventPopup }) => {
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.auth);
	const [formData, setFormData] = useState({
		title: "",
		location: "",
		date: undefined,
		capacity: 0,
		price: 0,
		// image: {},
	});

	const handleOnchange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addEvent({ data: formData, token: token }));
		setShowAddEventPopup(false);
		// console.log(formData);
	};

	return (
		<div className='fixed inset-0 flex items-center justify-center bg-black/50 z-50'>
			<form
				onSubmit={(e) => handleSubmit(e)}
				className='grid grid-cols-1 md:grid-cols-1 space-y-3 bg-[#f5f5f5] rounded-2xl p-6 w-[40%]'
			>
				<div className='col-span-1'>
					<label className='block text-sm font-semibold mb-1' htmlFor='title'>
						Title
					</label>
					<input
						type='text'
						placeholder='Enter event title'
						value={formData.title}
						name='title'
						id='title'
						onChange={(e) => handleOnchange(e)}
						className='w-full border border-purple-500 rounded-lg px-3 py-2 focus:outline-none bg-white shadow-sm'
					/>
				</div>
				<div className='col-span-1'>
					<label
						className='block text-sm font-semibold mb-1'
						htmlFor='location'
					>
						Location
					</label>
					<input
						type='text'
						placeholder='ex: Casablanca'
						value={formData.location}
						name='location'
						id='location'
						onChange={(e) => handleOnchange(e)}
						className='w-full border border-purple-500 rounded-lg px-3 py-2 focus:outline-none bg-white shadow-sm'
					/>
				</div>
				<div className='col-span-1'>
					<label className='block text-sm font-semibold mb-1' htmlFor='date'>
						Date
					</label>
					<input
						type='date'
						value={formData.date}
						name='date'
						id='date'
						onChange={(e) => handleOnchange(e)}
						className='w-full border border-purple-500 rounded-lg px-3 py-2 focus:outline-none bg-white shadow-sm'
					/>
				</div>
				<div className='col-span-1'>
					<label
						className='block text-sm font-semibold mb-1'
						htmlFor='capacity'
					>
						Capacity
					</label>
					<input
						type='number'
						placeholder='ex: 340'
						value={formData.capacity}
						name='capacity'
						id='capacity'
						onChange={(e) => handleOnchange(e)}
						className='w-full border border-purple-500 rounded-lg px-3 py-2 focus:outline-none bg-white shadow-sm'
					/>
				</div>
				<div className='col-span-1'>
					<label className='block text-sm font-semibold mb-1' htmlFor='price'>
						Price
					</label>
					<input
						type='number'
						placeholder='Enter price ticket'
						value={formData.price}
						name='price'
						id='price'
						onChange={(e) => handleOnchange(e)}
						className='w-full border border-purple-500 rounded-lg px-3 py-2 focus:outline-none bg-white shadow-sm'
					/>
				</div>

				<div>
					<label className='block text-sm font-semibold mb-1'>Image</label>
					<div className='border-2 border-dashed border-purple-500 rounded-lg p-4 text-center bg-[#fafafa]'>
						<input
							type='file'
							accept='image/*'
							className='hidden'
							id='fileInput'
							// onChange={(e) =>
							// 	setFormData({ ...formData, image: e.target.files[0] })
							// }
						/>
						<label
							htmlFor='fileInput'
							className='inline-block bg-purple-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-purple-700 transition'
						>
							Choose File
						</label>
					</div>
				</div>
				<div className='flex justify-end space-x-2 mt-4'>
					<button
						type='button'
						onClick={() => setShowAddEventPopup(false)}
						className='border-2 bg-white hover:bg-white/80 cursor-pointer text-black px-4 py-2 rounded-lg  transition shadow-md'
					>
						Cancel
					</button>
					<button
						type='submit'
						// onClick={handleSubmit}
						className='bg-purple-600 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition shadow-md'
					>
						Post
					</button>
				</div>
			</form>

			{/* <ToastContainer /> */}
		</div>
	);
};

export default AddEventForm;
