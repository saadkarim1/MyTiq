import { createSlice } from "@reduxjs/toolkit";
import { buyticket } from "./ticketApi";

export const ticketSlice = createSlice({
	name: "ticket",
	initialState: 0,
	extraReducers: (builder) => {
		builder.addCase(buyticket.fulfilled, (state, { payload }) => {
			console.log(payload);
		});
	},
});


export const ticketReducer = ticketSlice.reducer