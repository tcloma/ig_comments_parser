<script lang="ts">
	import { clean } from './utils/parsers'
	let value: string = ''
</script>

<main class="flex flex-col gap-2 items-center h-screen p-2">
	<header class="text-center">
		<h1 class="font-bold text-xl">Instagram Comments Parser</h1>
		<h3 class="text-gray-600">Paste comments below:</h3>
	</header>
	<textarea class="border-2 border-gray-400 rounded-md p-2 w-2/3 h-2/3" bind:value />
	<button
		class="bg-black text-white w-2/3 rounded-md shadow-md p-2 font-bold uppercase"
		on:click={() => (value = clean(value).join('\n'))}>Parse</button
	>
</main>
