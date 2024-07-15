import React, { Component } from 'react'
import Image from 'next/image'

export default class Releasetemp extends Component {
    render() {

        return (
            <>
                <section className=''>
                    <div className='container'>

                        <div>
                            <h2 className='fs30 mfs18 cp tac mb20 pdt20 mpdt0 fwb'>{this.props.heading2}</h2>
                        </div>
                        <div className={`${this.props.display} pdb30`}>
                            <p className='tac cg fs20 mfs16 lh'>{this.props.para}</p>
                        </div>                        
                        <div className='gd1 mp' >                     
                        {this.props.release.map((serivce,i) => {
                            return(
                            <div className='df box-img mb30' key={i}>
                                
                                <div className='' >
                                    <Image src={serivce.img} alt='img' width={"97"} height={"97"} />
                                </div>
                                <div className='pdl20 mpdl10 df fac'>
                                    <p className='cg fs18 mfs14'>{serivce.content}</p>
                                </div>
                            </div> )})}
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
            .pd0{
                padding:0px;
            }
          .pd19{
            padding:20px;
            
          }
          .dfca{
            display:flex;
            justify-contetnt:center:
            align-items:center;
          }
         .box-img{
            width:570px;
            max-width:100%;
            backgound-color:white;
            border: 1px solid #E7E7E7;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            border-radius:8px;
            height:100px;
         
        }
        @media only screen and (max-width: 1023px){
            .mp{
                display:flex;
                flex-direction:column;
            justify-content:center;
            align-items:cenetr;
            }
        }
         
            `}

                </style>
            </>
        )
    }
}