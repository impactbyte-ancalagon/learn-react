import React, { Component } from "react"

import "./Characters.css"

class Characters extends Component {
  state = {
    characters: [
      {
        id: 1,
        nick: "Greeny",
        level: 1,
        evolution: 0,
        stages: [
          {
            image: 1,
            name: "Bulbasaur"
          },
          {
            image: 2,
            name: "Ivysaur"
          },
          {
            image: 3,
            name: "Venusaur"
          }
        ]
      },
      {
        id: 2,
        nick: "Hotsy",
        level: 1,
        evolution: 0,
        stages: [
          {
            image: 4,
            name: "Charmender"
          },
          {
            image: 5,
            name: "Charmeleon"
          },
          {
            image: 6,
            name: "Charizard"
          }
        ]
      }
    ]
  }

  raiseLevel = characterId => {
    const updatedCharacters = this.state.characters.map(character => {
      if (character.id === characterId) {
        character.level += 1
        return character
      } else {
        return character
      }
    })

    this.setState({ characters: updatedCharacters })
  }

  render() {
    return (
      <div className="characters">
        {this.state.characters.map((character, index) => {
          const { id, nick, level } = character

          if (level === 10) character.evolution = 1
          else if (level === 30) character.evolution = 2

          const { name, image } = character.stages[character.evolution]

          return (
            <div className="character" key={index}>
              <img
                className="character-image"
                src={`assets/${image}.png`}
                alt={nick}
                onClick={() => {
                  this.raiseLevel(id)
                }}
              />
              <b className="character-name">{nick}</b>
              <b className="character-level">
                {name} lvl {level}
              </b>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Characters
