import { AnketaActions } from '../constants/AnketaActions'

const defaultState = {
  isService: true,
  isSize: false,
  isTime: false,
  isBudget: false,
  isFormDetails: false,
  isFinishForm: false
}


export const anketaReducer = (state = defaultState, action) => {
  switch (action.type) {
    case AnketaActions.ACTIVATE_SERVICE:
      return {
        isService: true,
        isSize: false,
        isTime: false,
        isBudget: false,
        isFormDetails: false,
        isFinishForm: false
      }
    case AnketaActions.ACTIVATE_SIZE:
      return {
        isService: false,
        isSize: true,
        isTime: false,
        isBudget: false,
        isFormDetails: false,
        isFinishForm: false
      }
    case AnketaActions.ACTIVATE_TIME:
      return {
        isService: false,
        isSize: false,
        isTime: true,
        isBudget: false,
        isFormDetails: false,
        isFinishForm: false
      }
    case AnketaActions.ACTIVATE_BUDGET:
      return {
        isService: false,
        isSize: false,
        isTime: false,
        isBudget: true,
        isFormDetails: false,
        isFinishForm: false
      }
    case AnketaActions.ACTIVATE_FORM_DETAILS:
      return {
        isService: false,
        isSize: false,
        isTime: false,
        isBudget: false,
        isFormDetails: true,
        isFinishForm: false
      }
    case AnketaActions.FORM_FINISH:
      return {
        isService: false,
        isSize: false,
        isTime: false,
        isBudget: false,
        isFormDetails: false,
        isFinishForm: true
      }
    default:
      return state;
  }
}

export const isService = (payload) => ({ type: AnketaActions.ACTIVATE_SERVICE, payload });
export const isSize = (payload) => ({ type: AnketaActions.ACTIVATE_SIZE, payload });
export const isTime = (payload) => ({ type: AnketaActions.ACTIVATE_TIME, payload });
export const isBudget = (payload) => ({ type: AnketaActions.ACTIVATE_BUDGET, payload });
export const isFormDetails = (payload) => ({ type: AnketaActions.ACTIVATE_FORM_DETAILS, payload });
export const finishForm = () => ({ type: AnketaActions.FORM_FINISH });

