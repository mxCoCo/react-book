import styled from 'styled-components'
import logo from '../../../static/images/logo.png'
import beta from '../../../static/images/diamond-beta.png'

export const HeaderWrapper = styled.div`
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;
  height:58px;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
  href: '/'
})`
  display: block;
  float: left;
  width:100px;
  height:56px;
  background: url(${logo}) center center no-repeat;
  background-size: cover;
`
export const Nav = styled.div`
  width:980px;
  height:58px;
  margin: 0 auto;
  padding: 0 15px;
  color: #333;
  font-size: 17px;
`
export const NavItem = styled.div`
  height:58px;
  color: #333;
  cursor: pointer;
  &.flowLeft {
    float: left;
  }
  &.flowRight {
    float: right;
  }
  &.active {
    color: #ea6f5a;
  }
  &:nth-of-type(1) {
    line-height: 26px;
    padding: 15px;
    margin-right: 10px;
  }
  &:nth-of-type(2) {
    line-height: 26px;
    padding: 15px;
  }
  &:nth-of-type(4) {
    margin: 0 50px 0 10px;
    padding: 15px 12px;
    line-height: 26px;
    font-size: 15px;
    color: #969696;
  }
  &:nth-of-type(5) {
    width: 56px;
    margin: 0 12px;
    background: url(${beta}) center center no-repeat;
    background-size: contain;
    font-weight: bold;
  }
  &:nth-of-type(6) {
    line-height: 26px;
    padding: 15px 10px;
    color: #969696;
  }
`
export const SearchItem = styled.div`
  height:38px;
  width: 160px;
  margin: 10px 0 0 20px;
  border-radius: 40px;
  float: left;
  background: #eee;
`
export const SearchInput = styled.input.attrs({
  placeholder: '搜索'
})`
  height:36px;
  width: 100px;
  margin: 0 40px 0 20px;
  border: none;
  outline: none;
  font-size: 14px;
  background: #eee;
  &::placeholder {
    color: #999;
  }
`
export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 240px;
  height 58px;
  button {
    height:38px;
    width: 80px;
    margin: 10px 0 0 20px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    background-color: transparent;
    &:nth-of-type(2) {
      width: 100px;
      color: #fff;
      background-color: #ea6f5a;
    }
  }
`