import React, { Component, Fragment } from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchItem,
  SearchInput,
  Addition,
} from './styled'

export default class Header extends Component {
  render () {
    return (
      <Fragment>
        <HeaderWrapper>
          <Logo />
          <Nav>
            <NavItem className="flowLeft active">首页</NavItem>
            <NavItem className="flowLeft">下载App</NavItem>
            <SearchItem>{/* 搜索框 */}
              <SearchInput />
            </SearchItem>
            <NavItem className="flowRight">登录</NavItem>
            <NavItem className="flowRight" />{/* beta */}
            <NavItem className="flowRight">Aa</NavItem>
          </Nav>
          <Addition>
            <button>注册</button>
            <button>写文章</button>
          </Addition>
        </HeaderWrapper>
      </Fragment>
    )
  }
}
