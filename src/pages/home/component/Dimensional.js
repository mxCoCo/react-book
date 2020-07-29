import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  DimensionalWrapper,
  DimensionalInfo,
} from '../styled'

export class Dimensional extends Component {
  render () {
    return (
      <DimensionalWrapper>
        <img className="dimenPic" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png" alt=""></img>
        <DimensionalInfo>
          <h3 className="title">下载简书手机App &gt;</h3>
          <p className="desc">随时随地发现和创作内容</p>
        </DimensionalInfo>
      </DimensionalWrapper>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Dimensional)
