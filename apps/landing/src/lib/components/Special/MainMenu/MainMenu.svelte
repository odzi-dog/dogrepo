<script lang="ts">
  // Importing components
  import { _ } from 'svelte-i18n';
  import { LanguageSelectorButton } from '$lib/components/Special';
  import { FullButton } from '$lib/components/Buttons';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { Menu } from '@steeze-ui/heroicons';

  // Mobile-only variable
  let isMenuOpened = false;
</script>

<!-- Mobile-only menu opener -->
<div class="absolute top-0 right-0 p-4">
  <button on:click={() => isMenuOpened = true} class="p-2 rounded-full bg-gray-800 flex items-center justify-center">
    <Icon src={Menu} class="w-4 h-4 text-white" />

    <p class="text-xs text-white ml-1.5">Меню</p>
  </button>
</div>

<!-- Menu -->
<div class="{ !isMenuOpened ? "hidden" : "" } absolute z-10 md:relative md:block w-full md:w-1/2 lg:w-1/4 h-full px-8 bg-white">            
  <div class="py-8 w-full flex justify-between items-center">
    <img class="w-10 h-10 opacity-80 hidden md:block" src="https://res.cloudinary.com/lococovu-cdn/image/upload/v1644937502/odzi-dog-small-black_hrf9dm.svg" alt="odzi dog black logotype">
  
    <LanguageSelectorButton />

    <!-- Mobile-only menu close button -->
    <div class="md:hidden">
      <FullButton 
        text="{ $_("layout.sidebar.closeMenu") }" 
        color="#1f2937"
        on:click={() => isMenuOpened = false} 
      />
    </div>
  </div>
  
  <div class="flex flex-col">
    <!-- Services -->
    <div class="w-full flex flex-col text-black relative opacity-80">
      <a class="w-min my-3 border-b-2 border-black text-left text-4xl" href="/">{ $_("layout.sidebar.main") }</a>

      <a class="my-3 opacity-50 text-left text-4xl" href="https://discord.gg/EHvUDyNQ7J">{ $_("layout.sidebar.discord") }</a>
      <a class="my-3 opacity-50 text-left text-4xl" href="https://github.com/odzi-dog">{ $_("layout.sidebar.github") }</a>
    </div>
    
    <!-- Other services -->
    <div class="mt-6 p-4 w-full bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl opacity-60">
      <!-- Buttons -->
      <div class="mb-1.5 w-full flex items-center justify-between">
        <p class="text-xs text-white opacity-80">{ $_("layout.sidebar.information.badge") }</p>
      </div>

      <!-- Title -->
      <h1 class="text-md text-bold text-white">{ $_("layout.sidebar.information.title") }</h1>
      <p class="text-xs text-bold text-white opacity-80">{ $_("layout.sidebar.information.description") }</p>
    </div>
  </div>
</div>