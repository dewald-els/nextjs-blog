import { MongoClient, ServerApiVersion } from "mongodb";

export default async function handler(req, res) {

	if (req.method !== "POST") {
		return res.status(500).json({ message: "Only POST allowed to /api/contact." });
	}

	const { email, name, message } = req.body;

	if (!email || !email.includes("@") ||
		!name || name.trim() === "" ||
		!message || message.trim() === "") {
		return res.status(422).json({ message: "Please complete all fields." });
	}

	let client;
	const mongoConnect = process.env.MONGO_CONNECT_STRING;

	try {
		client = await MongoClient.connect(mongoConnect, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			serverApi: ServerApiVersion.v1,
		});
		const db = client.db();

		const result = await db.collection("messages").insertOne({
			email, name, message,
		});

		await client.close();

		return res.status(201).json({ message: "Thanks! Message received!" });

	} catch (error) {

		if (client) {
			client.close();
		}

		return res.status(500).json({ message: "Could not connect to the database.", detail: error.message });
	}
}

async function handlePost(req, res) {


}