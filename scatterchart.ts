// Import D3 library if necessary
import * as d3 from 'd3';

const xdata: number[] = [5, 10, 15, 20];
const ydata: number[] = [3, 17, 4, 6];

const margin = { top: 20, right: 15, bottom: 60, left: 60 };
const width: number = 960 - margin.left - margin.right;
const height: number = 500 - margin.top - margin.bottom;

const x = d3.scaleLinear()
    .domain([0, d3.max(xdata)!])
    .range([0, width]);

const y = d3.scaleLinear()
    .domain([0, d3.max(ydata)!])
    .range([height, 0]);

const chart = d3.select('body')
    .append('svg')
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
    .attr('class', 'chart');

const main = chart.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)
    .attr('width', width)
    .attr('height', height)
    .attr('class', 'main');

// Draw the x axis
const xAxis = d3.axisBottom(x);

main.append('g')
    .attr('transform', `translate(0, ${height})`)
    .attr('class', 'main axis date')
    .call(xAxis);

// Draw the y axis
const yAxis = d3.axisLeft(y);

main.append('g')
    .attr('transform', 'translate(0,0)')
    .attr('class', 'main axis date')
    .call(yAxis);

const g = main.append("g");

function redraw() {
    let dots = g.selectAll<SVGCircleElement, number>("scatter-dots")
        .data(ydata);

    dots.enter().append("circle")
        .attr("cy", d => y(d))
        .attr("cx", (d, i) => x(xdata[i]))
        .attr("r", 10)
        .style("opacity", 0.6);

    dots.exit().remove();
}
