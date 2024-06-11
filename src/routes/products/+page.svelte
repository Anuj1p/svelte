<script lang="ts">
  import { onMount } from "svelte";
  import { withinApp, setWithinApp } from "../../lib/stores/useWithinApp";
  import { hasMounted, setHasMounted } from "../../lib/stores/useHasMounted.js";
  import YourBrokers from "$lib/components/YourBrokers/YourBrokers.svelte";

  // Update hasMounted store when the component mounts
  onMount(() => {
    setHasMounted(true);
    setWithinApp(
      !!(
        window?.Android?.track ||
        window?.webkit?.messageHandlers?.track?.postMessage
      )
    );
  });

  $: isWithinApp = $withinApp;
</script>

<div
  class={`${
    hasMounted
      ? isWithinApp
        ? ""
        : "lg:max-w-5xl max-w-full mx-auto relative"
      : ""
  }`}
>
  <YourBrokers />
</div>
