import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
export default function Blogmain({blogData}) {



  
  return (
    <>
    <section>
      <div className='container'>
<div className=' mdf mfdc mfac mpdl0'>
      <h3 className="fs20 cp pdb5 fw400">Latest Blog</h3>
             <h4 className="fwb fs30 mfs25 pdt10">
              Explorer <span className="cp">Blog </span>and
              <span className="cp"> News</span>
             </h4>
   </div>
    
<div className='df gap20 mfw mfdc mfac mgap20 pdt20 pdb30'>
        {blogData && blogData.map((items,index)=>{
          return(
            
        
      <div className='blog-box z-blogs' key={index}>
        <div className='pos-r df'>
        <div className='z-blogs__thumb '>
          <img className='radius ' src={items.img} alt='Blog-Image' width={"100%"} height={"250"} loading='lazy'/>
         
        </div>
       
        <div className='date-box '>
          <p className='date cw tac'>{items.date}</p>
          <p className='mnth cw tac'>{items.mnth}</p>

        </div>
        </div>
        
        <div className='post-box df fac fjsb'>
        <div className='df fac pdl15'>
           <Image src={"/image/blog/tag-icon.webp"} alt='User-Icon' width={"24"} height={"24"} loading='lazy'/>
          <p className='username cw pdl10'>{items.category}</p>
          </div>

          <div className='df fac'>
           <Image src={"/image/blog/user.webp"} alt='User-Icon' width={"24"} height={"24"} loading='lazy'/>
          <p className='username cw pdl10'>{items.username}</p>
          </div>
          <div>

          </div>

        </div>

        <div className='hov'>
          <p className='title'>{items.title}</p>
          <Link href={`${items.path}`}  className='df fac pdt10 pdl15 mpdl5'>
            <p className='clr  fs20 '>Read More</p>
            
            <i className="clr fas fa-arrow-right fs20  pdl15 hovz"></i>
           
          </Link>
        </div>
  
      </div>
      
    )
  })}
      </div>
      </div>  
      
    </section>
    <style jsx>
      {`

.z-blogs__thumb {
  overflow: hidden;
  border-radius: 10px 10px 0px 0px;
}

.z-blogs__thumb img {
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  cursor: pointer;
}
.z-blogs:hover .z-blogs__thumb img {
  -webkit-transform: scale(1.1);
          transform: scale(1.1);
}

     .radius{
      border-radius: 16px 16px 0px 0px;
     }

     

      .post-box{
        width: 374px;
        height: 40px;
        border: 1px solid #FFFFFF;
        background: linear-gradient(270.52deg, #CB218E 0%, #6617CB 54.78%);

      }
      .gap20{
        gap: 32px;
      }
      .hovz{
             transition: transform 0.3s ease;
           }
       .hov:hover{
                   color:#6617CB;
                }
                .hovz1{
                  transition: transform 0.3s ease;
                  
                  
                }
       .hov:hover .hovz{
                       transform: translateX(5px);
                     
                      }
                      .hov:hover .hovz1{
                        transform: scalex(1.1);
                        border-radius: 16px;
                        cursor: pointer;
                        overflow: hidden;
                        
                        
                        
                       }
      .clr{
        color: #6D758C;
      }
      .title{
        font-size: 20px;
        line-height: 41.6px;
        letter-spacing: 1px;
        color: #1E1E1E;
        padding: 8px 20px 0px 12px;
        
      }
    .username{
      font-size: 12px;
      line-height: 29.6px;
      letter-spacing: 1px;
      font-weight: 400;

    }
      .blog-box{
         width: 374px;
         height: 450px;
         box-shadow: 0px 8px 16px 0px #00000040;
         border-radius: 16px;
         font-family: montserrat;
         padding-bottom: 16px;
         
      }
      .mnth{
        font-size: 16px;
        line-height: 41.6px;
        letter-spacing: 3px;
        font-weight: 500;
      }
      .date{
        font-size: 24px;
        line-height: 41.6px;
        letter-spacing: 3px;
        font-weight: 700;
      }
      .date-box{
        width: 70px;
        height: 78px;
        border: 1px solid #FFFFFF;
        border-radius: 8px;
        background: linear-gradient(141.08deg, #6617CB 53%, #CB218E 99.16%);
        position: absolute;
          top: 24px; /* Adjust the position of the date box vertically */
          right: 24px;

      }
      @media only screen and (max-width:1023px){
        .mgap20{
          gap: 20px;
        }
        .post-box{
          width: 290px;
          height: 40px;
          border: 1px solid #FFFFFF;
          background: linear-gradient(270.52deg, #CB218E 0%, #6617CB 54.78%);
  
        }
        .blog-box{
          width: 290px;
          height: auto;
          box-shadow: 0px 8px 16px 0px #00000040;
          border-radius: 16px;
          font-family: montserrat;
       }
       .username{
        font-size: 12px;
        line-height: 20.6px;
        letter-spacing: 1px;
        font-weight: 400;
  
      }
      .title{
        font-size: 16x;
        line-height: 31.6px;
        letter-spacing: 1.5px;
        color: #1E1E1E;
        padding: 4px 10px 0px 6px;
        
      }
      }
      
      `}
    </style>
    </>
  )
}


