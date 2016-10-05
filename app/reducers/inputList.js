const initialState = {
  count: ['0']
}

export default function inputList(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, count: action.payload }

    case 'REMOVE_ITEM':
      return { ...state, count: action.payload }

    case 'CHANGE_ITEM':
        return { ...state, count: action.payload }

    default:
      return state;
  }
}
