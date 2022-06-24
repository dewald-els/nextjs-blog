import AllPosts from "../../components/posts/all-posts";
import Container from "../../components/container/container";
import { getAllPosts } from "../../utils/post-utils";
import PostsFilter from "../../components/posts/posts-filter/posts-filter";

export default function PostsPage(props) {

	const { posts = [] } = props;

	return (
		<>
			<Container>
				<PostsFilter />
				<AllPosts posts={posts} />
			</Container>
		</>
	);
}

export async function getStaticProps() {

	const posts = getAllPosts();

	return {
		props: {
			posts,
		},
	};
}
