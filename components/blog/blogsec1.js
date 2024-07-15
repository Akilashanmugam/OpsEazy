import React, { Component } from 'react'
import Breadcrumbs from '../../components/breadcrumb'
 
export class Blogsec1 extends Component {
  render() {
    return (
      <>
        <section>
          <div className='img' style={{ backgroundImage: `url(${this.props.img})` }}>
            <div className="container pdb50">
              <div className='w60p mw100p'  data-aos="slide-left"
                  data-aos-duration="700" data-aos-easing="linear" data-aos-delay="10">
                <h1 className="heading1 mfs20 mpdt110 lhs mpdb10 ">{this.props.heading1}</h1>
              </div>
              <div className={`${this.props.display}`}>
              <div data-aos="slide-up"
                  data-aos-duration="500" data-aos-easing="linear">            
              <Breadcrumbs />
              </div>
              </div>
            </div>
          </div>
        </section>
        <style jsx>
          {`
                 @import url('https://fonts.googleapis.com/css2?family=Expletus+Sans:ital,wght@1,400;1,700&display=swap');
                 .heading1{
                   font-family:Expletus Sans;
                   font-size:50px;
                   font-weight:bold;
                   padding-top:200px;
                   padding-bottom:30px;
                   color:#fff;
                 }    
                 .img{
                    background-repeat:no-repeat;
                    background-size: cover;
                    background-position: center;
                    width:100%;
                    height:560px;
                  }
                  @media only screen and (max-width: 1023px){
                    .heading1{
                        font-size:20px;
                        padding-top:110px;
                      }
                      .img{
                        width:100%;
                        height:100%;
                        background-repeat:no-repeat;
                        background-size: cover;
                        background-position: center;
                      }
                 }
       
                }
                `}
        </style>
      </>
    )
  }
}
 
export default Blogsec1