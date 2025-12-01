import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import EventCard from "./EventCard";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
import { useSelector } from "react-redux";

const Slider = () => {
	const { events, status } = useSelector((state) => state.event);
	const swiperRef = useRef(null);

	return (
		<div
			className='relative w-full my-6'
			onMouseEnter={() => swiperRef.current?.autoplay.stop()}
			onMouseLeave={() => swiperRef.current?.autoplay.start()}
		>
			{status == "secceded" && (
				<Swiper
					onSwiper={(swiper) => (swiperRef.current = swiper)}
					spaceBetween={30}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					slidesPerView={4}
					onMouseEnter={stop}
					loop={true}
					modules={[Autoplay, Pagination, Navigation]}
				>
					{events?.map((event) => (
						<SwiperSlide>
							<EventCard event={event}/>
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</div>
	);
};

export default Slider;
