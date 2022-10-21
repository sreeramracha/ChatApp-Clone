import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { UserContext } from "./App";

export default function Login() {
	const { state, dispatch } = useContext(UserContext);
	const navigate = useNavigate();

	const [focus, setFocus] = useState({
		email: true,
		password: true,
	});

	const [change, setChange] = useState({
		email: "",
		password: "",
	});

	const [invalid, setInvalid] = useState(false);
	const [fadeProp, setFadeProp] = useState({
		fade: "fade-in",
	});

	useEffect(() => {
		const timeout = setInterval(() => {
			if (fadeProp.fade === "fade-in") {
				setFadeProp({ fade: "fade-out" });
			} else {
				setFadeProp({ fade: "fade-in" });
			}
		}, 500);

		return () => clearInterval(timeout);
	}, [fadeProp]);

	function handleFocus(event) {
		const { name } = event.target;
		setFocus((prevValue) => {
			return {
				...prevValue,
				[name]: false,
			};
		});
	}

	function handleChange(event) {
		const { name, value } = event.target;
		setChange((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
	}

	async function loginUser(event) {
		event.preventDefault();

		const res = await fetch("/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: change.email,
				password: change.password,
			}),
		});

		const data = res.json();

		if (res.status === 400 || !data) {
			// window.alert("Invalid login credentials");
			setInvalid(true);
		} else {
			dispatch({
				type: "USER",
				payload: true,
			});

			// window.alert("Login successful");
			navigate("/chats");
		}
	}

	const reactFacebookIconStyle = {
		color: "blue",
		paddingRight: "10px",
	};

	const reactGoogleIconStyle = {
		paddingRight: "10px",
	};

	return (
		<div className="login-section">
			<div className="login-about">
				<h1>Whatsapp Web</h1>
				<p>Connect with your friends or family online!!!!!</p>
			</div>
			<div className="login-form">
				{invalid && (
					<div className="incorrect-message">
						<p className={fadeProp.fade}>
							Username or password is incorrect!!
						</p>
					</div>
				)}
				<div className="logins">
					<form method="POST">
						<div className="login-credentials">
							<div className="login-input">
								<p
									className={
										focus.email
											? "label-email"
											: "lable-email"
									}
								>
									Email Address
								</p>
								<input
									type="email"
									name="email"
									id="email"
									className="email"
									required
									onFocus={handleFocus}
									onChange={handleChange}
									autoComplete="on"
								/>
							</div>

							<div className="login-input">
								<p
									className={
										focus.password
											? "label-password"
											: "lable-password"
									}
								>
									Password
								</p>
								<input
									type="password"
									name="password"
									id="password"
									className="password"
									required
									onFocus={handleFocus}
									onChange={handleChange}
									autoComplete="on"
								/>
							</div>

							<button type="submit" onClick={loginUser}>
								Log In
							</button>
						</div>
					</form>
					<div className="login-social">
						<div className="google-login">
							<Link className="google" to="/auth/google">
								<FcGoogle
									style={reactGoogleIconStyle}
									size={28}
								/>{" "}
								Google
							</Link>
						</div>
						<div className="facebook-login">
							<Link className="facebook" to="/auth/facebook">
								<BsFacebook
									style={reactFacebookIconStyle}
									size={28}
								/>{" "}
								Facebook
							</Link>
						</div>
					</div>
				</div>
				<hr className="break"></hr>
				<div className="signup-section">
					<p>Don't have an account?</p>
					<Link className="register-page" to="/signup">
						<button>Create a new Account</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

// <div className="login-section">
// 			<div className="login-about">
// 				<h1>Whatsapp Web</h1>
// 				<p>Connect with your friends or family online!!!!!</p>
// 			</div>
// 			<div className="login-form">
// 				<div className="google-login">
// 					<Link className="google" to="/auth/google">
// 						<FcGoogle style={reactGoogleIconStyle} size={28} />{" "}
// 						Google
// 					</Link>
// 				</div>
// 				<div className="facebook-login">
// 					<Link className="facebook" to="/auth/facebook">
// 						<BsFacebook style={reactFacebookIconStyle} size={28} />{" "}
// 						Facebook
// 					</Link>
// 				</div>
// 				<p>(or)</p>
// 				<div className="login-input">
// 					<p className={change.email ? "label-email" : "lable-email"}>
// 						Email Address
// 					</p>
// 					<input
// 						type="email"
// 						name="email"
// 						id="email"
// 						className="email"
// 						required
// 						onClick={handleChange}
// 					/>
// 				</div>

// 				<div className="login-input">
// 					<p
// 						className={
// 							change.password
// 								? "label-password"
// 								: "lable-password"
// 						}
// 					>
// 						Password
// 					</p>
// 					<input
// 						type="password"
// 						name="password"
// 						id="password"
// 						className="password"
// 						required
// 						onClick={handleChange}
// 					/>
// 				</div>

// 				<button type="submit">Log In</button>
// 				<hr className="break"></hr>
// 				<div className="signup-section">
// 					<p>Don't have an account?</p>
// 					<button>
// 						<Link className="register-page" to="/signup">
// 							Create a new Account
// 						</Link>
// 					</button>
// 				</div>
// 			</div>
// 		</div>
