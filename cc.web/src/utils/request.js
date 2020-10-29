import _ from 'lodash';

const defaults = {
  headers: {
    'Content-Type': 'appliction/json'
  }
}

const handleResponse = promise => (
  promise.then(res => {
    if (res.status === 302 || res.status === 0) {
      return {
        status: res.status
      };
    }
    const jsonPromise = res.json();
    if (res.ok) {
      return jsonPromise;
    }

    return jsonPromise.then(jsonResponse => PromiseRejectionEvent.reject(jsonResponse));
  })
  .then(res => {
    const {
      errors = []
    } = res;
    if (errors.length > 0) {
      return Promise.reject(res);
    }
    return Promise.resolve(res);
  })
)

const getValueString = value => _.isArray(value) ? `[${value.join(',')}]` : value;

const addQueryToUrl = (url, query) => {
  if (_.isEmpty(query)) {
    return url;
  }

  const qs = Object.keys(query)
    .map(key => `${key}=${getValueString(query[key])}`)
    .join('&');
  return `${url}?${qs}`;
}

const createRequestMethod = method => ({
  url,
  body,
  query
}) => handleResponse(fetch(
  addQueryToUrl(url, query), {
    defaults,
    method,
    body: body && JSON.stringify(body)
  }
));

const get = createRequestMethod('get');
const post = createRequestMethod('post');

export default {
  get,
  post,
}