import Hero from "../components/hero/hero";
import FeaturedPosts from "../components/posts/featured-posts/featured-posts";
import Container from "../components/container/container";
import { getFeaturedPosts } from "../utils/post-utils";
import Head from "next/head";

export default function HomePage(props) {

	const { posts = [] } = props;

	return (
		<>
			<Head>
				<meta name="description" content="I post about my learning journey for web development." />
				<title>Next Blog - Welcome to my Blog</title>
			</Head>
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
