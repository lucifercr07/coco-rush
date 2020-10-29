import request from '../utils/request';
import {BASE_URL} from '../constants'
const getProducts = query => (
  request.get({
    uri: `${BASE_URL}/product`,
    query,
  })
);

export {
  getProducts,
}
