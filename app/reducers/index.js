import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import mainScreen from '../components/layouts/MainScreen/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  mainScreen
});

export default rootReducer;
