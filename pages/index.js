import Hero from "../components/hero/hero";
import FeaturedPosts from "../components/posts/featured-posts/featured-posts";
import Container from "../components/container/container";
import { getFeaturedPosts } from "../utils/post-utils";

export default function HomePage(props) {

	const { posts = [] } = props;

	return (
		<>
			<Hero />
			<Container>
				<FeaturedPosts posts={posts} />
			</Container>
		</>
	);
}

export async function getStaticProps() {

	const posts = getFeaturedPosts();

	return {
		props: {
			posts,
		},
	};
}
