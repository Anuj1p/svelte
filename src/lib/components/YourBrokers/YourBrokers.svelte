<script lang="ts">
  import { createQuery } from "@tanstack/svelte-query";
  import { api } from "../../actions/products/api";
  import type {
    IAaEquityAccountsListPageData,
    IAaEquityL1AnalyticsPageData,
  } from "../../actions/products/types";
  import EquityMasthead from "./EquityMasthead.svelte";
  import EquityBrokersList from "./EquityBrokersList.svelte";
  import AaFooter from "./AaFooter.svelte";
  import EquityAnalytics from "./EquityAnalytics.svelte";

  const yourBrokers = createQuery<IAaEquityAccountsListPageData, Error>({
    queryKey: ["yourBrokers"],
    queryFn: () => api().yourBrokers(),
  });

  const yourBrokersAnalytics = createQuery<IAaEquityL1AnalyticsPageData, Error>(
    {
      queryKey: ["brokersAnalytics"],
      queryFn: () => api().brokersAnalytics(),
    }
  );

</script>

<div class="bg-brand-grey-background">
  {#if $yourBrokers?.data?.data}
    <EquityMasthead
      mastheadData={$yourBrokers.data?.data.masthead}
      connectOtherBrokers={$yourBrokers?.data?.data?.connect_other_accounts}
      hideNav={false}
    />
    <EquityBrokersList brokersData={$yourBrokers?.data?.data} />
    {#if $yourBrokersAnalytics?.data?.data}
      <EquityAnalytics analyticsData={$yourBrokersAnalytics?.data?.data} />
    {/if}
    <AaFooter footer={$yourBrokers.data?.data?.footer} />
  {/if}
</div>
