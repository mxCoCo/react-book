import styled from 'styled-components'
import banner from '../../static/images/banner.png'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`
export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
    background: url(${banner}) center center no-repeat;
    background-size: cover;
  }
`
export const HomeRight = styled.div`
  width: 240px;
  float: right;
`
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  margin: 0 12px 12px 0;
  padding-right: 10px;
  line-height: 32px;
  background: #f7f7f7;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  font-size: 14px;
  img {
    display: block;
    margin-right: 10px;
    float: left;
    height 32px;
    width: 32px;
  }
`
export const ListItem = styled.div`
  padding: 20px 0;
  overflow: hidden;
  order: 1px solid #dcdcdc;
  .pic {
    display: block;
    float: right;
    height 100px;
    width: 125px;
  }
`
export const ListInfo = styled.div`
  float: left;
  width: 500px;
  .title {
    font-size: 18px;
    line-height:27px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    font-size: 13px;
    line-height:24px;
    color: #999;
  }
`