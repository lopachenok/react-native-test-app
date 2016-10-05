export function getSale(sale) {

  return (dispatch) => {
    dispatch({
      type: 'GET_SALE',
      payload: sale
    })
  }
}
