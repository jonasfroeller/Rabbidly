// @ts-nocheck
import { writable, readable } from 'svelte/store'

import { productAmount } from '$store/products'

// Shopping Cart
export const shoppingCart = writable([])

// savedProducts
export const savedProducts = writable(new Array(productAmount).fill(false))

// Personal Data
export const personalData = writable({
	username: '',
	name: '',
	lastname: '',
	email: '',
	phonenumber: '',
	password: '',
	birthdate: 0 // unused
})

export const address = writable({
	fullName: personalData.name + ' ' + personalData.lastname,
	email: personalData.email,
	phonenumber: personalData.phonenumber,

	country: '',
	state: '', // unused
	city: '',
	street: '',
	houseNumber: 0, // streetnumber
	zipcode: 0 // pinCode
})

export const info = readable({
	id: '',
	creationDate: ''
})

// https://stripe.com/docs/payments/payment-methods/overview
export const savedCards = writable({
	// Global
	Visa: [], // unused
	Mastercard: [] // unused
})

export const agreements = writable({
	termsAndConditions: false,
	cookies: false,
	newsletter: false
})
