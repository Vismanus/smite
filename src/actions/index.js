export const selectTeam = teamOrg => ({
  type: 'selectTeam',
  payload: teamOrg
})

export const setRegion = regionID => ({
  type: 'setRegion',
  payload: regionID
})
