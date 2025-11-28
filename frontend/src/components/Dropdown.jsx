import { useState } from "react";
import { IoCalendarOutline } from "react-icons/io5";

export default function Dropdown() {
	const [open, setOpen] = useState(false);

	return (
		<div className='relative inline-block text-left'>
			<button
				onClick={() => setOpen(!open)}
				className='inline-flex items-center border-2 px-4 py-2 hover:bg-gray-200 text-gray-700 rounded-md shadow-sm'
			>
				<IoCalendarOutline />
				All dates
				<svg
					className='w-4 h-4 ml-2'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					viewBox='0 0 24 24'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M19 9l-7 7-7-7'
					/>
				</svg>
			</button>

			{open && (
				<div className='absolute mt-2 w-40 bg-white border rounded-md shadow-lg py-2 z-20'>
					<button className='block w-full text-left px-4 py-2 hover:bg-gray-100'>
						Item 1
					</button>
					<button className='block w-full text-left px-4 py-2 hover:bg-gray-100'>
						Item 2
					</button>
					<button className='block w-full text-left px-4 py-2 hover:bg-gray-100'>
						Item 3
					</button>
				</div>
			)}
		</div>
	);
}
