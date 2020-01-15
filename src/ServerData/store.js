import { createStore, applyMiddleware } from 'redux';
import banks from './reducers/banks'
import thunk from 'redux-thunk';

export const store = createStore(
    banks,
    { isLoading: false, isError: false, banks: [], currency: '' },
    applyMiddleware(thunk)
  );