// @ts-nocheck
export default class productStore {
	static filteredProducts(products, config) {
		let productsFiltered = null
		if (config.selectedCategory === 'all') {
			productsFiltered = products
		} else {
			productsFiltered = products.filter(
				(product) => product.category === config.selectedCategory
			)
		}

		if (config.searchInput !== '') {
			productsFiltered = productsFiltered.filter(
				(product) => product.name.toLowerCase().includes(config.searchInput.toLowerCase())
			)
		}

		return productsFiltered
	}
}
