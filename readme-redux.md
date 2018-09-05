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

### Redux-thunk中间件
* [redux-devtools配合thunk用法](https://github.com/zalmoxisus/redux-devtools-extension)