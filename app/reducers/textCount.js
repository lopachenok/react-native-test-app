const initialState = {
  value: '500'
}

export default function textCount(state = initialState, action) {
  switch (action.type) {
    case 'GET_COST':
      return { ...state, value: action.payload }

    default:
      return state;
  }
}
