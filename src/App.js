import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

import Header from "./Header"

const numbers = [1, 2, 3]

class App extends Component {
  render() {
    return (
      <div>
        {numbers.map(item => {
          return <Header />
        })}
      </div>
    )
  }
}

export default App
