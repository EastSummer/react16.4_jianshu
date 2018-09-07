### Redux
> 数据层框架
> Reddux = Reducer + Flux
1. 创建reducer(对应关系、数据操作)
2. 创建store(数据存储仓库)(传入reducer)
3. 创建action
4. 调用store.dispath，传入对应action
5. store会自动转发<data,action>给reducer
6. 在reducer里处理 **深拷贝** 的state并return给store
7. 在组件里订阅store => store.subscribe(fuc)
8. combineReducers对数据拆分管理

### Redux 设计和使用的三项原则
1. store必须是唯一的
2. 只有store能够改变自己的内容
3. reducer必须是纯函数
    > 纯函数：给定固定的输入，就一定会有固定的输出，而且不会有任何副作用

### Redux核心API
* creatStore
* store.dispatch
* store.getState
* store.subscribe

### Redux的中间件(在action和store之间)
* dispatch通过参数类型的不同做不同的处理
* redux-logger 记录action每次派发的日志

### Redux-thunk中间件(处理异步代码拆分)
* [redux-devtools配合thunk用法](https://github.com/zalmoxisus/redux-devtools-extension)
1. 在creatStore中引入thunk
2. 在action中创建能返回函数的action(原来只能返回对象)
3. store.dispatch接受函数时会自动执行该函数

### Redux-saga中间件(处理异步代码拆分)
* [API参考](https://redux-saga-in-chinese.js.org/docs/api/index.html)
1. 在creatStore中引入saga
2. 通过saga文件里takeEvey方法捕获到派发的action
3. saga文件一定导出的是generator函数
4. 使用 takeEvery('*')*通配符 * 模式*，我们就能捕获发起的所有类型的 action

### React-Redux
1. Provider将store提供给内部组件
2. connnect通过mapStateToProps方法连接组件和store
3. 此时组件里的调用使用this.props
4. 组件通过mapDispatchToProps方法修改store里的数据