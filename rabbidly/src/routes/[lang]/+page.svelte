<script>
	// /** @type {import('./$types').PageData} */
	// export let data // HAS TO BE NAMED "data"

	import ProductSectionHeadline from '$lib/components/ProductSectionHeadline.svelte'
	import Products from '$lib/components/Products.svelte'

	import { config } from '$store/styleConfig'
	import { productsFiltered } from '$store/products'
	import { products } from '$store/products'
	import { onMount } from 'svelte'
	import styleCfg from '$script/styleStorage'
	import productStore from '$script/productStorage'

	onMount(async () => {
		$config = await styleCfg.load()
		$productsFiltered = productStore.filteredProducts([...$products], $config)
	})
</script>

<svelte:head>
	<!-- < max. 10 -->
	<meta name="keywords" content="index,home,rabbit,rapid,rabbidly,onlineshop,cheap,darkmode,bilingual"/>

	<meta property="og:url" content="rabbidly.com" />
	<meta property="og:title" content="home" />

	<title>Home</title>
</svelte:head>

<ProductSectionHeadline />
<Products productsFiltered={$productsFiltered} />

