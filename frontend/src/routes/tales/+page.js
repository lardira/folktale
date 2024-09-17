import { config } from '$lib/utils.js';

export async function load({ fetch, params }) {
	// const taleId = params.slug
	const taleId = 2;

	const getTale = async () => {
		const res = await fetch(`${config.apiUrl}/tales/${taleId}`);
		return await res.json();
	};
	return {
		tale: await getTale()
	};
}
