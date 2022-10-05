import { Routes, Route } from "react-router-dom";

import Errorpage from "./Errorpage";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Register />} />
			<Route path="/:text" element={<Errorpage />} />
		</Routes>
	);
}
