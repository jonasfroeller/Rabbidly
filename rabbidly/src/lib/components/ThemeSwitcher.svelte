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
		checked = $config.theme == 'night' ? true : false
	})

	$: checked = false

	$: {
		if (browser) {
			;[...document.getElementsByClassName('theme-toggle')].forEach((element) => {
				element.checked = checked
			})
		}
	}

	$: {
		if (browser) {
			window.matchMedia('prefers-color-scheme: dark') ? true : false
		}
	}

	function updateTheme() {
		$config.theme = $config.theme == 'luxury' ? 'bumblebee' : 'luxury'
		if (browser) {
			document.documentElement.setAttribute('data-theme', $config.theme)
		}
	}
</script>

<input
	bind:checked
	role="switch"
	name="theme"
	on:change={() => {
		updateTheme()
		styleCfg.save($config)
	}}
	type="checkbox"
	class="toggle h-12 w-16 rounded-lg border-primary bg-accent"
/>
