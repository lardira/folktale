<script>
	import _ from 'lodash';
	import MdiArrowLeftBold from '~icons/mdi/arrow-left-bold';
	import MdiArrowRightBold from '~icons/mdi/arrow-right-bold';

	export let chapterData;
	export let siblings = null;

	const { authorId, text } = chapterData;

	let hasLeftSibling = false;
	let hasRightSibling = false;

	if (siblings && siblings.length > 1) {
		const indexInArray = _.findIndex(siblings, (ch) => ch.id === chapterData.id);

		hasLeftSibling = indexInArray > 0;
		hasRightSibling = indexInArray < siblings.length - 1;
	}
</script>

<div class="chapter-view-container">
	<div
		class="chapter-view-container-contents grow-1 flex basis-0 flex-row items-center justify-center basis-0 grow-1"
	>
		{#if hasLeftSibling}
			<MdiArrowLeftBold class="cursor-pointer"></MdiArrowLeftBold>
		{/if}
		<div class="chapter-view m-5 border p-2">
			<span class="h4">{text}</span>
			<br />

			<a class="h7 anchor" href={`/users/${authorId}`}>{authorId}</a>
			<textarea class="textarea" rows="1" placeholder="Continue from here..." />
		</div>
		{#if hasRightSibling}
			<MdiArrowRightBold class="cursor-pointer"></MdiArrowRightBold>
		{/if}
	</div>
</div>
