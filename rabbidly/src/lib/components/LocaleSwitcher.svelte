<script>
	// @ts-nocheck
	/* Translation Essentials */
	import { browser } from '$app/environment'
	import { page } from '$app/stores'
	import { setLocale, locale } from '$translation/i18n-svelte'
	import { locales } from '$translation/i18n-util'
	import { loadLocaleAsync } from '$translation/i18n-util.async'
	import { replaceLocaleInUrl } from '$main/utils'

	/* Data Imports */
	import { config } from '$store/styleConfig' /* old: $lib/Stores/styleConfig */
	import styleCfg from '$script/styleStorage'
	import de from '$image/de.png' /* old: $lib/Assets/Images/de.png */
	import en from '$image/en.png'

	$: $config.selectedLAN = $locale

	const languages = {
		de: de, 
		en: en
	}

	$: currentFlag = languages[$config.selectedLAN]

	/**
	 * @param { import('$translation/i18n-types').Locales } newLocale
	 * @param { boolean } updateHistoryState
	 * @return { Promise<void> }
	 */
	const switchLocale = async (newLocale, updateHistoryState = true) => {
		if (!newLocale || $locale === newLocale) return

		// load new dictionary from server
		await loadLocaleAsync(newLocale)

		// select locale
		setLocale(newLocale)

		// update `lang` attribute
		document.querySelector('html').setAttribute('lang', newLocale)

		if (updateHistoryState) {
			// update url to reflect locale changes
			history.pushState({ locale: newLocale }, '', replaceLocaleInUrl(location, newLocale))
		}
	}

	// update locale when navigating via browser back/forward buttons
	/** @param { PopStateEvent } event */
	const handlePopStateEvent = async ({ state }) => switchLocale(state.locale, false)

	// update locale when page store changes
	$: if (browser) {
		const lang = /** @type { import('$translation/i18n-types').Locales } page.params.lang */ (
			$page.params.lang
		)
		switchLocale(lang, false)
		history.replaceState(
			{ ...history.state, locale: lang },
			'',
			replaceLocaleInUrl(location, lang)
		)
	}
</script>

<svelte:window on:popstate={handlePopStateEvent} />

<!-- https://countryflagsapi.com/png/{selectedLAN} -->
<div class="h-[3.5rem] w-min flex justify-between">
	<select
		bind:value={$config.selectedLAN}
		class:active={$config.selectedLAN === $locale}
		on:change={() => {
			switchLocale($config.selectedLAN)
			styleCfg.save($config)
		}}
		class="rounded-l-[7.5rem] bg-base-100 h-full border-2 border-primary select select-primary focus:outline-none"
		name="language"
	>
		{#each locales as l}
			<option value={l}>{l.toUpperCase()}</option>
		{/each}
	</select>
	<div
		style="background-image: 
			url({currentFlag});"
		class="w-[3.5rem] h-[3.5rem] bg-no-repeat bg-cover rounded-r-[7.5rem]"
	/>
</div>
