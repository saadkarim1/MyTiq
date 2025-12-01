import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../lib/axios";

export const getAllEvents = createAsyncThunk("event/getAllEvents", async () => {
	try {
		const { data } = await axiosInstance.get("/api/events");
		return data;
	} catch (error) {
		console.log(error);
	}
});
