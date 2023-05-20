<script>
	// Translation
	import translation from '$translation/i18n-svelte'
	import { locale } from '$translation/i18n-svelte'

	// Logo
	import favicon from '$image/favicon.png'

	// Svelte
	import { base } from '$app/paths'

	let hrefBase = `${base}/${$locale}/`
</script>

<footer class="p-4 pt-0 sm:p-6 sm:pt-0">
	<hr class="my-6 border-gray-200 sm:mx-auto" />
	<div class="md:flex md:justify-between gap-16">
		<div class="mb-6 md:mb-0 flex items-center">
			<a href="https://rabbidly.com" class="flex items-center">
				<img src={favicon} class="mr-3 h-8" alt="Rabbidly Logo" />
				<span class="self-center text-2xl font-semibold whitespace-nowrap">Rabbidly.com</span>
			</a>
		</div>
		<div class="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3">
			<div>
				<h2 class="mb-4 text-sm font-semibold uppercase">
					{$translation.Footer.contact.title()}
				</h2>
				<ul>
					<li class="mb-2">
						<a href="mailto:rabbidly@protonmail.com" class="hover:underline">Email</a>
					</li>
				</ul>
			</div>
			<div>
				<h2 class="mb-4 text-sm font-semibold uppercase">
					{$translation.Footer.social.title()}
				</h2>
				<ul>
					<li class="mb-2">
						<a href="https://www.instagram.com/rabbidly" class="hover:underline">Instagram</a>
					</li>
					<li class="mb-2">
						<a href="https://www.tiktok.com/@rabbidly" class="hover:underline">TikTok</a>
					</li>
					<li class="mb-2">
						<a href="https://www.youtube.com/@rabbidly" class="hover:underline">Youtube</a>
					</li>
				</ul>
			</div>
			<div>
				<h2 class="mb-4 text-sm font-semibold uppercase">
					{$translation.Footer.legal.title()}
				</h2>
				<ul>
					<li class="mb-2">
						<a href={hrefBase + 'privacyPolicy'} class="hover:underline">
							{$translation.Footer.legal.list.privacy_policy()}
						</a>
						<!-- Privacy Policy | DSGVO (EU-Datenschutz-Grundverordnung) | Datenschutzerklärung -->
					</li>
					<li class="mb-2">
						<a href={hrefBase + 'termsAndConditions'} class="hover:underline">
							{$translation.Footer.legal.list.terms_and_conditions()}
						</a>
						<!-- Terms &amp; Conditions | AGB (Allgemeine Geschäftsbedingungen) -->
					</li>
					<li class="mb-2">
						<a href={hrefBase + 'imprint'} class="hover:underline">
							{$translation.Footer.legal.list.imprint()}
						</a>
						<!-- Imprint -->
					</li>
					<li>
						<a href={hrefBase + 'cookies'} class="hover:underline">Cookies</a>
						<!-- Cookies -->
					</li>
				</ul>
			</div>
		</div>
	</div>
	<hr class="my-4 border-gray-200 sm:mx-auto lg:my-8" />
	<div class="sm:flex sm:items-center sm:justify-between">
		<span class="text-sm sm:text-center">
			© {new Date().getFullYear()}
			<a href="https://Rabbidly.com/" class="hover:underline">Rabbidly.com</a>
		</span>
		<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
			<a href="https://www.instagram.com/rabbidly">
				<iconify-icon icon="fa:instagram" />
				<span class="sr-only">Instagram page</span>
			</a>
			<a href="https://www.tiktok.com/@rabbidly">
				<iconify-icon icon="fa-brands:tiktok" />
				<span class="sr-only">TikTok page</span>
			</a>
			<a href="https://www.youtube.com/@rabbidly">
				<iconify-icon icon="fa:youtube-play" />
				<span class="sr-only">YouTube page</span>
			</a>
		</div>
	</div>
</footer>
