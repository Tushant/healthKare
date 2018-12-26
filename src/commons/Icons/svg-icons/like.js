import React from 'react';
import SvgIcon from 'commons/Icons';

const
  Like = ({ svgWidth, svgHeight, fillColor = '#2184DC', svgSize = 16, ...others }: Props) => (
    <SvgIcon width={svgWidth || svgSize} height={svgHeight || svgWidth || svgSize} viewBox="0 0 10 10" {...others}>
      <path
        d="M4.5 0L4.1123 1.70898L2.75684 3.21484C2.59134 3.39834 2.5 3.63679 2.5 3.88379V8.5C2.5 9.0525 2.9475 9.5 3.5 9.5H7.51562C7.88613 9.5 8.22157 9.28186 8.37207 8.94336L9.87305 5.56543C9.95655 5.37843 10 5.1757 10 4.9707V4.5C10 3.95 9.55 3.5 9 3.5H5.5C5.5 3.5 6 2.31464 6 1.43164C6 0.0606407 4.5 0 4.5 0ZM0 3.5V9.5H1.5V3.5H0Z"
        fill={fillColor}
      />
    </SvgIcon>
  );

export default Like;
