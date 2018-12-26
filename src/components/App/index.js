import React from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import Home from './Home';

const Body = styled.div`
  display: flex;
  overflow-y: scroll;
  flex: 1;
  justify-content: center;
  background: #f4f4f4;
`;

const Main = styled.div`
  overflow-x: auto;
  overflow-y: auto;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  min-width: 991px;
  height: 100%;
  margin: 0;
  color: #1b1d1f;
  font-size: 16px;
`;

const
  App = () => (
    <Main>
      <Header />
      <Body>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
        </Switch>
      </Body>
    </Main>
  );

export default withRouter(App);
