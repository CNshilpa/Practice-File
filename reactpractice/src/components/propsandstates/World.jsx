import React, { Component } from 'react'

export class World extends Component {
  render() {
    const {name,heroName} = this.props
    return (
      <div><h1>Welcome {name} a.k.s {heroName}</h1></div>
    )
  }
}

export default World