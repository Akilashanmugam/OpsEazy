import react from "react";
import Head from "next/head";
 
export default class Branches extends react.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <section className="pdt80 mpdt0">
          <div className="container">
            <div className="df fjsb mdf mfdc mfjc mfac">
              <div className="pdt30 mpdt10">
                <div className="box-img df mfjc fdc tac mb10 mmb5 ">
                  <div className="df fjc pdb15 mpdb10">
                    <div className="img4"></div>
                  <img className="img"
                      src="/image/contactpage/call.webp"
                      alt="call"
                      style={{ width: "70px", height: "70px" }}
                    />
                     
                  </div>
                  <h2 className="fs20 fwb mfs18 cp pdb5">PHONE NUMBER</h2>
                  <address className="lh3 pd10 mpdb10 lh fs18 cg ">
                  <a href="tel:8681070809">+91 97902 60109 </a>
                  </address>
                </div>
              </div>
              <div className="pdt30 mpdt10">
                <div className="box-img df mfjc fdc tac mb10 mmb5 ">
                  <div className="df fjc pdb15 mpdb10">
                  <div className="img3"></div>
                    <img className="img"
                      src="/image/contactpage/mail.webp"
                      alt="mail"
                      style={{ width: "70px", height: "70px" }}
                    />
                   
                  </div>
                  <h2 className="fs20 fwb mfs18 cp pdb5">EMAIL ADDRESS</h2>
                  <address className="lh3 pd10 mpdb10 lh fs18 cg ">
                  <a href="mailto:info@opseazy">techno@gmail.com </a>
                  </address>
                </div>
              </div>
              <div className="pdt30 mpdt10">
                <div className="box-img df mfjc fdc tac mb10 mmb5 ">
                  <div className="df fjc pdb15 mpdb10">
                    <div className="img1"></div>
                    <img className="img"
                      src="/image/contactpage/work.webp"
                      alt="work"
                      style={{ width: "70px", height: "70px" }}
                    />
                   
                  </div>
                  <h2 className="fs20 fwb mfs18 cp pdb5">WORKING</h2>
                  <address className="lh3 pd10 mpdb10 lh fs18 cg">
                    <div>Monday - Saturday </div>
                    <div>10.00AM - 7.00PM </div>
                  </address>
                </div>
              </div>
              <div className="pdt30 mpdt10">
                <div className="box-img tac mb10 mmb5">
                  <div className="df fjc pdb15 mpdb10">
                  <div className="img2"></div>
                    <img className="img"
                      src="/image/contactpage/address.webp"
                      alt="address"
                      style={{ width: "70px", height: "70px" }}
                    />
                   
                  </div>
                  <h2 className="fs20 fwb mfs18 cp pdb5">ADDRESS</h2>
                  <address className="lh3 pd10 mpdb10 lh fs18">
                  
                    <div> #5, 11th Cross, Brundavana Nagara,</div>
                    <div>KO halli,Bengaluru, </div>
                    <div> Karnataka 560073</div>
                  </address>
                </div>
              </div>
             
            </div>
          </div>
        </section>
 
        <style jsx>
          {`  
          .img{            
            background-repeat:no-repeat;
            background-size: cover;
            background-position: center;
          }        
          .box-img{
            width:285px;
            height:300px;
            border:none;
            border-radius:5px;
            position: relative;
            background-color:white;
            box-shadow: 0px 8px 24px #00000040;
            padding-top:49px;
         }
         .box-img:hover {
          background-color:#6617CB;
          box-shadow:none;
        }
        .box-img:hover address{
          font-size:16px;
        }
         .box-img:hover .img1{
          background-image:url(/image/contactpage/hoverwork.webp);
          background-repeat:no-repeat;
          background-size: cover;
          background-position: center;
          width:70px;
          height:70px;
         }
         .box-img:hover .img3{
          background-image:url(/image/contactpage/hovermail.webp);
          background-repeat:no-repeat;
          background-size: cover;
          background-position: center;
          width:70px;
          height:70px;
         }
         .box-img:hover .img2{
          background-image:url(/image/contactpage/hoveraddress.webp);
          background-repeat:no-repeat;
           background-size: cover;
           background-position: center;
           width:70px;
           height:70px;
          }
          .box-img:hover .img4{
            background-image:url(/image/contactpage/hovercall.webp);
            background-repeat:no-repeat;
           background-size: cover;
            background-position: center;
             width:70px;
             height:70px;
          }
         .box-img:hover address{
          color:white;
          font-weight:bold;
          }
         .box-img:hover h2{
          color:white;
          font-weight:bold;
          }
         
         .box-img:hover .img{display:none} {
         
          }
       
          @media only screen and (max-width: 1023px){
            .box-img{
              width:250px;
              height:315px;
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
 