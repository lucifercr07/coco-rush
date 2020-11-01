import request from '../utils/request';
import {BASE_URL} from '../constants'
const getProducts = query => (
  request.get({
    url: `${BASE_URL}/product`,
    query,
  })
);

export default {
  getProducts,
}
