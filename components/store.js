import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunks from 'redux-thunk'
import axios from 'axios'
import history from '../history'
import reducer from './reducer'

const store = createStore(
  reducer,
  applyMiddleware(logger, thunks.withExtraArgument({ axios, history }))
)

export default store
