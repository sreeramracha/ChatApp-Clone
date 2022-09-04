import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";

export default function Message() {
	const date = new Date().toString();
	const hour = date.slice(16, 18);
	const minute = date.slice(19, 21);

	const [message, setMessage] = useState("");
	const [isSubmit, setSubmit] = useState(false);

	const [sendingMessages, setSendingMessages] = useState([]);

	function changeSubmit() {
		setSubmit(true);
	}

	function handleChange(event) {
		const { value } = event.target;
		changeSubmit();
		setMessage(value);
	}

	function handleClick(message, event) {
		setSubmit(false);
		setSendingMessages((prevValue) => {
			return [...prevValue, message];
		});
		setMessage("");
		event.preventDefault();
	}

	return (
		<div className="message-section">
			<div className="message-header">
				<div className="message-profile-picture">
					<Avatar src="https://pps.whatsapp.net/v/t61.24694-24/287597374_781422333021474_6975959552606426129_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVyr8-mh7PrmaCByw-NdYmJ5jXileBTFQ7uN0Z0gZ7gnnw&oe=6319EE5E" />
					<p>Sreeram</p>
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

			<div className="message-content">
				<ReceivedMessage hour={hour} minute={minute} />

				{sendingMessages.map((conversation) => (
					<SentMessage
						hour={hour}
						minute={minute}
						conversation={conversation}
					/>
				))}
			</div>

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
