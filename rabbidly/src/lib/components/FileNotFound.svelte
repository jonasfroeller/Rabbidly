<script>
	// @ts-nocheck
	// Translation
	import translation from '$translation/i18n-svelte'

	// Svelte
	import { browser } from '$app/environment'

	export let code = 404
	export let path = null

	if (browser && path == null) {
		path = window.location.pathname
	}

	let currentLang = path.split('/')[1]
</script>

<main class="flex h-screen w-full justify-center items-center flex-col box-border">
	<h1 class="text-9xl">{$translation.FileNotFound.error({ error: code })}</h1>
	<div class="flex justify-center flex-col">
		<h2 class="text-4xl text-center">
			<slot>"{path}"</slot>
		</h2>
		<a href="/{currentLang}">
			<button class="btn w-fit-content h-min p-5 mt-4 rounded-full underline hover:no-underline">
				<h3 class="text-lg">
					{$translation.FileNotFound.action()}
				</h3>
			</button>
		</a>
	</div>
</main>
