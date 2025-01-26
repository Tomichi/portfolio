import type { PageLoad } from './$types';
import { blogPosts } from '$lib/data/blog-posts';

export const load: PageLoad = async () => {
	return {
		posts: blogPosts
	};
};
