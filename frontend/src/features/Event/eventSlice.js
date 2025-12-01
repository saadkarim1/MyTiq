import { createSlice } from "@reduxjs/toolkit";
import { deleteEvent, editEvent, getAllEvents } from "./eventApi";

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
			})

			.addCase(editEvent.fulfilled, (state, { payload }) => {
				const event = state.events.find((event) => event.id === payload.id);
				if (event) {
					event.title = payload.title;
					event.capacity = payload.capacity;
					event.location = payload.location;
					event.price = payload.price;
				}
			});
	},
});

export const eventReducer = eventSlice.reducer;
