'use strict';

import compose from 'koa-compose';
import postProcessing from './postProcessing';
import errorHandler from './errorHandler';

export default () => {
    return compose(
        [
            postProcessing,
            errorHandler
        ]
    )
}