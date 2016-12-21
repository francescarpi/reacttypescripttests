import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './assets/less/app.less'
import { Router, browserHistory, Route } from 'react-router'
import { Home } from './components/Home'
import { Base } from './components/Base'



function App () {
  return (
    <Router history={browserHistory}>
      <Route component={Base}>
        <Route path="/" component={Home}/>
      </Route>
    </Router>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'))