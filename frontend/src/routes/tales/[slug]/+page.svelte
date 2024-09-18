<script>
	import * as debug from '$lib/debug.js';
	import { config } from '$lib/utils.js';
	import axios from 'axios';
	import ChapterView from '../../../components/ChapterView.svelte';

	export let data;

	const { tale, canonLine } = data;

	let chapters = canonLine;
</script>

<div class="tale-view-container">
	<div class="tale-view">
		<div class="tale-info-container flex flex-row space-x-4">
			<div class="tale-image">
				<img class="h-auto max-w-md" src={debug.tale.img} alt={tale.title} />
			</div>
			<div class="tale-info flex-column">
				<h2 class="h2">{tale.title}</h2>
				<p class="tale-description max-w-prose text-base">
					{tale.description}
				</p>
				<span class="tale-author-container">
					<span>
						Author:
						<a href={`/users/${tale.authorId}`} class="anchor">{tale.authorId}</a>
					</span>
				</span>
			</div>
		</div>

		<div class="chapters-view-container">
			<div class="chapters-view">
				<h3 class="chapters-view-title">Chapters</h3>
				<ul>
					<li>
						{#each chapters as chapter, i (chapter.id)}
							{#if i > 0}
								<ChapterView
									bind:chapters
									chapterData={chapter}
									siblings={chapters[i - 1].nextChapters}
								/>
							{:else}
								<ChapterView chapterData={chapter} />
							{/if}
						{/each}
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
