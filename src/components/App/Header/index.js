import React from 'react';

import Menu from './Menu';
import Search from './Search';

import styled from 'styled-components';
import LogoIcon from 'assets/icons/Logo.svg';

const
  Wrapper = styled.div`
    height: 48px;
	  background-color: #4a90e2;
	  position: relative;
    z-index: 5;
  `,
  Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1170px;
    min-width: 991px;
    padding: 0 20px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    background-color: #4a90e2;
  `,
  Logo = styled.div`
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    background-image: url(${LogoIcon});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `;

const
  Header = () => {
    return <Wrapper>
      <Container>
        <Logo />
        <Search />
        <Menu />
      </Container>
    </Wrapper>;
  };

export default Header;
