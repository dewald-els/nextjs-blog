import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function PostDetailContent(props) {
	const { content, slug } = props;

	const customComponents = {
		code(code) {
			console.log(code);
			const { className, children } = code;
			return (
				<SyntaxHighlighter showLineNumbers language={className.replace(/language-/, "")} children={children} style={atomDark} />
			);
		},
		p(paragraph) {
			const { node } = paragraph;
			const [firstChild] = node.children;
			if (firstChild.tagName === "img") {
				const { properties } = firstChild;
				return (
					<div>
						<Image src={properties.src} alt={properties.alt} width={600} height={340} objectFit="fill" />
					</div>
				);
			}
			return <p>{paragraph.children}</p>;
		},
	};

	return (
		<div>
			<ReactMarkdown components={customComponents}>{content}</ReactMarkdown>
		</div>
	);
}