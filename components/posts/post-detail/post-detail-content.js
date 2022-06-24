import ReactMarkdown from "react-markdown";

export default function PostDetailContent(props) {

	const { content } = props;
	return (
		<div>
			<ReactMarkdown>{content}</ReactMarkdown>
		</div>
	);
}