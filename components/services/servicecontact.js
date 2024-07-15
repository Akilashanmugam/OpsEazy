import Link from 'next/link'
import React, { Component } from 'react'

export class Servicecontact extends Component {
  render() {
    return (
      <>
      <section className='mdn'>
      <div className='container'>
        <div style={{background : `url("${this.props.bgimg}")`}} className='bg-img'>
            <div className='pd60 mpd10'>
                <div className='w70p mw100p pdl20 mpdl0'>
                    <h3 className='heading2 mfs18'>
                        {this.props.heading3}
                    </h3>
                    <div className='mdf mfjc'>
                    <div className='btn'>
                        <Link href={"tel:8681070809"} className='pd20 fs20 mfs14 fw400 mpd5'>Contact Our Expert</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </section>
      <style>
        {`
        .bg-img{
            background-repeat:no-repeat;
            background-size: cover;
            background-position: center; 
            border-radius:20px;
            width:1220;
            height:370px;
        }
        .heading2{
            font-family:Expletus Sans;
            font-size:40px;
            font-weight:bold;
            color:#fff;
            padding-top:30px;
            padding-bottom:30px;
            line-height:55px;
        }
        .btn{
            display:flex;
            justify-content: center;
            align-items: center;
            border-radius:5px;
           background-color:#fff;
           max-width:270px;
           height:60px;
        }
        @media only screen and (max-width: 1023px) {
            .heading2{
                font-size:23px;
                font-weight:bold;
                color:#fff;
                padding:10px 0px;
                text-align:center;
                line-height:25px;
            }
            .btn{
                display:flex;
                justify-content: center;
                align-items: center;
                border-radius:5px;
               background-color:#fff;
               max-width:180px;
               height:30px;
            }
        }
        `}
      </style>
      </>
    )
  }
}

export default Servicecontact