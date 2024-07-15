import React, { Component } from 'react'
import Image from 'next/image'

export default class Recimgbox extends Component {
  render() {
   
    return (
      <>
        <section>
              <div className='container'>
                <h2 className='fs30 mfs20 pdb10 mpdb0 cp tac mt30 fwb'>{this.props.heading2}</h2>
                <div className='df fjsb fw mdf mfdc mfjc mfac gd1'>
            {this.props.rectcontent.map((serivce, i) => {
              return (
                    <div className='pdt20' key={i}>
                      <div className='box-img mb10 mmb5 '>
                        <div className='df fjc fjfs pdtb10 pdl10 cursor'><Image src={serivce.img} alt={serivce.title} width={"50"} height={"50"} /></div>
                        <h4 className='df fjfs fwb fs20 pd10 fwb mfs16'>{serivce.title}</h4>
                        <p className=' lh3 pd10 mpdb20 lh fs16 mfs14'>{serivce.content}</p>
                      </div>
                    </div>
              )
            })}
            </div>
              </div>
            </section>
          <style jsx>
            {`
             .gd1{
              flex: 1 100px;
              display: flex;
              flex-flow: row wrap;
              align-items: center;
              justify-content: space-around;
              }
            .img{
              background-repeat:no-repeat;
              background-size: cover;
              background-position: center; 
            }
            .box-img{
              width:370px;
              height:300px;
              border-radius:10px;
              position: relative;
              border-style:solid;
              border: 1px solid #D3D3D3;
              box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, 0.25);
              border-width: 1px;
              background-color:#fff;
            }
            @media only screen and (max-width: 1023px){
              .box-img{
                width:100%;
                height:100%;
              }      
            }
            `}
          </style>
      </>
    )
  }
}