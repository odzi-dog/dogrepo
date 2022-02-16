<script lang="ts">
  // Importing modules
  import { locales, locale, _ } from 'svelte-i18n';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { Translate, ChevronUp, ChevronDown } from '@steeze-ui/heroicons';
  import { onMount } from 'svelte';
import { LocalStorageService } from '$lib/modules/LocalStorage';

  // onMount event
  onMount(() => {
    document.addEventListener('click', handleGlobalClick);

    const element = document.getElementById('languages-dropdown');
    element.addEventListener('click', handleElementClick);

    // onDestroy event
    return () => {
      document.removeEventListener('click', handleGlobalClick);
      element.removeEventListener('click', handleElementClick);
    };
  });

  // Element click event listener
  function handleElementClick(event: MouseEvent) {
    event.stopPropagation();
  };

  // Global click event listener
  function handleGlobalClick(event: MouseEvent) {
    isDropdownShown = false;
  };

  // Select language function
  function selectLanguage(language: string) {
    // Closing our dropdown
    isDropdownShown = false;

    // Updating current language and LocalStorageService's
    // entry
    locale.set(language);

    LocalStorageService.set('language', { language });
  };

  // Variables
  let isDropdownShown: boolean = false;
</script>

<!-- Layout -->
<div class="relative" id="languages-dropdown">
  <!-- Action button -->
  <button on:click={() => isDropdownShown = !isDropdownShown} class="p-2 rounded-md bg-gray-800 flex items-center justify-center">
    { #if isDropdownShown }
      <Icon src={ChevronUp} class="w-4 h-4 text-white" />
    { :else }
      <Icon src={Translate} class="w-4 h-4 text-white" />
    { /if }

    <p class="ml-2 text-xs text-white">{ $_('language.buttonTitle') }</p>
  </button>

  <!-- Dropdown -->
  { #if isDropdownShown }
    <div class="mt-1 absolute right-0 bg-gray-800 rounded-md p-2">

      { #each $locales as language }
        <button on:click={() => {
          selectLanguage(language);
        }} class="w-full px-4 py-2 rounded-md text-white hover:bg-white hover:text-black">
          <p class="text-xs">{ $_(`language.${ language }`) }</p>
        </button>
      { /each }

    </div>
  { /if }
</div>