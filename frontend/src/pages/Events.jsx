import { IoSearch } from "react-icons/io5";
import EventsComponent from "../components/EventsComponent";

const Events = () => {
	return (
		<div className=' mx-auto pt-30 flex flex-col items-center space-y-10'>
			<div className='w-[40%] flex flex-col space-y-4'>
				<div className='rounded-xl bg-white border-2 flex items-center px-2 py-1.5'>
					<IoSearch className='w-[10%]  text-3xl text-purple-600' />
					<input
						type='text'
						className='focus:outline-none w-full p-1 text-xl'
						placeholder='Search event, artist, and more'
					/>
				</div>
				<div className='flex items-center justify-evenly'>
					<div className='rounded-lg bg-[#f1eafa] border-2 border-[#5f29ba] text-[#5f29ba] cursor-pointer font-medium flex items-center px-2 py-1.5 hover:text-white hover:bg-[#5f29ba] transition-colors duration-300 ease-in-out'>
						Concerts
					</div>
					<div className='rounded-lg bg-[#f1eafa] border-2 border-[#5f29ba] text-[#5f29ba] cursor-pointer font-medium flex items-center px-2 py-1.5 hover:text-white hover:bg-[#5f29ba] transition-colors duration-300 ease-in-out'>
						Theater & Comedy
					</div>
					<div className='rounded-lg bg-[#f1eafa] border-2 border-[#5f29ba] text-[#5f29ba] cursor-pointer font-medium flex items-center px-2 py-1.5 hover:text-white hover:bg-[#5f29ba] transition-colors duration-300 ease-in-out'>
						Sports
					</div>
				</div>
				{/* <Dropdown /> */}
			</div>
			<EventsComponent />
		</div>
	);
};

export default Events;
