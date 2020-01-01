import storage from '../storage'
import { CALL_API } from '../constants'
import qs from 'qs'

export default store => next => action => {
  const call = action[CALL_API]

  if (typeof call === 'undefined') {
    return next(action)
  }
  const actionWith = data => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const { types, params, urlParams, method, data, queryParams } = call
  let { endpoint } = call
  const [request, success, fail] = types
  
  const id = call.id || Math.random().toString().substring(2)
  if(queryParams) {
    endpoint += '?' + qs.stringify(queryParams)
  }
  if (urlParams) {
    Object.keys(urlParams).forEach(k => {
      endpoint = endpoint.replace(':' + k, urlParams[k]);
    });
  }
  
  next(actionWith({ type: request, id }))

  storage({
    method,
    url: endpoint,
    data,
    params
  })
    .then(
    response => next(actionWith({
      response,
      id,
      type: success
    })),
    error => next(actionWith({
      type: fail,
      id,
      error: error.message || 'Something bad happened'
    })))
}