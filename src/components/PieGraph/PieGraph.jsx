// PieGraph 컴포넌트 - 동아리 분과별 분포를 보여주는 파이 차트 컴포넌트
import React, { useRef, useEffect, useMemo } from 'react';
import * as d3 from 'd3';
import './PieGraph.css';

// props 설명
// data: 차트에 표시할 데이터 배열 (category와 count 속성을 가진 객체들의 배열)
const PieGraph = ({ data }) => {
  // SVG 요소 참조
  const svgRef = useRef(null);

  // 분과별 색상 스케일 설정
  const colorScale = useMemo(() => {
    // 분과별 색상 매핑
    const colors = {
      봉사분과: "#81c784",  // 초록색
      종교분과: "#ffb74d",  // 주황색
      문화분과: "#ba68c8",  // 보라색
      체육분과: "#ED1C24",  // 빨간색
      공연분과: "#f06292",  // 분홍색
      학술분과: "#64b5f6",  // 파란색
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

  // 차트 렌더링 및 업데이트
  useEffect(() => {
    const counts = data;
    const width = 400;
    const height = 400;
    const margin = 40;
    const radius = Math.min(width, height) / 2 - margin;

    // 툴팁 설정
    let tooltip = d3.select('body').select('.tooltip');
    if (tooltip.empty()) {
      tooltip = d3.select('body')
        .append('div')
        .attr('class', 'pie-chart-tooltip');
    }
    tooltip.style('opacity', 0);

    // 파이 차트 생성기 설정
    const pieGenerator = d3.pie()
      .padAngle(0.02)
      .value(d => d.count)
      .sort(null);
      
    // 아크 생성기 설정
    const arcGenerator = d3.arc()
      .innerRadius(radius-70)
      .outerRadius(radius);

    const arcData = pieGenerator(counts);

    // SVG 초기화
    const svgEl = d3.select(svgRef.current);
    svgEl.selectAll('*').remove();

    // SVG 설정
    const svg = svgEl
      .attr('width', width)
      .attr('height', height)
      .append('g')
        .attr('transform', `translate(${width/2},${height/2})`);

    // 파이 차트 섹션 그리기
    svg.selectAll('path')
      .data(arcData)
      .join('path')
        .attr('d', arcGenerator)
        .attr('fill', d => colorScale(d.data.category))
        .attr('stroke', '#fff')
        .attr('stroke-width', 2)
        // 마우스 오버 이벤트
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
        // 마우스 이동 이벤트
        .on('mousemove', (event) => {
          tooltip
            .style('left', `${event.pageX + 10}px`)
            .style('top', `${event.pageY + 10}px`);
        })
        // 마우스 아웃 이벤트
        .on('mouseout', () => {
          tooltip
            .transition()
            .duration(200)
            .style('opacity', 0);
        });

    // 섹션 내부 텍스트 추가
    svg.selectAll('text')
      .data(arcData)
      .join('text')
        .attr('transform', d => `translate(${arcGenerator.centroid(d)})`)
        .attr('text-anchor', 'middle')
        .attr('dy', '0.35em')
        .text(d => d.data.count)
        .style('font-size', '20px')
        .style('fill', '#ffffff')
  }, [data, colorScale]);

  return (
    <div className='pie-chart-container'>
      {/* 파이 차트 SVG */}
      <svg ref={svgRef} className='pie-chart' />
      {/* 범례 컨테이너 */}
      <div className='pie-chart-label-container'>
        {data.map((d, i) => (
          <div key={i} className='legend-item'>
            {/* 범례 색상 박스 */}
            <span
              className='legend-color-box'
              style={{ backgroundColor: colorScale(d.category) }}
            />
            {/* 범례 텍스트 */}
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
