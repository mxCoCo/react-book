import styled from 'styled-components'
import logo from '../../../static/images/logo.png'

export const HeaderWrapper = styled.div`
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;
  height:58px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
`
export const Logo = styled.a.attrs({
  href: '/'
})`
  display: block;
  width:100px;
  height:56px;
  background: url(${logo}) center center no-repeat;
  background-size: cover;
`
export const Nav = styled.div`
  width:960px;
  height:58px;
  margin: 0 auto;
  padding: 0 10px;
  background: #f00;
`