export function addBand(band={}) {
  return {
    type: 'ADD_BAND',
    band: band
  }
}