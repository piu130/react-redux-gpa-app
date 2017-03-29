import { filterSemesters } from './semestersMainView'

export const searchValueChanged = (event, newValue, previousValue) => (dispatch) => {
  dispatch(filterSemesters(newValue))
}
