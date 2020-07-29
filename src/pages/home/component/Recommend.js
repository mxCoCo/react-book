import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreator } from '../store'
import {
  RecommendWrapper,
  RecommendItem,
} from '../styled'

export class Recommend extends Component {
  componentDidMount () {
    this.props.getRecommendListAction()
  }

  render () {
    return (
      <RecommendWrapper>
        {
          this.props.recommendList.map((item) => {
            return (
              <RecommendItem key={item.get("id")} imgUrl={item.get("imgUrl")}></RecommendItem>
            )
          })
        }
      </RecommendWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  recommendList: state.getIn(['home', 'recommendList']) // 使用immutable.js遍历必须通过get方法获取对象属性值
})

const mapDispatchToProps = (dispatch) => ({
  getRecommendListAction () {
    const action = actionCreator.getRecommendListAction()
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)
