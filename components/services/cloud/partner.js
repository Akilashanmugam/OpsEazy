import React, { Component } from 'react'
import Image from 'next/image'
import Servicecontact from '../servicecontact'
export default class Partner extends Component {
  render() {
    const service =[
      {
        img:"/image/service/cloud-services/aws.webp",
        width:"100",
        height:"60",
      },
      {
        img:"/image/service/cloud-services/azure.webp",
        width:"230",
        height:"65",
      },
      {
        img:"/image/service/cloud-services/google.webp",
        width:"230",
        height:"40",
      },
      {
        img:"/image/service/cloud-services/oracle.webp",
        width:"130",
        height:"75",
      },
    ]
    return (
        <>
            <section>
              <div className='container '>
              <h3 className='fs30 mfs20 cp tac pdb10 mpdb0 mt30  fwb'>Technology Partners</h3>
                <div className='df fjsb fw mdf mfdc mfjc mfac'>
            {service.map((serivce, i) => {
              return (
                    <div className='pdt20 pdb30 mpdb5' key={i}>                     
                      <div className='box-img mt10 df fac fjc bs'>
                        <div className='df pd15 mfjc fac tac'><Image src={serivce.img} alt={"img"} width={serivce.width} height={serivce.height} />
                        </div>
                      </div>                    
                    </div>
              )
            })}
            </div>
              </div>
            </section>
            <Servicecontact bgimg={"/image/service/cloud-services/cloud-contact.webp"} heading3={"Get Your Free Cloud Consultation Today"} />
          <style jsx>
            {`
         .bs  {
            box-shadow: 3px 3px  #888888
           }       
            .box-img{
              width:280px;
              height:110px;
              border-radius:10px;
              position: relative;
              border: 1.5px solid #E0D0F4;
              box-shadow: 0px 16px 40px 0px rgba(117, 142, 254, 0.2);
            }
            @media only screen and (max-width: 1023px){
              .box-img{
                width:280px;
                min-width: 50%;
                max-width: 100%;
                max-height:550px;
              }
            }
            `}
          </style>
      </>
    )
  }
}