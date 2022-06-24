import Container from "../../components/container/container";
import PostDetail from "../../components/posts/post-detail";
import { getFeaturedPosts, getPostContent } from "../../utils/post-utils";

export default function PostDetailPage(props) {
	const { post } = props;

	if (!post) { // because fallback is true and not blocked
		return <p>Loading Post...</p>;
	}

	return (
		<>
			<Container>
				<PostDetail post={post} />
			</Container>
		</>
	);
}

export async function getStaticPaths() {

	const featuredPosts = getFeaturedPosts();

	const paths = featuredPosts.map((post) => ({
		params: {
			slug: post.slug,
		},
	}));

	return {
		fallback: true,
		paths,
	};
}

export async function getStaticProps(context) {
	const { params } = context;
	const { slug } = params;
	const post = getPostContent(slug);

	return {
		revalidate: 600,
		props: {
			post,
		},
	};
}
