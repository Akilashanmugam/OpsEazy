import React, { Component } from 'react'

  
  export default class Circleimgbox extends Component {
        render() {
    return (
      <>
        <section>
          <div className=" container">
            <h3 className="cp tac fs30 mfs18 pd10 fwb">
              {this.props.heading3}
            </h3>
            <p className={`${this.props.display} fs20 mfs16 lh3 pdt20 tac mtac`}>{this.props.para} </p>
                <div className="gd1 mfjc w100p">
                  {this.props.circlecontent.map((course, i) => {
                    return (
                      <div key={i}>
                      <div className="pdt100 mpdt70">
                        <div className="box">
                        <img src={course.img} alt={course.title} className="over-top-center" />
                          <div className="pd20 mpd15">
                            <div className='heading'>
                            <div className="fs23 mfs16 pdt65 mpdt55 fwb">{course.title}</div>
                            <div className="hlinew"></div>
                            </div>
                            <div className="pdt10 mpdtb10 lh fs18 mfs14 cg"> {course.content}</div>
                          </div>
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
        .gd1{
          flex: 1 100px;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: space-around;
          }  
          .heading {
            display: inline-block;
        }
          .hlinew{
            display: inline-block;
            width: 100%; /* Adjust width to match the heading's width */
            height: 6.5px;
            border-radius: 2.5px;
            background-image: linear-gradient(to right, #6617CB , white);
          } 
          .box {
            position: relative;
            background-color:white;
            border-radius: 18px ;
            height: 350px;
            width: 560px;
            text-align: center;
            box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.25);
          }          
          .over-top-center {
            position: absolute;
            top: -20%;
            left: 50%;
            transform: translateX(-50%);
            width:145px;
            z-index: 1;
          }
          @media only screen and (max-width: 1023px){
            .box{
                border-radius: 15px ;
                height: 100%;
                width: 100%;                
            }   
            .over-top-center {
                top: -16%;
                width:100px;
            }
           }
        `}
    </style>
      </>
    );
  }};
  