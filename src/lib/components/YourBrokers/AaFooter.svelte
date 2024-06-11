<script lang="ts">
  import type { IAaFooter } from "$lib/actions/products/types";
  import CustomCdnImage from "../common/CustomCdnImage.svelte";
  import Text from "../common/Text.svelte";

  export let footer: IAaFooter;
</script>

<div class="mt-4 flex items-center justify-center">
  <div class="mr-2 flex">
    <CustomCdnImage
      src={footer.logo?.url}
      width={footer.logo?.width}
      height={footer?.logo.height}
    />
  </div>
  <Text appearance="small" addClassName="!text-brand-grey-light">
    {footer.text}
  </Text>
</div>
