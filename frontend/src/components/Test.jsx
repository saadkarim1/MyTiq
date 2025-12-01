// import axios from "axios";
import React, { useEffect } from "react";
import axiosInstance from "../lib/axios";

const Test = () => {
	useEffect(() => {
		const fetchData = async () => {
			const res = await axiosInstance.get("/api/test");
			console.log(res);
		};
		fetchData();
	}, []);
	return <div>Test</div>;
};

export default Test;
