<script>
	// @ts-nocheck
	// Stores
	import { shoppingCart } from '$store/userData.js'
	import CartManagement from './CartManagement.svelte'
	let ManageCart

	// Svelte
	import { browser } from '$app/environment'

	// Translation
	import translation from '$translation/i18n-svelte'

	$: total = (() => {
		if (browser) {
			return $shoppingCart.reduce((sum, item) => sum + item.price, 0)
		}
	})()
</script>

<CartManagement bind:this={ManageCart} />

<div>
	<strong>{$shoppingCart.reduce((sum, item) => (sum += 1), 0)}</strong>
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
					<button on:click={() => ManageCart.addItem(item)}>+</button>
					<button on:click={() => ManageCart.removeItem(item)}>-</button>
				</div>
				<p>{item.price * item.quantity} €</p>
			</div>
		{/if}
	{/each}
</div>
