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
      <main className="app">
        <div>
          <Header />
          <div>
            <button onClick={this.click}>Click Me!</button>{" "}
            <span>{this.state.counter} clicks</span>
          </div>
        </div>

        <div>
          <h3>Album:</h3>
          <Album />
        </div>

        <div>
          <h3>Characters:</h3>
          <Characters />
        </div>
      </main>
    )
  }
}

export default App
