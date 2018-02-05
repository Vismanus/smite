export default (state = 'EU', action) => {
  switch (action.type) {
    case 'setRegion':
      return action.payload
    default:
      return state
  }
}
