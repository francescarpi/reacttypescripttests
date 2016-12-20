import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Hello } from './components/HelloWorld'
import './assets/less/app.less'

ReactDOM.render(
    <Hello name="Francesc"/>,
    document.getElementById('app')
)