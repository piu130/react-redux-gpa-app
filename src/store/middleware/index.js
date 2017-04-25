import thunk from 'redux-thunk'
import logger from 'redux-logger'
import nProgressMiddleware from './nprogress-middleware'

export default [
  thunk,
  logger,
  nProgressMiddleware
]
