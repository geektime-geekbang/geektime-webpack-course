'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';

class Search extends React.Component {

    constructor() {
        super(...arguments);
    }

    render() {
        return <div className="search-text">
            <img src={ require('./images/logo.png?__inline') } /> 搜索文字的内容
        </div>;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);