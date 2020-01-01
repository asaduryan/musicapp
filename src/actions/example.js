import {
  CALL_API,
  GET_EXAMPLE,
  GET_EXAMPLE_ENDPOINT,
  GET_EXAMPLE_METHOD,
  GET_EXAMPLE_SUCCESS,
  GET_EXAMPLE_FAIL,
  GET_EXAMPLE_BY_ID,
  GET_EXAMPLE_BY_ID_ENDPOINT,
  GET_EXAMPLE_BY_ID_METHOD,
  GET_EXAMPLE_BY_ID_SUCCESS,
  GET_EXAMPLE_BY_ID_FAIL,

  UPDATE_EXAMPLE,
  UPDATE_EXAMPLE_ENDPOINT,
  UPDATE_EXAMPLE_METHOD,
  UPDATE_EXAMPLE_SUCCESS,
  UPDATE_EXAMPLE_FAIL,

} from '../constants'

export const getExamples = (queryParams,actionId) => ({
  [CALL_API]: {
    id: actionId,
    types: [GET_EXAMPLE, GET_EXAMPLE_SUCCESS, GET_EXAMPLE_FAIL],
    endpoint: GET_EXAMPLE_ENDPOINT,
    method: GET_EXAMPLE_METHOD,
    queryParams
  }
})

export const getExampleById = (queryParams,actionId) => ({
  [CALL_API]: {
    id: actionId,
    types: [GET_EXAMPLE_BY_ID, GET_EXAMPLE_BY_ID_SUCCESS, GET_EXAMPLE_BY_ID_FAIL],
    endpoint: GET_EXAMPLE_BY_ID_ENDPOINT,
    method: GET_EXAMPLE_BY_ID_METHOD,
    queryParams
  }
})

export const updateExample = (data,actionId) => ({
  [CALL_API]: {
    id: actionId,
    types: [UPDATE_EXAMPLE, UPDATE_EXAMPLE_SUCCESS, UPDATE_EXAMPLE_FAIL],
    endpoint: UPDATE_EXAMPLE_ENDPOINT,
    method: UPDATE_EXAMPLE_METHOD,
    data
  }
})