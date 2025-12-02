import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { IoArrowBack, IoLocationSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { showEvent } from "../features/Event/eventApi";
import { FaRegCalendarMinus } from "react-icons/fa";
import { MdEventSeat } from "react-icons/md";
import { BiSolidDollarCircle } from "react-icons/bi";

const EventDetails = () => {
	const dispatch = useDispatch();
	let navigate = useNavigate();
	const { event } = useSelector((state) => state.event);
	let { id } = useParams();
	console.log(event);
	useEffect(() => {
		dispatch(showEvent(id));
	}, [id]);
	return (
		<div className='pt-20  w-[85%] mx-auto  '>
			<div className='rounded-xl text-3xl w-fit h-fit p-3 cursor-pointer hover:bg-[#d3d3d3]'>
				<div onClick={() => navigate(-1)}>
					<IoArrowBack />
				</div>
			</div>
			<div className='flex justify-center'>
				<div className='w-[50%] h-[40vh] flex justify-center '>
					<img
						src='/src/assets/event1.jpeg'
						alt=''
						className='h-[70vh] rounded-3xl'
					/>
				</div>
				<div className='w-[50%] h-[70vh] flex flex-col justify-between  p-6 pb-0'>
					<div className='space-y-3'>
						<h1 className='font-bold text-6xl'>{event.title}</h1>
						<p className='text-black/80 font-normal text-[17px]'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
							possimus eos sequi placeat inventore consequatur velit pariatur,
							tenetur at veniam recusandae quae vitae delectus reiciendis autem
							vel explicabo laudantium minus.
						</p>
						<div className='text-2xl space-y-2'>
							<div className='flex items-center text-black space-x-1.5 font-medium'>
								<IoLocationSharp />
								<p className='text-lg'>{event?.location}</p>
							</div>
							<div className='flex items-center text-black space-x-1.5 font-medium'>
								<FaRegCalendarMinus />
								<p className='text-lg'>{event?.date}</p>
							</div>
							<div className='flex items-center text-black space-x-1.5 font-medium'>
								<MdEventSeat />
								<p className='text-lg'>{event?.capacity}</p>
							</div>
							<div className='flex items-center text-black space-x-1.5 font-medium'>
								<BiSolidDollarCircle />
								<p className='text-lg'>{event?.price} Dh</p>
							</div>
						</div>
					</div>
					<button className='w-full rounded-full bg-purple-600 text-white py-2 font-medium cursor-pointer'>
						buy ticket
					</button>
				</div>
			</div>
		</div>
	);
};

export default EventDetails;
