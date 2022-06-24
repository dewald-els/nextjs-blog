import Container from "../components/container/container";
import ContactForm from "../components/forms/contact/contact-form";
import Head from "next/head";

export default function ContactPage() {
	return (
		<>
			<Head>
				<meta name="description" content="Send me a message with your thoughts" />
				<title>Next Blog - Contact me</title>
			</Head>
			<Container>
				<h1>Contact Page</h1>
				<ContactForm />
			</Container>
		</>
	);
}
