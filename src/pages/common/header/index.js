import React, { Component, Fragment } from 'react'
import {
  CSSTransition,
} from 'react-transition-group';
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
        <SearchItem>{/* 搜索框 */}
            <CSSTransition
            in={this.state.focused}
            timeout={500}
            classNames="slide"
            appear={true}
            >
          <SearchInput 
          onFocus={this.handleInputFocus}
          onBlur={this.handleInputFocus}
          />
            </CSSTransition>
          <BigGlass className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</BigGlass>
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

  handleInputFocus = () => {
    this.setState({
      focused: !this.state.focused
    })
  }
}
