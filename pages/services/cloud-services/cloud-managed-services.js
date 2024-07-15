import React, { Component } from 'react'
import Subservicetemp1 from '../../../components/services/subservicetemp1'
import Layout from '../../../components/layout'
import Partner from '../../../components/services/cloud/partner'
import Recimgbox from '../../../components/services/cloud/recimgbox'
import Blogmain from '../../../components/blog/blog-main'
import NextSeoModule from '../../../components/next-seo'
import Image from 'next/image'
import Elevate1 from '../../../components/services/webdevelopment/elevate1'
 
export default class Managed extends Component {
  render() {
    const overview =[
      {
          heading2:"Empowering Your Cloud with Managed Services",
          content:["In today's dynamic business landscape, effective management of cloud infrastructure is crucial.Cloud managed services have emerged as a valuable solution for businesses seeking to optimize their cloud resources. OpsEazy, a renowned leader in this field, offers a comprehensive suite of cloud management services designed to ensure that businesses can fully harness the potential of cloud technology. "]
      },
  ]
  const content1 =[
    {
      img:"/image/service/cloud-services/managed/cloud-settings.webp",
      title:"Cloud Management",
      content:"OpsEazy distinguishes itself with a client-centric approach. They understand that each business is unique, and therefore, they tailor their cloud management services to meet specific requirements.OpsEazy's partnership begins with a thorough understanding of the client's business and their objectives.",
    },
    {
      img:"/image/service/cloud-services/managed/sack.webp",
      title:"Efficiency and Cost Optimization",
      content:"One of the key benefits of partnering with OpsEazy is the optimization of cloud costs. Their experts analyze usage patterns and resource allocation, identifying areas for cost reduction while maintaining optimal performance.This results in significant savings for clients. ",
    },
    {
      img:"/image/service/cloud-services/managed/smart-contracts.webp",
      title:"Data Security and Compliance",
      content:"Data security is paramount in the digital age. OpsEazy ensures that data stored in the cloud is protected through encryption and strict access controls. Their services also address compliance requirements, ensuring clients meet industry-specific regulations.",
    },
    {
      img:"/image/service/cloud-services/managed/monitoring-software.webp",
      title:"Continuous Monitoring and Management",
      content:"OpsEazy provides tools and expertise for continuous monitoring and management of cloud resources. This proactive approach identifies potential issues before they become critical,ensuring seamless operation.",
    },
    {
      img:"/image/service/cloud-services/managed/failure.webp",
      title:"Business Continuity and Disaster Recovery",
      content:"In the event of disruptions,OpsEazy helps clients implement robust disaster recovery plans.This includes backup strategies and quick data and service restoration to minimize downtime.",
    },
    {
      img:"/image/service/cloud-services/managed/interaction.webp",
      title:"The Human Touch in Tech Management",
      content:" OpsEazy values the human element in technology management. They offer personalized support and assistance, ensuring that clients have a direct line of communication with cloud experts who understand their specific needs. ",
    },
 
  ]
  const rectcontent =[
    {
      img:"/image/service/cloud-services/managed/settings.webp",
      title:"Efficiency and Cost Optimization",
      content:"OpsEazy's expert management helpsbusinesses optimize their cloud resources, reducing costs while maintaining peak performance.",
    },
    {
      img:"/image/service/cloud-services/managed/data.webp",
      title:"Data Security and Compliance",
      content:"OpsEazy ensures data stored in thecloud is protected through encryption and access controls, addressing compliance requirements.",
    },
    {
      img:"/image/service/cloud-services/managed/monitor.webp",
      title:"Continuous Monitoring and  Management",
      content:"Proactive monitoring identifies potential issues before they become critical, ensuring uninterrupted operations.",
    },
    {
      img:"/image/service/cloud-services/managed/business.webp",
      title:"Business Continuity and Disaster Recovery",
      content:"OpsEazy assists in implementing robust disaster recovery plans, minimizing downtime and data loss duringdisruptions.",
    },
    {
      img:"/image/service/cloud-services/managed/support.webp",
      title:"Personalized Support",
      content:"OpsEazy values the human touch in tech management, providing clients with personalized support and direct access to cloud experts who understand their specific needs.",
    },
    {
      img:"/image/service/cloud-services/managed/tailored.webp",
      title:"Tailored Approach",
      content:"OpsEazy customizes its services to meet the specific requirements and objectives of each client's business. ",
    },
    {
      img:"/image/service/cloud-services/managed/industry.webp",
      title:"Industry Expertise",
      content:"With extensive experience, OpsEazy navigates the complexities of cloud management, helping clients stay competitive in the digital era.",
    },
    {
      img:"/image/service/cloud-services/managed/savings.webp",
      title:"Savings",
      content:" By optimizing resource allocation and reducing operational expenses, OpsEazy's services result in significant cost savings for clients.",
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
            title="Cloud Managed Services"
            description="Unlock the full potential of your cloud environment with OpsEazy's Cloud Managed Services. Experience optimization, security, and seamless operations for your business."
            url="services/cloud-services/cloud-managed-services"
            image="service/cloud-services/managed/cloud-settings.webp"
            keyword=""
          />
     <Layout>
     <Subservicetemp1 heading1={"Empowering Your Business with Comprehensive Cloud Managed Services"}  img={"/image/service/cloud-services/hero-img.webp"} overview={overview} />
     <Elevate1 heading2="Why Choose OpsEazy for Cloud Managed Services" content1={content1}/>
     <Recimgbox heading2={"Benefits of OpsEazy's Managed Cloud Services"}  rectcontent={rectcontent}/>
     <Partner />
     <Blogmain blogData={blogData}/>
     </Layout>
 
 
     <style jsx>
            {`
            .img{
              background-repeat:no-repeat;
              background-size: cover;
              background-position: center;
            }
            .box-img{
              width:370px;
              height:475px;
              border:none;
              border-radius:5px;
              position: relative;
              background-color:white;
              box-shadow: 0px 8px 24px #00000040;
              padding:30px;
             
             
            }
            @media only screen and (max-width: 1023px){
              .box-img{
                width:100%;
                max-height:100%;
                padding:20px;
            }
            .cw{
              color:white;
            }
            `}
          </style>
 
     </>
 
    )
  }
}
 
 