<script lang="ts">
  import type { ITransactionCard } from "$lib/actions/products/types";
  import CustomCdnImage from "../common/CustomCdnImage.svelte";
  import Text from "../common/Text.svelte";

  export let cardData: ITransactionCard;
</script>

<div class="flex items-center py-4 bg-brand-white cursor-pointer">
  {#if cardData?.logo_url}
    <div class="flex mr-2 items-center">
      <CustomCdnImage
        src={cardData.logo_url}
        width={32}
        height={32}
        className="rounded-full"
      />
    </div>
  {/if}
  <div class="flex flex-col flex-1 overflow-hidden mr-2">
    <Text
      appearance="subtitle2"
      addClassName="whitespace-nowrap overflow-ellipsis overflow-hidden"
    >
      {cardData?.middle?.title}
    </Text>
    <div class="flex items-center mt-1">
      {#if cardData?.middle?.image_url}
        <div class="flex mr-1 items-center">
          <CustomCdnImage
            src={cardData?.middle?.image_url}
            width={20}
            height={20}
          />
        </div>
      {/if}
      {#if cardData?.middle?.description}
        <Text appearance="caption" addClassName="text-brand-grey-base !text-xs">
          {cardData.middle.description}
        </Text>
      {/if}
    </div>
  </div>
  <div>
    {#if cardData?.right}
      <div class="flex items-center">
        <div class="flex flex-col items-end">
          <Text appearance="subtitle2" addClassName="flex-1">
            {cardData.right?.title}
          </Text>
          {#if cardData.right?.description}
            <Text
              appearance="small"
              addClassName="!text-brand-grey-base !text-xs"
            >
              {cardData.right.description}
            </Text>
          {/if}
        </div>
        {#if cardData.right?.image_url}
          <div class="flex mr-1 items-center ml-2">
            <CustomCdnImage
              src={cardData?.right?.image_url}
              width={16}
              height={16}
            />
          </div>
        {/if}
      </div>
    {/if}
  </div>
</div>
