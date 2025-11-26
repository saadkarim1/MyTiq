import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import ".././styles.css";
// import "../index.css";
import React from "react";
import EventCard from "./EventCard";

const Sliders = () => {
	return (
		<div className='relative w-full'>
			<Swiper
				spaceBetween={50}
				slidesPerView={3}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
			>
				<SwiperSlide>
					<EventCard />
				</SwiperSlide>
				<SwiperSlide>
					<EventCard />
				</SwiperSlide>
				<SwiperSlide>
					<EventCard />
				</SwiperSlide>
				<SwiperSlide>
					<EventCard />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Sliders;
