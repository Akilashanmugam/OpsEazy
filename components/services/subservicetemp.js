import React, { Component } from 'react'
import Breadcrumbs from "../../components/breadcrumb";
import Image from 'next/image';
import Link from 'next/link';
 
export class Subservicetemp extends Component {
  render() {
 
    return (
      <>
            <section>
              <div className='img' style={{backgroundImage: `url(${this.props.img})`}}>
              <div className="container pdb50">
                <div className='pdt200 mpdt80 w60p mw100p'>
                   <h1 className="heading1 lhm mpdb10">{this.props.heading1}</h1>
                </div>
                </div>
              </div>
            </section>
            <section className='bgc-w'>
              <div className='container'>
              {this.props.overview.map((overview, i) => {
              return (
                    <div key={i}>
                <h2 className='fs28 mfs18 cp tac mb20 pdt20 mpdt0 fwb'>{overview.heading2}</h2>
                {overview.content.map((content, i) => {
              return (
                    <div key={i}>
                <p className='tac cg fs18 mfs16 lh mb20'>{content}</p>
                </div>)
                })}
                </div>
              )})}
              </div>
            </section>
            <section className=''>
              <div className='container'>
                <h2 className='fs28 mfs18 cp tac mb30 fwb'>Discover our extensive range of hardware services.</h2>
                <div className='gd1 mdf mfdc mfjc mfac'>
            {this.props.service.map((service, i) => {
              return (
                    <div key={i} className=''>
                      <a href={service.path}>
                      <div className='box-img mb30 mmb20'>
                        <div className='df fjc fac pdtb20'><Image src={service.img} alt={`${service.title} Image`} width={"150"} height={"150"} /></div>
                        <h4 className='df fjc fwb fs23 tac pd15 mpd5 mfs16'>{service.title}</h4>
                        <p className='df fjc tac lh3 pd10 cg lh fs18 mfs16'>{service.content}</p>
                        <div className={`cp mdf mfjc fw400 btn mpdl0`}>
                          <div className='df fac fjc'>
                          <div className=''>Discover More</div>
                          <div className='pdt7'>
                          <Image src={"/image/icon-park_right.webp"} alt="Arrow Image" width={"20"} height={"22"} />
                          </div>
                          </div>
                        </div>
                      </div>
                      </a>
                    </div>
              )
            })}
            </div>
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
            .box-img{
              width:375px;
              height:500px;
              border-radius:10px;
              position: relative;
              box-shadow: 0px 16px 40px 0px rgba(102, 23, 203, 0.2);
              background-color:#fff;
            }
            .box-img:hover{
              box-shadow:none;
            }
            .btn{
              display:flex;
              font-size:18px;
              background-color:rgba(0, 0, 0, 0.005);
              position: absolute;
              bottom:10px;
              padding-left:20px;
            }
            .gd1{
              flex: 1 100px;
              display: flex;
              flex-flow: row wrap;
              align-items: center;
              justify-content: space-around;
              }  
           
            .btn1{
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
              .box-img{
                width:280px;
                height:100%;
              }
              .heading1{
                font-size:20px;
                padding-bottom:20px;
                width:70vw;
                }
              .btn{
                position: relative;  
                font-size:16px;    
                padding-top:25px;
                padding-bottom:25px;      
              }
              .btn1{
                font-size: 14px;
                width: 120px;
                height:36px;        
              }
              .img{
                background-size:100% 100%;
                background-position:center;
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
 
export default Subservicetemp