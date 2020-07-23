import React, { Component, Fragment } from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchItem,
  SearchInput,
  Addition,
  BigGlass,
} from './styled'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }
  }
  render () {
    return (
      <Fragment>
        <HeaderWrapper>
          <Logo />
          <Nav>
            <NavItem className="flowLeft active"><i className="iconfont">&#xe786;</i> 首页</NavItem>
            <NavItem className="flowLeft"><i className="iconfont">&#xe61a;</i> 下载App</NavItem>
            <SearchItem className={this.state.focused ? 'focused' : ''}>{/* 搜索框 */}
              <SearchInput />
              <BigGlass className="iconfont">&#xe614;</BigGlass>
            </SearchItem>
            <NavItem className="flowRight">登录</NavItem>
            <NavItem className="flowRight" />{/* beta */}
            <NavItem className="flowRight iconfont">&#xe636;</NavItem>
          </Nav>
          <Addition>
            <button>注册</button>
            <button className="iconfont">&#xe708;写文章</button>
          </Addition>
        </HeaderWrapper>
      </Fragment>
    )
  }
}
