<script>
	// Svelte
	import { base } from '$app/paths'

	// Stores
	import { config } from '$store/styleConfig'

	// Translation
	import translation from '$translation/i18n-svelte'
	import { locale } from '$translation/i18n-svelte'

	export let hrefBase = `${base}/${$locale}/`

	export let style = 'multiple'
	export let prev = ''
	export let next = ''
</script>

<section class="flex flex-wrap gap-4 justify-between mb-4">
	{#if style === 'cart'}
		<div class="border border-primary text-primary text-xl bg-tertiary-content rounded-lg p-2">
			<span class="icon pointer"><!-- <Fa icon={faCartShopping} /> --></span>
			{$translation.Headline.cart()}
		</div>
	{:else if style === 'settings'}
		<div class="border border-primary text-primary text-xl bg-tertiary-content rounded-lg p-2">
			<div class="icon pointer"><!-- <Fa icon={faGear} /> --></div>
			{$translation.Headline.settings()}
		</div>
	{:else if style === 'single'}
		<a
			href={prev}
			class="border border-primary text-primary text-xl bg-tertiary-content rounded-lg p-2"
		>
			<div>
				<div>
					<span class="icon pointer"><!-- <Fa icon={faCaretLeft} /> --></span>
					{$translation.Headline.product.last()}
				</div>
			</div>
		</a>
	{:else}
		<div class="border border-primary text-primary text-xl bg-tertiary-content rounded-lg p-2">
			{$translation.Headline.category()}: {$config.selectedCategory}
		</div>
	{/if}
	{#if style === 'single'}
		<a
			class="border border-primary text-primary text-xl bg-tertiary-content rounded-lg p-2"
			href={hrefBase}
		>
			<div>
				<div>{$translation.Headline.product.category()}: {$config.selectedCategory}</div>
			</div>
		</a>
		<a
			class="border border-primary text-primary text-xl bg-tertiary-content rounded-lg p-2"
			href={next}
		>
			<div>
				<div>
					{$translation.Headline.product.next()}
					<span class="icon pointer"><!-- <Fa icon={faCaretRight} /> --></span>
				</div>
			</div>
		</a>
	{/if}
</section>
