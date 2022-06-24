import fs from "fs";
import * as path from "path";
import matter from "gray-matter";

const postPath = path.join(process.cwd(), "content/posts");

export function getPostContent(fileName) {
	const slug = fileName.replace(/\.md$/, ""); // Remove file extension
	const filePath = path.join(postPath, `${slug}.md`);
	const fileContent = fs.readFileSync(filePath, "utf-8");
	const { data, content } = matter(fileContent.toString());
	return {
		slug,
		...data,
		content,
	};
}

function fileNameToPost(fileName) {
	return getPostContent(fileName);
}

function sortPostsByDate(posts = []) {
	return posts.sort((a, b) => {
		return a.date > b.date ? -1 : 1;
	});
}

function filterFeaturedPosts(posts = []) {
	return posts.filter(p => Boolean(p.isFeatured));
}

export function getPostFiles() {
	return fs.readdirSync(postPath);
}

export function getAllPosts() {
	const files = getPostFiles();
	return sortPostsByDate(files.map(fileNameToPost));
}

export function getFeaturedPosts() {
	const posts = getAllPosts();
	return filterFeaturedPosts(posts);
}