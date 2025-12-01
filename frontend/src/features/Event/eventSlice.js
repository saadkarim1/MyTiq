import { createSlice } from "@reduxjs/toolkit";
import { getAllEvents } from "./eventApi";

const initialState = {
	events: [],
	status: "idle",
	error: null,
};

export const eventSlice = createSlice({
	name: "event",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getAllEvents.fulfilled, (state, { payload }) => {
				state.status = "secceded";
				state.events = payload;
			})
			.addCase(getAllEvents.pending, (state, { payload }) => {
				state.status = "loadig";
			});
	},
});

export const eventReducer = eventSlice.reducer;
