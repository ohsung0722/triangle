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
        체육분과 : '#BFD8B8',
        공연분과 : '#FFFFB3',
        학술분과 : '#D2F6C5'
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

    const pieGenerator = d3.pie()
      .value(d => d.count)
      .sort(null);
    const arcGenerator = d3.arc()
      .innerRadius(0)
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
      .append('title')
        .text(d => `${d.data.category}: ${d.data.count}개`);

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
      <svg ref={svgRef} className='pie-chart' />
    </div>
  );
};

export default PieGraph;
