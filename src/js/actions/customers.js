import { isDesign, isMobile, isWeb } from '../reducers/technologiesReducer';

export const setDesign = () => {
  return (dispatch) => {
    dispatch(isDesign())
  }
}

export const setWeb = () => {
  return function (dispatch) {
    dispatch(isWeb())
  }
}

export const setMobile = () => {
  return function (dispatch) {
    dispatch(isMobile())
  }
}
