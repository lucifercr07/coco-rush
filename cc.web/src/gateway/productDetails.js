import request from '../utils/request';
import { BASE_URL } from '../constants'

const getProductDetails = (id, query) => (
  request.get({
    url: `${BASE_URL}/product/${id}`,
    query,
  })
);

export default {
  getProductDetails,
}
