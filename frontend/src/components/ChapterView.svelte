<script>
	import _ from 'lodash';
	import axios from 'axios';
	import { config } from '$lib/utils';
	import { user } from '$lib/debug';
	import MdiArrowLeftBold from '~icons/mdi/arrow-left-bold';
	import MdiArrowRightBold from '~icons/mdi/arrow-right-bold';
	import MdiBookmarkCheckOutline from '~icons/mdi/bookmark-check-outline';
	import { invalidateAll } from '$app/navigation';

	export let chapterData;
	export let siblings = null;
	export let chapters = [];

	const { authorId, text, taleId, position } = chapterData;

	let hasLeftSibling = false;
	let hasRightSibling = false;

	const indexInArray = _.findIndex(siblings, (ch) => ch.id === chapterData.id);

	if (siblings && siblings.length > 1) {
		hasLeftSibling = indexInArray > 0;
		hasRightSibling = indexInArray < siblings.length - 1;
	}

	const onPreviousSibling = async () => {
		const prevSibling = siblings.at(indexInArray - 1);
		const prevSiblingLineResponse = await axios.get(
			`${config.apiUrl}/tales/${taleId}/chapters/from/${prevSibling.id}`
		);

		if (prevSiblingLineResponse) {
			chapters = _.take(chapters, position).concat(prevSiblingLineResponse.data);
		}
	};

	const onNextSibling = async () => {
		const nextSibling = siblings.at(indexInArray + 1);
		const nextSiblingLineResponse = await axios.get(
			`${config.apiUrl}/tales/${taleId}/chapters/from/${nextSibling.id}`
		);

		if (nextSiblingLineResponse) {
			chapters = _.take(chapters, position).concat(nextSiblingLineResponse.data);
		}
	};

	const onChapterPublishSubmit = async (e) => {
		const formData = new FormData(e.target);

		const newChapterResponse = await axios.post(`${config.apiUrl}/tales/${taleId}/chapters`, {
			text: formData.get('publish-text'),
			authorId: user.id,
			previousChapterId: chapterData.id
		});

		if (newChapterResponse) {
			chapters = _.take(chapters, newChapterResponse.data.position).concat([
				newChapterResponse.data
			]);
		}
	};
</script>

<div class="chapter-view-container">
	<div
		class="chapter-view-container-contents grow-1 flex basis-0 basis-0 flex-row flex-nowrap items-center justify-center"
	>
		{#if hasLeftSibling}
			<button class="next-sibling-button" on:click={onPreviousSibling}>
				<MdiArrowLeftBold class="cursor-pointer"></MdiArrowLeftBold>
			</button>
		{/if}
		<div class="chapter-view m-5 min-w-[50vw] border p-2">
			<span class="h4">{text}</span>
			<br />

			<a class="h7 anchor" href={`/users/${authorId}`}>{authorId}</a>
			<form
				action="post"
				on:submit|preventDefault={onChapterPublishSubmit}
				class="chapter-publish-form flex flex-row"
			>
				<textarea
					name="publish-text"
					class="textarea"
					rows="1"
					placeholder="Continue from here..."
				/>
				<button class="chapter-publish-button variant-filled-primary btn-icon ml-2" type="submit"
					><MdiBookmarkCheckOutline /></button
				>
			</form>

			<!-- <button>Publish</button> -->
		</div>
		{#if hasRightSibling}
			<button class="next-sibling-button" on:click={onNextSibling}>
				<MdiArrowRightBold class="cursor-pointer"></MdiArrowRightBold>
			</button>
		{/if}
	</div>
</div>
