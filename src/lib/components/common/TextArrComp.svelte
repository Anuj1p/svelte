<script lang="ts">
  import type {
    ITextArrWidget,
    TextVariants,
  } from "$lib/actions/products/types";
  import Text from "./Text.svelte";

  export let arr: ITextArrWidget[];
  export let appearance: TextVariants;
  export let addClassName: string | null = null;
  export let useSpan: boolean;
  export let containerClassName: string;
</script>

<!-- style={{
    color: item.text_color,
    fontWeight: item.font_weight ?? 400,
  }} -->
<div>
  {#if useSpan}
    <Text {appearance} addClassName={containerClassName}>
      {#each arr as item}
        <span
          class="mr-1 ${addClassName}"
        >
          {item.text}
        </span>
      {/each}
    </Text>
  {/if}
</div>
