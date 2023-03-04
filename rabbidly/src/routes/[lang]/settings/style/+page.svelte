<script>
  import ProductSectionHeadline from "$component/ProductSectionHeadline.svelte";
  import Settings from "$component/Settings.svelte";
</script>

<svelte:head>
  <meta name="keywords" content="settings,style" />

  <meta property="og:url" content="rabbidly.com/settings/style" />
  <meta property="og:title" content="style" />

  <title>Settings/Style</title>
</svelte:head>

<ProductSectionHeadline style={"settings"} />
<Settings active={"style"} />
