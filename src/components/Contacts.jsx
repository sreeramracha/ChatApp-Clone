import React from "react";
import { Avatar } from "@mui/material";

export default function Contacts(props) {
	function handleClick() {
		props.handleStartChat(props.id, props.username, props.avatarImageURL);
	}

	return (
		<div className="contact-info" onClick={handleClick}>
			<Avatar src={props.avatarImageURL} />
			<p>{props.username}</p>
		</div>
	);
}
