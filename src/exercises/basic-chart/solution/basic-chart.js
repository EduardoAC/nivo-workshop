import React from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import { Pie } from '@nivo/pie';

const PieChart = ({data}) => {
  const transformedData = data.assetClasses.map((assetClass, index) => ({
    id: assetClass,
    value: data.percentages[index],
    color: data.colors[index],
  }));
  return (
    <Pie
      data={transformedData}
      innerRadius={0.7}
      padAngle={0.7}
      margin={{
        top: 7.5,
        right: 7.5,
        bottom: 7.5,
        left: 7.5,
      }}
      height={200}
      width={200}
      colorBy={nodeData => nodeData.color}
      borderWidth={1}
      borderColor="inherit:darker(0.2)"
      enableRadialLabels={false}
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="#fff"
      sliceLabel={nodeData => nodeData.value + ' %'}
      isInteractive={false}
    />
  );
};
PieChart.propTypes = {
  data: shape({
    assetClasses: arrayOf(string),
    percentages: arrayOf(number),
    colors: arrayOf(string),
  }),
};

export default PieChart;