import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Detail extends Component {
  render () {
    return (
      <div>
        hello Detail
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
