import {
  ADD_CONTCT,
  DELETE_CONTCT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTCT,
  CLEAR_FILTER,
  UPDATE_CONTCT,
} from '../type'

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTCT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      }
    default:
      return state
  }
}
