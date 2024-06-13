<script lang="ts">
  import type { IEquityInsightSection } from "$lib/actions/products/types";
  import Text from "../common/Text.svelte";

  export let data: IEquityInsightSection;
</script>

<div>
  <Text
    appearance="subtitle1"
    addClassName="text-brand-blue-azureRadiance mb-2"
  >
    {data.title}
  </Text>
  <ul class="list-disc list-outside px-4">
    {#each data.list as curr}
      <li class="">
        <Text appearance="body1" addClassName="!text-brand-blue-dark">
          {curr?.title}
        </Text>
        {#if !!curr?.inner_list?.length}
          <ul class="list-disc list-inside">
            {#each curr.inner_list as item}
              <li class="">
                <Text
                  appearance="body1"
                  addClassName="!text-brand-blue-dark inline"
                >
                  {item}
                </Text>
              </li>
            {/each}
          </ul>
        {/if}
      </li>
    {/each}
  </ul>
</div>
