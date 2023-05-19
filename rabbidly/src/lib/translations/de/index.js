// @ts-check

/**
 * @typedef { import('../i18n-types').BaseTranslation } BaseTranslation
 */

/** @type { BaseTranslation } */
const de = {
	global: {
		languages: {
			german: 'Deutsch',	
			english: 'Englisch'
		},
		Button: {
			reset_default: 'Standard',
			edit: 'Bearbeiten'
		}
	},
	ProductInfo: {
		buy_now: 'Jetzt kaufen',
	},
	Cart: {
		products: "Produkte",
		different_products: "Verschiedene Produkte",
		total_price: "Gesamtpreis",
		no_items: "Keine Produkte im Einkaufswagen",
		shop_now: "Jetzt kaufen",
	},
	Headline: {
		product: {
			last: 'Letztes',
			next: 'Nächstes',
			category: 'Kategorie',
		},
		cart: "Warenkorb",
		settings: "Einstellungen",
		category: "Kategorie",
	},
	Settings: {
		account: {
			title: 'Konto',
			username: 'Benutzername',
			first_name: 'Vorname',
			last_name: 'Nachname',
			email: 'E-Mail',
			phone_number: 'Telefonnummer',
			password: 'Passwort',
		},
		payment: {
			title: 'Bezahlung',
			credit_card: 'Kreditkarte',
			credit_card_number_placeholder: 'Kreditkartennummer',
			address: 'Adresse',
			country: 'Land',
			city: 'Stadt',
			street: 'Straße (+Hausnummer)',
			zip_code: 'Postleitzahl',
		},
		style: {
			title: 'Stil',
			color_theme: 'Farbenstil',
			language: 'Sprache',
		},
		creation_date: 'Erstellungsdatum',
	},
	FileNotFound: {
		error: '{error|0} Fehler',
		action: 'zurück zur homepage'
	},
	Header: {
		search: 'Suche',
		filter: {
			all: 'Alle',
			tech: 'Technik',
			cases: 'Gehäuse'
		}
	},
	Footer: {
		contact: {
			title: 'Kontakt'
		},
		social: {
			title: 'Folge uns'
		},
		legal: {
			title: 'Rechtliches',
			list: {
				privacy_policy: 'Datenschutz',
				terms_and_conditions: 'Geschäftsbedingungen',
				imprint: 'Impressum'
			}
		}
	}
}

export default de
