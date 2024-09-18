import { config } from '$lib/utils.js';

export async function load({ fetch, params }) {
	const getTale = async () => {
		const res = await fetch(`${config.apiUrl}/tales/${params.slug}`);
		return await res.json();
	};

	const getCanonLine = async () => {
		let res = await fetch(`${config.apiUrl}/tales/${params.slug}/chapters/first`);
		const firstChapter = await res.json();

		res = await fetch(`${config.apiUrl}/tales/${params.slug}/chapters/from/${firstChapter.id}`);
		return await res.json();
	};

	return {
		tale: await getTale(),
		canonLine: await getCanonLine()
	};
}
