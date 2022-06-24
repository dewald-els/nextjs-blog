import PostDetailHeader from "./post-detail-header";
import PostDetailContent from "./post-detail-content";

export default function PostDetail(props) {

	if (!props.post) {
		throw new Error("'post' prop not provided to PostDetail component");
	}

	const { title, image, slug, content } = props.post;

	return (
		<article>
			<PostDetailHeader title={title} image={image} slug={slug} />
			<PostDetailContent content={content} slug={slug} />
		</article>
	);
}