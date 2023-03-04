<script>
	// @ts-nocheck
	// Fonts/Icons
	import 'iconify-icon'
	// GlobalCSS/TailwindCSS/DaisyUI
	import '$main/app.css'

	import Header from '$component/Header.svelte'
	import Main from '$component/Main.svelte'
	import Footer from '$component/Footer.svelte'

	import Cookies from '$lib/components/Cookies.svelte'

	import { setLocale } from '$translation/i18n-svelte'
	import { onMount } from 'svelte'

	/** @type { import('./$types').LayoutData } */
	export let data
	setLocale(data.locale)

	import { locale } from '$translation/i18n-svelte'
	$: lang = $locale

	onMount(async () => {
		console.log(new Date().toLocaleString()) // hrefBase = "/" + window.location.pathname.split("/")[1] + "/";
	})
</script>

<Header hrefBase={`/${lang}/`} />

<Main>
	<slot />
	<Cookies />
</Main>

<Footer hrefBase={`/${lang}/`} />
