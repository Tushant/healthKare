import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Svg = styled.svg`
  display: inline-block;
  fill: ${props => props.color};
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  user-select: none;
`;

const SvgIcon = ({
  children,
  color = '#000000',
  size = 24,
  viewBox = '0 0 24 24',
  ...others
}) => (
  <Svg color={color} size={size} viewBox={viewBox} {...others}>
    {children}
  </Svg>
);

SvgIcon.propTypes = {
  children: PropTypes.Node,
  color   : PropTypes.string,
  size    : PropTypes.number,
  viewBox : PropTypes.string
};

export default SvgIcon;
