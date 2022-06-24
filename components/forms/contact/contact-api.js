export async function createMessage(name, email, message) {
	try {
		const response = await fetch("/api/contact", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ name, email, message }),
		});

		const json = await response.json();

		if (response.status > 299) {
			const { message } = json;
			throw new Error(message);
		}

		return { data: json.message, error: null };
	} catch (error) {
		return { data: null, error: error.message || "Could not create the message." };
	}
}