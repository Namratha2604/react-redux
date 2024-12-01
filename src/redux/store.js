import { createStore } from 'redux';
import reducer from './useSlice';

const store = createStore(reducer);
export default store;