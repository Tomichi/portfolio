import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	try {
		const response = await resolve(event, {
			transformPageChunk: ({ html }) => html
		});

		if (import.meta.env.NODE_ENV === 'production') {
			response.headers.set('Cache-Control', 'max-age=3600');
		}

		return response;
	} catch (error) {
		return new Response('Custom error page', { status: 404 });
	}
};
