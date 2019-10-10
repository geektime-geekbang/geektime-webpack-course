
import jwt from 'koa-jwt';
import { secret } from '../config/index';

export default jwt({
  secret: secret
});