import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import handleNewNote from '../sagas';
import rootReducer from '../reducers/';

const sagaMiddleware = createSagaMiddleware();

export default function() {
  let store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  sagaMiddleware.run(handleNewNote.bind(store));
  return store;
}
