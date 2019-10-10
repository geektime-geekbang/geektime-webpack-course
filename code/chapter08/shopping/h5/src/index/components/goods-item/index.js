import React from 'react';
import './index.less';

const GoodsItem = (props) => (
  <div className="goods-item">
    <div className="goods-photo">
      <img src={ props.thumbnail } />
    </div>
    <div className="goods-info">
      <div className="goods-title">{ props.title }</div>
      <div className="goods-price">
        <div className="sale-price">¥99</div>
      </div>
    </div>
  </div>
);

export default GoodsItem;