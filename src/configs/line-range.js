export default {
    config: {
        title: {
            text: "Temperature - line range",
            align: "left"
        },
        valueAxis: {
            title: {
                text: "Temperature range"
            }
        },
        series: [
            {
                id: "max",
                maxValueField: "max",
                minValueField: "min",
                label: "Temperature"
            }
        ],
        tooltip: {
            format: "<b>{{category}}</b><br/><b>Max: </b>{{point.maxValue}}<br/><b>Min: </b>{{point.minValue}}",
        },
    },
    url: "https://static.visuallyjs.com/data/chart/temperature-range.json",
}
