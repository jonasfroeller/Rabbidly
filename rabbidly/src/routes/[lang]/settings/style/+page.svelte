<script>
	// Components
	import Headline from '$component/Headline.svelte'
	import Settings from '$component/Settings.svelte'
</script>

<svelte:head>
	<meta name="keywords" content="settings,style" />

	<meta property="og:url" content="https://rabbidly.com/settings/style" />
	<meta property="og:title" content="style" />

	<title>Settings/Style</title>
</svelte:head>

<Headline style={'settings'} />
<Settings active={'style'} />
