import { START_SUBMIT, STOP_SUBMIT } from 'redux-form/lib/actionTypes'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default (store) => (next) => (action) => {
  if (action.type) {
    if (action.type.endsWith('PENDING') || action.type === START_SUBMIT) {
      NProgress.start()
    } else if (action.type.endsWith('FULFILLED') || action.type.endsWith('REJECTED') || action.type === STOP_SUBMIT) {
      NProgress.done()
    }
  }

  return next(action)
}
