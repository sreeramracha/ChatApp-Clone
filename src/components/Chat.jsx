import { Avatar, IconButton } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import SearchIcon from "@mui/icons-material/Search";

export default function Chat(props) {
	const date = new Date().toString();
	const hour = date.slice(16, 18);
	const minute = date.slice(19, 21);
	console.log(date, hour, minute);

	return (
		<div className="chat-section">
			<div className="chat-header">
				<div className="display-picture">
					<Avatar src="https://pps.whatsapp.net/v/t61.24694-24/287597374_781422333021474_6975959552606426129_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVyr8-mh7PrmaCByw-NdYmJ5jXileBTFQ7uN0Z0gZ7gnnw&oe=6319EE5E" />
				</div>
				<div className="menu">
					<div className="icons-section">
						<div className="icons">
							<IconButton>
								<DonutLargeIcon />
							</IconButton>
						</div>
					</div>
					<div className="icons-section">
						<div className="icons">
							<IconButton>
								<MessageIcon />
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

			<div className="chat-searchbar">
				<div className="icons-section">
					<div className="icons">
						<IconButton>
							<SearchIcon />
						</IconButton>
					</div>
				</div>
				<div className="chat-input-bar">
					<input
						type="text"
						placeholder="Search or start a new chat"
					/>
				</div>
			</div>

			<div className="chat-body">
				<div className="chat-messages">
					<div className="profile-picture">
						<Avatar src="https://pps.whatsapp.net/v/t61.24694-24/287597374_781422333021474_6975959552606426129_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVyr8-mh7PrmaCByw-NdYmJ5jXileBTFQ7uN0Z0gZ7gnnw&oe=6319EE5E" />
					</div>

					<div className="chat-details">
						<div className="chat-title-time">
							<div className="chat-title">
								<p>Sreeram</p>
							</div>
							<div className="chat-time">
								<p>
									{hour}:{minute}
								</p>
							</div>
						</div>
						<div className="chat-info">
							<p>Chat info</p>
						</div>
					</div>
				</div>

				<div className="chat-messages">
					<div className="profile-picture">
						<Avatar src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" />
					</div>

					<div className="chat-details">
						<div className="chat-title-time">
							<div className="chat-title">
								<p>Unknown</p>
							</div>
							<div className="chat-time">
								<p>
									{hour}:{minute}
								</p>
							</div>
						</div>
						<div className="chat-info">
							<p>Chat info</p>
						</div>
					</div>
				</div>

				<div className="chat-messages">
					<div className="profile-picture">
						<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvCn9TE5CTXwGCWTQESKh8JXCrZQpnpAbUG6gFAtF8ZDCohCq_l4GbwQejR1KB2RCedXU&usqp=CAU" />
					</div>

					<div className="chat-details">
						<div className="chat-title-time">
							<div className="chat-title">
								<p>Group</p>
							</div>
							<div className="chat-time">
								<p>
									{hour}:{minute}
								</p>
							</div>
						</div>
						<div className="chat-info">
							<p>Chat info</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
