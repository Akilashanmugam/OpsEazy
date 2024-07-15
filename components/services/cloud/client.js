import Image from 'next/image';
import React, { Component } from 'react'

    
    export default class Client extends Component {
        render() {
  return (
    <>
        <section className='pdt30 mdn'>
        <div className="container">
          <h3 className="cp fs30 mfs20 tac fwb"> Real-World Success Stories</h3> 
          <div className="pdt50 mpdt30 df fjc">
            <div className="bgimage" style={{backgroundImage: `url(${this.props.img})`}}>
              <div className="pd30 pdl50">
                <div className="box2">
                  <div className="pd30">
                    <div className="">                     
                        <Image src='/image/service/cloud-services/up.webp' alt="Quotes Image" width={"50"} height={"50"} />
                    </div> 
                    <div className="tat pdl15">
                        {this.props.content}
                    </div>
 
                    <div className=" df fjfe">
                    <div className="">
                        <Image src='/image/service/cloud-services/down.webp' alt="Quotes Image" width={"50"} height={"50"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .box2 {
            border-color: transparent;
            backdrop-filter: blur(10px) brightness(100%);
            background: linear-gradient(94.94deg, rgba(255, 255, 255, 0.154) 0.33%, rgba(255, 255, 255, 0.088) 100.38%),
            linear-gradient(94.91deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 113.65%, rgba(255, 255, 255, 0) 113.65%);
            background-image: transparent;
            box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            height: 290px;
            width: 990px;
            border: 1px solid;
            border-image-source: linear-gradient(94.91deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 113.65%, rgba(255, 255, 255, 0) 113.65%)1;


            
          }
          .tat {
            color: #fff;
            opacity: 1; 
            font-size: 23px;,
            letter-spacing: 0.6px;
            line-height: normal;
            text-align: center;
          }
          .bgimage {
            border-radius: 18px;
            background-image: transparent;
            background-size: 100% 100%;
            width: 1100px;
          }
 
          @media only screen and (max-width: 1023px) {
           
          }
        `}
      </style>
    </>
  );
}}
 