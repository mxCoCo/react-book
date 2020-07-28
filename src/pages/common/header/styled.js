import styled from 'styled-components'
import logo from '../../../static/images/logo.png'
import beta from '../../../static/images/diamond-beta.png'

export const HeaderWrapper = styled.div`
  min-width: 768px;
  max-width: 1440px;
  box-sizing: border-box;
  height:58px;
  border-bottom: 1px solid #f0f0f0;
  float: left;
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
  margin-left: 180px;
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
  position: relative;
  height:38px;
  margin: 10px 0 0 20px;
  border-radius: 40px;
  float: left;
  background: #eee;
`
export const SearchInput = styled.input.attrs({
  placeholder: '搜索'
})`
  height:36px;
  width: 160px;
  border-radius: 40px;
  margin: 0 40px 0 20px;
  box-sizing:border-box;
  border: none;
  outline: none;
  font-size: 14px;
  background: #eee;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.slide-enter, &.slide-appear{
    transition: all .3s ease-out;
  }
  &.slide-enter-active, &.slide-appear-active {
    width: 240px;
  }
  &.slide-enter-done{
    width: 240px;
  }
  &.slide-exit {
    transition: all .3s ease-in;
  }
  &.slide-exit-active {
    width: 160px;
  }
  &.slide-exit-done {
    width: 160px;
  }
 
`
export const BigGlass = styled.span`
  position: absolute;
  top:4px;
  right: 5px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  text-align: center;
  line-height:30px;
  cursor: pointer;
  &.focused {
    background-color: #969696;
    color:  #fff;
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
export const SearchTip = styled.div`
  position: absolute;
  left: 0;
  top: 38px;
  width: 180px;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  display: none;
  &.showSearchTip {
    display: block;
  }
`
export const SearchTipTitle = styled.div`
  margin: 20px 0 10px 0;
  font-size: 14px;
  color: #969696;
`
export const SearchTipTitleSwitch = styled.span`
  font-size: 13px;
  float: right;
  cursor: pointer;
`
export const SearchTipList = styled.div`
  float: left;
  padding-bottom: 15px;

`
export const SearchTipListItem = styled.a`
  font-size: 12px;
  float: left;
  line-height:20px;
  margin: 10px 10px 0 0;
  padding: 0 5px;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: #787878;
  cursor: pointer;

`

export const SwitchRefresh = styled.span`
  float: left;
  margin-right: 5px;
  cursor: pointer;
  transition: all .3s ease-in;
`