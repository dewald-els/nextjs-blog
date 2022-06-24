import css from "./post-list.module.css";
import PostListItem from "./posts-list-item";

export default function PostList(props) {
	const { posts = [] } = props;
	return (
		<ul className={css.PostList}>
			{posts.map((post) => <PostListItem key={post.slug} post={post} />)}
		</ul>
	);
}
