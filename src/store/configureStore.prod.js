import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history'



import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import api from '../middleware/api'
import rootReducer from '../reducers'

export const history = createBrowserHistory()

const mid = routerMiddleware(history)

const configureStore = preloadedState => {
  const store = createStore(
    combineReducers({
      router: routerReducer,
      ...rootReducer,
    }),
    preloadedState,
    compose(
      applyMiddleware(mid, thunk, api, createLogger()),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )

  return store
}

export default configureStore