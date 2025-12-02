import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../lib/axios";

export const buyticket = createAsyncThunk(
	"ticket/buyTicket",
	async (payload) => {
		try {
			console.log("saad");
			const res = await axiosInstance.post(
				`/api/events/${payload.eventId}/tickets`,
				payload.eventId,
				{
					headers: {
						Authorization: `Bearer ${payload.token}`,
					},
				}
			);
			if (res.status === 200) {
				console.log("first");
			} else {
				console.log("second");
			}
			return res.data;
		} catch (error) {
			console.log(error);
		}

		// return payload;
	}
);
