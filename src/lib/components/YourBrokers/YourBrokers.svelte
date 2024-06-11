<script lang="ts">
  import { createQuery } from "@tanstack/svelte-query";
  import { api } from "../../actions/products/api";
  import type { IAaEquityAccountsListPageData } from "../../actions/products/types";
  import EquityMasthead from "./EquityMasthead.svelte";
  import EquityBrokersList from "./EquityBrokersList.svelte";
  import AaFooter from "./AaFooter.svelte";

  const yourBrokers = createQuery<IAaEquityAccountsListPageData, Error>({
    queryKey: ["yourBrokers"],
    queryFn: () => api().yourBrokers(),
  });
</script>

<div class="bg-brand-grey-background">
  {#if $yourBrokers?.data?.data}
    <EquityMasthead
      mastheadData={$yourBrokers.data?.data.masthead}
      connectOtherBrokers={$yourBrokers?.data?.data?.connect_other_accounts}
      hideNav={false}
    />
    <EquityBrokersList brokersData={$yourBrokers?.data?.data} />
    <AaFooter footer={$yourBrokers.data?.data?.footer} />
    <!-- <div>{$yourBrokers.data?.data?.footer?.text}</div> -->
  {/if}
</div>
