import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import axiosInstance from "../lib/axios";

const Register = () => {
	const [checked, setChecked] = useState(false);
	const [dataForm, setDataForm] = useState({
		user_name: "",
		email: "",
		password: "",
		password_confirmation: "",
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		dataForm.password_confirmation = dataForm.password;
		const { data } = await axiosInstance.post("/api/register", dataForm);
		console.log(data);
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
							setDataForm({ ...dataForm, user_name: e.target.value })
						}
						type='text'
						placeholder='full name'
						className='bg-black border-2 border-purple-900/30 p-2 focus:outline-none text-white/80 placeholder:text-white/70 font-light placeholder:font-light text-[14px] rounded-lg'
					/>
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
					<div
						className='flex items-center text-white/80 space-x-2 text-[14px] cursor-pointer'
						onClick={() => setChecked(!checked)}
					>
						<span
							className={`flex items-center justify-center w-5 h-5 border rounded-md ${
								checked
									? "bg-purple-900 border-purple-900 text-white"
									: "border-[#949494] bg-transparent text-transparent"
							} transition duration-200 ease-in-out`}
						>
							<FaCheck />
						</span>
						<span>Newsletter</span>
					</div>
					<button
						type='submit'
						className='text-white rounded-lg py-2 font-medium bg-linear-[-150deg,#7159a7_60%,#cccbe2_90%] cursor-pointer'
					>
						Register
					</button>
				</div>
			</form>
		</div>
	);
};

export default Register;
