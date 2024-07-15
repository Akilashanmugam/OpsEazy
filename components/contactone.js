import React, { Component } from "react";
import Link from "next/link";
export class Contactone extends Component {
  render() {
    return (
      <>
            <section className='mdn'>
      <div className='container'>
        <div style={{background : `url("/image/home/contact-image.webp")`}} className='bg-img'>
            <div className='pd60 mpd10'>
                <div className='tac'>
                    <div className='heading2 mfs18'>
                    We take great pride in offering outstanding 
                    <br/> support and service.
                    </div>
                    <div className='df fjc fac'>
                    <div className='btn'>
                        <Link href="contact" className='pd20 fs20 mfs14 fw400 mpd5'>Contact Us</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </section>
           <style jsx>
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
                  padding-top:10px;
                  padding-bottom:30px;
                  line-height:55px;
              }
              .btn{
                width:210px;
                height: 52px;
                background-color: white;
                color: black;
                border:none;
                font-size: 20px;
                font-weight: 500;
                border-radius: 5px;
                display:flex;
                align-items: center;
                justify-content: center;
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
    );
  }
}

export default Contactone;
