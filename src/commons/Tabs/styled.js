import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledTabs = styled.div`
& :first-child {
  margin-left: 0px;
}
`;

export const StyledTab = styled.div`
  display: inline-block;
  margin-right: 40px;
  cursor: pointer;
  ${props => props.tabstate === 'active' && `
      border-bottom: 2px solid;
      border-bottom-color: #2184DC;
    `}
  ${props => props.tabstate === 'disabled' && `
      opacity: 0.25;
      cursor: default;
    `}
`;

export const StyledNavLink = styled(NavLink)`
  && {
    color: ${props => props.tabstate === 'active' ? '#2184DC' : props.color || '#1B1D1F'};
    padding: 14px 0 12px;
    display: block;
  }
`;
