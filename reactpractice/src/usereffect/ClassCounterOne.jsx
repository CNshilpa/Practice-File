import React, { Component } from 'react'

export class ClassCounterOne extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    componentDidMount(){
        document.title = `${this.state.count}`
       }
    componentDidUpdate(prevprops, prevState){
        document.title = `${this.state.count}` 
    }
  render() {
    return (
      <div>
<button onClick={() => this.setState({count : this.state.count})}>
    click {this.state.count} times
</button>
      </div>
    )
  }
}

export default ClassCounterOne