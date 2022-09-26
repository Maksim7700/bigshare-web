import { TechnologiesActions } from '../constants/TechnologiesActions'

const defaultState = {
  isDesign: true,
  isWeb: false,
  isMobile: false
}

export const technologiesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TechnologiesActions.ACTIVATE_DESIGN:
      return {
        isDesign: true,
        isWeb: false,
        isMobile: false
      }
    case TechnologiesActions.ACTIVATE_MOBILE:
      return {
        isDesign: false,
        isWeb: false,
        isMobile: true
      }
    case TechnologiesActions.ACTIVATE_WEB:
      return {
        isDesign: false,
        isWeb: true,
        isMobile: false
      }
    default:
      return state;
  }
}

export const isDesign = (payload) => ({ type: TechnologiesActions.ACTIVATE_DESIGN, payload });
export const isWeb = (payload) => ({ type: TechnologiesActions.ACTIVATE_WEB, payload });
export const isMobile = (payload) => ({ type: TechnologiesActions.ACTIVATE_MOBILE, payload });
