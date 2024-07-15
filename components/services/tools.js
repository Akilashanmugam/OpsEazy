import React, { Component } from 'react'
import Image from 'next/image';
export class Tools extends Component {
  render() {
    return (
      <>
      <section>
        <div className='container'>
            <div>
                {this.props.tool.map((tool,i) =>{
                    return(
                        <div className='' key={i}>
                            <h5 className='h5'>{tool.title}</h5>
                            <div>
                            {tool.img.map((img, i) => {
              return (
                <div key={i}>
                <div>
                <Image src={img} className="" width={"100"} height={"30"} />
                </div>
              </div>)
                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
      </section>
      </>
    )
  }
}

export default Tools;