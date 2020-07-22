import React, { Component, Fragment } from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
} from './styled'

export default class Header extends Component {
  render () {
    return (
      <Fragment>
        <HeaderWrapper>
          <Logo />
          <Nav />
        </HeaderWrapper>
      </Fragment>
    )
  }
}
