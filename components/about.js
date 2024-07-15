import React, { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'
export class Aboutsec1 extends Component {
  render() {
    return (
      <>
      <section className='pdt50 mpdt10'>
        <div className='container'>
        <div className='df mdf mfdc'>
            <div className='w50p mw100p'>
                <div className=''>
                    <img src={"/image/home/about.webp"}  alt="about-image" className='abt-img'/>
                </div>
            </div>
            <div className='w50p mw100p pdl20 mpdl0 mpdb25 mpdt15'>
                <p className={`cp fs18 mfs16 fw400 mb10 mmb5 mtac ${this.props.display}`}>About us</p>
                <h2 className='fs35 mfs20 mb10 mtac fwb'>A trusted partner for global clients since <span className='cp'>2020</span>.</h2>
                <p className='lh fs20 mfs16 mb10'>Techno Mechatronics is your go-to for exceptional hardware projects. We utilize modern methodologies to improve project efficiency, turning your ideas into reality with our unique touch.</p>
                <div className='pdt30 mpdt15 df mfdc'>
                    <div className='w50p mw100p'>
                        <div className=''>
                            <div className='df'>
                                <div className=''>
                                    <Image src={"/image/home/first on field.webp"} alt="first on field image" width={"80"} height={"80"} />
                                </div>
                                <div className='pdl10'>
                                    <h4 className='cp fs18 mb5'>First On Field</h4>
                                    <p className='cg'>We excel in our field, consistently delivering hardware solutions on schedule.</p>
                                </div>
                            </div>
                            <div className='df pdt60 mpdt15'>
                                <div className=''>
                                    <Image src={"/image/home/world wide.webp"} alt="Easy To Reach image" width={"80"} height={"80"} />
                                </div>
                                <div className='pdl10'>
                                    <h4 className='cp fs18 mb5'>Easy To Reach</h4>
                                    <p className='cg'>We discuss strategies to ensure professional success in the hardware industry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w50p mw100p'>
                    <div className=''>
                            <div className='df mpdt15'>
                                <div className=''>
                                    <Image src={"/image/home/easy to reach.webp"} alt="Worldwide Service image" width={"80"} height={"80"} />
                                </div>
                                <div className='pdl10'>
                                    <h4 className='cp fs18 mb5'>Worldwide Service</h4>
                                    <p className='cg'>Our hardware services are accessible and available to clients all over the world.</p>
                                </div>
                            </div>
                            <div className='df pdt50 mpdt15'>
                                <div className=''>
                                    <Image src={"/image/home/support.webp"} alt="24/7 Support image" width={"80"} height={"80"} />
                                </div>
                                <div className='pdl10'>
                                    <h4 className='cp fs18 mb5'>24/7 Support</h4>
                                    <p className='cg mfs16'>Get reliable assistance for your hardware needs with our 24/7 support services.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`pdt30 mpdt20 pdl20 pdr20 ${this.props.display}`}>
                <div className='btn df fac fjc'>
                    <Link href='/company/about' className='fwb'><div className='text'>Get In Touch</div></Link>
                </div>
                </div>
            </div>
        </div>
        </div>
      </section>
      <style jsx>
        {`
        .abt-img{
            width:550px;

        }
        .shad{
            border-radius: 50%;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;          
        }
        .text{
            background-image:linear-gradient(to right,#CB218E, #6617CB);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            transition: transform 0.3s ease;
            font-size:14px;
        }
        .btn:hover{
            background-image:linear-gradient(to right,#CB218E, #6617CB);
            border:none;
        }
        .btn:hover .text{
            color:white;
            -webkit-background-clip: text;
        }
        .btn{
            width:120px;
            height:44px;
            background-color:transparent;
            border: 2px solid ;
            border-radius:4px;
            border-image:linear-gradient(to right,#CB218E, #6617CB);
            border-image-slice: 1;
            transition: transform 0.3s ease;
        }
        @media only screen and (max-width: 1023px) {
        .abt-img{
            width:100%;
        }
    }
        `}
      </style>
      </>
    )
  }
}

export default Aboutsec1