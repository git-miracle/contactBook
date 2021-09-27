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
    case DELETE_CONTCT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      }
    default:
      return state
  }
}
