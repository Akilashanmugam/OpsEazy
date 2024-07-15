import React, { Component } from "react";
import Image from "next/image";
export default class Elevate1 extends Component {
  render() {
    return (
      <>
        <section>
          <div className="container">
            <h2 className="fs30 mfs18 tac pdb10 mpdb0 mt30 fwb cp">{this.props.heading2}  </h2>
          
            <div className="gd1 mdf mfdc mfjc mfac ">
              {this.props.content1.map((services, i) => {
                return (
                  <div className="pdt30" key={i}>
                    <div className="box-img mb10 mmb5 ">
                      <div className="df pdb15 mpdb10">
                        <Image
                          src={services.img}
                          alt={services.title}
                          width={"100"}
                          height={"100"}
                        />
                      </div>
                      <h4 className=" fs18 fwb mfs16 cp pdb10">
                        {services.title}
                      </h4>
                      <p className="lh3 pdb10 lh fs16 mfs14 cg ">
                        {services.content}
                      </p>
                    </div>
                  </div>
                );
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
              height:490px;
              border: 1px solid #EAEAEA;
              border-radius:5px;
              position: relative;
              background-color:white;
              box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.25);
              padding:30px;

              
            }
            @media only screen and (max-width: 1023px){
              .box-img{
                width:100%;
                height:100%;
                padding:10px;
            }
            .cw{
              color:white;
            }
            `}
        </style>
      </>
    );
  }
}
