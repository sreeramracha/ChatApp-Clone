import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

export default function Register() {
	const navigate = useNavigate();

	const [focus, setFocus] = useState({
		username: true,
		email: true,
		password: true,
		cpassword: true,
	});

	const [change, setChange] = useState({
		username: "",
		email: "",
		password: "",
		cpassword: "",
	});

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

	async function signUpUser(event) {
		event.preventDefault();
		const { username, email, password, cpassword } = change;

		const res = await fetch("/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username,
				email,
				password,
				cpassword,
			}),
		});

		const data = res.json;

		if (data.status === 422 || !data) {
			// window.alert("Invalid registration");
			// console.log("Invalid registration");
		} else {
			// window.alert("Registration successful");
			// console.log("Registration successful");

			navigate("/login");
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
				<div className="logins">
					<form method="POST">
						<div className="login-credentials">
							<div className="login-input">
								<p
									className={
										focus.username
											? "label-username"
											: "lable-username"
									}
								>
									Username
								</p>
								<input
									type="text"
									name="username"
									id="username"
									className="username"
									required
									onFocus={handleFocus}
									onChange={handleChange}
									autoComplete="on"
								/>
							</div>
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

							<div className="login-input">
								<p
									className={
										focus.cpassword
											? "label-cpassword"
											: "lable-cpassword"
									}
								>
									Confirm Password
								</p>
								<input
									type="password"
									name="cpassword"
									id="cpassword"
									className="cpassword"
									required
									onFocus={handleFocus}
									onChange={handleChange}
									autoComplete="on"
								/>
							</div>

							<button type="submit" onClick={signUpUser}>
								Sign Up
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
					<p>Have an account?</p>
					<Link className="register-page" to="/login">
						<button>Login here</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
