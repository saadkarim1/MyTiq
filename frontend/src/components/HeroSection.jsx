import { IoTicket } from "react-icons/io5";
import { FaMasksTheater } from "react-icons/fa6";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import Sliders from "./Sliders";

const HeroSection = () => {
	return (
		<div className='relative'>
			<div className='heroBg relative h-screen bg-[url(src/assets/Reflect.jpeg)] bg-cover z-0'></div>
			<div className='absolute w-[85%] mx-auto top-[50%] left-[50%] transform -translate-[50%] flex items-center justify-center flex-col space-y-6'>
				{/* <div className='w-[50%] bg-red-300'></div> */}
				{/* <div className=' w-[50%] text-[400px]'>
					<div className='group -rotate-25 border-2 border-red-500 bg- text-white py-16 rounded-2xl px-4  transition-all duration-300 ease-in-out drop-shadowxl drop-shadow-blue-500'>
						<FaMasksTheater className='group-hover:scale-105 transition-all duration-300 ease-in-out' />
					</div>
					<div className='group flex items-center justify-center  text-white  rounded-2xl  drop-shadowxl drop-shadow-red-500 '>
						<IoTicket className='ticket  ' />

						<BsFillTicketPerforatedFill className='ticke animate-bounce  ' />
					</div>
				</div> */}
				{/* <div> */}
				{/* <img src='src/assets/houda4.png' alt='' /> */}
				{/* </div> */}
				<div className='text-center space-y-4'>
					<h1 className='text-white text-7xl font-semibold '>
						Let there be live{" "}
					</h1>
					<p className='font-medium text-3xl text-white/50'>
						Your next best-night-ever is waiting
					</p>
				</div>
				<div className='rounded-xl bg-white flex items-center px-4 py-2 w-[50%]'>
					<IoSearch className='w-[10%]  text-3xl text-purple-600' />
					<input
						type='text'
						className='focus:outline-none w-full py-2 px-1 text-xl'
						placeholder='Search event, artist, and more'
					/>
				</div>
				<Sliders />
			</div>
		</div>
	);
};

export default HeroSection;
