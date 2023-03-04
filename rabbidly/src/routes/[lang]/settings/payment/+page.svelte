<script>
  import ProductSectionHeadline from "$component/ProductSectionHeadline.svelte";
  import Settings from "$component/Settings.svelte";
</script>

<svelte:head>
  <meta name="keywords" content="settings,payment" />

  <meta property="og:url" content="rabbidly.com/settings/payment" />
  <meta property="og:title" content="payment" />

  <title>Settings/Payment</title>
</svelte:head>

<ProductSectionHeadline style={"settings"} />
<Settings active={"payment"} />

