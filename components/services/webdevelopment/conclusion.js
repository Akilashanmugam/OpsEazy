import React, { Component } from "react";

export default class Conclusion extends Component {
  render() {
    return (
      <>
        <section>
          <div className="container">
            <div className="df fac mfdcr">
              <div className="w60p mw100p mpdt25">
              <div className="pdt20 mpdt10 pdb5">
                <h3 className={`fs25 mfs18 cp mtac fwb mpdb5`}>
                  {this.props.heading3}
                </h3>
                <p
                  className={`fs20 mfs16 lh3 pdt20 mpdt10`}
                >
                  {this.props.imgpara1} </p>
                  <p
                  className={`fs20 mfs16 lh3 pdt20 mpdt10`}
                >
                  {this.props.imgpara2}
                </p>
              </div>
              </div>
              <div className="w40p df fjc mw100p mfdc">
                  <img
                    src={this.props.img}
                    alt={this.props.alt}
                    width={this.props.width}
                    height={this.props.height}
                    className="img"
                  />
                </div>
            </div>
            <div className="pdt30 mpdt20">
              <div className="">
                <h3 className={`fs30 mfs18 cp tac mtac fwb mpdb5`}>
                  {this.props.heading2}
                </h3>
                <p
                  className={`fs20 mfs16 lh3 pdt20 mpdt10 tac`}
                >
                  {this.props.conclupara1} </p>
                  <p
                  className={`fs20 mfs16 lh3 pdt20 mpdt10 tac`}
                >
                  {this.props.conclupara2}
                </p>
              </div>
              </div>
          </div>
        </section>
        
        <style jsx>
          {`
            @media only screen and (max-width: 1223px) {
              .img {
                width: 100%;
                height: 100%;
              }
            }
          `}
        </style>
      </>
    );
  }
}
