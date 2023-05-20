<script>
	// @ts-nocheck
	// General
	import { onMount } from 'svelte'
	import { base } from '$app/paths'

	// Translation
	import { locale } from '$translation/i18n-svelte'
	import translation from '$translation/i18n-svelte'

	// Store
	import { config } from '$store/styleConfig'
	import { products } from '$store/products'
	import { productsFiltered } from '$store/products'

	// Scripts
	import styleCfg from '$script/styleStorage'
	import productStore from '$script/productStorage'

	// Components
	import ThemeSwitcher from './ThemeSwitcher.svelte'
	import LocaleSwitcher from './LocaleSwitcher.svelte'

	// Assets
	import favicon from '$image/favicon.png'

	export let hrefBase = `${base}/${$locale}/`

	// Functions
	onMount(async () => {
		$config = await styleCfg.load()
		$productsFiltered = productStore.filteredProducts([...$products], $config)
	})
</script>

<header
	class="min-h-[10vh] flex items-center flex-col 2xl:flex-row justify-center lg:justify-between box-border gap-8 m-4"
>
	<span id="logo-box">
		<a
			class="select-none text-4xl lg:text-6xl xl:text-8xl text-primary"
			id="logo"
			href={hrefBase}
		>
			Rabbidly
		</a>
	</span>
	<nav class="flex items-center gap-2 flex-wrap">
		<select
			bind:value={$config.selectedCategory}
			on:change={() => {
				$productsFiltered = productStore.filteredProducts([...$products], $config)
				styleCfg.save($config)
			}}
			id="category"
			name="category"
			class="select select-primary select-bordered w-fit max-w-xs"
		>
			<option disabled selected>Category</option>
			<option value="all">{$translation.Header.filter.all()}</option>
			<option value="technology">
				{$translation.Header.filter.tech()}
			</option>
			<option value="cases">
				{$translation.Header.filter.cases()}
			</option>
		</select>
		<div class="relative">
			<input
				type="search"
				id="search"
				class="input input-primary input-bordered w-fit max-w-xs"
				placeholder={$translation.Header.search() + '...'}
				bind:value={$config.searchInput}
				on:change={() => {
					$productsFiltered = productStore.filteredProducts([...$products], $config)
					styleCfg.save($config)
				}}
			/>
			<a href={hrefBase} class="absolute right-0 w-fit rounded-r-lg p-3">
				<button type="button">
					<iconify-icon icon="ps:magnifying-glass" />
				</button>
			</a>
		</div>

		<!-- Options -->
		<!-- Language -->
		<LocaleSwitcher />

		<!-- Theme -->
		<ThemeSwitcher />

		<!-- Cart -->
		<ul class="menu menu-horizontal border border-primary rounded-lg h-12">
			<li class="flex items-center justify-center">
				<a href={hrefBase + 'cart'} class="block h-full w-full">
					<div class="cursor-pointer">
						<iconify-icon icon="mdi:cart-variant" />
					</div>
				</a>
			</li>
			<li>
				<a href={hrefBase + 'settings/account'} class="block h-full w-full">
					<div class="cursor-pointer">
						<iconify-icon icon="ph:gear-six-fill" />
					</div>
				</a>
			</li>
		</ul>

		<!-- Log-In/Out -->
		<!-- Modal toggle -->
		<!-- If not logged in: Open Modal. Else: Log Out Modal -->
		<div
			data-modal-toggle="authentication-modal"
			class="flex items-center justify-between p-1 border border-primary rounded-lg h-12"
		>
			<div class="select-none cursor-pointer p-2 flex items-center">
				<iconify-icon icon="fa6-solid:arrow-right-from-bracket" />
			</div>
			<div class="select-none cursor-pointer">
				<img src={favicon} alt="user-avatar" class="w-10 h-10 rounded-full" />
			</div>
		</div>
	</nav>
</header>
