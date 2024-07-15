import React, { Component } from 'react'
import Breadcrumbs from "../../components/breadcrumb";
import Image from 'next/image';
import Link from 'next/link';
 
export default class Subservicetemp1 extends Component {
  render() {
 
    return (
      <>
            <section>
              <div className='img' style={{backgroundImage: `url(${this.props.img})`}}>
              <div className="container pdb50">
                <div className='pdt200 mpdt80 w70p mw100p'>                
                <h1 className="heading1 lhm mpdb10">{this.props.heading1}</h1>
                </div>
                <div className={`${this.props.display}`}>
                <div className={`btn hovp `}>
                    <Link href={"/contact"} >Our Solutions</Link>
                  </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={`bgc-w ${this.props.display}`}>
              <div className='container'>
              {this.props.overview.map((overview, i) => {
              return (
                    <div key={i}>
                <h2 className='fs30 mfs18 cp tac mb20 pdt20 mpdt0 fwb'>{overview.heading2}</h2>
                {overview.content.map((content, i) => {
              return (
                    <div key={i}>
                <p className='tac cg fs20 mfs16 lh mb20'>{content}</p>
                </div>)
                })}
                </div>
              )})}
              </div>
            </section>
          <style jsx>
            {`
            @import url('https://fonts.googleapis.com/css2?family=Expletus+Sans:ital,wght@1,400;1,700&display=swap');
            .heading1{
              font-family:Expletus Sans;
              font-size:40px;
              font-weight:bold;
              padding-bottom:30px;
              color:#fff;
            }
            .img{
              background-repeat:no-repeat;
              background-size: cover;
              background-position: center;
              width:100%;
              height:560px;
            }
            .btn{
              width:250px;
                height: 60px;
                background:transparent;
                color: white;
                border:1px #fff solid;
                font-size: 20px;
                font-weight: 500;
                border-radius: 5px;
                display:flex;
              align-items: center;
              justify-content: center;
            }
            .hovp:hover {
              background-image: linear-gradient(to right,#CB218E, #6617CB);
              border:none;
          }
            @media only screen and (max-width: 1023px){              
              .heading1{
                font-size:20px;
                padding-bottom:20px;
                width:100%;
              }
              .btn{
                font-size: 14px;
                width: 120px;    
                height:36px;  
              }
              .img{
                background-size:100% 100%;
                background-position: center;
                background-repeat:no-repeat;
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