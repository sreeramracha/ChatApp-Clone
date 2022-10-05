import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

export default function Register() {
	const [change, setChange] = useState({
		name: true,
		email: true,
		password: true,
		cpassword: true,
	});

	function handleChange(event) {
		const { name } = event.target;
		setChange((prevValue) => {
			return {
				...prevValue,
				[name]: false,
			};
		});
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
					<div className="login-credentials">
						<div className="login-input">
							<p
								className={
									change.name ? "label-name" : "lable-name"
								}
							>
								Name
							</p>
							<input
								type="text"
								name="name"
								id="name"
								className="name"
								required
								onClick={handleChange}
							/>
						</div>
						<div className="login-input">
							<p
								className={
									change.email ? "label-email" : "lable-email"
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
								onClick={handleChange}
							/>
						</div>

						<div className="login-input">
							<p
								className={
									change.password
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
								onClick={handleChange}
							/>
						</div>

						<div className="login-input">
							<p
								className={
									change.cpassword
										? "label-cpassword"
										: "lable-cpassword"
								}
							>
								Confirm Password
							</p>
							<input
								type="cpassword"
								name="cpassword"
								id="cpassword"
								className="cpassword"
								required
								onClick={handleChange}
							/>
						</div>

						<button type="submit">Sign Up</button>
					</div>
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
					<button>
						<Link className="register-page" to="/login">
							Login here
						</Link>
					</button>
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
// 						<FcGoogle style={reactGoogleIconStyle} size={28} />
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
// 					<p className={change.name ? "label-name" : "lable-name"}>
// 						Name
// 					</p>
// 					<input
// 						type="text"
// 						name="name"
// 						id="name"
// 						className="name"
// 						required
// 						onClick={handleChange}
// 					/>
// 				</div>
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

// 				<div className="login-input">
// 					<p
// 						className={
// 							change.cpassword
// 								? "label-cpassword"
// 								: "lable-cpassword"
// 						}
// 					>
// 						Confirm Password
// 					</p>
// 					<input
// 						type="cpassword"
// 						name="cpassword"
// 						id="cpassword"
// 						className="cpassword"
// 						required
// 						onClick={handleChange}
// 					/>
// 				</div>

// 				<button type="submit">Sign Up</button>

// 				<hr className="break"></hr>
// 				<div className="signup-section">
// 					<p>Have an account?</p>
// 					<button>
// 						<Link className="register-page" to="/login">
// 							Login here
// 						</Link>
// 					</button>
// 				</div>
// 			</div>
// 		</div>
