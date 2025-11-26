import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Events from "../components/events";

const Home = () => {
	return (
		<div>
			<NavBar />
			<HeroSection />
			<Events />
		</div>
	);
};

export default Home;
