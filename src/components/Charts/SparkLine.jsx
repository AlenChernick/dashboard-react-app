//function component have bugs with syncfusion lib only for sparline chart so i used class component for this.

import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

class SparkLine extends React.PureComponent {
  render() {
    const { id, height, width, color, data, type, currentColor } = this.props;

    return (
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType='Numeric'
        fill={color}
        border={{ color: currentColor, width: 2 }}
        tooltipSettings={{
          visible: true,
          format: '${x} : data ${yval}',
          trackLineSettings: {
            visible: true,
          },
        }}
        markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
        dataSource={data}
        xName='x'
        yName='yval'
        type={type}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }
}

export default SparkLine;

// const SparkLine = ({ currentColor, id, type, height, width, data, color }) => {
//   return (
//     <SparklineComponent
//       id={id}
//       height={height}
//       width={width}
//       lineWidth={1}
//       valueType='Numeric'
//       fill={color}
//       border={{ color: currentColor, width: 2 }}
//       dataSource={data}
//       markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
//       xName='xval'
//       yName='yval'
//       type={type}
//       tooltipSettings={{ visible: true, format: '${xval} : data ${yval}', trackLineSettings: { visible: true } }}
//     >
//       <Inject services={[SparklineTooltip]} />
//     </SparklineComponent>
//   );
// };

// export default SparkLine;
