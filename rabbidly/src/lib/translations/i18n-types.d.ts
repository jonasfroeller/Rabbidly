// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'de'

export type Locales =
	| 'de'
	| 'en'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	global: {
		languages: {
			/**
			 * D​e​u​t​s​c​h
			 */
			german: string
			/**
			 * E​n​g​l​i​s​c​h
			 */
			english: string
		}
		Button: {
			/**
			 * S​t​a​n​d​a​r​d
			 */
			reset_default: string
			/**
			 * B​e​a​r​b​e​i​t​e​n
			 */
			edit: string
		}
	}
	ProductInfo: {
		/**
		 * J​e​t​z​t​ ​k​a​u​f​e​n
		 */
		buy_now: string
	}
	Cart: {
		/**
		 * P​r​o​d​u​k​t​e
		 */
		products: string
		/**
		 * V​e​r​s​c​h​i​e​d​e​n​e​ ​P​r​o​d​u​k​t​e
		 */
		different_products: string
		/**
		 * G​e​s​a​m​t​p​r​e​i​s
		 */
		total_price: string
		/**
		 * K​e​i​n​e​ ​P​r​o​d​u​k​t​e​ ​i​m​ ​E​i​n​k​a​u​f​s​w​a​g​e​n
		 */
		no_items: string
		/**
		 * J​e​t​z​t​ ​k​a​u​f​e​n
		 */
		shop_now: string
	}
	Headline: {
		product: {
			/**
			 * L​e​t​z​t​e​s
			 */
			last: string
			/**
			 * N​a​̈​c​h​s​t​e​s
			 */
			next: string
			/**
			 * K​a​t​e​g​o​r​i​e
			 */
			category: string
		}
		/**
		 * W​a​r​e​n​k​o​r​b
		 */
		cart: string
		/**
		 * E​i​n​s​t​e​l​l​u​n​g​e​n
		 */
		settings: string
		/**
		 * K​a​t​e​g​o​r​i​e
		 */
		category: string
	}
	Settings: {
		account: {
			/**
			 * K​o​n​t​o
			 */
			title: string
			/**
			 * B​e​n​u​t​z​e​r​n​a​m​e
			 */
			username: string
			/**
			 * V​o​r​n​a​m​e
			 */
			first_name: string
			/**
			 * N​a​c​h​n​a​m​e
			 */
			last_name: string
			/**
			 * E​-​M​a​i​l
			 */
			email: string
			/**
			 * T​e​l​e​f​o​n​n​u​m​m​e​r
			 */
			phone_number: string
			/**
			 * P​a​s​s​w​o​r​t
			 */
			password: string
		}
		payment: {
			/**
			 * B​e​z​a​h​l​u​n​g
			 */
			title: string
			/**
			 * K​r​e​d​i​t​k​a​r​t​e
			 */
			credit_card: string
			/**
			 * K​r​e​d​i​t​k​a​r​t​e​n​n​u​m​m​e​r
			 */
			credit_card_number_placeholder: string
			/**
			 * A​d​r​e​s​s​e
			 */
			address: string
			/**
			 * L​a​n​d
			 */
			country: string
			/**
			 * S​t​a​d​t
			 */
			city: string
			/**
			 * S​t​r​a​ß​e​ ​(​+​H​a​u​s​n​u​m​m​e​r​)
			 */
			street: string
			/**
			 * P​o​s​t​l​e​i​t​z​a​h​l
			 */
			zip_code: string
		}
		style: {
			/**
			 * S​t​i​l
			 */
			title: string
			/**
			 * F​a​r​b​e​n​s​t​i​l
			 */
			color_theme: string
			/**
			 * S​p​r​a​c​h​e
			 */
			language: string
		}
		/**
		 * E​r​s​t​e​l​l​u​n​g​s​d​a​t​u​m
		 */
		creation_date: string
	}
	FileNotFound: {
		/**
		 * {​e​r​r​o​r​|​0​}​ ​F​e​h​l​e​r
		 * @param {unknown} error
		 */
		error: RequiredParams<'error|0'>
		/**
		 * z​u​r​ü​c​k​ ​z​u​r​ ​h​o​m​e​p​a​g​e
		 */
		action: string
	}
	Header: {
		/**
		 * S​u​c​h​e
		 */
		search: string
		filter: {
			/**
			 * A​l​l​e
			 */
			all: string
			/**
			 * T​e​c​h​n​i​k
			 */
			tech: string
			/**
			 * G​e​h​ä​u​s​e
			 */
			cases: string
		}
	}
	Footer: {
		contact: {
			/**
			 * K​o​n​t​a​k​t
			 */
			title: string
		}
		social: {
			/**
			 * F​o​l​g​e​ ​u​n​s
			 */
			title: string
		}
		legal: {
			/**
			 * R​e​c​h​t​l​i​c​h​e​s
			 */
			title: string
			list: {
				/**
				 * D​a​t​e​n​s​c​h​u​t​z
				 */
				privacy_policy: string
				/**
				 * G​e​s​c​h​ä​f​t​s​b​e​d​i​n​g​u​n​g​e​n
				 */
				terms_and_conditions: string
				/**
				 * I​m​p​r​e​s​s​u​m
				 */
				imprint: string
			}
		}
	}
}

export type TranslationFunctions = {
	global: {
		languages: {
			/**
			 * Deutsch
			 */
			german: () => LocalizedString
			/**
			 * Englisch
			 */
			english: () => LocalizedString
		}
		Button: {
			/**
			 * Standard
			 */
			reset_default: () => LocalizedString
			/**
			 * Bearbeiten
			 */
			edit: () => LocalizedString
		}
	}
	ProductInfo: {
		/**
		 * Jetzt kaufen
		 */
		buy_now: () => LocalizedString
	}
	Cart: {
		/**
		 * Produkte
		 */
		products: () => LocalizedString
		/**
		 * Verschiedene Produkte
		 */
		different_products: () => LocalizedString
		/**
		 * Gesamtpreis
		 */
		total_price: () => LocalizedString
		/**
		 * Keine Produkte im Einkaufswagen
		 */
		no_items: () => LocalizedString
		/**
		 * Jetzt kaufen
		 */
		shop_now: () => LocalizedString
	}
	Headline: {
		product: {
			/**
			 * Letztes
			 */
			last: () => LocalizedString
			/**
			 * Nächstes
			 */
			next: () => LocalizedString
			/**
			 * Kategorie
			 */
			category: () => LocalizedString
		}
		/**
		 * Warenkorb
		 */
		cart: () => LocalizedString
		/**
		 * Einstellungen
		 */
		settings: () => LocalizedString
		/**
		 * Kategorie
		 */
		category: () => LocalizedString
	}
	Settings: {
		account: {
			/**
			 * Konto
			 */
			title: () => LocalizedString
			/**
			 * Benutzername
			 */
			username: () => LocalizedString
			/**
			 * Vorname
			 */
			first_name: () => LocalizedString
			/**
			 * Nachname
			 */
			last_name: () => LocalizedString
			/**
			 * E-Mail
			 */
			email: () => LocalizedString
			/**
			 * Telefonnummer
			 */
			phone_number: () => LocalizedString
			/**
			 * Passwort
			 */
			password: () => LocalizedString
		}
		payment: {
			/**
			 * Bezahlung
			 */
			title: () => LocalizedString
			/**
			 * Kreditkarte
			 */
			credit_card: () => LocalizedString
			/**
			 * Kreditkartennummer
			 */
			credit_card_number_placeholder: () => LocalizedString
			/**
			 * Adresse
			 */
			address: () => LocalizedString
			/**
			 * Land
			 */
			country: () => LocalizedString
			/**
			 * Stadt
			 */
			city: () => LocalizedString
			/**
			 * Straße (+Hausnummer)
			 */
			street: () => LocalizedString
			/**
			 * Postleitzahl
			 */
			zip_code: () => LocalizedString
		}
		style: {
			/**
			 * Stil
			 */
			title: () => LocalizedString
			/**
			 * Farbenstil
			 */
			color_theme: () => LocalizedString
			/**
			 * Sprache
			 */
			language: () => LocalizedString
		}
		/**
		 * Erstellungsdatum
		 */
		creation_date: () => LocalizedString
	}
	FileNotFound: {
		/**
		 * {error|0} Fehler
		 */
		error: (arg: { error: unknown }) => LocalizedString
		/**
		 * zurück zur homepage
		 */
		action: () => LocalizedString
	}
	Header: {
		/**
		 * Suche
		 */
		search: () => LocalizedString
		filter: {
			/**
			 * Alle
			 */
			all: () => LocalizedString
			/**
			 * Technik
			 */
			tech: () => LocalizedString
			/**
			 * Gehäuse
			 */
			cases: () => LocalizedString
		}
	}
	Footer: {
		contact: {
			/**
			 * Kontakt
			 */
			title: () => LocalizedString
		}
		social: {
			/**
			 * Folge uns
			 */
			title: () => LocalizedString
		}
		legal: {
			/**
			 * Rechtliches
			 */
			title: () => LocalizedString
			list: {
				/**
				 * Datenschutz
				 */
				privacy_policy: () => LocalizedString
				/**
				 * Geschäftsbedingungen
				 */
				terms_and_conditions: () => LocalizedString
				/**
				 * Impressum
				 */
				imprint: () => LocalizedString
			}
		}
	}
}

export type Formatters = {
	'0': (value: unknown) => unknown
}
