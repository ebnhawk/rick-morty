import React, { Component } from 'react'
import axios from 'axios'

class Main extends Component {
  constructor() {
    super()
  }
  async componentDidMount() {
    const res = await axios.get('https://rickandmortyapi.com/api/character/2')
    const morty = res.data
    console.log(`Babel polyfill is doing its job! Here's a Morty!: `, morty)
  }
  render() {
    return <div>Hello There</div>
  }
}

export default Main
