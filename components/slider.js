import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default class Slider1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 2000,
      dots: false,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      pauseOnHover: false,
    };
    return (
      <>
      <section className="mdn">
            <Slider {...settings}>
            <div className='bg-img'>
              <div className="container">
                <div className=''>
                  <h2 className='text'>CNC  <br/> Machining</h2>
                  <div className="btn hovp">
                    <Link href={""} >Our Solutions</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-img1 '>
              <div className="container">
                <div className=''>
                  <h1 className='text'>3D <br/> Printing </h1>
                  <div className="btn hovp">
                    <Link href={""} >Our Solutions</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-img2 '>
              <div className="container">
                <div className=''>
                  <h2 className='text'>Sheet Metal  <br/>Fabrication</h2>
                  <div className="btn hovp">
                    <Link href={""} >Our Solutions</Link>
                  </div>
                </div>
                </div>
            </div>
            <div className='bg-img3 '>
              <div className="container">
                <div className=''>
                  <h2 className='text'>Laser Cutting and  <br/>Engraving</h2>
                  <div className="btn hovp">
                    <Link href={""} >Our Solutions</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-img4'>
              <div className="container">
              <div className=""> 
                  <h2 className='text'>Mechanical Design <br/> Services </h2>
                  <div className="btn hovp">
                    <Link href={""} >Our Solutions</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-img5'>
              <div className="container">
                <div className=''>
                  <h2 className='text'>Electronic Design and<br/>  Prototyping</h2>
                  <div className="btn hovp">
                    <Link href={""} >Our Solutions</Link>
                  </div>
                </div>
              </div>
            </div>
            </Slider>
            </section>
          <style jsx>
            {`
                 @import url('https://fonts.googleapis.com/css2?family=Expletus+Sans:ital,wght@1,400;1,700&display=swap');
                 .text{
                   color: white;
                   padding-top:200px;
                   font-size: 58px;
                   font-family:Expletus Sans;
                   font-weight: 700;
                   word-wrap: break-word;
                   font-style: italic;
                   padding-bottom:50px;
                 }
                 .bg-img{
                   background-image:url(/image/home/cloud-img.webp);
                   background-repeat:no-repeat;
                   background-size:cover;
                   background-position:center;
                   width:100%;
                   height:600px;
                 }
                 .bg-img1{
                    background-image:url(/image/service/devops-services/devops-services.webp);
                    background-repeat:no-repeat;
                    background-size:cover;
                    background-position:center;
                    width:100%;
                    height:600px;
                  }
                  .bg-img2{
                    background-image:url(/image/home/erp-img.webp);
                    background-repeat:no-repeat;
                    background-size:cover;
                    background-position:center;
                    width:100%;
                    height:600px;
                  }
                  .bg-img3{
                    background-image:url(/image/home/digital-img.webp);
                    background-repeat:no-repeat;
                    background-size:cover;
                    background-position:center;
                    width:100%;
                    height:600px;
                  }
                  .bg-img4{
                    background-image:url(/image/home/data-img.webp);
                    background-repeat:no-repeat;
                    background-size:cover;
                    background-position:center;
                    width:100%;
                    height:600px;
                  }
                  .bg-img5{
                    background-image:url(/image/home/development-img.webp);
                    background-repeat:no-repeat;
                    background-size:cover;
                    background-position:center;
                    width:100%;
                    height:600px;
                  }
                  .btn{
                    width:250px;
                      height: 60px;
                      background:transparent;
                      color: white;
                      border:1px #fff solid;
                      font-size: 20px;
                      font-weight: 500;
                      border-radius: 5px;
                      display:flex;
                  align-items: center;
                  justify-content: center;
                  }
                  .hovp:hover {
                    background-image: linear-gradient(to right,#CB218E, #6617CB);
                    border:none;
                }
            `}
          </style>
      </>
    );
  }
}
