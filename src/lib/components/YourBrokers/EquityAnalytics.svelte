<script lang="ts">
  import type { IAaEquityL1AnalyticsPageChildData } from "$lib/actions/products/types";
  import AaEquityExpertAnalysis from "./AaEquityExpertAnalysis.svelte";
  import AaEquityPortfolioAnalysis from "./AaEquityPortfolioAnalysis.svelte";

  export let analyticsData: IAaEquityL1AnalyticsPageChildData;
</script>

<div class="p-4">
  {#if analyticsData?.expert_analysis_widget}
    <AaEquityExpertAnalysis data={analyticsData?.expert_analysis_widget} />
  {/if}
  {#if analyticsData?.pe_insights}
    <AaEquityExpertAnalysis data={analyticsData?.pe_insights} />
  {/if}
  {#if analyticsData?.stocks_valuation_widget}
    <AaEquityExpertAnalysis data={analyticsData?.stocks_valuation_widget} />
  {/if}
  {#if analyticsData?.portfolio_analysis_widget}
    <AaEquityPortfolioAnalysis
      data={analyticsData?.portfolio_analysis_widget}
    />
  {/if}
</div>
