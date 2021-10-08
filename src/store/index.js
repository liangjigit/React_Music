// createStore创建仓库 applyMiddleware添加中间件来封装dispatch方法 
// compose超出一个以上参数 源码：func.reduce((a,b)=>(...args)=>a(b(...args))) 用来增强store
import { createStore, applyMiddleware, compose } from "redux";
//Redux store仅支持同步数据流，使redux-thunk可则进行异步（中间件），thunk可看做dispatch的封装器，使其拥有异步功能
//我们可以使用 thunk action creator 派遣函数或 Promise，而不是返回 action 对象。
import thunk from 'redux-thunk'
//引入rducers
import cRducer from "./reducer";
// redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//createStore第二个参数可以设置state默认参数
const store = createStore(cRducer, composeEnhancers(
  applyMiddleware(thunk)
))

export default store