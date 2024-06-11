<script lang="ts">
  export let src: string = "";
  export let height: number;
  export let width: number;
  export let className: string | null = null;
</script>

<div>
  <img {src} alt="image" {width} {height} class={className} />
</div>
