import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "./authApi";

const initialState = {
	user: null,
	status: "idle", // "idle" | "loading" | "secceded" | "failed"
	error: null,
	isLoggedIn: false,
	token: null,
};
export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		getTokenFromLocalstorage: (state) => {
			state.token = localStorage.getItem("api_token");
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.fulfilled, (state, { payload }) => {
				state.status = "secceded";
				state.isLoggedIn = true;
				state.status = payload.user;
			})
			.addCase(login.pending, (state) => {
				state.status = "laoding";
			})
			.addCase(login.rejected, (state) => {
				state.status = "failed";
			})

			.addCase(register.fulfilled, (state, { payload }) => {
				state.status = "secceded";
				state.isLoggedIn = true;
				console.log(payload);
			})
			.addCase(register.pending, (state, { payload }) => {
				state.status = "laoding";
				console.log(payload);
			})

			.addCase(logout.fulfilled, (state) => {
				state.isLoggedIn = false;
				state.user = null;
			});
	},
});

export const { getTokenFromLocalstorage } = authSlice.actions;
export const authReducer = authSlice.reducer;
