import Link from "next/link";
import Image from "next/image";
import css from "./post-list-item.module.css";

export default function PostListItem(props) {
	if (!props.post) {
		throw new Error("Did not find 'post' on PostListItem props");
	}

	const { title, image, excerpt, date, slug } = props.post;

	const formattedDate = new Date(date).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const imagePath = `/images/posts/${slug}/${image}`;
	const linkPath = `/posts/${slug}`;

	return (
		<li className={css.PostListItem}>
			<Link href={linkPath}>
				<a>
					<div className={css.PostListItem__Image}>
						<Image src={imagePath} alt={title} width={300} height={200} objectFit="fill" />
					</div>
					<div className={css.PostListItem__Content}>
						<h3>{title}</h3>
						<time>{formattedDate}</time>
						<p>{excerpt}</p>
					</div>
				</a>
			</Link>
		</li>

	);
}