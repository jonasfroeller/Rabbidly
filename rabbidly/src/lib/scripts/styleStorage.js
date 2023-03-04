// @ts-nocheck
import localStore from '$script/localStorage'
import { browser } from '$app/environment'

function fillStyleObject(cfg) {
	if (browser) {
		if (cfg.selectedLAN == null || cfg.selectedLAN == undefined || cfg.selectedLAN == '') {
			cfg.selectedLAN = 'de'
		}
		if (
			cfg.selectedCategory == null ||
			cfg.selectedCategory == undefined ||
			cfg.selectedCategory == ''
		) {
			cfg.selectedCategory = 'all'
		}
		if (cfg.theme == null || cfg.theme == undefined || cfg.theme == '') {
			cfg.theme = 'night'
		}
		if (cfg.lastVisit == null || cfg.lastVisit == undefined || cfg.lastVisit == '') {
			cfg.lastVisit = document.referrer
		}
		if (cfg.searchInput == null || cfg.searchInput == undefined || cfg.searchInput == '') {
			cfg.searchInput = ''
		}
	}
}

export default class styleCfg {
	static async save(cfg) {
		if (browser && cfg != null && cfg != undefined) {
			console.log('saving config: ', cfg)
			localStore.save('rabbidly-styleConfig', cfg)
		}
	}

	static async load() {
		if (browser) {
			let cfg = await localStore.load('rabbidly-styleConfig')

			if (cfg != null && cfg != undefined) {
				fillStyleObject(cfg)
			} else {
				cfg = {
					selectedLAN: 'de',
					selectedCategory: 'all',
					theme: 'night',
					lastVisit: document.referrer, // window.history.state.prevUrl history.back(); history.go(-1);
					searchInput: ''
				}
			}

			document.documentElement.setAttribute('data-theme', cfg.theme)
			return cfg
		}
	}
}
