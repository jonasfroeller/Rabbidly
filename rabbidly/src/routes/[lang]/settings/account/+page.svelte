<script>
	import Headline from '$component/Headline.svelte'
	import Settings from '$component/Settings.svelte'
</script>

<svelte:head>
	<meta name="keywords" content="settings,account" />

	<meta property="og:url" content="rabbidly.com/settings/account" />
	<meta property="og:title" content="settings" />

	<title>Settings/Account</title>
</svelte:head>

<Headline style={'settings'} />
<Settings active={'account'} />
