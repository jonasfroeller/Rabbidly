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
		return productsFiltered
	}
}
