//@flow

import React from 'react';
import styled, { css } from 'styled-components';

const Image = styled.img`
  ${props => props.css && css(...props.css)};
  ${props => props.size && `width: ${props.size}px; height: ${props.size}px`}
  border-radius: ${props => props.type && props.type === 'round' ? '50%' : 0};
`;

const NoImage = styled.div`
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  border-radius: ${props => props.type && props.type === 'round' ? '50%' : 0};
  background-color: #bdbdbd;
  color: #ffffff;
  line-height: ${props => `${props.size}px`};
  font-size: ${props => `${props.size / 2}px`};
  text-align: center;
`;

type Props = {
  name: string,
  url: string,
  css: string,
  size?: number
};

const Avatar = ({ name, url = '', size, css = {}, ...others }: Props) =>
  url !== '' ? (
    <Image {...others} src={url} size={size} css={css} />
  ) : (
    <NoImage {...others} size={size} css={css}>
      {name.substr(0, 1)}
    </NoImage>
  );

export default Avatar;
