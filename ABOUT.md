### Summary
This demo showcases how to create area and line charts using VisuallyJS in a Svelte application.

### Components Used
- `AreaChartComponent`: Used to render area charts.
- `LineChartComponent`: Used to render line charts.

### Component Options
Both components accept an `options` prop which defines the chart configuration, such as data series, axes, and styling.
- `options`: A configuration object for the chart.
- `className`: Optional CSS class name for the chart container.

### Stylesheet Requirement
For the VisuallyJS components to render correctly, you must include the `visuallyjs.css` stylesheet in your application. This is typically done via an import in your main CSS file or script:

```css
@import "@visuallyjs/browser-ui/css/visuallyjs.css";
```
