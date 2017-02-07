import axios from 'axios'
import { browserHistory } from 'react-router'
import { ERROR_OCCURRED } from '../../../store/rootReducers/error'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_SEMESTER = 'UPDATE_SEMESTER'

// ------------------------------------
// Actions
// ------------------------------------

export const updateSemester = () => (dispatch, getState) => {
  const data = JSON.stringify(getState().form.semesterForm.values)

  dispatch({
    type: UPDATE_SEMESTER,
    payload: axios
      .put('semesters', data)
      .then((response) => browserHistory.goBack())
      .catch((err) => {
        dispatch({type: ERROR_OCCURRED, payload: err})
        throw err
      })
  })
}

export const actions = {
  updateSemester
}

const SEMESTER_ACTION_HANDLERS = {}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { }
export default function semesterReducer (state = initialState, action) {
  const handler = SEMESTER_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}