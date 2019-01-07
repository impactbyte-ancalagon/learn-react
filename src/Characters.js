import React, { Component } from "react"

import "./Characters.css"

const characters = [
  {
    id: 1,
    level: 1,
    name: "Bulbasaur"
  },
  {
    id: 2,
    level: 10,
    name: "Ivysaur"
  },
  {
    id: 3,
    level: 30,
    name: "Venusaur"
  },
  {
    id: 4,
    level: 1,
    name: "Charmender"
  },
  {
    id: 5,
    level: 10,
    name: "Charmeleon"
  },
  {
    id: 6,
    level: 30,
    name: "Charizard"
  }
]

class Characters extends Component {
  render() {
    return (
      <div className="characters">
        {characters.map((character, index) => {
          return (
            <div className="character">
              <img
                className="character-image"
                key={index}
                src={`assets/${character.id}.png`}
                alt={character.name}
              />
              <b className="character-name">{character.name}</b>
              <b className="character-level">lvl {character.level}</b>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Characters
