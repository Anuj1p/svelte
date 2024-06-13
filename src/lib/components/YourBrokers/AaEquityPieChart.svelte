<script lang="ts">
  import type { DonutChartData, IEquityPieChart } from "$lib/actions/products/types";
  import { DonutChart } from "@carbon/charts-svelte";
  import "@carbon/charts-svelte/styles.css";

  export let chartData: IEquityPieChart[];

  const data2 = chartData?.map((curr) => {
    return {
      group: curr.name,
      value: curr.percentage,
    };
  }) as DonutChartData

  const options = {
    title: 'Donut Chart',
    resizable: true,
    donut: {
      center: {
        label: 'Donut Chart'
      }
    },
    height: '400px',
  };

</script>

<slot>
  <div class="w-full min-h-[370px] relative flex justify-center">
    <DonutChart data={data2} {options} style="padding:2rem;" />
    <div id="donut-chart"></div>
  </div>
</slot>
