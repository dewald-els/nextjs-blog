import css from "./contact-form.module.css";
import { useRef, useState } from "react";

export default function ContactForm() {

	const [contactResult, setContactResult] = useState();
	const emailRef = useRef();
	const nameRef = useRef();
	const messageRef = useRef();

	const onSubmit = (event) => {
		event.preventDefault();


		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const message = messageRef.current.value;

		fetch("/api/contact", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ name, email, message }),
		}).then(async (response) => {
			if (response.status > 299) {
				const json = await response.json();
				const { message } = json;
				throw new Error(message);
			}
			return response.json();
		})
			.then(response => {
				setContactResult(response.message);
			})
			.catch(error => {
				setContactResult(error.message);
			});
	};

	return (
		<section>
			<h2>Complete the form</h2>
			<p>Tell me how I can help you by completing the following form.</p>
			<form onSubmit={onSubmit}>
				<fieldset aria-label="Contact information">
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" placeholder="john.doe@mail.com" required ref={emailRef} />
					</div>

					<div className="form-group">
						<label htmlFor="name">Your name</label>
						<input type="text" id="name" placeholder="John Doe" required ref={nameRef} />
					</div>

					<div className="form-group">
						<label htmlFor="message">Your message</label>
						<textarea name="message" id="message" cols="30" rows="10" required ref={messageRef}></textarea>
					</div>
				</fieldset>
				<div>
					<button type="submit">Contact me</button>
				</div>
				{contactResult && <div>{contactResult}</div>}
			</form>
		</section>
	);
}