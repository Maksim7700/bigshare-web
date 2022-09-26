import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { anketaReducer } from '../reducers/anketaReducer';
import { formReducer } from '../reducers/formReducer';
import { technologiesReducer } from '../reducers/technologiesReducer';

const rootReducer = combineReducers({
  technologies: technologiesReducer,
  anketa: anketaReducer,
  formDetails: formReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

