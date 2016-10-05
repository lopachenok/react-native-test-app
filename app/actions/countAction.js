export function getCost(cost) {

  return (dispatch) => {
    dispatch({
      type: 'GET_COST',
      payload: cost
    })
  }
}
