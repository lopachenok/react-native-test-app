import { combineReducers } from 'redux'
import textCount from './textCount'
import textSale from './textSale'
import inputList from './inputList'

export default combineReducers({
  textCount,
  textSale,
  inputList
})
