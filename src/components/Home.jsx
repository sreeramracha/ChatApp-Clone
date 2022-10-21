import Message from "./Message";
import Preview from "./Preview";
import Chat from "./Chat";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
	const navigate = useNavigate();

	const [userData, setUserData] = useState({});

	async function callHomePage() {
		try {
			const res = await fetch("/chats", {
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				credentials: "include",
			});

			const data = await res.json();

			// console.log(data);

			if (res.status !== 200 || !data) {
				const error = new Error(res.error);
				throw error;
			}
		} catch (err) {
			console.log(err);
			navigate("/login");
		}
	}

	useEffect(() => {
		callHomePage();
	}, []);

	const click = false;
	return (
		<div>
			<div className="whatsapp-container">
				<Chat />
				{click && <Preview />}
				{!click && <Message />}
			</div>
		</div>
	);
}
