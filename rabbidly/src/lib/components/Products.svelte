<script>
	// @ts-nocheck
	// Components
	import Product from '$component/Product.svelte'

	// Stores
	import { products } from '$store/products'

	export let productsFiltered = $products
</script>

<section class="pb-4">
	<div class="grid gap-4 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1">
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
