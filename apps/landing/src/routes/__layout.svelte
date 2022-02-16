<script lang='ts'>
	import '../app.css';
  import '$lib/i18n';

  // Importing modules
  import { isLoading, locale, locales } from 'svelte-i18n';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { LocalStorageService } from '$lib/modules/LocalStorage';

  // Variables
  let loading: boolean = true;

  // onMount event
  // Here we'll try to get user language
  // from LocalStorage service
  onMount(async () => {
    const { language } = (LocalStorageService.get('language') as { language: string });
    
    if ($locales.includes(language)) {
      await locale.set(language);
    };
 
    // Updating loading state
    loading = false;
  });
</script>

<!-- Loading screen -->
{ #if $isLoading || loading }
  <div transition:fade class="absolute z-50 bg-white w-full h-screen"></div>
{ /if }

<!-- Layout -->
{ #if !$isLoading }
  <slot />
{ /if }