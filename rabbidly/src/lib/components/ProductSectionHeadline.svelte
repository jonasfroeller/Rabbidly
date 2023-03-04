<script>
	// @ts-nocheck
	import { config } from '$store/styleConfig'
	import { dev } from '$app/environment';

	if (dev) {
		console.log("dev mode");
	}

	let target = "_self";

	export let style = 'multiple'
	export let prev = ''
	export let next = ''
</script>

{#if style === 'single'}
	<section id="headline" class="text-primary flex justify-between w-full">
		<div class="flex justify-between w-full">
			<a href={prev} target={target}>
				<div class="headline-tag pointer flex items-center w-fit border-2 rounded-3xl p-4 pt-2 pb-2 mb-4 text-2xl">
					<h1 class="flex items-center gap-x-0.5 text-primary">
						<span class="icon"><!-- <Fa icon={faCaretLeft} /> --></span>
						last
					</h1>
				</div>
			</a>
			<a href="../../">
				<div class="headline-tag pointer flex items-center w-fit border-2 rounded-3xl p-4 pt-2 pb-2 mb-4 text-2xl">
					<h1>Kategorie: {$config.selectedCategory}</h1>
				</div>
			</a>
			<a href={next} target={target}>
				<div class="headline-tag pointer flex items-center w-fit border-2 rounded-3xl p-4 pt-2 pb-2 mb-4 text-2xl">
					<h1 class="flex items-center gap-x-0.5 text-primary">
						next <span class="icon"><!-- <Fa icon={faCaretRight} /> --></span>
					</h1>
				</div>
			</a>
		</div>
	</section>
{:else}
	<section id="headline" class="text-primary flex justify-between w-full">
		<div class="flex justify-between w-full">
			<div class="headline-tag pointer flex items-center w-fit border-2 rounded-3xl p-4 pt-2 pb-2 mb-4 text-2xl">
				{#if style === 'cart'}
					<h1 class="flex justify-between items-center">
						<span class="icon"><!-- <Fa icon={faCartShopping} /> --></span>
						Einkaufswagen
					</h1>
				{:else if style === 'settings'}
					<h1 class="flex justify-between items-center">
						<div class="icon pointer"><!-- <Fa icon={faGear} /> --></div>
						Einstellungen
					</h1>
				{:else}
					<h1>Kategorie: {$config.selectedCategory}</h1>
				{/if}
			</div>
			<div class="headline-tag pointer flex items-center w-fit border-2 rounded-3xl p-4 pt-2 pb-2 mb-4 text-2xl">
				<h1 class="flex items-center gap-x-0.5">
					<span class="icon"><!-- <Fa icon={faCaretLeft} /> --></span>
					letzte Seite ({$config.lastVisit})
				</h1>
			</div>
		</div>
	</section>
{/if}
