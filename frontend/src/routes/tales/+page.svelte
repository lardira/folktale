<script>
	import * as debug from '$lib/debug.js';
	import ChapterView from '../../components/ChapterView.svelte';

	export let data;

	const { tales } = data;
</script>

<div class="tales-container">
	{JSON.stringify(tales)}
</div>
