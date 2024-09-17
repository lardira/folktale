<script>
	import * as debug from '$lib/debug.js';
	import ChapterView from '../../components/ChapterView.svelte';

	export let data;

	const { tale, chapters } = data;

	let chapterByPosition = [];
	for (let i = 0; i < chapters.length; i++) {
		const { position } = chapters[i];
		if (!chapterByPosition.at(position)) {
			chapterByPosition.splice(position, 0, []);
		}

		chapterByPosition[position].push(chapters[i]);
	}

	if (!tale) throw Error('not found');
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
						<a href="/" class="anchor">{tale.authorId}</a>
					</span>
				</span>
			</div>
		</div>

		<div class="chapters-view-container">
			<div class="chapters-view">
				<h3 class="chapters-view-title">Chapters</h3>
				<ul>
					{#each chapterByPosition as data}
						<li class="chapter-view-container m-4">
							<ChapterView chapterData={data}></ChapterView>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
