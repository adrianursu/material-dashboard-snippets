import React from "react";
import ChartistGraph from "react-chartist";
import "../../App.css";
import Card from "@material-ui/core/Card";

function Chart() {
  // ##############################
  // // // javascript library for creating charts
  // #############################
  var Chartist = require("chartist");

  // ##############################
  // // // variables used to create animation on charts
  // #############################
  var delays = 80,
    durations = 500;

  const completedTasksChart = {
    data: {
      labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
      series: [[230, 750, 450, 300, 280, 240, 200, 190]],
    },
    options: {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0,
      }),
      low: 0,
      high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    animation: {
      draw: function (data) {
        if (data.type === "line" || data.type === "area") {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path
                .clone()
                .scale(1, 0)
                .translate(0, data.chartRect.height())
                .stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint,
            },
          });
        } else if (data.type === "bar") {
          data.element.animate({
            opacity: {
              begin: (data.index + 1) * delays,
              dur: durations,
              from: 0,
              to: 1,
              easing: "ease",
            },
          });
        }
      },
    },
  };
  return (
    <>
      <Card>
        <ChartistGraph
          className="ct-chart successColor"
          data={completedTasksChart.data}
          type="Line"
          options={completedTasksChart.options}
          listener={completedTasksChart.animation}
        />
      </Card>

      <Card>
        <ChartistGraph
          className="ct-chart dangerColor"
          data={completedTasksChart.data}
          type="Bar"
          options={completedTasksChart.options}
          listener={completedTasksChart.animation}
        />
      </Card>
    </>
  );
}

export default Chart;
