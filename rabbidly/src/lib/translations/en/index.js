// @ts-check

/**
 * @typedef { import('../i18n-types').Translation } Translation
 */

/** @type { Translation } */
const en = {
	global: {
		languages: {
			german: 'German',	
			english: 'English'
		},
		Button: {
			reset_default: 'Default',
			edit: 'Edit'
		}
	},
	ProductInfo: {
		buy_now: 'Buy Now',
	},
	Cart: {
		products: "Products",
		different_products: "Different Products",
		total_price: "Total Price",
		no_items: "No items in your cart",
		shop_now: "Shop Now",
	},
	Headline: {
		product: {
			last: 'Last',
			next: 'Next',
			category: 'Category',
		},
		cart: "Cart",
		settings: "Settings",
		category: "Category",
	},
	Settings: {
		account: {
			title: 'Account',
			username: 'Username',
			first_name: 'First Name',
			last_name: 'Last Name',
			email: 'E-Mail',
			phone_number: 'Phone Number',
			password: 'Password',
		},
		payment: {
			title: 'Payment',
			credit_card: 'Credit Card',
			credit_card_number_placeholder: 'Credit-Card-Number',
			address: 'Address',
			country: 'Country',
			city: 'City',
			street: 'Street (+house nr)',
			zip_code: 'Zip Code',
		},
		style: {
			title: 'Style',
			color_theme: 'Color theme',
			language: 'Language',
		},
		creation_date: 'Creation Date',
	},
	FileNotFound: {
		error: '{Error|0} Error',
		action: 'Back to Homepage'
	},
	Header: {
		search: 'Search',
		filter: {
			all: 'All',
			tech: 'Tech',
			cases: 'Case',
		}
	},
	Footer: {
		contact: {
			title: 'Contact'
		},
		social: {
			title: 'Follow us'
		},
		legal: {
			title: 'Legal',
			list: {
				privacy_policy: 'Privacy Policy',
				terms_and_conditions: 'Terms and Conditions',
				imprint: 'Imprint'
			}
		}
	}
};

export default en
