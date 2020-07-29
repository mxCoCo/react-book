import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreator } from '../store'
import {
  WriterWrapper,
  WriterTitle,
  SearchSwitch,
  SwitchRefresh,
  WriterList,
  WriterItem,
  WriterInfo,
  WriterFocus,
  WriterAllBtn,
} from '../styled'


export class Writer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.changeRef = React.createRef()
  }

  componentDidMount () {
    this.props.getWriterListAction(this.props.pageSize)
  }

  render () {
    const { writerList, handleChangePageNo, pageNo, pageSize } = this.props
    return (
      <WriterWrapper>
        <WriterTitle>
          推荐作者
          <SearchSwitch onClick={handleChangePageNo.bind(this, this.changeRef, pageNo)}>
            <SwitchRefresh ref={this.changeRef} className="iconfontRefresh">&#xe619;</SwitchRefresh>
            换一批
          </SearchSwitch>
        </WriterTitle>
        <WriterList>
          {
            writerList.slice((pageNo - 1) * pageSize, pageNo * pageSize).map((item) => {
              return <WriterItem key={item.get("id")}>
                <img className="authorPic" src={item.get("imgUrl")} alt=""></img>
                <WriterInfo>
                  <h4 className="author">{item.get("author")}</h4>
                  <p className="desc">{item.get("desc")}</p>
                </WriterInfo>
                <WriterFocus>+关注</WriterFocus>
              </WriterItem>
            })
          }
        </WriterList>
        <WriterAllBtn>查看全部 &gt;</WriterAllBtn>
      </WriterWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  writerList: state.getIn(['home', 'writerList']),
  pageNo: state.getIn(['home', 'pageNo']),
  pageSize: state.getIn(['home', 'pageSize'])
})

const mapDispatchToProps = (dispatch) => ({
  getWriterListAction (pageSize) {
    const action = actionCreator.getWriterListAction(pageSize)
    dispatch(action)
  },
  handleChangePageNo (refreshDom, pageNo) {
    let angle = refreshDom.current.style.transform.replace(/[^0-9]/ig, '')
    if (angle) {
      angle = parseInt(angle, 10)
    } else {
      angle = 0
    }
    refreshDom.current.style.transform = 'rotate(' + (angle + 360) + 'deg)'
    const action = actionCreator.changePageNoAction(pageNo + 1)
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Writer)
