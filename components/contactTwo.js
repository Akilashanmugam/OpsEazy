import React, { Component } from 'react'
import Head from "next/head";
import Image from 'next/image';

export default class ContactTwo extends Component {
  constructor() {
    super();
    this.state = {
        username: "",
        email: "",
        pno: "",
        sub:"",
        service:"",
        msg:"",
        errmsg: {}
    }
}
handleChange = (event) => {
    let n = event.target.name;
    let v = event.target.value;
    this.setState({[n]: v });
}
handleValidation() {
    let a = this.state.username;
    let b = this.state.pno;
    let c = this.state.email;
    let err = {};
    let formIsvalid = true;
    if (a) {
        if (Number(a)) {
            formIsvalid = false;
            err["username"] = <strong>Name must be letter</strong>;
        }
    }
    if (c) {
        let lastAtPos = c.lastIndexOf('@');
        let lastDotPos = c.lastIndexOf('.');
        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && c.indexOf('@@') == -1 && lastDotPos > 2 && (c.length - lastDotPos) > 2)) {
            formIsvalid = false;
            err["email"] = <strong>Invalid email</strong>;
        }
    }
    if (b) {
        if ((!(b).match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/))) {
            formIsvalid = false;
            err["pno"] = <strong>Phone number must be number</strong>;
        }
    }
    this.setState({ errmsg: err })
    return formIsvalid;
}
  render() {
    return (
      <>
        <section className="bg-img-con">
          <div className="container pdtb0">
            <div className=''>
              <div className='df mfdc cw'>
            <div className="w50 mw100 mmb20">
              <div>
                <Image src={"/image/home/contactimg.webp"} layout='responsive'alt='Contact-img' width={"300"} height={"300"} />
              </div>
              </div>
            <div className="w50 mw100 mml0 pd20 mpd0 mpdt10">
            <form className="df fdc pdl10 mpdl0"  autoComplete= "on">
              <div className='fs28 mfs20 fwb pdb10'>Get in Touch</div>
              <p className='fs28 mfs20 fwb pdb20'>With Our Support Team</p>
                                    <div className="df fdc">
                                        <div className="df fdr mdf mfdc">
                                            <div className="df fdc">
                                                <input type="text" name="username" className="textFeild" placeholder='Name*' onChange={this.handleChange} value={this.state.username} required>
                                                </input>
                                                <span style={{ color: "red" }} className="fs14">{this.state.errmsg["username"]}</span>
                                            </div>
                                            <div className="df fdc pdl40 mpdl0">
                                                <input type="text" name="email" placeholder='Email*' className="textFeild" onChange={this.handleChange} value={this.state.email} required>
                                                </input>
                                                <span style={{ color: "red" }} className="fs14">{this.state.errmsg["email"]}</span>
                                            </div>
                                        </div>
                                        <div className="df fdr mdf mfdc">
                                            <div className="df fdc">
                                                <input type="text" name="sub" placeholder='Company' onChange={this.handleChange}  className="textFeild" value={this.state.sub}>
                                                </input>
                                            </div>
                                            <div className="df fdc pdl40 mpdl0">
                                                <input type="text" name="pno" placeholder='Phone*' className="textFeild" onChange={this.handleChange} value={this.state.pno} required>
                                                </input>
                                                <span style={{ color: "red" }} className="fs14">{this.state.errmsg["pno"]}</span>
                                            </div>
                                        </div>
                                        <div className="df fdc">
                                                <input type="text" name="pno" placeholder='What Service are you looking for?' className="textarea" onChange={this.handleChange} value={this.state.service} required>
                                                </input>
                                                <span style={{ color: "red" }} className="fs14">{this.state.errmsg["pno"]}</span>
                                            </div>
                                        <div className="df fdc pdtb25">
                                            <textarea name="msg" placeholder='Type your Message' onChange={this.handleChange} value={this.state.msg} ></textarea>
                                        </div>
                                    </div>
                                    <div className='df fjc'>
                                    <div className="btn"  >
                                        <div className="fs24 mfs20 fw500" type="submit" >
                                          Send us Message 
                                          </div>
                                          <div className='df fac pdl20'>
                                            <img  src='/image/home/arrow-icon.webp' alt="Arrow Img" className='img' width={"32"} height={"32"}/>
                                          </div>
                                          </div>
                                    </div>
                                </form>
            </div>
            </div>
            </div>
            </div>
            </section>
        <style jsx>{`
          .bg-img-con {
            background-image:url("/image/home/contact-bg.webp");
            background-size: cover;
            background-position:center;
            width:100%;
          }
          .textFeild {
            margin-bottom: 25px;
          }        
          .textFeild{
            width:280px;
            height:48px;
            padding:10px;
            font-size:14px;
            color:#fff;
            border:none;
            background-color: rgba(255, 255, 255, .1);
            
        }
        .textFeild::placeholder {
          color: #fff;
          opacity: 1; 
      }
        textarea{
          width:600px;
          height:68px;
          resize:none;
          color:#fff;
          font-size:14px;
          border:none;
          background-color: rgba(255, 255, 255, .1);
          padding:10px;
          margin:0;
      }
      textarea::placeholder {
        color: #fff;
        opacity: 1; 
    }
      .textarea{
        width:600px;
        height:48px;
        resize:none;
        color:#000;
        font-size:14px;
        border:none;
        background-color: rgba(255, 255, 255, .1);
        padding:10px;
        margin:0;
    }
    .textarea::placeholder {
      color: #fff;
      opacity: 1; 
  }
          .btn {    
            width: 306px;
            height: 88px;
            background-color: white;
            color: black;
            border:none;
            font-size: 24px;
            font-weight:500;
            border-radius: 5px;
            display: flex;
            justify-content:center;
            align-items: center;
          }
          .icon{
            align-self: center;
            font-size: 24px;
            color: blueviolet;
          }

          @media only screen and (max-width: 1023px) {
            textarea{
              width:100%;
              height:50px; 
          }
          .textarea{
            width:100%;
            height:50px; 
        }
          .textFeild{
              width:100%; 
          }
          .btn {    
            width: 280px;
            height: 65px;
            background-color: white;
            color: black;
            border:none;
            font-size: 20px;
            font-weight:500;
            border-radius: 5px;
            display: flex;
            justify-content:center;
            align-items: center;
          }
          }
        `}</style>
      </>
    );
  }
}
