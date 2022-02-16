<script lang="ts">
  import * as Color from 'color';

  // Exporting variables
  export let href: string | null;
  export let color: string | null;
  export let text: string | null;
</script>

<button on:click {href} style="background-color: { color ?? '#fff' }" class="mx-1 px-4 py-2 rounded-full flex items-center justify-center">
  { #if text }
    <p class="text-xs" style="color: { Color.rgb(color).isDark() ? '#000' : '#fff' }">{ text }</p>
  { :else }
    <slot />
  { /if }
</button>