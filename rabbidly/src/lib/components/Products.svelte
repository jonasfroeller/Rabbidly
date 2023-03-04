<script>
	// @ts-nocheck
	import Product from '$component/Product.svelte'
	import { products } from '$store/products'

	export let productsFiltered = $products

	/* 	if (browser) {
		const grid = document.querySelector('.grid')
		const cardTemplate = document.getElementById('card-template')
		for (let i = 0; i < 10; i++) {
			grid.append(cardTemplate.content.cloneNode(true))
		}

		grid.innerHTML = ''
		[...posts].forEach((post) => {
			const div = cardTemplate.content.cloneNode(true)
			div.querySelector('[data-title]').textContent = post.title
			div.querySelector('[data-body]').textContent = post.body
			grid.append(div)
		})
	} */
</script>

<section class="pb-4">
	<div class="grid gap-4 lg:grid-cols-3 md:lg:grid-cols-2 sm:md:lg:grid-cols-1">
		{#each productsFiltered as product}
			<Product
				id={product.id}
				rating={product.rating}
				price={product.price}
				saved={product.saved}
				name={product.name}
				category={product.category}
				images={product.images}
			/>
		{/each}
	</div>
</section>

<style>
	/* .grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		padding: 1rem;
	} */

	/* .card {
		background-color: white;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
		padding: 16px;
		border-radius: 4px;
	}

	.header {
		margin-bottom: 1rem;
		display: flex;
		align-items: center;
	}

	.header-img {
		width: 50px;
		height: 50px;
		object-fit: cover;
		border-radius: 100%;
		margin-right: 1rem;
		flex-shrink: 0;
	}

	.title {
		font-weight: bold;
		font-size: 1.25rem;
		text-transform: capitalize;
		word-wrap: none;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		flex-grow: 1;
	} */
</style>
