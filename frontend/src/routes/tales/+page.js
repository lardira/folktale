import { config } from '$lib/utils.js';

export async function load({ fetch, params }) {
	const getTales = async () => {
		const res = await fetch(`${config.apiUrl}/tales/`);
		return await res.json();
	};

	return {
		tales: await getTales()
	};
}
