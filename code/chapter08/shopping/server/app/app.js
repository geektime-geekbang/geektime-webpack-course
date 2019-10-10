'use strict';

import Koa from 'koa';
import router from './routes';
import cors from 'koa2-cors';
import bodyParser from 'koa-bodyparser';
import middlewares from './middlewares';
import helmet from 'koa-helmet';
const app = new Koa();

app
    .use(helmet())
    .use(middlewares())
    .use(bodyParser())
    .use(cors())
    .use(router.routes())
    .use(router.allowedMethods()); 

app.listen(8001);
export default app;
