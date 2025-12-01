import React, { useState } from "react";
import axiosInstance from "../lib/axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/Auth/authApi";

const Login = () => {
	const [dataForm, setDataForm] = useState({ email: "", password: "" });
	const { status } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!dataForm.email || !dataForm.password) return;
		dispatch(login(dataForm));
	};
	return (
		<div className='relative'>
			<div className='heroBg h-screen bg-[url(src/assets/Reflect.jpeg)] bg-cover z-0'></div>
			<form
				onSubmit={(e) => handleSubmit(e)}
				className='absolute w-[40%] rounded-3xl py-14 border-2 border-purple-300/20 backdrop-blur-2xl bg-purple-900/5 mx-auto top-[50%] left-[50%] -translate-[50%] flex items-center flex-col space-y-5'
			>
				<h1 className='text-white/80 font-semibold text-3xl'>
					Welcome to MyTiq
				</h1>
				<p className='text-center w-[60%] text-[14px] text-white/60'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto debitis
					dolorem obcaecati accusantium adipisci.
				</p>
				<div className='w-[60%] flex flex-col space-y-4'>
					<input
						onChange={(e) =>
							setDataForm({ ...dataForm, email: e.target.value })
						}
						type='text'
						placeholder='email.@gmail.com'
						className='bg-black border-2 border-purple-900/30 p-2 focus:outline-none text-white/80 placeholder:text-white/70 font-light placeholder:font-light text-[14px] rounded-lg'
					/>
					<input
						onChange={(e) =>
							setDataForm({ ...dataForm, password: e.target.value })
						}
						type='password'
						placeholder='********'
						className='bg-black border-2 border-purple-900/30 p-2 focus:outline-none text-white/80 placeholder:text-white/70 font-light placeholder:font-light text-[14px] rounded-lg'
					/>
					<button
						type='submit'
						disabled={status == "laoding" ? true : false}
						className={`text-white rounded-lg py-2 font-medium bg-linear-[-150deg,#7159a7_60%,#cccbe2_90%] ${
							status == "laoding" ? "cursor-not-allowed" : "cursor-pointer"
						} active:scale-95 transition-transform duration-300 ease-in-out`}
					>
						Login
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
