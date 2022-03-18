import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk), // este item nos permite hacer acciones asincronicas
);
const store = createStore(rootReducer, enhancer);

// const store = createStore(
//   rootReducer, 
//   compose(applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION_&&  window.__REDUX_DEVTOOLS_EXTENSION_())
  
//   );

export default store;