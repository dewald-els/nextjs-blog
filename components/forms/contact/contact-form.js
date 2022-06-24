import css from "./contact-form.module.css";
import { useRef, useState } from "react";
import { createMessage } from "./contact-api";
import Notification from "../../notification/notification";

export default function ContactForm() {

	const [contactResult, setContactResult] = useState();
	const [contactState, setContactState] = useState({
		title: "",
		status: "",
		message: "",
	});
	const formRef = useRef();
	const emailRef = useRef();
	const nameRef = useRef();
	const messageRef = useRef();

	const onSubmit = async (event) => {
		event.preventDefault();

		setContactState({
			title: "Sending!",
			message: "Message is sending...",
			status: "",
		});

		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const message = messageRef.current.value;


		const { error } = await createMessage(name, email, message);
		if (error !== null) {
			setContactState({
				title: "Error!",
				status: "error",
				message: error,
			});
		} else {
			formRef.current.reset();
			setContactState({
				title: "Success!",
				status: "success",
				message: "Successfully sent message!",
			});
		}
	};

	return (
		<section>
			<h2>Complete the form</h2>
			<p>Tell me how I can help you by completing the following form.</p>
			<form onSubmit={onSubmit} ref={formRef}>
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
				{contactState.title &&
					<Notification title={contactState.title} message={contactState.message} status={contactState.status} />
				}
			</form>
		</section>
	);
}