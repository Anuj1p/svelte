<script lang="ts">
  import type { IBankAccountCard } from "$lib/actions/products/types";
  import CustomCdnImage from "../common/CustomCdnImage.svelte";
  import Text from "../common/Text.svelte";

  export let cardData: IBankAccountCard;
</script>

<div class="mb-2 shadow-sm rounded-xl">
  <div
    class="flex items-center p-4 bg-brand-white rounded-t-xl cursor-pointer rounded-b-xl"
  >
    {#if cardData.logo_url}
      <div class="flex mr-3 items-center">
        <CustomCdnImage src={cardData.logo_url ?? ""} width={32} height={32} />
      </div>
    {/if}
    <div class="flex flex-col flex-1 overflow-hidden mr-2">
      <Text
        appearance="subtitle2"
        addClassName="whitespace-nowrap overflow-ellipsis overflow-hidden !text-brand-grey-dark !text-base"
      >
        {cardData.title}
      </Text>
      {#if cardData?.description}
        <Text
          appearance="small"
          addClassName="!text-brand-grey-dark !text-[11px] mt-1"
        >
          {cardData.description}
        </Text>
      {/if}
    </div>
    {#if cardData?.right_content}
        <div class="flex items-center">
          <Text
            appearance="subtitle2"
            addClassName="!text-brand-blue-dark flex-1"
          >
            {cardData.right_content?.value}
          </Text>
        </div>
      {/if}
  </div>
</div>
