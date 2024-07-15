import React, { Component } from "react";
import Image from "next/image";
export default class Databox extends Component {
  render() {
    return (
      <>
        <section>
          <div className="container">
            <h2 className="fs30 mfs18 cp tac mt30 fwb">
              {this.props.heading2}
            </h2>
            <div className="gd1 mfjc w100p">
            {this.props.boxcontent.map((boxcontent, i) => {
                return (
                  <div key={i}>
                     <div className="pdt30 mpdt20">
                    <div className="box pd20">
                      <div className="df fjc fjfs pdb15 cursor">
                        <Image src={boxcontent.img} alt={boxcontent.title} width={"70"} height={"70"}/>
                      </div>
                      <h4 className="df fjfs fwb pdb15 fs25 fwb mfs16 cp">
                        {boxcontent.title}
                      </h4>
                      {boxcontent.content.map((content, i) => {
              return (
                    <div key={i}>
                <p className='lh3 pdb15 fs18 mfs14'>{content}</p>
                </div>)
                })}
                    </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <style jsx>
          {`
            .box {
              position: relative;
              border: 1px solid #E7E7E7
              background-color: white;
              border-radius: 20px;
              min-height:300px;
              max-height: 100%;
              width: 570px;            
              box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
            }

            .gd1 {
              flex: 1 100px;
              display: flex;
              flex-flow: row wrap;
              align-items: center;
              justify-content: space-around;
            }
            @media only screen and (max-width: 1023px) {
              .box {
                border-radius: 20px;
                height: 100%;
                width: 100%;
              }
            }
          `}
        </style>
      </>
    );
  }
}
