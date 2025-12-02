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
	try {
		const res = await axiosInstance.delete(`/api/events/${payload.eventId}`, {
			headers: {
				Authorization: `Bearer ${payload.token}`,
			},
		});

		if (res.status === 200) {
			return payload.eventId;
		}
		return undefined;
	} catch (error) {
		console.log(error);
	}
});

export const addEvent = createAsyncThunk("event/addEvent", async (payload) => {
	try {
		const { data } = await axiosInstance.post("/api/events", payload.data, {
			headers: {
				Authorization: `Bearer ${payload.token}`,
			},
		});
		console.log("return dyl add", data);
		return data.event;
	} catch (error) {
		console.log(error);
	}
});

export const editEvent = createAsyncThunk("event/edit", async (payload) => {
	try {
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
	} catch (error) {
		console.log(error);
	}
});

export const showEvent = createAsyncThunk("event/show", async (payload) => {
	try {
		const { data } = await axiosInstance.get(`/api/events/${payload}`);
		return data;
	} catch (error) {
		console.log(error);
	}
});
