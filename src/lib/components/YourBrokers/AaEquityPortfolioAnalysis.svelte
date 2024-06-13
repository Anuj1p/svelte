<script lang="ts">
  import type { IPortfolioAnalysisWidget } from "$lib/actions/products/types";
  import Text from "../common/Text.svelte";
  import AaAnalyticsStocksComp from "./AaAnalyticsStocksComp.svelte";
  import { AA_MINI_APP_EQUITY_BROKER_DETAILS_ANALYTICS_TABS } from "./constants";

  export let data: IPortfolioAnalysisWidget;
  let selectedColId = AA_MINI_APP_EQUITY_BROKER_DETAILS_ANALYTICS_TABS[0].id;

  const onTabChange = (curr: { id: string }) => {
    selectedColId = curr.id;
  };

</script>

<div class="bg-white rounded-xl mb-8" id={data?.key}>
  <div class="py-4 border-b-1 border-brand-grey-background flex items-center">
    <div class="w-1 h-6 rounded-r-xl bg-brand-blue-azureRadiance mr-3" />
    <Text appearance="subtitle2" addClassName="text-brand-black pl-3">
      {data?.title}
    </Text>
  </div>
  <div class="flex justify-center py-3">
    {#each AA_MINI_APP_EQUITY_BROKER_DETAILS_ANALYTICS_TABS as curr}
      <div
        class="px-4 py-[6px] !text-sm rounded-lg font-normal bg-brand-tertiary-grey text-brand-grey-dark cursor-pointer mr-2 last:mr-0"
        on:click={() => onTabChange(curr)}
      >
        {curr.label}
      </div>
    {/each}
  </div>
  <div>
    {#if selectedColId === "stocks"}
      <AaAnalyticsStocksComp data={data?.tabs.stocks_tab} />
    {:else if selectedColId === "market_cap"}
      <AaAnalyticsStocksComp data={data?.tabs.sector_tab} />
    {:else}
      <AaAnalyticsStocksComp data={data?.tabs.sector_tab} />
    {/if}
  </div>
</div>
