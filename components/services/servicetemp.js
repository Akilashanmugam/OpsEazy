import React, { Component } from 'react'
 
export class Servicetemp extends Component {
 
  render() {

    return (
      <>
       <section>
          <div className="container">
            <div className="fs18 mfs16 cp pdb10 mpdb5 fw400"> What we Provide</div>
            <h2 className="fs35 mfs20 fw400">Our Services</h2>
            <div className='df fjsb fw mdf mfdc mfjc mfac'>
              {this.props.service.map((service, i) => {
                return (
                  <div key={i}>
                    <div className="pdt30 mpdt20">
                      <div className='box' >
                        <a href={service.path}>
                          <div className='df fjc pdt20'>
                          <div className='img1' style={{backgroundImage:`url(${service.img1})`}}></div>
                          </div>
                          <div className='df fjc'>
                          <img className='img' src={service.img} alt={`${service.title} Image`} width={"100px"} height={"100px"} />
                          </div>
                          <h4 className='df fjc fwb fs25 fwb mfs18 pdtb20 cp mpdtb10'>{service.title}</h4>
                          <p className='lh3 pd5 cg lh fs18 mfs16'>{service.content}</p>
                        </a>
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
                  background-color:white;
                  border-radius: 18px ;
                  width:360px;
                  height:420px;
                  text-align: center;
                  padding:20px;
                  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.25);                  
                }  
                .img1{
                  display:none;
                  width:100px;
                  height:100px;
                  background-repeat:no-repeat;
                  background-size: cover;
                  background-position: center;                
                }
           
              .box:hover {
                 background-color:#6617CB;
                 border:none;
                  box-shadow:none;
                }
              .box:hover h4
              {
                color:white;
                font-weight:bold;
              }
              .box:hover p{
                color:white;
              }
              .box:hover .img {
                display: none;
              }
              .box:hover .img1 {
                display: block;
                z-index:10;
                display:flex;
                justify-content:center;
              }
              @media only screen and (max-width: 1023px){
                .box{
                  width:280px;
                  height:110%;
                  border-radius:10px;
                  box-shadow:  0px 2px 5px #888888;
                }
            }
            `}
           </style>
      </>
    )
  }
}
 
export default Servicetemp