

### React
1. 声明式开发
    > 命令式开发(直接操作dom的开发方式，60%-70%代码在做dom操作)
2. 可以与其他框架并存
    > react挂载在'root'节点下，只会管理root下的渲染
3. 组件化开发(组件标签首字母大写)  
    ```js
    class xxx extends React.Component
    ```
    > 父组件通过属性向子组件传值  
    > 子组件通过调用父组件传递的方法向父组件传值
4. 单向数据流
    > 父组件会向子组件传递只读属性的值，一旦试图改变会抛出错(Cannon assign to read only property)
5. 视图层框架
    > 需要配合数据层框架解决react组件间复杂传值问题
6. 函数式编程
    1. 维护起来方便，易拆分
    2. 便于自动化测试

### props state render
1. 当组件的state或者props发生改变的时候，render函数就会重新执行
2. 页面是由render函数渲染出来的

### diff算法
1. 两个virtualDOM作比对时的算法
2. 同级比较：发现差异时，把以该节点为根节点的节点树全部替换
    > 层级渲染上会造成浪费，但是大大减少了两个virtualDOM比对算法上的性能消耗
3. 循环中key值提供virtualDOM比对的性能
    > 但如果使用key=index，就无法保证原始virtualDOM和新virtualDOM的key值一致

### 生命周期
> 生命周期函数指在某一个时刻组件会自动调用执行的函数
1. Initialization [ɪˌnɪʃəlaɪ'zeɪʃn]
    * setup props and state (constructor)
2. Mounting
    * componentWillMount 在组件即将被挂载到页面的时刻自动执行
    * render
    * componentDidMount 组件被挂载到页面之后自动执行
3. Updating
    > props changed
    * componentWillReceiveProps 当一个组件从父组件接受到参数，只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行
    > states changed
    * 无
    > common Fuc
    * shouldComponentUpdate 组件被更新之前自动执行 return Boolean
    * componentWillUpdate 组价被更新之前自动执行
    * render
    * componentDidUpdate 组件被更新之后自动执行
4. Unmounting
    * componentWillUnmount 组件即将被卸载的时候立即执行

### Tips
1. PWA
2. serviceWker 用户访问一次，再去访问时会在本地有完整的缓存；即使没有网络，也能当app使用
3. manifest.json把网页存储在桌面上的一些配置
4. Fragment占位符，不显示最外层标签
5. react先生成virtualDOM,然后用virtualDOM的结构生成真实的DOM
6. setState异步是为了提升底层性能，打个比方，如果连续多次调用setState(时间间隔很小)，react异步可以把3次setState合并成一次，只去做一次virtualDOM的比对
7. React.Component内置了除render以外所有的生命周期函数，所以继承Component的组件必须写render函数
8. ajax请求写在componentDidMount(写在render里会被反复执行)
9. 不要在setState的更新函数中访问event变量
    > [Event Pooling](https://reactjs.org/docs/events.html#event-pooling)
10. react只能兼容ie8及以上
11. PureComponent 内置实现了shouldComponentUpdate


### 插件&工具
1. [PropTypes](https://react.docschina.org/docs/typechecking-with-proptypes.html)
2. [React Developer Tools](https://chrome.google.com/webstore/detail/fmkadmapgofadopljbjfkapdkoienihi?utm_source=chrome-app-launcher-info-dialog)
3. [Redux DevTools](https://chrome.google.com/webstore/detail/lmhkpmbekcpmknklioeibfkpmmfibljd?utm_source=chrome-app-launcher-info-dialog)
4. Axios(yarn add axios)
