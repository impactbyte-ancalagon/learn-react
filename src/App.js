import React, { Component } from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import Header from "./Header"
import Album from "./Album"
import Characters from "./Characters"

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
      <main className="container">
        <Header />
        <div>
          <p>{this.state.counter} clicks</p>
          <button onClick={this.click}>Click Me!</button>
        </div>

        <h3>Album:</h3>

        <Album />

        <h3>Characters:</h3>

        <hr className="hr-primary" />

        <Characters />
      </main>
    )
  }
}

export default App
