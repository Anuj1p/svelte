<script lang="ts">
  import type { TextVariants } from "$lib/actions/products/types";
  import { classNames } from "../../../utils/classNames";

  const subtitle1 = "font-medium text-brand-grey-base text-sm";
  const subtitle2 = "font-medium text-brand-black text-base";
  const body1 = "text-brand-black text-sm font-light";
  const body2 = "text-brand-black text-base font-light";
  const caption = "text-[13px] font-light text-brand-grey-base ";
  const small = "text-[11px] font-light text-brand-grey-base ";
  const overline =
    "text-[11px] text-brand-black uppercase font-light tracking-widest";
  const link = "text-link dark:text-dark-bg-link";

  export let appearance: TextVariants | undefined = undefined;
  export let addClassName: string | undefined = undefined;
//   export let children;

  const getVariantClass = (appearance: TextVariants) => {
    if (appearance === "subtitle1") return subtitle1;
    if (appearance === "subtitle2") return subtitle2;
    if (appearance === "body1") return body1;
    if (appearance === "body2") return body2;
    if (appearance === "caption") return caption;
    if (appearance === "overline") return overline;
    if (appearance === "small") return small;
    if (appearance === "link") return link;
  };
  const className = classNames(
    getVariantClass(appearance as TextVariants),
    addClassName
  );
</script>

<div>
  <slot>
    <!-- <div class={className}></div> -->
  </slot>
  <!-- <p class="${className}">{children}</p> -->
</div>
