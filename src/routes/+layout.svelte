<script lang="ts">
	import '../app.css';

	// Define the type for the data prop
	interface LayoutData {
		useWideLayout?: boolean;
	}

	let { children, data } = $props<{ data: LayoutData }>();
	import Nav from './nav.svelte';

	let useWideLayout = $derived(data?.useWideLayout ?? false);
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans&display=swap');
    
</style>

<div class="p-6 bg-white dark:bg-gray-900 dark:text-white min-h-screen font-['Open_Sans']">
	<Nav />
	{@render children()}
</div>
