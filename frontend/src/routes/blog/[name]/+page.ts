import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { blogPosts } from '$lib/data/blog-posts';

export const load: PageLoad = async ({ params }) => {
	const post = blogPosts.find((p) => p.slug === params.name);

	if (!post) {
		throw error(404, {
			message: 'Blog post not found'
		});
	}

	return {
		post
	};
};
