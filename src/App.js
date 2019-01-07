import React, { Component } from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import Header from "./Header"

class App extends Component {
  state = {
    counter: 0
  }

  click = async () => {
    // Wait for setState finished
    await this.setState({
      counter: this.state.counter + 1
    })

    console.log("CLICK!", this.state.counter)
  }

  render() {
    return (
      <div>
        <Header />
        <p>{this.state.name}</p>
        <p>{this.state.counter} clicks</p>
        <button onClick={this.click}>Click Me!</button>
      </div>
    )
  }
}

export default App
