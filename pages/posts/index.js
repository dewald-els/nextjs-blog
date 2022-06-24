import AllPosts from "../../components/posts/all-posts";
import Container from "../../components/container/container";
import { getAllPosts } from "../../utils/post-utils";
import PostsFilter from "../../components/posts/posts-filter/posts-filter";
import Head from "next/head";

export default function PostsPage(props) {

	const { posts = [] } = props;

	return (
		<>
			<Head>
				<meta name="description" content="All blog posts I've written about web development" />
				<title>Next Blog - All my posts</title>
			</Head>
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
