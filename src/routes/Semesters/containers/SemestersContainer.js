import { connect } from 'react-redux'
import { loadSemesters } from '../modules/semestersData'
import { semesterClick } from '../modules/semestersMainView'

import Semesters from '../components/Semesters'

const mapDispatchToProps = {
  semesterClick,
  loadSemesters
}

const mapStateToProps = (state) => ({
  filteredSemesters: state.semestersView.main.filteredSemesters,
  mode: state.semestersView.main.mode,
  showSearchBar: state.semestersView.main.showSearchBar,
  fetched: state.semestersData.fetched
})

export default connect(mapStateToProps, mapDispatchToProps)(Semesters)
