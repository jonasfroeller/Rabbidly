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
	import LogIn from './LogIn.svelte'
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

<header>
	<span id="logo-box">
		<a class="select-none text-6xl text-primary" id="logo" href={hrefBase}>Rabbidly</a>
	</span>
	<nav>
		<!-- Search -->
		<div class="search-container hidden lg:grid">
			<select
				bind:value={$config.selectedCategory}
				on:change={() => {
					$productsFiltered = productStore.filteredProducts([...$products], $config)
					styleCfg.save($config)
				}}
				id="category"
				class="cursor-pointer border-2 border-primary select-primary focus:outline-none"
				name="category"
			>
				<option value="all" class="language-option">{$translation.Header.filter.all()}</option>
				<option value="technology" class="language-option">
					{$translation.Header.filter.tech()}
				</option>
				<option value="cases" class="language-option">
					{$translation.Header.filter.cases()}
				</option>
			</select>
			<input
				type="search"
				id="search"
				class="border-2 border-primary"
				placeholder={$translation.Header.search() + '...'}
				bind:value={$config.searchInput}
				on:change={() => setTimeout(styleCfg.save($config), 100)}
			/>
			<a href={hrefBase}>
				<button type="button" class="search-submit btn btn-primary no-animation">
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
		<div class="nav-action-1 settings border-2 border-primary rounded-[7.5rem]">
			<a href={hrefBase + 'cart'}>
				<div class="icon cursor-pointer buzz"><iconify-icon icon="mdi:cart-variant" /></div>
			</a>

			<!-- Settings -->
			<a href={hrefBase + 'settings/account'}>
				<div class="icon cursor-pointer rotate"><iconify-icon icon="ph:gear-six-fill" /></div>
			</a>
		</div>

		<!-- Log-In/Out -->
		<!-- Modal toggle -->
		<!-- If not logged in: Open Modal. Else: Log Out Modal -->
		<div
			class="nav-action-2 register border-2 border-primary rounded-[7.5rem]"
			data-modal-toggle="authentication-modal"
		>
			<div class="icon login select-none cursor-pointer">
				<iconify-icon icon="fa6-solid:arrow-right-from-bracket" />
			</div>
			<div class="avatar select-none cursor-pointer">
				<img src={favicon} alt="" />
			</div>
		</div>
	</nav>
</header>
<!-- Search -->
<section class="search-container grid lg:hidden px-4">
	<select
		bind:value={$config.selectedCategory}
		on:change={() => {
			$productsFiltered = productStore.filteredProducts([...$products], $config)
			styleCfg.save($config)
		}}
		id="category"
		class="cursor-pointer border-2 border-primary select-primary focus:outline-none"
		name="category"
	>
		<option value="all" class="language-option">{$translation.Header.filter.all()}</option>
		<option value="technology" class="language-option">
			{$translation.Header.filter.tech()}
		</option>
		<option value="cases" class="language-option">
			{$translation.Header.filter.cases()}
		</option>
	</select>
	<input
		type="search"
		id="search"
		class="border-2 border-primary"
		placeholder={$translation.Header.search() + '...'}
		bind:value={$config.searchInput}
		on:change={() => setTimeout(styleCfg.save($config), 100)}
	/>
	<a href={hrefBase}>
		<button type="button" class="search-submit btn btn-primary no-animation">
			<iconify-icon icon="ps:magnifying-glass" />
		</button>
	</a>
</section>

<LogIn hasAccount={false} />

<style>
	/* Header */
	#logo-box {
		height: 100%;
		display: flex;
		align-items: center;
	}
	header {
		min-height: 10vh;
		display: grid;
		align-items: center;
		grid-template-columns: 2fr 10fr;
		gap: 0.5rem;
		padding: 1rem;
	}

	/* Right - NAV */
	nav {
		min-height: 10vh;
		box-sizing: border-box;
		gap: 1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		align-items: center;
	}

	/* Right - NAV - Search */
	.search-container {
		box-sizing: border-box;
		height: 3.5rem;
		align-items: center;
		border-radius: 2.5rem;
		grid-template-columns: auto 1fr auto;
	}

	#category {
		height: 3.5rem;
		padding: 0.5rem;
		border-top-left-radius: 2.5rem;
		border-bottom-left-radius: 2.5rem;
	}

	#search {
		-webkit-appearance: none;
		appearance: none;
		box-sizing: border-box;
		height: 3.5rem;
		outline: none;
		padding: 1rem;
		font-size: 1.75rem;
	}

	.search-submit {
		position: relative;
		padding: 0.5rem;
		height: 3.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
		border-radius: 0;
		border-top-right-radius: 2.5rem;
		border-bottom-right-radius: 2.5rem;
	}

	/* Right - NAV - Cart & Settings */
	.nav-action-1 {
		border-radius: 2.5rem;
		height: 3.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding-left: 1rem;
		padding-right: 1rem;
	}

	.icon {
		font-size: 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* Right - NAV - Log-In/Out */
	.nav-action-2 {
		height: 3.5rem;
		border-radius: 2.5rem;
		display: flex;
		justify-content: space-between;
	}

	.icon.login {
		padding-left: 1rem;
	}

	.avatar img {
		display: block;
		margin: auto;
		height: 3.25rem;
		aspect-ratio: 1/1;
	}
</style>
