import PostList from "../post-list/post-list";

export default function FeaturedPosts(props) {

	const { posts } = props;

	return (
		<section>
			<h4>Featured Posts</h4>
			<PostList posts={posts} />
		</section>
	);
}