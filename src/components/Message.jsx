import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useEffect } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

export default function Message() {
	const [message, setMessage] = useState("");
	const [isSubmit, setSubmit] = useState(false);
	const [user, setUser] = useState({});
	const [sendingMessages, setSendingMessages] = useState([]);

	function changeSubmit() {
		setSubmit(true);
	}

	function handleChange(event) {
		const { value } = event.target;
		changeSubmit();
		setMessage(value);
	}

	function handleClick(event) {
		setSubmit(false);
		const date = new Date().toString();
		const hour = date.slice(16, 18);
		const minute = date.slice(19, 21);
		const conversation = {
			username: user.username,
			message: message,
			hour: hour,
			minute: minute,
		};
		if (conversation.message !== "") {
			setSendingMessages((prevValue) => {
				return [...prevValue, conversation];
			});
		}
		setMessage("");
		// event.preventDefault();
		console.log(sendingMessages);
	}

	useEffect(() => {
		async function fetchData() {
			const res = await fetch("/chats", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await res.json();
			setUser(data);
			// console.log(data);
		}

		fetchData();
	}, []);

	return (
		<div className="message-section">
			<div className="message-header">
				<div className="message-profile-picture">
					<Avatar src="https://pps.whatsapp.net/v/t61.24694-24/287597374_781422333021474_6975959552606426129_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdS1rjsym3ea3N4nu7OAGGcFoOwU2K_PvFUHRQkIy0Wf1A&oe=635E441E" />
					<p>{user.username}</p>
				</div>

				<div className="find-menu">
					<div className="icons-section">
						<div className="icons">
							<IconButton>
								<SearchIcon />
							</IconButton>
						</div>
					</div>

					<div className="icons-section">
						<div className="icons">
							<IconButton>
								<MoreVertIcon />
							</IconButton>
						</div>
					</div>
				</div>
			</div>

			<ScrollToBottom className="message-container">
				{sendingMessages.map((messageContent, index) => {
					return (
						<div
							id={
								user.username === messageContent.username
									? "you"
									: "other"
							}
							key={index}
						>
							<div className="message">
								<div className="message-content">
									<p>{messageContent.message}</p>
								</div>
								<div className="timestamp">
									{messageContent.hour}:
									{messageContent.minute}{" "}
									{Number(messageContent.hour) >= 12
										? "PM"
										: "AM"}
								</div>
							</div>
						</div>
					);
				})}
			</ScrollToBottom>

			<div className="message-form">
				<div className="icons-section">
					<div className="icons">
						<IconButton>
							<TagFacesIcon />
						</IconButton>
					</div>
				</div>
				<div className="sending-message">
					<input
						onChange={handleChange}
						type="text"
						placeholder="Type a message"
						name="conversation"
						value={message}
						onKeyDown={(event) => {
							event.key === "Enter" && handleClick(message);
						}}
					/>
					<div className="icons-section">
						{isSubmit ? (
							<div
								onClick={() => {
									handleClick(message);
								}}
								className="icons"
							>
								<IconButton>
									<SendIcon />
								</IconButton>
							</div>
						) : (
							<div className="icons">
								<IconButton>
									<MicIcon />
								</IconButton>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
