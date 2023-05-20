<script>
	// @ts-nocheck
	export let id
	export let rating
	export let price
	export let name
	export let category
	export let images
	export let saved

	// Translation
	import translation from '$translation/i18n-svelte'
	import { locale } from '$translation/i18n-svelte'

	// Components
	import CartManagement from './CartManagement.svelte'
	let ManageCart

	// Svelte
	import { dev } from '$app/environment'
	import { base } from '$app/paths'

	let target = '_self'

	$: product = {
		id,
		rating,
		price,
		name,
		category,
		images,
		saved
	}

	$: hrefBase = `${base}/${$locale}/`
	$: link = `${hrefBase}product/${product.category}/${product.id}`

	/* $: bookmarkState = product.saved ? 'filled' : 'unfilled'
	const bookmarkProduct = (element) => {
		element.icon == 'unfilled' ? (bookmarkState = 'filled') : (bookmarkState = 'unfilled')
	} */
</script>

<CartManagement bind:this={ManageCart} />

<div class="p-4 w-full border-2 rounded-3xl">
	<div class="text-block">
		<div class="flex justify-between">
			<h1 class="text-3xl flex items-baseline text-primary flex-wrap">
				<a href={link}>{product.name}</a>
				<span class="ml-1 text-gray-400 text-base">{product.category.toUpperCase()}</span>
				<a
					class="ml-2 text-base flex items-center"
					href={link}
					target="_blank"
					rel="noreferrer"
				>
					<!-- <Fa icon={faArrowUpRightFromSquare} /> -->
				</a>
			</h1>
			<div class="flex gap-2">
				<!-- <Fa icon={faArrowUpFromBracket} /> -->
				<!-- <Fa on:click={() => bookmarkProduct(this)} bind:icon={bookmarkState} /> -->
			</div>
		</div>
		<div class="flex flex-col">
			<div class="product.rating">
				<div class="flex items-center">
					<svg
						aria-hidden="true"
						class="w-5 h-5 {product.rating > 0 ? 'text-yellow-400' : ''}"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>First star</title>
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
						/>
					</svg>
					<svg
						aria-hidden="true"
						class="w-5 h-5 {product.rating > 1 ? 'text-yellow-400' : ''}"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Second star</title>
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
						/>
					</svg>
					<svg
						aria-hidden="true"
						class="w-5 h-5 {product.rating > 2 ? 'text-yellow-400' : ''}"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Third star</title>
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
						/>
					</svg>
					<svg
						aria-hidden="true"
						class="w-5 h-5 {product.rating > 3 ? 'text-yellow-400' : ''}"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Fourth star</title>
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
						/>
					</svg>
					<svg
						aria-hidden="true"
						class="w-5 h-5 {product.rating > 4 ? 'text-yellow-400' : ''}"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Fifth star</title>
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
						/>
					</svg>
					<p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
						{product.rating}/5
					</p>
				</div>
			</div>
			<div class="flex justify-between mt-2 mb-2 flex-wrap">
				<button
					on:click={ManageCart.addToCart(product)}
					type="button"
					class="font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 btn btn-secondary"
				>
					<svg
						aria-hidden="true"
						class="mr-2 -ml-1 w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
						/>
					</svg>
					{$translation.ProductInfo.buy_now()}
				</button>
				<div class="product.price text-3xl">€{product.price.toFixed(2)}</div>
			</div>
		</div>
		<div class="carousel-box w-full h-full relative">
			<div product.id="animation-carousel" class="relative" data-carousel="static">
				<!-- Carousel wrapper -->
				<div class="relative overflow-hidden rounded-3xl full h-full md:h-96">
					<!-- Item 1 -->
					{#each product.images as image}
						<div class="duration-200 ease-linear" data-carousel-item>
							<img
								src={image}
								class="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-3xl scale-75"
								alt={product.name}
							/>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
