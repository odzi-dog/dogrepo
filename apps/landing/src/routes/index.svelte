<script>
  // Importing modules
  import { _ } from 'svelte-i18n';
  import { TilesList } from '$lib/config';
  import { TileWrapper } from '$lib/components/Tiles';
  import { MainMenu } from '$lib/components/Special';

</script>

<svelte:head>
  <title>odzi.dog</title>
</svelte:head>

<!-- Layout -->
<main class="w-full h-min-screen bg-white relative">

  <!-- Container -->
  <section class="w-full h-fit md:h-screen flex items-center justify-center relative">
    <!-- Services -->
    <div class="w-full md:w-1/2 lg:w-3/4 px-8 pt-12 md:pt-0 h-full flex flex-col items-center justify-center relative bg-gray-100 overflow-y-auto">
      <div class="w-full h-3/4 relative flex flex-wrap">

        { #each Object.entries(TilesList) as [ key, tile ] }
          <TileWrapper {key} {tile} />
        { /each }

        <!-- Empty -->
        { #each new Array(4 - Object.values(TilesList).length) as empty }
          <div class="w-full lg:w-1/2 lg:h-1/2 relative p-4">
            <div class="border-2 border-dotted border-gray-400 w-full h-full rounded-2xl shadow-lg flex items-center justify-center py-12 lg:py-0">
              <div class="w-2/3 text-center">
                <h1 class="text-xl text-black">{ $_('tiles.empty.title') }</h1>
                <p class="text-xs text-black opacity-80">{ $_('tiles.empty.description') }</p>
              </div>
            </div>
          </div>
        { /each }
      </div>    
    </div>

    <!-- Menu -->
    <MainMenu />
  </section>

</main>