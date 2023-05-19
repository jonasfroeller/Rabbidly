<script>
	// Stores
	import { shoppingCart } from '$store/userData.js'

	export const removeItem = (product) => {
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

	export const addItem = (product) => {
		for (let item of $shoppingCart) {
			if (item.id === product.id) {
				product.quantity += 1
				$shoppingCart = $shoppingCart
			}
		}
	}
</script>
