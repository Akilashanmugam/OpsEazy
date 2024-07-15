import React, { Component } from 'react'
import NextSeoModule from '../../../components/next-seo'
import { Subservicetemp } from '../../../components/services/subservicetemp';
import Layout from '../../../components/layout';
import Servicecontact from '../../../components/services/servicecontact';
import Blogmain from '../../../components/blog/blog-main';

export class ErpService extends Component {
  render() {
    const service =[
      {
        img:"/image/service/erp-services/dynamics.webp",
        title:"MS Dynamics 365",
        content:"Embrace Digital Transformation with All-in-One Cloud-Based ERP and CRM Solutions.",
        path:"/services/erp-services/microsoft-dynamic365-service",
      },
      {
        img:"/image/service/erp-services/sap.webp",
        title:"SAP",
        content:"Unlock Business Excellence with the World's Leading ERP Software. Streamline Operations, Optimize Processes, and Drive Performance with SAP Solutions.",
        path:"/services/erp-services/sap-service",
      },
      {
        img:"/image/service/erp-services/oracle.webp",
        title:"Oracle",
        content:"Optimize Operations,Streamline Processes, and Drive Efficiency with Oracle's Cutting-Edge Technology has context menu.",
        path:"/services/erp-services/oracle-service",
      },
    ]

    const overview =[
        {
            heading2:"Digitally Transform Your Business with Industry-Leading ERP Solution",
            content:["At OpsEazy, we specialize in implementing and integrating top-notch ERP solution, including SAP, Oracle, and Microsoft Dynamics 365, to optimize your business process and drive growth.with our expertise and experience, we'll help you streamline operations Enhance productivity, and achieve greater efficiency across your organization.",
                "Our dedicated team of ERP specialists understands the unique requirements of business across various industries. Wherther you&apos;re a small start-up or a large enterprise, we offer tailored solutions to match your specific needs and goals. With our extensive knowledge and in-depth understanding of SAP, Oracle, and Microsoft Dynamics 365, we ensure seamless Implementation and customization to fit your business context."]
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
            title="ERP Services - OpsEazy"
            description="Streamline Your Business with OpsEazy ERP Services! Boost Efficiency and Productivity. Explore Seamless Operations"
            url="services/erp-services"
            image="service/erp-services/erp-image.webp"
            keyword="ERP software development company in chennai, ERP Service in Chennai, Best ERP Service company in Chennai, Top ERP Servic company in Chennai"
          />
           <Layout>
           <Subservicetemp heading1={"Integrated ERP Services Streamline & Efficient Your Business Management"} img={"/image/service/erp-services/erp-image.webp"} overview={overview} service={service} />
           <Servicecontact bgimg={"/image/service/erp-services/erpcontact.webp"} heading3={"Optimize your operations with customized ERP services Today!"} />
           <Blogmain blogData={blogData}/>
          </Layout>
      </>
    )
  }
}

export default ErpService