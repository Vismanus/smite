import { combineReducers } from 'redux'
import TeamReducer from './TeamReducer'
import RegionReducer from './RegionReducer'
import SelectionReducer from './SelectionReducer'

export default combineReducers({
  teams: TeamReducer,
  selectedTeamOrg: SelectionReducer,
  region: RegionReducer
})
