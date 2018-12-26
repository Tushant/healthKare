import React from 'react';

import { Box, Text } from 'commons/styled';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import searchIcon from 'assets/icons/search.svg';
import searchIconWhite from 'assets/icons/search-white.svg';
import BrokersIcon from 'assets/icons/brokers.svg';
import AgentsIcon from 'assets/icons/agents.svg';
import ListingsIcon from 'assets/icons/listings.svg';
import MapPinIcon from 'assets/icons/mappin.svg';

const
  SearchWrapper = styled.div`
    position: relative;
  `,
  SearchResultWrapper = styled(Box)`
    display: none;
    border: 1px solid #CFCFCF;
    position: absolute;
    z-index: 2;
    top: 42px;
    left: 22px;
    width: calc(100% + 180px);
  `,
  SearchInput = styled.input`
    background-color: #fff;
    margin-left: 22px;
    height: 40px;
    min-width: 310px;
    border-radius: 4px;
    padding: 0 20px 0 40px;
    font-size: 15px;
    color: #000;
    background: url(${searchIconWhite}) no-repeat 13px 12px #6ba4e6;
    background-size: 15px;
    &::placeholder {
      color: #fff;
    }
    color: #fff;
    transition: background 0.2s ease;
    &:focus {
      background: url(${searchIcon}) no-repeat 13px 12px #ffffff;
      background-size: 15px;
      color: #000;
    }
    &:focus + ${SearchResultWrapper} {
      display: block;
    }
  `,

  SearchToolTip = styled.div`

  `,
  Label = styled(Text)`
    padding: 20px 20px 15px;
    font-weight: 600;

  `,
  Links = styled.div`
    display: flex;
    flex-direction: column;
    & > a {
      padding: 12px 20px;
      color: #1b1d1f;
      font-size: 15px;
      transition-property: background;
      display: flex;
      align-items: center;
      & > icon {
        width: 16px;
        margin-right: 15px;
        & > img {
          max-width: 100%;
        }
      }
      &:hover {
        background: #e9e9e9;
      }
    }
  `,
  SeeAll = styled(NavLink)`
    background: #ECF4FD;
    font-size: 15px;
    font-weight: 600;
    color: #2184DC;
    padding: 15px 20px;
    display: block;
  `;

const
  SearchFor = [
    { anchor: '#', label: 'Private/Homecare Nursing', icon: BrokersIcon },
    { anchor: '#', label: 'Nursing Agency', icon: AgentsIcon },
    { anchor: '#', label: 'Hospital To Home Care', icon: ListingsIcon },
  ],
  Result = [
    { anchor: '#', label: 'New Search 1', icon: MapPinIcon },
    { anchor: '#', label: 'New Search 2', icon: MapPinIcon },
    { anchor: '#', label: 'New Search 3', icon: MapPinIcon }
  ];


class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: ''
    };
  }

  onSearch = async({ target: { value } }) => {
    await this.setState({ searchText: value });
  }

  render() {
    return <SearchWrapper>
      <SearchInput type="text" placeholder="Search" onChange={this.onSearch} />
      <SearchResultWrapper>
        <SearchToolTip>
          {!this.state.searchText.length && <React.Fragment>
            <div>
              <Label type="medium">Search for</Label>
              <Links>
                {SearchFor.map(item => <NavLink to={item.anchor}>
                  {item.icon && <icon>
                    <img src={item.icon} alt="" />
                  </icon>}
                  {item.label}
                </NavLink>)}
              </Links>
            </div>
            <div>
              <Label type="medium">Recent Searches</Label>
              <Links>
                <NavLink to="#">
                  New Listings
                </NavLink>
              </Links>
            </div>
          </React.Fragment>}
          {this.state.searchText.length ? <React.Fragment>
            <div>
              <Links>
                {Result.map(item => <NavLink to={item.anchor}>
                  {item.icon && <icon>
                    <img src={item.icon} alt="" />
                  </icon>}
                  {item.label}
                </NavLink>)}
              </Links>
            </div>
            <SeeAll to="#">See all "{this.state.searchText}"</SeeAll>
          </React.Fragment> : null}
        </SearchToolTip>
      </SearchResultWrapper>
    </SearchWrapper>;
  }
}

export default Search;
