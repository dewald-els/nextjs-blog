import PostList from "./post-list/post-list";

export default function AllPosts(props) {
	const { posts } = props;
	return (
		<section>
			<h4>All posts</h4>
			<PostList posts={posts} />
		</section>
	);
}