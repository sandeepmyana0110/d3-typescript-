"use strict";
exports.__esModule = true;
// Import D3 library if necessary
var d3 = require("d3");
var xdata = [5, 10, 15, 20];
var ydata = [3, 17, 4, 6];
var margin = { top: 20, right: 15, bottom: 60, left: 60 };
var width = 960 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;
var x = d3.scaleLinear()
    .domain([0, d3.max(xdata)])
    .range([0, width]);
var y = d3.scaleLinear()
    .domain([0, d3.max(ydata)])
    .range([height, 0]);
var chart = d3.select('body')
    .append('svg')
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
    .attr('class', 'chart');
var main = chart.append('g')
    .attr('transform', "translate(".concat(margin.left, ", ").concat(margin.top, ")"))
    .attr('width', width)
    .attr('height', height)
    .attr('class', 'main');
// Draw the x axis
var xAxis = d3.axisBottom(x);
main.append('g')
    .attr('transform', "translate(0, ".concat(height, ")"))
    .attr('class', 'main axis date')
    .call(xAxis);
// Draw the y axis
var yAxis = d3.axisLeft(y);
main.append('g')
    .attr('transform', 'translate(0,0)')
    .attr('class', 'main axis date')
    .call(yAxis);
var g = main.append("g");
function redraw() {
    var dots = g.selectAll("scatter-dots")
        .data(ydata);
    dots.enter().append("circle")
        .attr("cy", function (d) { return y(d); })
        .attr("cx", function (d, i) { return x(xdata[i]); })
        .attr("r", 10)
        .style("opacity", 0.6);
    dots.exit().remove();
}
