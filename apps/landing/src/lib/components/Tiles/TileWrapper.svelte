<script lang="ts">
  // Importing modules
  import { _ } from 'svelte-i18n';
  import { GenerateBackground } from '$lib/helpers';
  import type { ILandingTile } from '$lib/config';
  import { GhostButton, FullButton } from '$lib/components/Buttons';
  import { goto } from '$app/navigation';

  // Exporting variables
  export let key: string;
  export let tile: ILandingTile;
</script>

<!-- Layout -->
<div class="w-full lg:w-1/2 lg:h-1/2 relative p-4">
  <div style="background: { GenerateBackground(tile.background) }" class="w-full flex flex-col h-full rounded-2xl shadow-lg relative py-4 lg:py-0">
    <!-- Header -->
    <div class="py-2 w-full rounded-t-2xl flex justify-between items-center px-1.5">
      <!-- Icon -->
      { #if tile.icon }
        <div style="background: { GenerateBackground(tile.icon) }" class="w-10 h-10 rounded-full"></div>
      { /if }
      
      <!-- Badges -->
      <div class="flex items-center">
        { #if tile.badges?.length > 0 }
          { #each tile.badges as badge }
            <div style="background-color: { badge.backgroundColor ?? "#fff" }; color: { badge.textColor ?? '#000' }" class="mx-1 px-3 py-1.5 rounded-full flex items-center">
              <p class="text-xs">{ $_(`tiles.${ key }.badge.${ badge.text }`) }</p>
            </div>
          { /each }
        { /if }
      </div>
    </div>

    <!-- Content -->
    <div class="px-2 flex-grow flex flex-col justify-center">
      <h1 class="px-2 text-sm md:text-xl text-white font-medium">{ @html $_(`tiles.${ key }.title`) }</h1>
      <p class="px-2 text-xs md:text-sm text-white">{ @html $_(`tiles.${ key }.description`) }</p>

      <!-- Buttons -->
      { #if tile.buttons?.length > 0 }
        <div class="mt-4 flex flex-col md:flex-row items-center">
          { #each tile.buttons as button }
            <svelte:component 
              this={button.type == 'FullButton' ? FullButton : GhostButton} 
              text={ $_(`tiles.${ key }.button.${ button.text }`) }
              on:click={() => {
                if (button.href) {
                  goto(button.href);
                };
              }}
            />
          { /each }
        </div>
      { /if }
    </div>
  </div>
</div>