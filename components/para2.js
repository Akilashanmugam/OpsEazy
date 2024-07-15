import React, { Component } from 'react'

export default class Para2 extends Component {
  render() {
    return (
      <>
      <div className="pdt20 mpdt10 pdb5">
            <h2 className={`${this.props.style} fwb mpdb5`}>{this.props.heading2}</h2>
            <p className={`fs20 mfs16 lh3 cg pdt10 ${this.props.stylepara}`}>{this.props.content}</p>
      </div>
      </>
    )
  }
}
