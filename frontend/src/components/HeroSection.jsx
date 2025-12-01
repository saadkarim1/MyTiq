import { IoTicket } from "react-icons/io5";
import { FaMasksTheater } from "react-icons/fa6";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import Slider from "./Slider";

const HeroSection = () => {
	return (
		<div className='relative'>
			<div
				className='heroBg relative h-screen  bg-cover z-0'
				style={{ backgroundImage: `url(${"src/assets/Reflect.jpeg"})` }}
			></div>
			<div className='absolute w-[85%] mx-auto top-[50%] left-[50%] transform -translate-[50%] flex items-center justify-center flex-col space-y-5'>
				<div className='text-center'>
					<h1 className='text-white text-7xl font-semibold '>
						Let there be live{" "}
					</h1>
					<p className='font-medium text-3xl text-white/50'>
						Your next best-night-ever is waiting
					</p>
				</div>
				<div className='rounded-xl bg-white flex items-center px-2 py-1.5 w-[50%]'>
					<IoSearch className='w-[10%]  text-3xl text-purple-600' />
					<input
						type='text'
						className='focus:outline-none w-full py-2 px-1 text-xl'
						placeholder='Search event, artist, and more'
					/>
				</div>
				<Slider />
			</div>
		</div>
	);
};

export default HeroSection;
