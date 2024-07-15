import React, { Component } from 'react'
import NextSeoModule from '../../../components/next-seo'
import { Subservicetemp } from '../../../components/services/subservicetemp';
import Servicecontact from '../../../components/services/servicecontact';
import Layout from '../../../components/layout';
import Blogmain from '../../../components/blog/blog-main';

export class Cloudservices extends Component {
  render() {
    const service =[
      {
        img:"/image/service/digital-marketing/seo.webp",
        title:"Search Engine Optimization",
        content:'OpsEazy optimizes your online presence with cutting-edge Search Engine Optimization (SEO) strategies, ensuring heightened visibility and increased organic traffic.',
        path:"/services/digital-marketing-services/seo-services",
      
      },
      {
        img:"/image/service/digital-marketing/payper-click.webp",
        title:"Pay-Per-Click Advertising ",
        content:"Experience unparalleled results with OpsEazy's Pay-Per-Click (PPC) advertising services.",
        path:"/services/digital-marketing-services/pay-per-click-advertising"
      },
      {
        img:"/image/service/digital-marketing/content.webp",
        title:"Content Marketing",
        content:"OpsEazy transforms your brand narrative with strategic content marketing solutions.",
        path:"/services/digital-marketing-services/content-marketing-service",
      
      },
      {
        img:"/image/service/digital-marketing/socialmedia.webp",
        title:"Social Media Marketing",
        content:"OpsEazy takes your brand to new heights through dynamic Social Media Marketing (SMM) strategies.",
        path:"/services/digital-marketing-services/social-media-marketing-services",
      
      },
      {
        img:"/image/service/digital-marketing/email.webp",
        title:"Email Marketing ",
        content:"OpsEazy revolutionizes your communication strategy with targeted Email Marketing solutions.",
        path:"/services/digital-marketing-services/email-marketing-service"
      },
      {
        img:"/image/service/digital-marketing/influencer.webp",
        title:"Influencer Marketing",
        content:"OpsEazy amplifies your brand influence through strategic Influencer Marketing campaigns.",
        path:"/services/digital-marketing-services/influencer-marketing-agency-in-chennai",
      
      },
    ]

    const overview =[
        {
            heading2:"Digital Marketing Services at Opseazy",
            content:["In the fast-paced digital age, businesses must continually adapt and innovate to remain competitive and relevant. One company that has successfully embraced digital transformation is OpsEazy. In this article, we'll delve into OpsEazy's journey of digital transformation, exploring the strategies, technologies, and benefits that have propelled the company to the forefront of its industry.","OpsEazy's journey of digital transformation exemplifies the profound impact of embracing digital technology  and adapting to the evolving business landscape. By setting clear goals, leveraging cutting-edge technologies, and maintaining a customer-centric approach, OpsEazy has achieved remarkable success."]
        },
    ]
    const blogData = [
      {
        category: "Cloud Services ",
        username: "Pavithra",
        title: "Cloud Based Server Backup Solutions",
        date: "15",
        mnth: "Jan",
        img: "/image/blog/scalable-card-img.webp",
        path:"/blog/cloud-based-server-backup-solutions"
      },
      {
        category: "Digital transformation ",
        username: "Rizwan",
        title: "Mastering Cross Platform App Development",
        date: "21",
        mnth: "Feb",
        img: "/image/blog/app-platform-card-img.webp",
        path:"/blog/mastering-cross-platform-app-development"
      },
      {
        category: "Block chain",
        username: "Gopi",
        title: "Unraveling The Power Of BlockChain Technology",
        date: "03",
        mnth: "Mar",
        img: "/image/blog/block-chain-card-img.webp",
        path:"/blog/unraveling-the-power-of-blockchain-technology"
      },
    
    ];
    return (
      <>
      <NextSeoModule
            title="Digital Marketing Services - OpsEazy"
            description="Elevate Your Business with OpsEazy's Digital Transformation Services and Solutions. Embrace Innovation for a Brighter Future."
            url="services/digital-marketing-services"
            image="service/digital-marketing/digital-transformation-services.webp"
            keyword=""
          />
          <Layout>
           <Subservicetemp heading1={"Optimize your operations with customized Digital Marketing services"} img={"/image/service/digital-marketing/digital-transformation-services.webp"} overview={overview} service={service} />
           <Servicecontact bgimg={"/image/service/digital-marketing/contact-bg.webp"} heading3={"Transform your business with today's digital marketing services!"} />
           <Blogmain blogData={blogData}/>
           </Layout>    
      </>

    )
  }
}

export default Cloudservices