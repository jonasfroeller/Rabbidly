<script>
	// @ts-nocheck
	/** @type {import('./$types').PageData} */
	export let data

	import ProductSectionHeadline from '$component/ProductSectionHeadline.svelte'
	import Products from '$component/Products.svelte'
	import ProductInfo from '$component/ProductInfo.svelte'

	import { onMount } from 'svelte'
	import { browser } from '$app/environment'
	import { products } from '$store/products'

	$: productsCopy = [...$products]
	let splitPathName = null

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
		// make me work without reload -> take url instead of data params
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
			previous = `../${productsCopy[modifiedIndex]?.category}/${productsCopy[modifiedIndex]?.id}`
		} else {
			previous = `../${productsCopy[productsCopy?.length - 1]?.category}/${
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
			next = `../${productsCopy[modifiedIndex]?.category}/${productsCopy[modifiedIndex]?.id}`
		} else {
			next = `../${productsCopy[0]?.category}/${productsCopy[0]?.id}`
		}

		console.log('next: ', next)

		return next
	}

	onMount(async () => {
		splitPathName = window.location.pathname.split('/')
	})

	if (browser) {
		console.log(`product/${data?.category}/${data?.id}`)
	}
</script>

<svelte:head>
	<meta name="description" content="{getCurrentProduct().content ?? ''}..." />
	<meta name="keywords" content="product,{data?.category},{data?.id}" />

	<meta property="og:url" content="rabbidly.com/product/{data?.category}/{data?.id}" />
	<meta property="og:title" content="product/{data?.category}/{data?.id}" />
	<meta property="og:image" content={getCurrentProduct().images[0] ?? ''} />
	<meta property="og:description" content="{getCurrentProduct().content ?? ''}..." />

	<title>product/{data?.category}/{data?.id}</title>
</svelte:head>

<ProductSectionHeadline style={'single'} prev={getPreviousProduct()} next={getNextProduct()} />
<ProductInfo product={getCurrentProduct()} />
<Products productsFiltered={loadProducts()} />
