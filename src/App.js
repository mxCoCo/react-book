import React, { Component, Fragment } from 'react'
import Header from './pages/common/header'
import Home from './pages/home'
import Detail from './pages/detail'
import { BrowserRouter, Route } from 'react-router-dom'

export default class App extends Component {
  render () {
    return (
      <Fragment>
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail" exact component={Detail}></Route>
        </BrowserRouter>
      </Fragment>
    )
  }
}
