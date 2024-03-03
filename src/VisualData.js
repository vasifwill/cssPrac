import React, {useState, useEffect, useRef} from 'react';
import * as d3 from 'd3';

export const VisualData = () => {
  const [data] = useState([25, 30, 40, 100, 110])
  const svgRef = useRef()

  //set svg attributes
  useEffect(() => {
    const svg = d3.select(svgRef.current)
  .attr('width', 400)
  .attr('height', 100)
  .style('background-color', 'beige')
  .style('margin','50')
  .style('overflow', 'visible')

  //scale
  const xScale = d3.scaleLinear()
  .domain([0, data.length-1])
  .range([0, 400]);

  const yScale = d3.scaleLinear()
  .domain([0, 100])
  .range([100, 0]);

  // adding scadeline
   const generateScaledLine = d3.line()
   .x((d,i) => xScale(i))
   .y(yScale)
   .curve(d3.curveCardinal)

   // setting axes side numbers
const xAxis =d3.axisBottom(xScale)
.ticks(data.length)
.tickFormat(i => i+1)

const yAxis =d3.axisLeft(yScale)
.ticks(5)

svg.append('g')
.call(xAxis)
.attr('transform', `translate(0, ${100})`)

svg.append('g')
.call(yAxis)

//setting axes
svg.selectAll('.line')
.data([data])
.join('path')
.attr('d', d => generateScaledLine(d))
.attr('fill', 'none')
.attr('stroke', 'red')



  }, [data])
  
  return (
    <div>
    <h1>This is Visual schema</h1>
      <svg ref={svgRef}></svg>
    </div>
  )
}
