import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
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
          <HomeLeft>HomeLeft</HomeLeft>
          <HomeRight>HomeRight</HomeRight>
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
