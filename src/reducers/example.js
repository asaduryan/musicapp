import {
  GET_EXAMPLE,
  GET_EXAMPLE_SUCCESS,
  GET_EXAMPLE_FAIL,
  GET_EXAMPLE_BY_ID,
  GET_EXAMPLE_BY_ID_SUCCESS,
  GET_EXAMPLE_BY_ID_FAIL,

  UPDATE_EXAMPLE,
  UPDATE_EXAMPLE_SUCCESS,
  UPDATE_EXAMPLE_FAIL
} from '../constants/api'

export const examples = (state = [], action) => {
  switch (action.type) {
    case GET_EXAMPLE:
      return { loading: true }
    case GET_EXAMPLE_SUCCESS:
      return { loading: false, data: action.response.data}
    case GET_EXAMPLE_FAIL:
      return { loading: false, data: action.response.data}
    default:
      return state;
  }
}

export const exampleById = (state = [], action) => {
  switch (action.type) {
    case GET_EXAMPLE_BY_ID:
      return { loading: true, data: []}
    case GET_EXAMPLE_BY_ID_SUCCESS:
      return { loading: false, data: action.response.data}
    case GET_EXAMPLE_BY_ID_FAIL:
      return { loading: false, data: action.response.data}
    default:
      return state;
  }
}

export const exampleUpdate = (state = [], action) => {
  switch (action.type) {
    case UPDATE_EXAMPLE:
      return { loading: true, data: []}
    case UPDATE_EXAMPLE_SUCCESS:
      return { loading: false, data: action.response.data}
    case UPDATE_EXAMPLE_FAIL:
      return { loading: false, data: action.response.data}
    default:
      return state;
  }
}