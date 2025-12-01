import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import EventsComponent from "../components/EventsComponent";
import SectionTitle from "../components/SectionTitle";

const Home = () => {
	

	return (
		<div>
			<HeroSection />
			<SectionTitle title={"Featured Events"} />
			<EventsComponent />
		</div>
	);
};

export default Home;
