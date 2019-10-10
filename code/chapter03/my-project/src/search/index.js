'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import largeNumber from 'large-number';
import logo from './images/logo.png';
import './search.less';

class Search extends React.Component {

    constructor() {
        super(...arguments);

        this.state = {
            Text: null
        };
    }

    loadComponent() {
        import('./text.js').then((Text) => {
            this.setState({
                Text: Text.default
            });
        });
    }

    render() {
        const { Text } = this.state;
        const addResult = largeNumber('999', '1');
        return <div className="search-text">
            {
                Text ? <Text /> : null
            }
            { addResult }
            搜索文字的内容<img src={ logo } onClick={ this.loadComponent.bind(this) } />
        </div>;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);