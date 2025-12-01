import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import MyTickets from "./pages/MyTickets";
import Dashboard from "./pages/Dashboard";

function App() {
	
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/explore' element={<Events />} />
					<Route path={"/events/:id"} element={<EventDetails />} />
					<Route path={"/tickets"} element={<MyTickets />} />
					<Route path={"/dashboard"} element={<Dashboard />} />
				</Route>
			</Routes>
			{/* <Home /> */}
		</>
	);
}

export default App;
