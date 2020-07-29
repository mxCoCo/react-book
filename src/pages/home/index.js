import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import Topic from './component/Topic'
import List from './component/List'
import Recommend from './component/Recommend'
import Dimensional from './component/Dimensional'
import Writer from './component/Writer'
import { actionCreator } from './store'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop,
} from './styled'

export class Home extends PureComponent {
  handleScrollTop () {
    window.scrollTo(0, 0)
  }

  componentDidMount () {
    this.bindEvent()
  }

  bindEvent () {
    window.addEventListener('scroll', this.props.handleChangeSroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.handleChangeSroll)
  }

  render () {
    return (
      <Fragment>
        <HomeWrapper>
          <HomeLeft>
            <div className="banner-img"></div>
            <Topic></Topic>
            <List></List>
          </HomeLeft>
          <HomeRight>
            <Recommend></Recommend>
            <Dimensional></Dimensional>
            <Writer></Writer>
          </HomeRight>
        </HomeWrapper>
        <BackTop className={this.props.showScroll ? 'showScroll' : ''} onClick={this.handleScrollTop}>顶部</BackTop>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
  handleChangeSroll () {
    let scrollTopFlag = false
    const scrollTop = document.documentElement.scrollTop
    if (scrollTop > 400) {
      scrollTopFlag = true
    } else {
      scrollTopFlag = false
    }
    const action = actionCreator.changeShowScrollAction(scrollTopFlag)
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
