// createStore创建仓库 applyMiddleware添加一个中间件 
// compose超出一个以上参数 源码：func.reduce((a,b)=>(...args)=>a(b(...args))) 用来增强store
import { createStore, applyMiddleware, compose } from "redux";
//redux-thunk使redux可进行异步（中间件）
import thunk from 'redux-thunk'
import cRducer from "./reducer";
// redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//createStore第二个参数可以设置state默认参数
const store = createStore(cRducer, composeEnhancers(
  applyMiddleware(thunk)
))

export default store