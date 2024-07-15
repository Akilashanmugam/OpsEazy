import React, { Component } from 'react'
import Subservicetemp1 from '../../../components/services/subservicetemp1'
import Layout from '../../../components/layout'
import Partner from '../../../components/services/cloud/partner'
import NextSeoModule from '../../../components/next-seo'
import Para3 from '../../../components/para3'
import Image from 'next/image'
import BlogMain from '../../../components/blog/blog-main'
 
export default class Consulting extends Component {
  render() {
    const overview =[
      {
          heading2:"OpsEazy: Your Gateway to Cloud Excellence",
          content:[""]
      },
  ]
  const data =[
    {
      num:"01",
      img:"/image/service/cloud-services/consulting/proven.webp",
      title:"Proven Excellence",
      content:"OpsEazy's legacy of success and innovation ensures you're in capable hands for your cloud transformation.",
    },
    {
      num:"02",
      img:"/image/service/cloud-services/consulting/tailored.webp",
      title:"Tailored Solution",
      content:"We understand that every business is unique. Our solutions are customized to address your specific requirements.",
    },
    {
      num:"03",
      img:"/image/service/cloud-services/consulting/optimized.webp",
      title:"Optimized Investments",
      content:"Our commitment to cost-efficiency ensures you receive maximum value from your cloud investments.",
    },
    {
      num:"04",
      img:"/image/service/cloud-services/consulting/end.webp",
      title:"End-to-End Partnership",
      content:"We're not just consultants; we're partners. We'll be there with you every step of the way, from strategy development to ongoing optimization",
    },
  ]
  const blogData = [
    {
      category: "Cloud Services ",
      username: "Ghani",
      title: "Cloud-Based Server for Small Business",
      date: "24",
      mnth: "Feb",
      img: "/image/blog/power-bi-card-img.webp",
      path:"/blog/cloud-based-server-for-small-business"
    },
    {
      category: "Security and compliance",
      username: "Hemalatha",
      title: "Data-Privacy in The Age Of Big Data",
      date: "03",
      mnth: "Mar",
      img: "/image/blog/big-data-card-img.webp",
      path:"/blog/data-privacy-in-the-age-of-big-data"
    },
    {
      category: " Elasticity",
      username: "Rizwan",
      title: "Scalable Software Architecture",
      date: "10",
      mnth: "Mar",
      img: "/image/blog/scalable-card-img.webp",
      path:"/blog/scalable-software-architecture"
    },
  ];


    return (
     <>
     <NextSeoModule
            title="Cloud Consulting Services - OpsEazy"
            description="Unlock the full potential of the cloud with OpsEazy's Cloud Consulting Services. Strategic insights, optimization, and success for your cloud journey await."
            url="services/cloud-services/cloud-consulting-services"
            image="service/cloud-services/consulting/cloud-journey.webp"
            keyword=""
          />
     <Layout>
     <Subservicetemp1 heading1={"Explore the benefits and expertise of cloud consulting services"}  img={"/image/service/cloud-services/hero-img.webp"} overview={overview} />
     <section>
      <div className='container pdt0'>
        <div className='df fac mfdcr'>
          <div className='w60p mw100p mpdt25'>
            <Para3 style="fs25 mfs18" heading3="Begin your cloud journey productively" content="In today's rapidly changing business landscape, the cloud has emerged as a driving force of transformation and growth. At Cloud Strategy Consulting, a division of OpsEazy, we are dedicated
            to helping businesses harness the true power of the cloud." />
            <div className='pdt20 mpdt10'>
              <p className='fs20 mfs16 cg'>With our expertise and unwavering commitment to innovation, we&apos;ll guide your organization towards a brighter and more efficient future.</p>
            </div>
            <div className='pdt20 mpdt10'>
              <p className='fs20 mfs16 cg'>Our team is comprised of seasoned cloud strategists, architects, and specialists who have a deep understanding of the potential the cloud holds. We&apos;ve successfully facilitated cloud adoption for numerous organizations across various industries.</p>
            </div>
          </div>
          <div className='w40p mw100p'>
            <img src='/image/service/cloud-services/consulting/cloud-journey.webp' alt='Cloud Journey Image' width={"450"} height={"427"} className='img'  />
          </div>
        </div>
      </div>
     </section>
     <section className='mdn'>
      <div className='container'>
        <h2 className='fs30 mfs20 cp tac fwb pdb20'>Service offered</h2>
        <div>
          <img src='/image/service/cloud-services/consulting/what-we-do.webp' width={"1200px"} height={"900px"} alt='What We Do Image'  className='img' />
        </div>
      </div>
     </section>
     <section className='pdb30 mpdb0 bgc-a'>
            <div className='container'>
              <h2 className='cp fs30 mfs18 pdb10 mpdb0 fwb tac'>Why Choose OpsEazy?</h2>
              <div className='df fjsb fw mdf mfdc mfjc mfac pdt20 mpdt0'>
              {data.map((process, i) => {
              return (
                    <div key={i}>
                        <div className='mpdt20'>
                        <div className='box pdt70 mpd30'>
                        <div className='rect cw df fjc'>{process.num}</div>
                        <div className='df fjc'>                    
                        <Image src={process.img} alt={`${process.title}`} width={"70"} height={"65"} className=''/>
                        </div>
                        <h4 className='tac fwb fs20 pd10 mfs16 pdt20 mpdt10'>{process.title}</h4>
                        <p className='tac lh pdt10 pd10 fs18 mfs14 cg'>{process.content}</p>
                        </div>
                     </div>
                    </div>
                   
              )
            })}
            </div>
            </div>
           </section>
     <Partner />
     <BlogMain blogData={blogData}/>
     </Layout>
     <style jsx>
      {`
     
     .rect {
      position: absolute;
      top: 0;
      right: 0;
      width: 50px;
      height: 50px;
      background-color: #6617CB;
      padding: 15px;
      display: flex;
      justify-content: flex-end;
      border-radius:0px 0px 0px 30px;
    }
         .box{
          position: relative;
          width:280px;
          height:400px;
          border: 3px solid #6617CB;
          border-radius:20px 0px;
          background-color:white;
       
        }
       
  @media only screen and (max-width: 1023px) {
    .box{
      width:280px;
      height:320px;
    }
    .img{
      width:100%;
      height:100%;
    }
      `}
     </style>
     </>
    )
  }
}