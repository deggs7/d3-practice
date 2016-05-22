var d3 = require('d3/d3.js');

var width = '600';
var height = '400';

function run() {
  var svg = d3.select('body .main')
    .style('border', '1px solid #333')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    ;
  var data_1 = [432, 938, 373, 946, 123];
  var data_2 = [432, 938, 373, 946, 123];

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
      return d;
    })
    .attr('height', rectHeight)
    .attr('fill', 'steelblue');

};

module.exports.run = run;
