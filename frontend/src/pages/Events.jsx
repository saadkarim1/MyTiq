import { IoSearch } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import Dropdown from "../components/Dropdown";
import EventsComponent from "../components/EventsComponent";

const Events = () => {
	return (
		<div className=' mx-auto pt-30 flex flex-col items-center space-y-10'>
			<div className='w-[40%] flex items-center'>
				<div className='rounded-xl bg-white border-2 flex items-center px-2 py-1.5'>
					<IoSearch className='w-[10%]  text-3xl text-purple-600' />
					<input
						type='text'
						className='focus:outline-none w-full p-1 text-xl'
						placeholder='Search event, artist, and more'
					/>
				</div>
				<Dropdown />
			</div>
			<EventsComponent />
		</div>
	);
};

export default Events;
