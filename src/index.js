import React from 'react'
import {render} from 'react-dom'


//定义组件第二种方式，使用类

//继承Component下的组件
class App extends React.Component {
        render (){
            return <h1>类组件</h1>
        }
}
render(
    <App/>,
    document.querySelector('#root')
)