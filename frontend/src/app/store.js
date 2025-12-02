import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/Auth/authSlice";
import { eventReducer } from "../features/Event/eventSlice";
import { ticketReducer } from "../features/Ticket/ticketSlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		event: eventReducer,
		ticket: ticketReducer,
	},
});

export default store;
