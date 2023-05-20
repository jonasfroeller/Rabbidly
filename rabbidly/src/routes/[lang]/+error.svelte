<script>
	// Stores
	import { page } from '$app/stores'

	// Components
	import FileNotFound from '$component/FileNotFound.svelte'
</script>

<FileNotFound code={$page.status} path={$page.url.pathname} />
