import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { actionCreator /*, actionTypes*/ } from '../store'
import {
  TopicWrapper,
  TopicItem,
} from '../styled'

export class Topic extends Component {
  componentDidMount () {
    this.props.getTopicListAction()
  }
  render () {
    return (
      <Fragment>
        <TopicWrapper>
          {
            this.props.topicList.map((item) => {
              return <TopicItem key={item.get("id")}>
                <img src={item.get("imgUrl")} alt=""></img>
                {item.get("title")}
              </TopicItem>
            })
          }
        </TopicWrapper>
      </Fragment >
    )
  }
}

const mapStateToProps = (state) => ({
  topicList: state.getIn(['home', 'topicList']) // 使用immutable.js遍历必须通过get方法获取对象属性值
})

const mapDispatchToProps = (dispatch) => ({
  getTopicListAction () {
    const action = actionCreator.getTopicListAction()
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Topic)
