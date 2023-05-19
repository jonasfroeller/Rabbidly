import preprocess from 'svelte-preprocess'
import adapterStatic from '@sveltejs/adapter-static'
import adapterVercel from '@sveltejs/adapter-vercel';

const dev = process.argv.includes('dev')

const prefixFolder = process.env.prefixFolder ? JSON.parse(process.env.prefixFolder.toLowerCase()) : false; const staticBuild = prefixFolder;
const basePath = prefixFolder == true ? (dev ? '' : '/Rabbidly') : '';
const buildDir = staticBuild == true ? '../public-prefix' : '../public-default'

console.log(`basePath: '${basePath}'`);
console.log('buildDir:', buildDir);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: staticBuild ? adapterStatic({
			pages: buildDir,
			assets: buildDir,
			fallback: null,
			precompress: false,
			strict: true
		}) : adapterVercel(),
		paths: {
			base: basePath
		},
		appDir: 'rabbidly',
		alias: {
			$main: 'src',
			$translation: 'src/lib/translations',
			$image: 'src/lib/assets/imgs',
			$component: 'src/lib/components',
			$store: 'src/lib/stores',
			$script: 'src/lib/scripts'
		},
		prerender: { entries: ['/de/product/technology/2312', '/en/product/technology/2312'] }
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
}

export default config
