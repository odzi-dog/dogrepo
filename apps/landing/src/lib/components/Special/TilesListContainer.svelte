<script lang="ts">
  // Importing modules
  import { _ } from 'svelte-i18n';
  import { TileWrapper } from '$lib/components/Tiles';
  import type { ILandingTile } from '$lib/config';

  // Exporting props
  export let tiles: Record<string, ILandingTile> = {}; 
  export let maximumTilesNumber: number = 4;
</script>

<!-- Items array -->
{ #each Object.entries(tiles) as [ key, tile ] }
  <TileWrapper {key} {tile} />
{ /each }

<!-- Empty -->
{ #each new Array(maximumTilesNumber - Object.values(tiles).length) as empty }
  <div class="w-full lg:w-1/2 lg:h-1/2 relative p-4">
    <div class="border-2 border-dotted border-gray-400 w-full h-full rounded-2xl shadow-lg flex items-center justify-center py-12 lg:py-0">
      <div class="w-2/3 text-center">
        <h1 class="text-xl text-black">{ $_('tiles.empty.title') }</h1>
        <p class="text-xs text-black opacity-80">{ $_('tiles.empty.description') }</p>
      </div>
    </div>
  </div>
{ /each }
