import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from 'react-user-avatar';
import { NavLink } from 'react-router-dom';

import { getFullName } from 'commons/helpers';
import { Text } from 'commons/styled';
import theme from 'constants/theme';
import UserIcon from 'assets/icons/tushant.png';
import menu from './menu';
import clickDetector from 'commons/hoc/clickdetector';

const Item = `
    height: 36px;
    padding: 0 15px;
    color: ${theme.color.text.def};
    vertical-align: center;
    display: block;
    font-size: 13px;
    display: flex;
    align-items: center;
    &:hover {
      background-color: #f8f8f8;
    }
  `;

const
  MenuWrapper = styled.div `
    position: absolute;
    width: 300px;
    background-color: #fff;
    top: 47px;
    right: 0;
    width: 288px;
    padding: 15px 0 0;
    border: 1px solid #CFCFCF;
    box-shadow: 0px 1px 24px rgba(0, 0, 0, 0.0832201);
    border-radius: 2px;
    opacity: 0;
    transition-property: opacity;
    visibility: hidden;
    &.active {
      visibility: visible;
      opacity: 1;
    }
  `,
  Info = styled.div `
    display: flex;
    align-items: center;
    padding: 0 15px;
  `,
  ProfileLink = styled(NavLink) `
    margin: 15px 0 25px 70px;
    color: ${theme.color.text.link};
    font-size: 13px;
    font-weight: 600;
    display: block;
  `,
  Name = styled(Text) `
    font-weight: 600;
    margin-bottom: 4px;
  `,
  MenuItem = styled(NavLink) `${Item}`,
  Header = styled(Text) `
    background: #f2f2f2;
    font-weight: 600;
    height: 36px;
    vertical-align: center;
    padding: 0 15px;
    display: flex;
    align-items: center;
  `,
  LogOutButton = styled(Text) `
    ${Item}
    padding: 0 15px;
    border-top: 1px solid ${theme.color.border.def};
  `,
  Details = styled.div `
  flex: 1;
  margin-left: 10px;
`;

const ProfileMenu = ({ user, isMenuActive }) => {
  let name = getFullName(user.personal);
  return (
    <MenuWrapper className={isMenuActive && 'active'}>
      <div>
        <Info>
          <Avatar size={45} name={name} color="#e77d00" src={UserIcon} />
          <Details>
            <Name type="medium">{name}</Name>
            <Text fade>{user.personal.job_title}</Text>
          </Details>
        </Info>
        <ProfileLink to={`/profile/${user._id}`}>View Profile</ProfileLink>
      </div>
      {menu.map((item, index) => (
        <React.Fragment key={index}>
          <Header fade>
            {item.name.toUpperCase()}
          </Header>
          {item.subMenu.map((subMenuItem, subIndex) => {
            return (
              <MenuItem to={subMenuItem.link} key={subIndex}>
                {subMenuItem.name}
              </MenuItem>
            );
          })}
        </React.Fragment>
      ))}
      <LogOutButton>Log Out</LogOutButton>
    </MenuWrapper>
  );
};

ProfileMenu.propTypes = {
  isMenuActive: PropTypes.bool,
  onClick     : PropTypes.func.isRequired,
  user        : PropTypes.object
};

export default clickDetector(ProfileMenu);
