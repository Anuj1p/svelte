<script lang="ts">
  import type {
    IExpertAnalysisTab,
    IExpertAnalysisWidget,
  } from "$lib/actions/products/types";
  import Text from "../common/Text.svelte";
  import TextArrComp from "../common/TextArrComp.svelte";
  import AaTransactionCard from "./AaTransactionCard.svelte";

  export let data: IExpertAnalysisWidget;

  let selectedCol = data.tabs[0];
  let toggle = false;

  const sliceLength = 4;

  const onTabChange = (curr: IExpertAnalysisTab) => {
    selectedCol = curr;
  };

  const clickToggle = () => {
    toggle = !toggle;
  };
</script>

<div class="bg-white rounded-xl mb-8">
  <div class="py-4 border-b-1 border-brand-grey-background flex items-center">
    <div class="w-1 h-6 rounded-r-xl bg-brand-blue-azureRadiance mr-3" />
    <Text appearance="subtitle2" addClassName="text-brand-black pl-3 flex-1">
      {data?.title}
    </Text>
  </div>
  <div class="flex justify-center py-3 overflow-x-scroll">
    {#each data?.tabs as curr}
      <div
        class="px-4 py-[6px] !text-sm rounded-lg font-normal bg-brand-tertiary-grey text-brand-grey-dark cursor-pointer mr-2 last:mr-0 shrink-0"
        on:click={() => onTabChange(curr)}
      >
        {curr.label}
      </div>
    {/each}
  </div>
  <div
    class="flex items-center mx-4 border-t-2 border-brand-grey-background pt-2 pb-1"
  >
    <TextArrComp
      appearance="subtitle1"
      useSpan
      arr={selectedCol.data.title_text_arr}
      containerClassName=""
    />
    {#if selectedCol.data?.analyst_data}
      <Text appearance="small" addClassName="py-1 px-2 rounded ml-1">
        {selectedCol.data.analyst_data.sentiment}
      </Text>
    {/if}
  </div>
  <div class="px-4">
    {#if selectedCol.data.list?.length}
      <div>
        {#each selectedCol.data.list.slice(
          0,
          toggle
            ? selectedCol.data.list.length
            : sliceLength,
        ) as curr}
          <div class="border-b-1 border-brand-grey-background last:border-b-0">
            <AaTransactionCard cardData={curr} />
          </div>
        {/each}
      </div>
    {/if}
    {#if sliceLength && selectedCol.data.list.length}
      <div
        class="text-brand-blue-link pt-4 pb-6 flex cursor-pointer items-center justify-center text-center font-normal"
        on:click={() => clickToggle()}
      >
        {#if toggle}
          <div class="flex items-center">
            <Text
              appearance="caption"
              addClassName="!text-brand-blue-dark pr-1"
            >
              Show less
            </Text>{" "}
            <!-- <ArrowUP className="text-brand-blue-dark w-3 h-4" /> -->
          </div>
        {:else}
          <div class="flex items-center">
            <Text
              appearance="caption"
              addClassName="!text-brand-blue-dark pr-1"
            >
              Show all
            </Text>{" "}
          </div>
        {/if}
      </div>
    {/if}
  </div>
</div>
