export default function manageBand(state = {
  bands: [],
}, action) {
  // console.log(state.bands)
  switch(action.type){
    case 'ADD_BAND':
      return { ...state, bands: [...state.bands, action.band] }
    default:
      return state
  }
  
};
