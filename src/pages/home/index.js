import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Topic from './component/Topic'
import List from './component/List'
import Writer from './component/Writer'
import Recommend from './component/Recommend'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
} from './styled'

export class Home extends Component {
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
            <Writer></Writer>
          </HomeRight>
        </HomeWrapper>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
