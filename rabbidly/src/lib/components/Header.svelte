<script>
	// @ts-nocheck
	// General
	import { onMount } from 'svelte'

	// Store
	import { config } from '$store/styleConfig'
	import { products } from '$store/products'
	import { productsFiltered } from '$store/products'
	import styleCfg from '$script/styleStorage'
	import productStore from '$script/productStorage'

	// Components
	import LogIn from './LogIn.svelte'
	import ThemeSwitcher from './ThemeSwitcher.svelte'
	import LocaleSwitcher from './LocaleSwitcher.svelte'

	// Assets
	import favicon from '$image/favicon.png'

	export let hrefBase = '/en/'

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
		<div class="search-container">
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
				<option value="all" class="language-option">all</option>
				<option value="technology" class="language-option">tech</option>
				<option value="cases" class="language-option">cases</option>
			</select>
			<input
				type="search"
				id="search"
				class="border-2 border-primary"
				placeholder="Search..."
				bind:value={$config.searchInput}
				on:change={() => setTimeout(styleCfg.save($config), 100)}
			/>
			<a href={hrefBase}>
				<button type="button" class="search-submit btn btn-primary no-animation">
					<iconify-icon icon="ps:magnifying-glass" />
					Search
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
			<a href={hrefBase + "cart"}>
				<div class="icon cursor-pointer buzz"><iconify-icon icon="mdi:cart-variant" /></div>
			</a>

			<!-- Settings -->
			<a href={hrefBase + "settings/account"}>
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

<LogIn hasAccount={false} />

<style>
	/* Header */
	header {
		width: 100%;
		min-height: 10vh;
		display: grid;
		align-items: center;
		grid-template-columns: 2fr 10fr;
		gap: 1rem;
		padding: 0.5rem;
	}

	/* Right - NAV */
	nav {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	/* Right - NAV - Search */
	.search-container {
		height: 3.5rem;
		display: grid;
		align-items: center;
		border-radius: 7.5vh;
		grid-template-columns: auto 10fr auto;
	}

	#category {
		height: 3.5rem;
		padding: 0.5rem;
		border-top-left-radius: 7.5vh;
		border-bottom-left-radius: 7.5vh;
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
		border-top-right-radius: 7.5vh;
		border-bottom-right-radius: 7.5vh;
	}

	/* Right - NAV - Cart & Settings */
	.nav-action-1 {
		border-radius: 7.5vh;
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
		border-radius: 7.5vh;
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
