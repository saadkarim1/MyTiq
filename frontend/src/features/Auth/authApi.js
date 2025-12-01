import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../lib/axios";

export const login = createAsyncThunk("auth/login", async (payload) => {
	try {
		const { data } = await axiosInstance.post("/api/login", payload);
		console.log("login Done");
		localStorage.setItem("api_token", data.token);
		return data;
	} catch (error) {
		console.log(error);
	}
});

export const register = createAsyncThunk("auth/register", async (payload) => {
	try {
		const { data } = await axiosInstance.post("/api/register", payload);
		localStorage.setItem("api_token", data.token);

		return data;
	} catch (error) {}
});

export const logout = createAsyncThunk("auth/logout", async (pyaload) => {
	try {
		// console.log("first");
		const res = await axiosInstance.get("/api/logout", {
			headers: {
				Authorization: `Bearer ${pyaload}`,
			},
		});
		if (res.status == 200) {
			localStorage.removeItem("api_token");
			console.log("khdmaaaat");
		}
	} catch (error) {}
});
