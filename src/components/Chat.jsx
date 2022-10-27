import { Avatar, IconButton } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import WestIcon from "@mui/icons-material/West";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import Contacts from "./Contacts";
import DoneIcon from "@mui/icons-material/Done";

export default function Chat(props) {
	const date = new Date().toString();
	const hour = date.slice(16, 18);
	const minute = date.slice(19, 21);
	// console.log(date, hour, minute);

	const [show, setShow] = useState(false);
	const [showArrow, setShowArrow] = useState(false);
	const [user, setUser] = useState({});

	const [showAvatar, setShowAvatar] = useState(false);
	const [avatarImage, setAvatarImage] = useState("");

	function handleShowAvatar() {
		setShowAvatar(!showAvatar);
	}

	function handleAvatarImageURL(event) {
		const { value } = event.target;
		setAvatarImage(value);
	}

	async function handleAvatarImageSubmission(event) {
		event.preventDefault();

		const res = await fetch("/avatar", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				avatarImage,
				username: user.username,
			}),
		});

		const data = await res.json();

		if (!data) {
			console.log("Avatar image not sent");
		} else {
			console.log("Avatar image sent");
		}

		setShowAvatar(!showAvatar);
		setAvatarImage("");
		// navigate("/chats");
		window.location.reload();
	}

	function handleMenu() {
		setShow(!show);
	}

	function handleArrow() {
		setShowArrow(!showArrow);
		const input = document.getElementById("user-search-bar");
		input.focus();
	}

	function handleSearchFocus() {
		setShowArrow(true);
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

	const [allUsers, setAllUsers] = useState({});

	useEffect(() => {
		async function fetchData() {
			const res = await fetch("/getData", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await res.json();
			setAllUsers(data);
			// console.log(data);
		}

		fetchData();
	}, []);

	const [contacts, setContacts] = useState([]);
	const [contact, setContact] = useState("");

	function handleContact(event) {
		const { value } = event.target;
		setContact(value);
		// console.log(contact);
	}

	function handleSearchContacts() {
		setContacts([]);
		allUsers.forEach(function (item) {
			let name = item.username;
			name = name.slice(0, contact.length);
			if (name === contact) {
				setContacts((prevValues) => {
					return [
						...prevValues,
						{
							id: item._id,
							username: item.username,
							avatarImageURL: item.avatarImageURL,
						},
					];
				});
			}
		});
		setShowCotanct(true);
	}

	const [showContact, setShowCotanct] = useState(true);

	function handleShowContact() {
		setShowCotanct(false);
	}

	const [showStartChat, setShowStartChat] = useState([]);

	function handleStartChat(id, username, avatarImageURL) {
		setContact("");
		setContacts([]);
		const needContact = {
			id: id,
			username: username,
			avatarImageURL: avatarImageURL,
		};
		setShowStartChat((prevValues) => {
			return [...prevValues, needContact];
		});

		// console.log(showStartChat);
	}

	return (
		<div className="chat-section">
			<form action="/avatar" method="POST">
				<div
					className={
						showAvatar ? "insert-avatar slide-in" : "insert-avatar"
					}
				>
					<input
						type="text"
						name="avatarImage"
						placeholder="Insert image URL"
						onKeyDown={(event) => {
							event.key === "Enter" &&
								handleAvatarImageSubmission();
						}}
						autoComplete="off"
						onChange={handleAvatarImageURL}
						value={avatarImage}
					/>

					<button
						className="icons"
						type="submit"
						onClick={handleAvatarImageSubmission}
					>
						<DoneIcon />
					</button>
				</div>
			</form>

			<div className="chat-header">
				<div className="display-picture" onClick={handleShowAvatar}>
					<Avatar src={user.avatarImageURL} />
				</div>
				<div className="menu">
					<div className="icons-section">
						<div className="icons donut">
							<IconButton>
								<DonutLargeIcon />
							</IconButton>
						</div>
					</div>
					<div className="icons-section">
						<div className="icons message">
							<IconButton>
								<MessageIcon />
							</IconButton>
						</div>
					</div>

					<div className="icons-section">
						<div className={show ? "icons more" : "icons"}>
							<IconButton onClick={handleMenu}>
								<MoreVertIcon />
							</IconButton>
						</div>
						{show && (
							<div className="menu-options">
								<div className="menu-list">
									<p>Settings</p>
								</div>
								<form action="/logout" method="GET">
									<div className="menu-list">
										<button>Logout</button>
									</div>
								</form>
							</div>
						)}
					</div>
				</div>
			</div>

			<div className="chat-searchbar">
				<div className="icons-section">
					<div className="icons" onClick={handleArrow}>
						<IconButton>
							{showArrow ? <WestIcon /> : <SearchIcon />}
						</IconButton>
					</div>
				</div>
				<div className="chat-input-bar">
					<input
						type="text"
						name="contact"
						placeholder="Search or start a new chat"
						id="user-search-bar"
						onClick={handleSearchFocus}
						onChange={handleContact}
						value={contact}
						onKeyDown={(event) => {
							event.key === "Enter" && handleSearchContacts();
							event.key !== "Enter" && handleShowContact();
						}}
						autoComplete="off"
					/>
				</div>
				<div className="icons-section">
					<div className="icons" onClick={handleSearchContacts}>
						<IconButton>
							<ManageSearchIcon />
						</IconButton>
					</div>
				</div>

				{showContact && (
					<div className="show-users">
						{contacts.map((item, index) => (
							<Contacts
								key={index}
								id={item.id}
								username={item.username}
								avatarImageURL={item.avatarImageURL}
								handleStartChat={handleStartChat}
							/>
						))}
					</div>
				)}
			</div>

			<div className="chat-body">
				{showStartChat.map((item, index) => (
					<div className="chat-messages" key={index} id={item.id}>
						<div className="profile-picture">
							<Avatar src={item.avatarImageURL} />
						</div>

						<div className="chat-details">
							<div className="chat-title-time">
								<div className="chat-title">
									<p>{item.username}</p>
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
				))}
			</div>
		</div>
	);
}

// sreeram image = "https://pps.whatsapp.net/v/t61.24694-24/287597374_781422333021474_6975959552606426129_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdS1rjsym3ea3N4nu7OAGGcFoOwU2K_PvFUHRQkIy0Wf1A&oe=635E441E"
// unknown user image = "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
