<script>
	// @ts-nocheck
	/** @type {import('./$types').PageData} */
	export let data

	// Translation
	import { locale } from '$translation/i18n-svelte'

	// Components
	import Headline from '$component/Headline.svelte'
	import Products from '$component/Products.svelte'
	import ProductInfo from '$component/ProductInfo.svelte'

	// Svelte
	import { base } from '$app/paths'

	// Stores
	import { products } from '$store/products'

	$: hrefBase = `${base}/${$locale}`

	$: productsCopy = [...$products]

	function loadProducts() {
		let filteredProducts = [...productsCopy]
		filteredProducts.splice(getCurrentProductIndex(), 1)
		return filteredProducts
	}

	function getCurrentProductIndex() {
		let currentProduct = getCurrentProduct()
		let displayedIndex = productsCopy.indexOf(currentProduct)
		return displayedIndex
	}

	function getCurrentProduct() {
		let currentProduct = productsCopy.find(
			({ id, category }) => id == data?.id && category == data?.category
		)
		return currentProduct
	}

	function getPreviousProduct() {
		let product = getCurrentProduct()
		let displayedIndex = productsCopy.indexOf(product)
		let modifiedIndex = displayedIndex - 1
		let previous = null

		if (modifiedIndex > -1) {
			previous = `${hrefBase}/product/${productsCopy[modifiedIndex]?.category}/${productsCopy[modifiedIndex]?.id}`
		} else {
			previous = `${hrefBase}/product/${productsCopy[productsCopy?.length - 1]?.category}/${
				productsCopy[productsCopy?.length - 1]?.id
			}`
		}

		console.log('previous: ', previous)

		return previous
	}

	function getNextProduct() {
		let product = getCurrentProduct()
		let displayedIndex = productsCopy.indexOf(product)
		let modifiedIndex = displayedIndex + 1
		let next = null

		if (modifiedIndex < productsCopy.length) {
			next = `${hrefBase}/product/${productsCopy[modifiedIndex]?.category}/${productsCopy[modifiedIndex]?.id}`
		} else {
			next = `${hrefBase}/product/${productsCopy[0]?.category}/${productsCopy[0]?.id}`
		}

		console.log('next: ', next)

		return next
	}
</script>

<svelte:head>
	<meta name="description" content="{getCurrentProduct().content ?? ''}..." />
	<meta name="keywords" content="product,{data?.category},{data?.id}" />

	<meta property="og:url" content="https://rabbidly.com/product/{data?.category}/{data?.id}" />
	<meta property="og:title" content="product/{data?.category}/{data?.id}" />
	<meta property="og:image" content={getCurrentProduct().images[0] ?? ''} />
	<meta property="og:description" content="{getCurrentProduct().content ?? ''}..." />

	<title>product/{data?.category}/{data?.id}</title>
</svelte:head>

{#key data?.id}
	<Headline style={'single'} prev={getPreviousProduct()} next={getNextProduct()} />
{/key}

{#key data?.id}
	<ProductInfo product={getCurrentProduct()} />
	<Products productsFiltered={loadProducts()} />
{/key}
