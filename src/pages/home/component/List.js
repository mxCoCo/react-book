import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreator } from '../store'
import {
  ListItem,
  ListInfo,
  LoadMore,
} from '../styled'

export class List extends Component {
  componentDidMount () {
    this.props.getAirticleListAction()
  }

  render () {
    return (
      <Fragment>
        {
          this.props.airticleList.map((item, index) => {
            return (
              <Link key={index} to="/detail">
                <ListItem>
                  <ListInfo>
                    <h3 className="title">{item.get("title")}</h3>
                    <p className="desc">{item.get("desc")}</p>
                  </ListInfo>
                  <img className="pic" src={item.get("imgUrl")} alt=""></img>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={this.props.getAirticleMoreListAction}>阅读更多</LoadMore>
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
  },
  getAirticleMoreListAction () {
    const action = actionCreator.getAirticleMoreListAction()
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
