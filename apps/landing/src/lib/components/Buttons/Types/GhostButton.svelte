<script lang="ts">
  import * as Color from 'color';

  // Exporting variables
  export let color: string | null;
  export let text: string | null;
</script>

<button on:click style="border-color: { color ?? '#fff' };" class="mx-1 px-4 py-1 border-4 rounded-full flex items-center justify-center">
  { #if text }
    <p class="text-xs" style="color: { color ?? '#fff' }">{ text }</p>
  { :else }
    <slot />
  { /if }
</button>