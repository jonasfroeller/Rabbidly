<script>
	// @ts-nocheck

	import { browser } from '$app/environment'
	import { onMount } from 'svelte'
	import { config } from '$store/styleConfig'
	import styleCfg from '$script/styleStorage'

	onMount(async () => {
		$config = await styleCfg.load()
		checked = $config.theme == 'night' ? true : false
	})

	$: checked = false

	$: {
		// didn't update other :/
		if (browser) {
			;[...document.getElementsByClassName('theme-toggle')].forEach((element) => {
				element.checked = checked
			})
		}
	}

	$: {
		if (browser) {
			window.matchMedia('prefers-color-scheme: dark') ? true : false
		}
	}

	function updateTheme() {
		$config.theme = $config.theme == 'night' ? 'lemonade' : 'night'
		if (browser) {
			document.documentElement.setAttribute('data-theme', $config.theme)
		}
	}
</script>

<label class="theme">
	<span class="theme-toggle-wrap border-2 border-primary rounded-[7.5rem]">
		<input
			bind:checked
			on:change={() => {
				updateTheme()
				styleCfg.save($config)
			}}
			type="checkbox"
			class="theme-toggle border-none"
			role="switch"
			name="theme"
		/>
		<span class="theme-icon">
			<span class="theme-icon-part" />
			<span class="theme-icon-part" />
			<span class="theme-icon-part" />
			<span class="theme-icon-part" />
			<span class="theme-icon-part" />
			<span class="theme-icon-part" />
			<span class="theme-icon-part" />
			<span class="theme-icon-part" />
			<span class="theme-icon-part" />
		</span>
	</span>
</label>

<style>
	/* Right - NAV - Lightmode/Darkmode-Switch (https://naviddev.com/) */
	:root {
		--hue: 223;
		--primary: hsl(var(--hue), 90%, 55%);
		--primaryT: hsla(var(--hue), 90%, 55%, 0);
		--transDur: 0.3s;
	}

	.theme {
		scale: 1.1;
		display: flex;
		align-items: center;
		justify-content: center;
		-webkit-tap-highlight-color: transparent;
	}

	.theme-icon {
		pointer-events: none;
		transition: transform var(--transDur) ease-in-out;
	}

	.theme-icon,
	.theme-toggle {
		z-index: 1;
	}

	.theme-icon,
	.theme-icon-part {
		position: absolute;
	}

	.theme-icon {
		display: block;
		top: 0.75em;
		left: 0.75em;
		width: 1.5em;
		height: 1.5em;
	}

	.theme-icon-part {
		border-radius: 50%;
		box-shadow: 0.4em -0.4em 0 0.5em hsl(0, 0%, 100%) inset;
		top: calc(50% - 0.5em);
		left: calc(50% - 0.5em);
		width: 1em;
		height: 1em;
		transition: box-shadow var(--transDur) ease-in-out, opacity var(--transDur) ease-in-out,
			transform var(--transDur) ease-in-out;
		transform: scale(0.5);
	}

	.theme-icon-part ~ .theme-icon-part {
		background-color: hsl(0, 0%, 100%);
		border-radius: 0.05em;
		box-shadow: none;
		top: 50%;
		left: calc(50% - 0.05em);
		transform: rotate(0) translateY(0.5em);
		transform-origin: 50% 0;
		width: 0.1em;
		height: 0.2em;
	}

	.theme-icon-part:nth-child(3) {
		transform: rotate(45deg) translateY(0.5em);
	}
	.theme-icon-part:nth-child(4) {
		transform: rotate(90deg) translateY(0.5em);
	}
	.theme-icon-part:nth-child(5) {
		transform: rotate(135deg) translateY(0.5em);
	}
	.theme-icon-part:nth-child(6) {
		transform: rotate(180deg) translateY(0.5em);
	}
	.theme-icon-part:nth-child(7) {
		transform: rotate(225deg) translateY(0.5em);
	}
	.theme-icon-part:nth-child(8) {
		transform: rotate(270deg) translateY(0.5em);
	}
	.theme-icon-part:nth-child(9) {
		transform: rotate(315deg) translateY(0.5em);
	}

	.theme-toggle,
	.theme-toggle-wrap {
		position: relative;
	}

	.theme-toggle,
	.theme-toggle::before {
		display: block;
	}

	.theme-toggle {
		border-radius: 25% / 50%;
		box-shadow: 0 0 0 0.125em var(--primaryT);
		padding: 0.25em;
		width: 6em;
		height: 3em;
		appearance: none;
		-webkit-appearance: none;
		cursor: pointer;
		transition: background-color var(--transDur) ease-in-out, box-shadow 0.15s ease-in-out,
			transform var(--transDur) ease-in-out;
	}

	.theme-toggle::before {
		background-color: hsl(48, 90%, 55%);
		border-radius: 50%;
		content: '';
		width: 2.5em;
		height: 2.5em;
		transition: background-color var(--transDur) ease-in-out,
			transform var(--transDur) ease-in-out;
	}

	/* Checked */
	.theme-toggle:checked::before,
	.theme-toggle:checked ~ .theme-icon {
		transform: translateX(3em);
	}

	.theme-toggle:checked::before {
		background-color: hsl(198, 90%, 55%);
	}

	.theme-toggle:checked ~ .theme-icon .theme-icon-part:nth-child(1) {
		transform: scale(1);
		box-shadow: 0.2em -0.2em 0 0.2em hsl(0, 0%, 100%) inset;
	}
	.theme-toggle:checked ~ .theme-icon .theme-icon-part ~ .theme-icon-part {
		opacity: 0;
	}
	.theme-toggle:checked ~ .theme-icon .theme-icon-part:nth-child(2) {
		transform: rotate(45deg) translateY(0.8em);
	}
	.theme-toggle:checked ~ .theme-icon .theme-icon-part:nth-child(3) {
		transform: rotate(90deg) translateY(0.8em);
	}
	.theme-toggle:checked ~ .theme-icon .theme-icon-part:nth-child(4) {
		transform: rotate(135deg) translateY(0.8em);
	}
	.theme-toggle:checked ~ .theme-icon .theme-icon-part:nth-child(5) {
		transform: rotate(180deg) translateY(0.8em);
	}
	.theme-toggle:checked ~ .theme-icon .theme-icon-part:nth-child(6) {
		transform: rotate(225deg) translateY(0.8em);
	}
	.theme-toggle:checked ~ .theme-icon .theme-icon-part:nth-child(7) {
		transform: rotate(270deg) translateY(0.8em);
	}
	.theme-toggle:checked ~ .theme-icon .theme-icon-part:nth-child(8) {
		transform: rotate(315deg) translateY(0.8em);
	}
	.theme-toggle:checked ~ .theme-icon .theme-icon-part:nth-child(9) {
		transform: rotate(360deg) translateY(0.8em);
	}

	.theme-toggle-wrap {
		margin: 0 0.75em;
	}
</style>
