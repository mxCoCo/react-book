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
  SearchTip,
  Addition,
  BigGlass,
  SearchTipTitle,
  SearchTipTitleSwitch,
  SearchTipList,
  SearchTipListItem,
  SwitchRefresh,
} from './styled'
import { connect } from 'react-redux';
import { actionCreator } from './store'

class Header extends Component {

  render () {
    const { focused, moveInTipList, getTipList, handleChangeMoveIn, handleChangePageNo, cacheTipList, pageNo, pageSize, tipList } = this.props
    const newTipList = tipList.toJS() // immutable数据转换为普通数据
    return (
      <Fragment>
        <HeaderWrapper>
          <Logo />
          <Nav>
            <NavItem className="flowLeft active"><i className="iconfont">&#xe786;</i> 首页</NavItem>
            <NavItem className="flowLeft"><i className="iconfont">&#xe61a;</i> 下载App</NavItem>
            <SearchItem>{/* 搜索框 */}
              <CSSTransition
                in={focused}
                timeout={300}
                classNames="slide"
                appear={true}
              >
                <SearchInput
                  onFocus={getTipList.bind(this, focused, cacheTipList, pageSize)}
                  onBlur={getTipList.bind(this, focused, cacheTipList, pageSize)}
                />
              </CSSTransition>
              <BigGlass className={focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</BigGlass>
              <SearchTip
                className={focused || moveInTipList ? 'showSearchTip' : ''}
                onMouseOver={handleChangeMoveIn.bind(this, moveInTipList)}
                onMouseOut={handleChangeMoveIn.bind(this, moveInTipList)}
              >
                <SearchTipTitle>
                  热门
                  <SearchTipTitleSwitch onClick={handleChangePageNo.bind(this, pageNo, this.refreshRef)}>
                    <SwitchRefresh ref={(refresh) => this.refreshRef = refresh} className="iconfontRefresh">&#xe619;</SwitchRefresh>
                    换一批
                  </SearchTipTitleSwitch>
                </SearchTipTitle>
                <SearchTipList>
                  {
                    newTipList.slice((pageNo - 1) * pageSize, pageNo * pageSize).map((item, index) => {
                      return <SearchTipListItem key={index}>{item}</SearchTipListItem>
                    })
                  }
                </SearchTipList>
              </SearchTip>
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

const mapStateToProps = (state) => {
  return {
    // focused: state.get('header').get('focused'),//combineReducers管理之后，state的数据的前面要加前缀header
    focused: state.getIn(['header', 'focused']),//combineReducers管理之后，state的数据的前面要加前缀header
    moveInTipList: state.getIn(['header', 'moveInTipList']),
    // tipList: [...state.getIn(['header', 'tipList'])],
    tipList: state.getIn(['header', 'tipList']),
    pageNo: state.getIn(['header', 'pageNo']),
    pageSize: state.getIn(['header', 'pageSize']),
    cacheTipList: state.getIn(['header', 'cacheTipList']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTipList (facused, cacheTipList, pageSize) {
      const action = actionCreator.getFocusTipValuesAction(!facused, cacheTipList, pageSize)
      dispatch(action)
    },
    handleChangeMoveIn (moveInTipList) {
      const action = actionCreator.changeMoveInAction(!moveInTipList)
      dispatch(action)
    },
    handleChangePageNo (pageNo, refreshDom) {
      let angle = refreshDom.style.transform.replace(/[^0-9]/ig, '')
      if (angle) {
        angle = parseInt(angle, 10)
      } else {
        angle = 0
      }
      refreshDom.style.transform = 'rotate(' + (angle + 360) + 'deg)'
      const action = actionCreator.changePageNoAction(pageNo + 1)
      dispatch(action)
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)