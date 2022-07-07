<script>
  // Importing modules
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  onMount(() => {
    goto('/categories/pawcapsu');
  });
</script>