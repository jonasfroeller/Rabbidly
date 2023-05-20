<script>
	// Components
	import Headline from '$lib/components/Headline.svelte'
	import Products from '$lib/components/Products.svelte'

	// Stores
	import { config } from '$store/styleConfig'
	import { productsFiltered } from '$store/products'
	import { products } from '$store/products'

	// Svelte
	import { onMount } from 'svelte'

	// Scripts
	import styleCfg from '$script/styleStorage'
	import productStore from '$script/productStorage'

	onMount(async () => {
		$config = await styleCfg.load()
		$productsFiltered = productStore.filteredProducts([...$products], $config)
	})
</script>

<svelte:head>
	<!-- < max. 10 -->
	<meta
		name="keywords"
		content="index,home,rabbit,rapid,rabbidly,onlineshop,cheap,darkmode,bilingual"
	/>

	<meta property="og:url" content="https://rabbidly.com" />
	<meta property="og:title" content="home" />

	<title>Home</title>
</svelte:head>

<Headline />
<Products productsFiltered={$productsFiltered} />
