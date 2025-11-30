import React from "react";
import HeroSection from "../components/HeroSection";
import EventsComponent from "../components/EventsComponent";
import SectionTitle from "../components/SectionTitle";
import Test from "../components/Test";

const Home = () => {
	return (
		<div>
			<HeroSection />
			<SectionTitle title={"Featured Events"} />
			<EventsComponent />
			<Test />
		</div>
	);
};

export default Home;
