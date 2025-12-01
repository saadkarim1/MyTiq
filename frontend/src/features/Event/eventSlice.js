import { createSlice } from "@reduxjs/toolkit";
import { deleteEvent, getAllEvents } from "./eventApi";

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
			.addCase(getAllEvents.pending, (state) => {
				state.status = "loadig";
			})

			.addCase(deleteEvent.fulfilled, (state, { payload }) => {
				state.events = state.events.filter((event) => event.id != payload);
			});
	},
});

export const eventReducer = eventSlice.reducer;
