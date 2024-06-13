<script lang="ts">
  import type { IEquityAnalyticsStocksTab } from "$lib/actions/products/types";
  import Text from "../common/Text.svelte";
  import AaEquityPieChart from "./AaEquityPieChart.svelte";
  import AaKeyInsightsComp from "./AaKeyInsightsComp.svelte";

  export let data: IEquityAnalyticsStocksTab;
</script>

<div>
  {#if data?.pie_chart_data}
    <div>
      {#if data?.total_stocks}
        <div class="bg-brand-tertiary-green px-4 py-2 text-center mt-4">
          <Text appearance="caption" addClassName="!text-brand-green-dark">
            Total Number of stocks - {data.total_stocks}
          </Text>
        </div>
      {/if}
      <AaEquityPieChart chartData={data?.pie_chart_data} />
      {#if data?.insight_section?.list.length}
        <div class="p-4">
          <AaKeyInsightsComp data={data.insight_section} />
        </div>
      {/if}
    </div>
  {/if}
</div>
