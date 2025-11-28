import React from "react";

const Login = () => {
	return (
		<div className='relative'>
			<div className='heroBg h-screen bg-[url(src/assets/Reflect.jpeg)] bg-cover z-0'></div>
			<div className='absolute w-[40%] rounded-3xl py-14 border-2 border-purple-300/20 backdrop-blur-2xl bg-purple-900/5 mx-auto top-[50%] left-[50%] -translate-[50%] flex items-center flex-col space-y-5'>
				<h1 className='text-white/80 font-semibold text-3xl'>
					Welcome to MyTiq
				</h1>
				<p className='text-center w-[60%] text-[14px] text-white/60'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto debitis
					dolorem obcaecati accusantium adipisci.
				</p>
				<div className='w-[60%] flex flex-col space-y-4'>
					<input
						type='text'
						placeholder='email.@gmail.com'
						className='bg-black border-2 border-purple-900/30 p-2 focus:outline-none text-white/80 placeholder:text-white/70 font-light placeholder:font-light text-[14px] rounded-lg'
					/>
					<input
						type='password'
						placeholder='********'
						className='bg-black border-2 border-purple-900/30 p-2 focus:outline-none text-white/80 placeholder:text-white/70 font-light placeholder:font-light text-[14px] rounded-lg'
					/>
					<button className='text-white rounded-lg py-2 font-medium bg-linear-[-150deg,#7159a7_60%,#cccbe2_90%] cursor-pointer'>
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
