import React from 'react';
import GoodsItem from '../goods-item';
import './index.less';

class Recommend extends React.Component {

  renderFooter() {
    const { isEnd } = this.props;
    return isEnd ?
      <div className="no-more">我是有底线的</div>
      : null
  }
  
  render() {
    const { list } = this.props;
    return (
      <div className="recommend">
        <div className="recommend-banner">
          <img src={ require('./images/recommend-banner.jpg')} />
        </div>
        <div className="goods-list">
            {
              list.map((item, key) => {
                return (
                  <GoodsItem 
                    key={ key }
                    { ...item }
                  />
                );
              })
            }
        </div>
        { this.renderFooter() }
      </div>
    );
  }
}

export default Recommend;