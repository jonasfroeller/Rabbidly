<script>
	// @ts-nocheck
	// Stores
	import { shoppingCart } from '$store/userData.js'

	// Svelte
	import { browser } from '$app/environment'

	// Translation
	import translation from '$translation/i18n-svelte'

	const removeItem = (product) => {
		for (let item of $shoppingCart) {
			if (item.id === product.id) {
				if (product.quantity > 1) {
					product.quantity -= 1
					$shoppingCart = $shoppingCart
				} else {
					$shoppingCart = $shoppingCart.filter((cartItem) => cartItem != product)
				}
			}
		}
	}

	const addItem = (product) => {
		for (let item of $shoppingCart) {
			if (item.id === product.id) {
				product.quantity += 1
				$shoppingCart = $shoppingCart
			}
		}
	}

	$: total = (() => {
		if (browser) {
			return $shoppingCart.reduce((sum, item) => sum + item.price * item.quantity, 0)
		}
	})()
</script>

<div>
	<strong>{$shoppingCart.reduce((sum, item) => sum + item.quantity, 0)}</strong>
	{$translation.Cart.products()} |
	<strong>{$shoppingCart.length}</strong>
	{$translation.Cart.different_products()} | {$translation.Cart.total_price()}: {total ?? 0}
</div>

<div id="shoppingCart">
	{#each $shoppingCart as item}
		{#if item.quantity > 0}
			<div class="shoppingCart-item">
				<img src={item.image} alt={item.name} />
				<div>
					{item.quantity}
					<button on:click={() => addItem(item)}>+</button>
					<button on:click={() => removeItem(item)}>-</button>
				</div>
				<p>{item.price * item.quantity} €</p>
			</div>
		{/if}
	{/each}
</div>
