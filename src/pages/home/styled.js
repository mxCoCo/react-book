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
  width: 280px;
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
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px auto 60px;
  text-align: center;
  font-size: 15px;
  color: #fff;
  border-radius: 20px;
  background-color: #a5a5a5;
  cursor: pointer;
`
export const RecommendWrapper = styled.div`
  width: 280px;
  margin: 30px 0 6px 0;
`
export const RecommendItem = styled.div`
  margin-bottom: 10px;
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: cover;
`
export const DimensionalWrapper = styled.div`
  margin-bottom: 30px;
  padding: 10px 22px;
  font-size: 17px;
  color: #333;
  background: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  overflow: hidden;
  .dimenPic {
    float: left;
    width: 60px;
    height: 60px;
  }
`
export const DimensionalInfo = styled.div`
  margin-left: 10px;
  padding: 10px 0;
  width: 143px;
  height: 60px;
  box-sizing: border-box;
  float: left;
  .title {
    font-size: 15px;
    color: #333;
  }
  .desc {
    font-size: 13px;
    color: #999;
    margin-top: 8px;
  }
`
export const WriterWrapper = styled.div`
  width: 280px;
`
export const WriterTitle = styled.div`
  padding: 10px 0;
  font-size: 14px;
  color: #969696;
`
export const SearchSwitch = styled.span`
  font-size: 13px;
  float: right;
  cursor: pointer;
`
export const SwitchRefresh = styled.span`
  float: left;
  margin-right: 5px;
  cursor: pointer;
  transition: all .3s ease-in;
`
export const WriterList = styled.div`
  width: 280px;
  margin-bottom: 20px;
  overflow: hidden;
`
export const WriterItem = styled.div`
  overflow: hidden;
  margin-top: 15px;
  .authorPic {
    float: left;
    width: 48px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 50%;
    margin-right: 10px;
  }
`
export const WriterInfo = styled.div`
  padding: 5px 0;
  box-sizing: border-box;
  float: left;
  .author {
    margin-top: 5px;
    font-size: 14px;
    color: #333;
  }
  .desc {
    margin-top: 10px;
    font-size: 12px;
    color: #969696;
  }
`
export const WriterFocus = styled.div`
  float: right;
  margin-top: 5px;
  padding: 0;
  font-size: 13px;
  color: #42c02e;
`
export const WriterAllBtn = styled.div`
  padding: 10px 7px 10px 12px;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
`
export const BackTop = styled.div`
  position: fixed;
  right: 80px;
  bottom: 80px;
  box-sizing: border-box;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  font-size: 13px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #333;
  display: none;
  &.showScroll {
    display: block;
  }
`