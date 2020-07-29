import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  DetailWrapper,
} from './styled'

export class Detail extends Component {
  render () {
    return (
      <DetailWrapper>
        hello Detail
      </DetailWrapper>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
