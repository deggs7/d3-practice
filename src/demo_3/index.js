var d3 = require('d3/d3.js');

var width = '600';
var height = '400';
var data_1 = [432, 938, 373, 946, 123];
var data_2 = [432, 938, 373, 946, 123];

function run() {

  // linear
  var min = d3.min(data_1);
  var max = d3.max(data_1);
  var linear = d3.scale.linear()
    .domain([min, max])
    .range([0, 300]);

  //ordinal
  var index = [0, 1, 2, 3, 4];
  var color = ['red', 'orange', 'yellow', 'green', 'blue'];
  var ordinal = d3.scale.ordinal()
    .domain(index)
    .range(color);

  var svg = d3.select('body .main')
    .style('border', '1px solid #333')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    ;

  var rectHeight = 20;

  svg.selectAll('rect')
    .data(data_1)
    .enter()
    .append('rect')
    .attr('x', 20)
    .attr('y', function (d, i) {
      return i * (rectHeight + 5) + 100;
    })
    .attr('width', function (d) {
      return linear(d);
    })
    .attr('height', rectHeight)
    .attr('fill', 'steelblue');

};

module.exports.run = run;
