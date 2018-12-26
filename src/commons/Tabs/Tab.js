import React from 'react';

import { StyledTab, StyledNavLink } from './styled';

type Props = {
  item: Object,
  disabled: boolean,
  isactive: boolean,
  _onSelect: Function
}

function Tab({ item, disabled, isactive }: Props) {
  return (
    <StyledTab
      tabstate={disabled ? 'disabled' : isactive ? 'active' : ''}>
      <StyledNavLink to={item.path} tabstate={disabled ? 'disabled' : isactive ? 'active' : ''}>
        {item.label}
      </StyledNavLink>
    </StyledTab>
  );
}

export default Tab;
