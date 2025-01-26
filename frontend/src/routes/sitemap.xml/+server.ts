import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	return new Response(
		`<?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url><loc>https://tomas-michna.com</loc></url>
	  <url><loc>https://tomas-michna.com/blog</loc></url>
	  <url><loc>https://tomas-michna.com/blog/startup-life-count-to-five</loc></url>
    </urlset>`,
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
};
