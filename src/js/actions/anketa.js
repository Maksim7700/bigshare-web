import { isBudget, isFormDetails, isService, isSize, isTime } from '../reducers/anketaReducer'

export const setService = () => {
  return function (dispatch) {
    dispatch(isService())
  }
}

export const setSize = () => {
  return function (dispatch) {
    dispatch(isSize())
  }
}

export const setTime = () => {
  return function (dispatch) {
    dispatch(isTime())
  }
}

export const setBudget = () => {
  return function (dispatch) {
    dispatch(isBudget())
  }
}

export const setIsFormDetails = () => {
  return function (dispatch) {
    dispatch(isFormDetails())
  }
}
