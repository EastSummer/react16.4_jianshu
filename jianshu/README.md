# 简书

### 插件
1. styled-components 管理CSS样式
    > [vscode-styled-components vscode插件](https://blog.csdn.net/crper/article/details/80960269)
    > innerRef 替代 ref
2. reset.css 不同浏览器标签样式统一
3. Immutable.js 管理store中的数据
4. redux-immutable 统一数据格式
5. react-router-dom 路由
    ``` html
    <!-- 通配符传参 -->
    <Link key={index} to={'/detail/'+ item.get('id')}></Link>
    <Route path='/detail/:id' exact component={Detail}></Route>
    this.props.match.params.id

    <!-- url传参 -->
    <Link key={index} to={'/detail?id'+ item.get('id')}>
    <Route path='/detail' exact component={Detail}></Route>
    this.props.location.search
    
    <!-- query(公开) & state(加密) -->
    var query = {
        pathname: '/query',
        query: '我是通过query传值 '
    }
    <Link to={query}>query</Link>
    <Route path='/query' component={Query}/>
    this.props.location.query

    var state = {
        pathname: '/state',
        state: '我是通过state传值'
    }
    <Link to={state}>state</Link>
    <Route path='/state' component={State}/>
    this.props.location.query

    js:  this.props.history.push

    <!-- 路由重定向 -->
    import { Redirect } from 'react-router-dom';
    <Redirect to='/' />
    ```
6. react-loadable 异步组件

