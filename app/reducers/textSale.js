const initialState = {
  value: '475'
}

export default function textSale(state = initialState, action) {
  switch (action.type) {
    case 'GET_SALE':
      return { ...state, value: action.payload }

    default:
      return state;
  }
}
