import React, { Component } from 'react'

export class Maptopic extends Component {
  render() {
    return (
        <>
        {this.props.topic.map((topic,i)=>{
                return(
                <div key={i} className="pdt10">
                <p className="fs20 mfs14 lh3 pdb10 cg"><span className='fwb cb fs20 mfs16'>{topic.title}: </span> {topic.content}</p>
                </div>
                )})}
        </>
    )
  }
}

export default Maptopic