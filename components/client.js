import Image from 'next/image'
import React, { useState } from 'react'

export default function Client() {

const [hover,setHover]= useState(null)

    const ClientData=[
        {
            name:"Hcl Technologies", img:"/image/client/hcl_logo.webp"
        },
        {
            name:"LearnSoft", img:"/image/client/learnsoft_logo.webp"
        }, 
        {
            name:"TutorsBot", img:"/image/client/tutorsbot_logo.webp"
        },
        {
            name:"FlyzGlobal", img:"/image/client/flyz_global_logo.webp"
        },
      
    ]

  return (
 <>
 <section className='pdt30 pdb30 m'>

<div className='container'>
    <div className='bg-client pdt25 pdb30'>
<div className='tac'>
<h4 className='fs35 mfs30 cp pdb30 mpdb15'>Our Clients</h4>

<p className='fs18 ls pdb10 fw400 pdlr30'>
Techno Mechatronics is dedicated to revolutionizing the hardware industry by providing cutting-edge solutions and exceptional service. The company specializes in precision manufacturing, innovative design, and robust prototyping, ensuring each project meets the highest standards of quality and efficiency. By leveraging advanced technologies and a customer-centric approach, Techno Mechatronics guarantees seamless integration and outstanding performance across all hardware applications. The team's commitment to excellence fosters long-term partnerships, driving innovation and delivering unparalleled value to clients in the rapidly evolving hardware landscape.
</p>
</div>    
  
    
<div className='df fjc gap48 mfdc'>
{ClientData.map((items,index)=>{
    return(
<div className='pdt35 mpdt20' key={index}>
 <div className='df fac fjc fdc'>   


</div>
</div>
)
})}
</div>
</div>
</div>  
</section>
 <style jsx>
    {`
    .bg-client{
        
       width: 100%;
        height: auto;
       background-color: #FFFFFF;
       box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
       border-radius: 20px;
       font-family: montserrat;
        
    }
    .gap48{
        gap: 48px;
    }
    .pdt40{
        padding-top: 40px;
    }
    .client-img {
        border-radius: 50%;
        height: 100px;
        width: 100px;
        overflow: hidden;
        transition: transform 0.3s ease-in-out;
        cursor: pointer;
        
    }
    .name{
        font-size: 18px;
        line-height: 32px;
        letter-spacing: 1.5px;
        font-weight: 500;

    }
    
.client-img.blur {
    filter: blur(5px);
    transition: transform 0.3s ease-in-out;
  }
  
  .client-img:hover {
    transform: scale(1.2);
  }
  
    
    
    `}
 </style>
 
 </>
  )
}
