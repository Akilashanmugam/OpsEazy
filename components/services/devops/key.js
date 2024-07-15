import React, { Component } from "react";
import Image from "next/image";
export class Keyservice extends Component {
  render() {
 
    return (
      <>
        <section>
          <div className="container">
            <h2 className="cp fs30 mfs23 tac fwb pdb15 mpdb10">
            {this.props.heading2}
            </h2>
            <p className="fs20 mfs16 tac pdb30 mpdb15">
             {this.props.para}
            </p>
            <div className="df fjsb fw mdf mfdc mfjc mfac">
              {this.props.keyservice.map((serivce, i) => {
                return (
                  <div key={i}>
                    <div className='box-img mb30 pd20 mmb15 '>
                    <Image src={serivce.img} alt={serivce.title} width={"90"} height={"90"} />
                        <h4 className="df fwb fs20 mfs18 pdt15 cp ">
                          {serivce.title}
                        </h4>
                        <p className="pdt15 mpdt15 cg lh fs18 mfs16">
                          {serivce.content}
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
            .box-img {
              width: 380px;
              height: 350px;
              border-radius: 8px;
              border: 1px solid #DDDDDD;
              box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.25);
            }
            @media only screen and (max-width: 1023px) {
              .box-img {
                width: 280px;
                height: 100%;
              }
            }
          `}
        </style>
      </>
    );
  }
}

export default  Keyservice;
