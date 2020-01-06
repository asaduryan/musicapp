import {
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_FAIL
} from '../constants/api'

export const search = (state = [], action) => {
  switch (action.type) {
    case SEARCH:
      return { loading: true }
    case SEARCH_SUCCESS:
      return { loading: false, data: action.response.data}
    case SEARCH_FAIL:
      return { loading: false, data: action.response.data}
    default:
      return state;
  }
}
