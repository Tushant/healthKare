import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const T = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: #686f7a;

  thead > tr > th {
    border-bottom: 1px solid #dedede;
    padding: 20px 0;
  }

  tbody:before {
    content: '-';
    display: block;
    line-height: 0.6em;
    color: transparent;
  }
`;

const Th = styled.th`
  text-align: ${props => (props.align || 'left')};
  font-size: 15px;
  color: #888888;
  text-transform: uppercase;
  font-weight: 400;
  ${props => props.css && css(...props.css)};
`;

const Td = styled.td`
  text-align: ${props => (props.align || 'left')};
  ${props => props.css && css(...props.css)};
`;

const Tr = styled.tr`
  border-bottom: 1px solid #dedede;
  ${props => props.css && css(...props.css)};
`;

const Table = ({
  columns,
  data = [],
  rowConfig: { uniqueKey = 'id', css, onClick } = {},
}: Props) => {
  const headerColumns = () =>
    Object.keys(columns).map(key => (
      <Th
        key={key}
        align={columns[key].align}
        width={columns[key].width}
        hideOnDesktop={columns[key].hideOnDesktop}
        hideOnTablet={columns[key].hideOnTablet}
        hideOnPhone={columns[key].hideOnPhone}
        css={columns[key].cssHeader}
      >
        {columns[key].label ? columns[key].label : ''}
      </Th>
    ));
  const cell = (key, item) => (
    <Td
      key={key}
      align={columns[key].align}
      width={columns[key].width}
      hideOnDesktop={columns[key].hideOnDesktop}
      hideOnTablet={columns[key].hideOnTablet}
      hideOnPhone={columns[key].hideOnPhone}
      css={columns[key].css}
    >
      {columns[key].content ? columns[key].content(item) : item[key]}
    </Td>
  );
  const row = (item: Object) => (
    <Tr key={item[uniqueKey]} css={css} onClick={onClick ? (e: Event) => onClick(e, item) : null}>
      {Object.keys(columns).map(key => cell(key, item))}
    </Tr>
  );
  return (
    <Main>
      <T>
        <thead>
          <tr>{headerColumns()}</tr>
        </thead>
        <tbody>{data.map(i => row(i))}</tbody>
      </T>
    </Main>
  );
};

Table.propTypes = {
  basePageLink: PropTypes.string,
  columns     : PropTypes.objectOf(
    PropTypes.shape({
      key          : PropTypes.string.isRequired,
      label        : PropTypes.string,
      align        : PropTypes.oneOf(['center', 'left', 'right']),
      width        : PropTypes.number,
      content      : PropTypes.function,
      css          : PropTypes.string,
      cssHeader    : PropTypes.string,
      hideOnDesktop: PropTypes.boolean,
      hideOnTablet : PropTypes.boolean,
      hideOnPhone  : PropTypes.boolean
    })
  ),
  currentPage: PropTypes.number,
  data       : PropTypes.arrayOf(PropTypes.object),
  pagination : PropTypes.bool,
  rowConfig  : PropTypes.shape({
    uniqueKey: PropTypes.string,
    css      : PropTypes.string,
    onClick  : PropTypes.function
  }),
  totalPages: PropTypes.number
};

export default Table;
