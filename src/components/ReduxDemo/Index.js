const redux=require('redux')
const reduxLogger=require('redux-logger')

const createStore=redux.createStore
const combineReducers=redux.combineReducers
const applyMiddleware=redux.applyMiddleware
const logger=reduxLogger.createLogger()

const intialCakeState = {
  numOfCakes: 10,
}
const intialIceCreamState = {
  numOfIceCreams:10
}

const Buy_Cake = 'Buy_Cake'
const Buy_IceCreams = 'Buy_IceCreams'

function buyCake() {
  return {
    type: Buy_Cake,
    info: 'First Redux action'
  }
}
  function buyIcecream() {
    return {
      type: Buy_IceCreams
    }
}

const CakeReducer = (state = intialCakeState, action) => {
  switch (action.type) {
    case Buy_Cake: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}
const IceCreamReducer = (state = intialIceCreamState, action) => {
  switch (action.type) {
    case Buy_IceCreams: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1
    }
    default: return state
  }
}

const rootReducer=combineReducers({
  cake:CakeReducer,
  iceCream:IceCreamReducer
})
const store=createStore(rootReducer,applyMiddleware(logger))
console.log('Initial state',store.getState())
const unsubscribe=store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()
