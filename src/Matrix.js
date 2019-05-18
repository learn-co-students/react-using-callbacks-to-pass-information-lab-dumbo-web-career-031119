import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  
   
	  state={
		  newColor: '000',
		  currColors:this.props.values
	  }
 

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} />)
  )

  genMatrix = () => (
    this.state.currColors.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector />
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
