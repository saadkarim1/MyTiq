import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import ".././styles.css";
// import "../index.css";
import React from "react";

const Sliders = () => {
	return (
		<div className='relative w-full'>
			<Swiper
				spaceBetween={50}
				slidesPerView={3}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
			>
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				...
			</Swiper>
		</div>
	);
};

export default Sliders;
