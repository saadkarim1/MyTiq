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

export const deleteEvent = createAsyncThunk("event/delete", async (payload) => {
	const res = await axiosInstance.delete(`/api/events/${payload.eventId}`, {
		headers: {
			Authorization: `Bearer ${payload.token}`,
		},
	});

	if (res.status === 200) {
		console.log("tmshat");
		return payload.eventId;
	}
	return undefined;
});

export const editEvent = createAsyncThunk("event/edit", async (payload) => {
	console.log(payload);
	const res = await axiosInstance.put(
		`/api/events/${payload.eventId}`,
		payload.data,
		{
			headers: {
				Authorization: `Bearer ${payload.token}`,
			},
		}
	);

	if (res.status === 200) {
		return res.data;
	}
	return undefined;
});
