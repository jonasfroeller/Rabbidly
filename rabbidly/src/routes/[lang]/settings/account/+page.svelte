<script>
  import ProductSectionHeadline from "$component/ProductSectionHeadline.svelte";
  import Settings from "$component/Settings.svelte";
</script>

<svelte:head>
  <meta name="keywords" content="settings,account" />

  <meta property="og:url" content="rabbidly.com/settings/account" />
  <meta property="og:title" content="settings" />

  <title>Settings/Account</title>
</svelte:head>

<ProductSectionHeadline style={"settings"} />
<Settings active={"account"} />


