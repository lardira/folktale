<script>
	export let chapterData;

  console.log({chapterData})
</script>

<div class="chapter-view">
	<span class="h4">{JSON.stringify(chapterData)}</span>
  <textarea class="textarea" rows="4" placeholder="Continue from here..." />
</div>
