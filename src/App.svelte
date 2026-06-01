<script>
    import { AreaChartComponent, LineChartComponent } from "@visuallyjs/browser-ui-svelte";
    import { charts } from "./examples";
</script>

<div class="vjs-area-line-chart">
    {#each charts as chart}
        <div class="vjs-chart-example">
            <div class="vjs-chart-example-title">{chart.desc}</div>
            {#if chart.comments}
                <div class="vjs-chart-example-comments">{chart.comments}</div>
            {/if}
            {#if chart.type === 'area'}
                <AreaChartComponent className="vjs-chart-example-container" options={chart.options} />
            {:else if chart.type === 'line'}
                <LineChartComponent className="vjs-chart-example-container" options={chart.options} />
            {/if}
        </div>
    {/each}
</div>
