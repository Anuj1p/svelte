<script lang="ts">
  import type {
    IConnectOtherAccounts,
    IEquityMasthead,
  } from "../../actions/products/types";
  import CustomCdnImage from "../common/CustomCdnImage.svelte";
  import Text from "../common/Text.svelte";
  import TextArrComp from "../common/TextArrComp.svelte";
  // import RightArrow from '../../../../static/rightArrow.svg'

  export let mastheadData: IEquityMasthead;
  export let hideNav: boolean;
  export let connectOtherBrokers: IConnectOtherAccounts;

  const onBackClick = () => {
    console.log("onBackClick")
    const navlink = 'indmoney://webview?url=https%3A%2F%2Fwebview.indmoney.com%2Faccount-aggregator%2Fonboarding%2Fselect-your-bank%2Fclient'
    // goto(navlink)
    window.location.href = navlink
  }

</script>

<div class="bg-brand-blue-dark">
  <div class="flex-col pt-5">
    {#if !hideNav}
      <div class="flex items-center justify-between w-full mb-6 px-4">
        <div class="flex items-center cursor-pointer" on:click={onBackClick}>
          <CustomCdnImage
            src="https://indcdn.indmoney.com/cdn/images/fe/back-grey-icon.png"
            width={24}
            height={24}
          />
        </div>
        <div class="flex items-center cursor-pointer">
          <CustomCdnImage
            src="https://indcdn.indmoney.com/cdn/images/fe/help_icon.png"
            width={24}
            height={24}
          />
        </div>
      </div>
    {/if}
    <div class="flex flex-col justify-center px-4">
      <Text
        appearance="caption"
        addClassName="!text-brand-grey-background mb-3"
      >
        {mastheadData?.broker_name?.title}
      </Text>
      <div class="flex justify-between items-center">
        <h3 class="!text-brand-white !text-[40px] !font-bold">
          {mastheadData?.amount}
        </h3>
        <!-- {#if !!mastheadData?.refresh_in_progress}
          <LottieControl
            lottie="https://indcdn.indmoney.com/cdn/images/fe/refresh-loader.json"
            width={24}
            height={24}
          />
        {/if} -->
      </div>
      {#if mastheadData?.one_day_change}
        <TextArrComp
          appearance="body1"
          useSpan
          arr={mastheadData?.one_day_change}
          containerClassName="mt-3"
        />
      {/if}
      {#if mastheadData?.last_updated}
        <Text
          appearance="small"
          addClassName="!text-brand-grey-background opacity-60 pt-4"
        >
          {mastheadData?.last_updated}
        </Text>
      {/if}
    </div>
    <div
      class="rounded-t-[20px] pt-3 pb-6 px-4 flex items-center mt-5 connectOtherBrokers"
    >
      <CustomCdnImage
        src={connectOtherBrokers?.image?.url}
        width={16}
        height={16}
        className="rounded-full"
      />
      <div class="flex items-center flex-1">
        <Text appearance="subtitle1" addClassName="!text-white flex-1 pl-2">
          {connectOtherBrokers?.title}
        </Text>
      </div>
      <div class="flex items-center cursor-pointer">
        <!-- <CustomCdnImage 
          src={RightArrow}
          width={12}
          height={12}
        /> -->
      </div>
    </div>
  </div>
</div>

<style>
  .connectOtherBrokers {
    background-color: rgba(6, 6, 6, 0.25),
  }
</style>