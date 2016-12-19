import * as React from 'react'
import * as ReactDOM from 'react-dom'


function Test () {
    return (
        <div>Hello</div>
    )
}

ReactDOM.render(
    <Test/>,
    document.getElementById('app')
)