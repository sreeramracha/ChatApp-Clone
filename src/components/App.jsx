import React, { createContext, useReducer } from "react";
import { Routes, Route } from "react-router-dom";

import Errorpage from "./Errorpage";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";

import { initialState, reducer } from "./Reducer";

export const UserContext = createContext();

function Routing() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/chats" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Register />} />
			<Route path="/logout" element={<Logout />} />
			<Route path="/:text" element={<Errorpage />} />
		</Routes>
	);
}

export default function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<UserContext.Provider value={{ state, dispatch }}>
			<Routing />
		</UserContext.Provider>
	);
}
