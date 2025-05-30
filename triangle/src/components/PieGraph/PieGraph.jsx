import React, { useRef, useEffect, useMemo } from 'react';
import * as d3 from 'd3';
import './PieGraph.css';

const PieGraph = ({ data}) => {
  const svgRef = useRef(null);

  const colorScale = useMemo(() => {
    const colors = {
        봉사분과 : '#FFC8A2',
        종교분과 : '#FFD1DC',
        문화분과 : '#C9C9FF',
        체육분과 : '#D2F6C5',
        공연분과 : '#FFFFB3',
        학술분과 : '#C2F6FF'
    };
    const domain = data.map(d => d.category);
    let range;

    if (colors && typeof colors === 'object') {
      range = domain.map(cat => colors[cat] || '#ccc');
    } else {
      range = d3.schemeCategory10;
    }

    return d3.scaleOrdinal()
      .domain(domain)
      .range(range);
  }, [data]);

  useEffect(() => {
    const counts = data;
    const width = 400;
    const height = 400;
    const margin = 40;
    const radius = Math.min(width, height) / 2 - margin;

    let tooltip = d3.select('body').select('.tooltip');
    if (tooltip.empty()) {
      tooltip = d3.select('body')
        .append('div')
        .attr('class', 'pie-chart-tooltip');
    }
    tooltip.style('opacity', 0);

    const pieGenerator = d3.pie()
      .value(d => d.count)
      .sort(null);
      
    const arcGenerator = d3.arc()
      .innerRadius(radius-70)
      .outerRadius(radius);

    const arcData = pieGenerator(counts);

    const svgEl = d3.select(svgRef.current);
    svgEl.selectAll('*').remove();

    const svg = svgEl
      .attr('width', width)
      .attr('height', height)
      .append('g')
        .attr('transform', `translate(${width/2},${height/2})`);

    svg.selectAll('path')
      .data(arcData)
      .join('path')
        .attr('d', arcGenerator)
        .attr('fill', d => colorScale(d.data.category))
        .attr('stroke', '#fff')
        .attr('stroke-width', 2)
        .on('mouseover', (event, d) => {
          tooltip
            .transition()
            .duration(200)
            .style('opacity', 1);
          tooltip
            .html(`<strong>${d.data.category}</strong><br/>${d.data.count}개`)
            .style('left', `${event.pageX + 10}px`)
            .style('top', `${event.pageY + 10}px`);
        })
        .on('mousemove', (event) => {
          tooltip
            .style('left', `${event.pageX + 10}px`)
            .style('top', `${event.pageY + 10}px`);
        })
        .on('mouseout', () => {
          tooltip
            .transition()
            .duration(200)
            .style('opacity', 0);
        });

    svg.selectAll('text')
      .data(arcData)
      .join('text')
        .attr('transform', d => `translate(${arcGenerator.centroid(d)})`)
        .attr('text-anchor', 'middle')
        .attr('dy', '0.35em')
        .text(d => d.data.count)
        .style('font-size', '12px')
        .style('fill', '#333');
  }, [data, colorScale]);

  return (
    <div className='pie-chart-container'>
      <svg ref={svgRef} className='pie-chart' />
      <div className='pie-chart-label-container'>
        {data.map((d, i) => (
          <div key={i} className='legend-item'>
            <span
              className='legend-color-box'
              style={{ backgroundColor: colorScale(d.category) }}
            />
            <span className='legend-text'>
              {d.category} ({d.count})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieGraph;
