// https://kit.svelte.dev/docs/routing#pages

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  return {
    category: params.category,
    id: params.productId.includes(".html")
      ? params.productId.replace(".html", "")
      : params.productId,
  };
}
