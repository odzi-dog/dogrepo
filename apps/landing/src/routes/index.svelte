<script>
  // Importing modules
  import { _ } from 'svelte-i18n';
  import { TilesList } from '$lib/config';
  import { TileWrapper } from '$lib/components/Tiles';
  import { LanguageSelectorButton } from '$lib/components/Special';

</script>

<svelte:head>
  <title>odzi.dog</title>
</svelte:head>

<!-- Layout -->
<main class="w-full h-min-screen bg-white relative">

  <!-- Container -->
  <section class="w-full h-screen flex items-center justify-center relative">
    <!-- Services -->
    <div class="w-3/4 px-8 h-full flex flex-col items-center justify-center relative bg-gray-100">
      <div class="w-full h-3/4 relative flex flex-wrap">

        { #each Object.entries(TilesList) as [ key, tile ] }
          <TileWrapper {key} {tile} />
        { /each }

        <!-- Empty -->
        { #each new Array(4 - Object.values(TilesList).length) as empty }
          <div class="w-1/2 h-1/2 relative p-4">
            <div class="border-2 border-dotted border-gray-400 w-full h-full rounded-2xl shadow-lg flex items-center justify-center">
              <div class="w-2/3 text-center">
                <h1 class="text-xl text-black">{ $_('tiles.empty.title') }</h1>
                <p class="text-xs text-black opacity-80">{ $_('tiles.empty.description') }</p>
              </div>
            </div>
          </div>
        { /each }
      </div>    
    </div>

    <!-- Services -->
    <div class="w-1/4 flex flex-col items-center justify-center h-full relative px-8">      
      
      <div class="absolute top-0 p-8 w-full flex justify-between items-center">
        <img class="w-10 h-10 opacity-80" src="https://res.cloudinary.com/lococovu-cdn/image/upload/v1644937502/odzi-dog-small-black_hrf9dm.svg" alt="odzi dog black logotype">
      
        <LanguageSelectorButton />
      </div>
      
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
  </section>

</main>