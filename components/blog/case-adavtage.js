import React, { Component } from 'react'
import Maptopic from '../../components/blog/blog-map-topic'

export class CaseAdavtage extends Component {
  render() {
    return (
      <>
      <h3 className='fs23 mfs20 fwb cp pdt20 mpdt10'>
                Use Cases
                </h3>
                <Maptopic topic={this.props.usecase} />
                <h3 className='fs23 mfs20 fwb cp pdt20 mpdt10'>
                Advantages 
                </h3>
                <Maptopic topic={this.props.advantage} />
      </>
    )
  }
}

export default CaseAdavtage