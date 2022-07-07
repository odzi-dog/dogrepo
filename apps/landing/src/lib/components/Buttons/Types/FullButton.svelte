<script lang="ts">
  import * as Color from 'color';
  
  $: isDark = Color.rgb(color).isDark();

  // Exporting variables
  export let href: string = "";
  export let text: string = "";
  export let color: string = "#fff";
  export let extraClasses: string = "";
</script>

<button on:click {href} style="background-color: { color ?? '#fff' }" class="{extraClasses} mx-1 px-4 py-2 rounded-full flex items-center justify-center">
  { #if text }
    <p class="text-xs" style="color: { isDark ? '#fff' : '#000' }">{ text }</p>
  { :else }
    <slot />
  { /if }
</button>