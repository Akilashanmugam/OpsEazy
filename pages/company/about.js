import React, { Component } from 'react';
import Layout from '../../components/layout';
import Blogsec1 from "../../components/blog/blogsec1";
import Aboutsec1 from '../../components/about';
import ContactTwo from '../../components/contactTwo';
import Blogmain from '../../components/blog/blog-main';
import NextSeoModule from '../../components/next-seo';
import Image from 'next/image';

export class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
       <NextSeoModule
            title="About Us - OpsEazy"
            description='Explore OpsEazy: Your Trusted Partner for Seamless Solutions. Learn More About Our Vision and Expertise'
            url="company/about"
            image="about.webp"
            keyword=""
          />
        <Layout>
                    <Blogsec1 heading1="Delve into a Comprehensive Understanding of Our Background" img="/image/about.webp"/>
                    <Aboutsec1 display={"dn"}/>
                    <section>
                      <div className='container'>
                        <div className='df fjc'>
                          <div className='box'>
                            <div className='pd50 mpd15'>
                              <div>
                                <h2 className='cp fs30 mfs20 fw600'>Mission of Techno Mechatronics</h2>
                              </div>
                              <div className='df fac mfdc pdt20'>
                                <div className=''>
                                <Image src="/image/home/mission.webp" alt="Mission Img" width="100" height="120" />
                                </div>
                                <div className='fs20 mfs16 pdl30 mpdl0 lh cg'>
                                Techno Mechatronics is dedicated to providing exceptional hardware development services, leveraging our unique methodologies to help clients realize their visions and excel in their industries.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='df fjc pdt25'>
                          <div className='box'>
                            <div className='pd50 mpd15'>
                              <div>
                                <h2 className='cp fs30 mfs20 fw600'>Vision of Techno Mechatronics</h2>
                              </div>
                              <div className='df fac mfdc pdt20'>
                                <div className=''>
                                <Image src="/image/home/vision.webp" alt="Mission Img" width="110" height="110" />
                                </div>
                                <div className='fs20 mfs16 pdl30 mpdl0 lh cg'>
                                To lead the hardware sector with groundbreaking solutions that enhance efficiency and drive progress, positioning Techno Mechatronics as a global innovation hub.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='df fjc pdt25'>
                          <div className='box'>
                            <div className='pd50 mpd15'>
                              <div>
                                <h2 className='cp fs30 mfs20 fw600'>Innovation Leadership</h2>
                              </div>
                              <div className='df fac mfdc pdt20'>
                                <div className=''>
                                <Image src="/image/home/leader.webp" alt="Mission Img" width="120" height="125" />
                                </div>
                                <div className='fs20 mfs16 pdl30 mpdl0 lh cg'>
                                Techno Mechatronic&apos;s At Techno Mechatronics, we aim to lead in innovation by advancing hardware solutions that empower clients with user-friendly technologies. We commit to operational excellence, talent development, exceeding customer expectations, strategic partnerships, adaptability in technology, and sustainability.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
        <Blogmain />
        <ContactTwo />
        <style jsx>{`
        .box{
          width:1100px;
          height:300px;
          box-shadow: 0px 8px 15px #00000040;
          border-radius:20px;
        }
        @media only screen and (max-width: 1023px){
          .box{
            width:100%;
            height:100%;
            box-shadow: 0px 8px 24px #00000040;
            border-radius:20px;
          }
        }
        `}</style>
      </Layout>
      </>
    )
  }
}

export default About