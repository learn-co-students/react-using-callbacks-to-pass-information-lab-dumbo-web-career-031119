import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: "rgb(0,0,0)"
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} handleCell={this.handleCell} selectedColor={this.state.selectedColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  handleColorSwatch = (event) => {
      event.persist()
      if(event.target.className === "color-swatch"){
      this.setState({
        selectedColor: event.target.style.backgroundColor
      })
      console.log(this.state.selectedColor)
    }
  }


  render() {
    return (
      <div id="app">
        <ColorSelector handleColorSwatch={this.handleColorSwatch}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
