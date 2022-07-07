<script lang="ts">
  // Importing components and modules
  import { _ } from 'svelte-i18n';
  import { TilesListContainer } from '$lib/components/Special';
  import { tiles } from '$lib/config/Tiles/categories/BlukTiles';
</script>

<TilesListContainer {tiles} />