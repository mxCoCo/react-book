import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  DetailWrapper,
  Header,
  Content,
} from './styled'

export class Detail extends Component {
  render () {
    return (
      <DetailWrapper>
        <Header>为什么被你们吹爆了的《哪吒》，我只看到了满屏的尴尬？</Header>
        <Content>
          <img className="pic" src="https://upload-images.jianshu.io/upload_images/12081621-b05fe51264d22dcb.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/400/format/webp" alt=""></img>
          <p>
            <b>昨天我看了个动画片。</b>片子讲的是一个村里有个小孩子自出生起体内就封印了一股强大的妖力，于是村民们把他当做妖怪，畏惧他，疏远他，避之唯恐不及。他表面上满不在乎，在村子里为非作歹，但内心深处却感到巨大的孤独，极度渴望被世人接纳……
            我说的不是《火影忍者》，是《哪吒》。
          </p>
        </Content>
      </DetailWrapper>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
