import {
  CALL_API,
  SEARCH,
  SEARCH_ENDPOINT,
  SEARCH_METHOD,
  SEARCH_SUCCESS,
  SEARCH_FAIL,

} from '../constants'

export const getSearch = (queryParams,actionId) => ({
  [CALL_API]: {
    id: actionId,
    types: [SEARCH, SEARCH_SUCCESS, SEARCH_FAIL],
    endpoint: SEARCH_ENDPOINT,
    method: SEARCH_METHOD,
    queryParams
  }
})
