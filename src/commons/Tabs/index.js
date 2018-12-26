import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Tab from './Tab';

type Props = {
  data: Array<Object>,
  location: Object,
  disabled?: Array
}

const
  Wrapper = styled.div`
    display: flex;
  `;

// eslint-disable-next-line
class DataTabs extends React.Component<Props> {
  static defaultProps = {
    disabled: []
  };

  render() {
    const { data, disabled, location } = this.props;
    return (
      <Wrapper>
        {data.map((item, index) => (
          <Tab
            key={item.label}
            item={item}
            isactive={location.pathname === item.path}
            disabled={disabled.indexOf(index) !== -1}
          />
        ))}
      </Wrapper>
    );
  }
}


export default withRouter(DataTabs);
