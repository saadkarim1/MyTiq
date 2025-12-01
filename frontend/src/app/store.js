import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/Auth/authSlice";
import { eventReducer } from "../features/Event/eventSlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		event: eventReducer,
	},
});

export default store;
