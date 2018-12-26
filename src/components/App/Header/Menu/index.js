import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Avatar from 'react-user-avatar';

import Dashboard from './Dashboard';
import ProfileMenu from './ProfileMenu';
import BellIcon from 'assets/icons/bell.svg';
import ChatIcon from 'assets/icons/chat.svg';
import UserIcon from 'assets/icons/tushant.png';
import DashboardIcon from 'assets/icons/dashboardIcon.svg';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 48px;
    margin-left: auto;
  `,
  Links = styled.div`
    display: flex;
    align-items: center;
    & > a {
      height: 48px;
      line-height: 48px;
      padding-left: 20px;
      padding-right: 20px;
      font-size: 15px;
      font-weight: 600;
      color: #fff;
      transition-property: background-color;
      &:hover {
        background-color: #579ef2;
      }
    }
  `,
  MenuButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 100%;
    cursor: pointer;
    transition-property: background-color;
    & > a {
      display: flex;
      flex: 1;
      height: 100%;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: #579ef2;
      }
      & > img {
        width: 15px;
      }
    }
  `,
  UserMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 100%;
    cursor: pointer;
    transition-property: background-color;
    & > img {
      width: 28px;
      height: 28px;
      border-radius: 50%;
    }
    &:hover {
      background-color: #579ef2;
    }
  `,
  UserMenuContainer = styled.div`
    position: relative;
    height: 100%;
    background-color: ${props => props.active && '#579ef2'};
  `,
  DashboardMenu = styled(UserMenu)`
    position: absolute;
    top: 0;
    right: 0;
    & > img {
      border-radius: 0;
      width: 16px;
      height: 16px;
    }
  `;

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      dashboardActive  : false,
      profileMenuActive: false
    };
    this.dashboardRef = React.createRef();
    this.profileMenuRef = React.createRef();
  }

  toggleDashboard = async() => {
    await this.setState({ dashboardActive: !this.state.dashboardActive });
  };

  toggleProfileMenu = () => {
    this.setState({ profileMenuActive: !this.state.profileMenuActive });
  };

  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Links>
            <Link to="/">Home</Link>
            <Link to="/network">Nursing Agency</Link>
            <Link to="/listings">Services</Link>
          </Links>
          <MenuButton>
            <img src={ChatIcon} />
          </MenuButton>
          <MenuButton>
            <Link to="#">
              <img src={BellIcon} />
            </Link>
          </MenuButton>
          <UserMenuContainer active={this.state.profileMenuActive}>
            <UserMenu onClick={this.toggleProfileMenu} ref={this.profileMenuRef}>
              <Avatar size={28} name="Tushant Khatiwada" color="#e77d00" className="small-avatar" src={UserIcon} />
            </UserMenu>
            <ProfileMenu
              user={{ personal: { first_name: 'Tushant', last_name: 'Khatiwada', job_title: 'Software Engineer' } }}
              onClick={this.toggleProfileMenu}
              menuRef={this.profileMenuRef}
              isMenuActive={this.state.profileMenuActive}
            />
          </UserMenuContainer>
          <DashboardMenu onClick={this.toggleDashboard} ref={this.dashboardRef}>
            <img src={DashboardIcon} />
          </DashboardMenu>
        </Wrapper>

        <Dashboard
          onToggle={this.toggleDashboard}
          menuRef={this.dashboardRef}
          isMenuActive={this.state.dashboardActive}
        />
      </React.Fragment>
    );
  }
}

export default Menu;
