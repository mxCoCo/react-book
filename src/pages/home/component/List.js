import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { actionCreator } from '../store'
import {
  ListItem,
  ListInfo,
} from '../styled'

export class List extends Component {
  componentDidMount () {
    this.props.getAirticleListAction()
  }

  render () {
    return (
      <Fragment>
        {
          this.props.airticleList.map((item) => {
            return (
              <ListItem key={item.get("id")}>
                <ListInfo>
                  <h3 className="title">{item.get("title")}</h3>
                  <p className="desc">{item.get("desc")}</p>
                </ListInfo>
                <img className="pic" src={item.get("imgUrl")} alt=""></img>
              </ListItem>
            )
          })
        }
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  airticleList: state.getIn(['home', 'airticleList']) // 使用immutable.js遍历必须通过get方法获取对象属性值
})

const mapDispatchToProps = (dispatch) => ({
  getAirticleListAction () {
    const action = actionCreator.getAirticleListAction()
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
