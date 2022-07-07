<script lang="ts">
  // Importing modules
  import { MainMenu } from '$lib/components/Special';
</script>

<!-- Layout -->
<main class="w-full h-min-screen bg-white relative">

  <!-- Container -->
  <section class="w-full h-fit md:h-screen flex items-center justify-center relative">
    <!-- Services -->
    <div class="w-full md:w-1/2 lg:w-3/4 px-8 pt-12 md:pt-0 h-full flex flex-col items-center justify-center relative bg-gray-100 overflow-y-auto">
      <div class="w-full h-3/4 relative flex flex-wrap">
        <slot />
      </div>    
    </div>

    <!-- Menu -->
    <MainMenu />
  </section>

</main>