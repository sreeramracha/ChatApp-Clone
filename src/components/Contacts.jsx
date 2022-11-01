import React, { useState } from "react";
import { Avatar } from "@mui/material";

export default function Contacts({ friends, hour, minute, handlePreview }) {
	const [currentSelected, setCurrentSelected] = useState();

	function handleCurrentSelected(index, item) {
		setCurrentSelected(index);
		// console.log(item);
		handlePreview(item);
	}

	return (
		<div className="chat-body">
			{friends.map((item, index) => {
				return (
					<div
						key={index}
						className={`chat-messages ${
							index === currentSelected ? "selected" : ""
						}`}
						onClick={() => handleCurrentSelected(index, item)}
					>
						<div className="profile-picture">
							<Avatar src={item.avatarImageURL} />
						</div>

						<div className="chat-details">
							<div className="chat-title-time">
								<div className="chat-title">
									<p>{item.username}</p>
								</div>
								{/* <div className="chat-time">
									<p>
										{hour}:{minute}
									</p>
								</div> */}
							</div>
							{/* <div className="chat-info">
								<p>Chat info</p>
							</div> */}
						</div>
					</div>
				);
			})}
		</div>
	);
}
