import { connect } from 'react-redux'
import { semesterClick, changeMode, searchButtonClick } from '../modules/semestersMainView'

import ActionBar from '../components/SemestersActionBar'

const mapDispatchToProps = {
  semesterClick,
  modeButtonClick: changeMode,
  searchButtonClick
}

const mapStateToProps = (state) => ({
  mode: state.semestersView.main.mode,
  showSearchBar: state.semestersView.main.showSearchBar
})

export default connect(mapStateToProps, mapDispatchToProps)(ActionBar)
