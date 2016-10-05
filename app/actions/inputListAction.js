export function addItem(count) {

  return (dispatch) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: count
    })
  }
}

export function removeItem(items) {
  return (dispatch) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: items
    })
  }
}

export function changeItemValue(items) {
  return (dispatch) => {
    dispatch({
      type: 'CHANGE_ITEM',
      payload: items
    })
  }
}
