import React, { Component } from 'react'
import Head from 'next/head';
import Layout from '../components/layout'
import Image from 'next/image';
import ContactTwoo from '../components/contactTwo';
import NextSeoModule from '../components/next-seo';
import Aboutsec1 from '../components/about';
import { Contactone } from '../components/contactone';
import Servicetemp from '../components/services/servicetemp';
import Slider1 from '../components/slider';
import Blogmain from '../components/blog/blog-main';
import Processbox from '../components/process-box';
import Servicecontact from '../components/services/servicecontact';
import Link from 'next/link';
import Client from '../components/client';
export class Home extends Component {
  render() {
  
    const service =[
      {
        img:"/image/home/cloud.webp",
        img1:"/image/home/hovercloud.webp",
        title:"Cloud Services",
        content:"We help forward-thinking organizations unlock value in the cloud and transform customer interactions.",
        path:"services/cloud-services"
      },
      {
        img:"/image/home/devops.webp",
        img1:"/image/home/hoverdevops.webp",
        title:"DevOps Services",
        content:"Improve software development and delivery processes, resulting in faster and more reliable software releases.",
        path:"services/devops-services"
      },
      {
        img:"/image/home/data-analytics.webp",
        img1:"/image/home/hoverdata-analytics.webp",
        title:"Data and Analytics",
        content:"Empower organizations for success through informed decisions, competitiveness, efficiency, and innovation",
        path:"services/data-analytics-services"
      },
      {
        img:"/image/home/erp.webp",
        img1:"/image/home/hovererp.webp",
        title:"ERP Services",
        content:"Essential for businesses because it help organizations manage and streamline the core business processes more efficiently and effectively.",
        path:"/services/erp-services" 
      },
      {
        img:"/image/home/digital.webp",
        img1:"/image/home/hoverdigital.webp",
        title:"Digital Marketing Service",
        content:"Integration of digital technologies into all areas of an organization, including business processes, customer interactions, and employee workflows.",
        path:"services/digital-marketing-services"
      },
      {
        img:"/image/home/development.webp",
        img1:"/image/home/hoverweb-develop.webp",
        title:"Web Development",
        content:"creation, design, and maintenance of websites and web applications to deliver content and functionality to users across the internet.",
        path:"services/web-development-services"
      },
      
    ]
      const data =[
        {
          num:"01",
          img:"/image/home/service.webp",
          title:"Choose a Service",
          content:"Discover our range of services and pinpoint the perfect match for your objectives.",
        },
        {
          num:"02",
          img:"/image/home/meeting.webp",
          title:"Request a Meeting",
          content:"Ready to discuss your project, questions, or ideas with us? We're here to connect and collaborate",
        },
        {
          num:"03",
          img:"/image/home/receive.webp",
          title:"Receive Custom Plan",
          content:"Share your requirements, and we'll design a custom solution that aligns perfectly with your goals and objectives.",
        },
        {
          num:"04",
          img:"/image/home/happen.webp",
          title:"Let's Make it Happen",
          content:"Get in touch today, and let's start working towards your goals with passion and commitment.",
        },
      ]

      const blogData =[
        {
          category:"Cloud Computing",
          username:"Umar Farook",
          title:"Types Of Cloud Computing",
          date:"29",
          mnth:"Jan",
          img:"/image/blog/power-bi-card-img.webp",
          path:"/blog/types-of-cloud-computing"
        },
        {
          category:"Cloud Computing",
          username:"Gopi",
          title:"Cloud Based Server Backup Solutions",
          date:"05",
          mnth:"Feb",
          img:"/image/blog/block-chain-card-img.webp",
          path:"/blog/cloud-based-server-backup-solutions"
        },
        {
          category:"Development",
          username:"Azharutheen",
          title:"Top 10 Tools Every Developer Know This",
          date:"12",
          mnth:"Feb",
          img:"/image/blog/developer-card-img.webp",
          path:"/blog/top-10-tools-every-developer"
        },
      ]

      return (
        <>
         <Head>
        <meta name="robots" content="index,follow" />
      </Head>
          <NextSeoModule
            title="It Services and Solution - OpsEazy"
            description="We're revolutionizing the distribution of IT services, with the ambition to be the inaugural company globally, where half of its personnel engages in digital vocations."
            url=""
            image="logo.webp"
            keyword="Software company  in Chennai, Best software company in Chennai, IT company in Chennai, Best IT company in Chennai, Top software company in Chennai"
          />
     <Layout>
            <Slider1 />
            <section className='mpdt80 dn mdb'>
              <div className="">
                <div className=''>
                  <div className=''>
                  <Image src={"/image/home/home1.webp"} layout='responsive'  alt='home-image' width={"1200"} height={"563"} />
                  </div>
                </div>
              </div>
            </section>
            <Aboutsec1 />
            <Servicetemp service={service}/>
           <section className='pdt10 mpdt0'>
            <div className='container'>
            <p className='fs18 mfs16 cp pdb10 mpdb5 fw400'>How we work</p>
              <h2 className='fs35 mfs20 pdb30 mpdb0 fw400'>PROCESS</h2>
          <Processbox  data={data}/>
            </div>
           </section>
           <Client/>
           <Contactone />
           {/*
           <section className='pdb30'> 
            <div className='container'>
            <div className='bgimage'>
              <div className='op'>
            <p className='fs18 cp pdb15 fw400'>CLIENT EXPERIENCE</p>
            <h2 className='fs35 mfs30 pdb40 mpdb15 fwb lh3'>Our <span className='cp'>Clients </span>Feedback What<br/>They're <span className='cp'>Talking?</span></h2>
            <div className=" df fjc">
              <div className='df fdc'>
            <div className='box1'>
              <img src="/image/home/Quotes.webp" className='quotes' width={"100px"}height={"100px"}/>
            </div>            
              <div className='triangle'></div>
              <div>
                <img src='/image/home/image.webp' widht="120px" height={"120px"} alt={"Profile Img"} />
              </div>
            </div>
            </div>
            </div>
            </div>
            </div>
           </section>
  */}
           <Blogmain blogData={blogData}/>
            <ContactTwoo/>
            </Layout>
          <style jsx>
            {`        
          .bgimage{
            background-image: url("/image/home/world map.webp");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            position: relative;
            width:100%;
            height:100vh;
           }
          .box1 {
            backdrop-filter: blur(20px) brightness(100%);
            background-color: #D9D9D9;
            border-radius:24px 24px 24px 0px;
            height: 350px;
            width: 800px;
         }
           .quotes{
            position: absolute;
            top: -9%;
            left: 10%;
            transform: translateX(-50%);
            width:95px;
            height:75px;
            z-index: 1;
           }
           .triangle{
            border-left: 20px solid #D9D9D9 ;
    border-right: 20px solid transparent;
    border-bottom: 25px solid transparent;
    height: 0;
    width: 0;
    z-index: 2;
           }
           .op{            
         z-index:100;
         opacity:1;
           }
         
    @media only screen and (max-width: 1023px) {
      .box{
        width:280px;
        height:440px;
      }
      .quotes{
        position: absolute;
        top: -4%;
        left: 10%;
        transform: translateX(-50%);
        width:50px;
        height:35px;
        z-index: 1;
       }
            `}
          </style>
        </>
      );
  }
}
 
export default Home