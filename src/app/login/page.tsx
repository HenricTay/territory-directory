"use client";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default function Page() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [login, setLogin] = useState(false);

	const configuration = {
		method: "post",
		url: "https://netzwelt-devtest.azurewebsites.net/Account/SignIn",
		data: {
			email,
			password,
		},
	};
	const handleSubmit = async () => {
		axios(configuration)
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<>
			<Form onSubmit={(e) => handleSubmit(e)}>
				{/* email */}
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="text"
						name="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Enter email"
					/>
				</Form.Group>

				{/* password */}
				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
					/>
				</Form.Group>

				{/* submit button */}
				<Button
					variant="primary"
					type="submit"
					onClick={(e) => handleSubmit(e)}
				>
					Login
				</Button>
			</Form>
		</>
	);
}
