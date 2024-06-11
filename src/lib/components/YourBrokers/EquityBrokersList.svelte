<script lang="ts">
  import type { IAaEquityAccountsListPageDataChild } from "$lib/actions/products/types";
  import Text from "../common/Text.svelte";
  import AaActionCardComp from "./AaActionCardComp.svelte";

  export let brokersData: IAaEquityAccountsListPageDataChild;

</script>

<div class="p-4">
  {#if brokersData?.brokers_list?.list && brokersData.brokers_list.title}
    <Text appearance="subtitle1" addClassName=" !text-brand-black mb-3">
      {brokersData.brokers_list.title}
    </Text>
  {/if}
  {#each brokersData?.brokers_list?.list as curr, ind}
    <AaActionCardComp
      cardData={curr}
    />
  {/each}
</div>
