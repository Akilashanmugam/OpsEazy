import React, { Component } from 'react'
import Subservicetemp1 from '../../../components/services/subservicetemp1'
import Layout from '../../../components/layout'
import Partner from '../../../components/services/cloud/partner'
import Blogmain from '../../../components/blog/blog-main'
import NextSeoModule from '../../../components/next-seo'
import Circleimgbox from '../../../components/services/cloud/circleimgbox'
import Databox from '../../../components/services/data-analytics/databox'

export default class Engineering extends Component {
  render() {
    const overview =[
      {
          heading2:"The Ideal Cloud Engineering Solutions at OpsEazy",
          content:["In today's fast-paced business environment, the ability to adapt and scale quickly is paramount. Cloud engineering plays a pivotal role in achieving this, as it empowers businesses to swiftly deploy applications, manage data, and streamline their operations in a flexible and cost effective manner.",
          "Cloud engineering services have become integral to modern businesses, revolutionizing the way they manage their data, applications, and operations. We will delve into the world of cloud engineering and explore how OpsEazy, a prominent industry player, is leading the way with its cutting-edge solutions."]
      },
  ]
  const circlecontent = [
    {
      img: "/image/service/cloud-services/engg/asses.webp",
      title: "Assessment and Analysis",
      content: "OpsEazy begins with a comprehensive assessment of your existing cloud infrastructure.This includes resource utilization, traffic patterns,and potential bottlenecks. By analyzing your current setup, we can identify areas for improvement. "
    },
    {
      img: "/image/service/cloud-services/engg/resource.webp",
      title: "Resource Allocation ",
      content: "Based on the assessment, OpsEazy's experts reallocate resources where needed. This ensuresthat your cloud environment is optimized for performance and cost-efficiency. You pay only for what you use, and nothing more."
    },
    {
      img: "/image/service/cloud-services/engg/continous.webp",
      title: " Continuous Monitoring  ",
      content:"Cloud optimization is an ongoing process. OpsEazy provides continuous monitoring to ensure your cloud environment adapts to changes in demand.This proactive approach keeps your systems running smoothly. "
    },
    {
      img: "/image/service/cloud-services/engg/secu.webp",
      title: "Security and Compliance",
      content: "OpsEazy's cloud optimization strategy includes stringent security measures and compliance checks. We create a safe and compliant environment for your data and applications."
    },
  ];
  const content =[
    {
      img:"/image/service/cloud-services/engg/infracture.webp",
      title:"Infrastructure as Code (IaC)",
      content:["OpsEazy employs IaC to automate the provisioning and management of cloud infrastructure.","resulting in faster deployments and reduced error rates."]
    },
    {
        img:"/image/service/cloud-services/engg/cloud.webp",
        title:"Cloud Migration Strategies",
        content:["Migrating to the cloud can be complex, but OpsEazy simplifies the process","ensuring a smooth transition while minimizing downtime."]
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
            title="Cloud Engineering Services"
            description="Fuel innovation with OpsEazy's Cloud Engineering Services. We empower your business with cutting-edge solutions, scalability, and reliability in the cloud environment."
            url="services/cloud-services/cloud-engineering-services"
            image="service/cloud-services/engg/map.webp"
            keyword=""
          />
     <Layout>
     <Subservicetemp1 heading1={"Optimizing Business Efficiency with Cutting-Edge Cloud Engineering Services"}  img={"/image/service/cloud-services/hero-img.webp"} overview={overview} /> 
     <Databox heading2="Key Cloud Engineering Solutions" boxcontent={content}/>
     <section className='mdn'>
      <div className='container'>
        <h2 className='fs30 mfs23 cp tac fwb pdb20'>Factors to consider when selecting a service provider</h2>
        <div className="df fjsb mdf mfdc mfjc mfac pdt20 mpdt10">
          <div>
            <div className=''>
              <p className='fs28 cgreen'>
              Expertise and experience in cloud engineering.
              </p>
            </div>
            <div className='pdt250'>
              <p className='fs28 cnavy'>
              Client success stories and references.
              </p>
            </div>
          </div>
          <div>
            <div className='pdlr40'>
              <img src='/image/service/cloud-services/engg/map.webp' alt='Map Image' className='img1'/>
            </div>
          </div>
          <div>
            <div className='cblue'>
              <p className='fs28'>
              Competitive pricing and cost- effectiveness.
              </p>
            </div>
            <div className='pdt280'>
              <p className='fs28 cred'>
              A tailored approach to meet your unique needs.
              </p>
            </div>
          </div>
        </div>
      </div>
     </section>
     <Circleimgbox heading3={"OpsEazy's Approach to Cloud Optimization"} circlecontent={circlecontent} display={"dn"}/>
     <Partner />
     <Blogmain blogData={blogData}/>
     </Layout>
     <style jsx>
      {`
      .img{
        width:80%;
      }
      .img1{
        width:600px;
      }
      .cgreen{
        color:#20c505;
      }
      .cblue{
        color:#00c6fe;
      }
      .cnavy{
        color:#4a53a4;
      }
      .cred{
        color:#ee2124;
      }
      `}
     </style>
     </>
    )
  }
}