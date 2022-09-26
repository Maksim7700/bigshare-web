import { FormActions } from '../constants/FormActions'

const defaultState = {
  service: '',
  size: '',
  time: '',
  budget: '',
  form: {
    email: '',
    name: '',
    phone: '',
    company: '',
    comment: ''
  }
}


export const formReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FormActions.SERVICE:
      return {
        ...state, service: action.payload
      }
    case FormActions.SIZE:
      return {
        ...state, size: action.payload
      }
    case FormActions.TIME:
      return {
        ...state, time: action.payload
      }
    case FormActions.BUDGET:
      return {
        ...state, budget: action.payload
      }
    case FormActions.FORM_DETAILS:
      return {
        ...state, form: {
          email: action.payload.email,
          name: action.payload.name,
          phone: action.payload.phone,
          company: action.payload.company,
          comment: action.payload.comment
        }
      }
    default:
      return state;
  }
}

export const serviceF = (payload) => ({ type: FormActions.SERVICE, payload });
export const sizeF = (payload) => ({ type: FormActions.SIZE, payload });
export const timeF = (payload) => ({ type: FormActions.TIME, payload });
export const budgetF = (payload) => ({ type: FormActions.BUDGET, payload });
export const formDetailsF = (payload) => ({ type: FormActions.FORM_DETAILS, payload });

