import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../lib/axios";

export const login = createAsyncThunk("auth/login", async (payload) => {
	try {
		const { data } = await axiosInstance.post("/api/login", payload);
		console.log(data);
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
