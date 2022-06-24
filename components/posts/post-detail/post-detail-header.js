import Image from "next/image";

export default function PostDetailHeader(props) {

	const { title, image, slug } = props;

	const imagePath = `/images/posts/${slug}/${image}`;

	return (
		<header>
			<h1>{title}</h1>
			<Image src={imagePath} alt={title} width={200} height={150} />
		</header>
	);
}