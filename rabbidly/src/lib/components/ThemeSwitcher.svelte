<script>
	// @ts-nocheck

	// Svelte
	import { browser } from '$app/environment'
	import { onMount } from 'svelte'

	// Stores
	import { config } from '$store/styleConfig'

	// Scripts
	import styleCfg from '$script/styleStorage'

	onMount(async () => {
		$config = await styleCfg.load()
		checked = $config.theme == 'luxury' ? true : false
	})

	$: {
		if (browser) {
			window.matchMedia('prefers-color-scheme: dark') ? true : false
		}
	}

	function updateTheme() {
		$config.theme = $config.theme == 'luxury' ? 'bumblebee' : 'luxury'
		if (browser) {
			document.documentElement.setAttribute('data-theme', $config.theme)
			;[...document.getElementsByClassName('theme-toggle')].forEach((element) => {
				element.checked = checked
			})
		}
	}

	$: checked = false
</script>

<input
	role="switch"
	name="theme"
	bind:checked
	on:change={() => {
		updateTheme()
		styleCfg.save($config)
	}}
	type="checkbox"
	class="theme-toggle toggle h-12 w-16 rounded-lg border-primary bg-accent"
/>
