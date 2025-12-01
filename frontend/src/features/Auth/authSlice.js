import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./authApi";

const initialState = {
	user: {},
	status: "idle", // "idle" | "loading" | "secceded" | "failed"
	error: null,
};
export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(login.fulfilled, (state, { payload }) => {
				state.status = "secceded";
				state.status = payload.user;
				console.log(payload);
			})
			.addCase(login.pending, (state, { payload }) => {
				state.status = "laoding";
				console.log(payload);
			})
			.addCase(login.rejected, (state, { payload }) => {
				state.status = "failed";
			})

			.addCase(register.fulfilled, (state, { payload }) => {
				state.status = "secceded";
				console.log(payload);
			})
			.addCase(register.pending, (state, { payload }) => {
				state.status = "laoding";
				console.log(payload);
			});
	},
});

export const authReducer = authSlice.reducer;
