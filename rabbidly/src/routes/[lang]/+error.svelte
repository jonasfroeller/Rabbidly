<script>
  import { page } from '$app/stores';
  import FileNotFound from "$component/FileNotFound.svelte";
</script>

<FileNotFound code={$page.status} path={$page.url.pathname} />