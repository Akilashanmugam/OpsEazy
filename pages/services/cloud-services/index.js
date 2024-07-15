import React, { Component } from 'react'
import NextSeoModule from '../../../components/next-seo'
import { Subservicetemp } from '../../../components/services/subservicetemp';
import Layout from '../../../components/layout';
import Servicecontact from '../../../components/services/servicecontact';
import Blogmain from '../../../components/blog/blog-main';

export class Cloudservices extends Component {
  render() {
    const service =[
      {
        img:"/image/service/cloud-services/migration.webp",
        title:"Cloud Migration Services",
        content:"Migrating digital assets, data, apps, and workloads from on premises to the cloud.        ",
        path:"/services/cloud-services/cloud-migration-services",
      
      },
      {
        img:"/image/service/cloud-services/cloud-optimization.webp",
        title:"Cloud Optimization Services",
        content:"Optimizing cloud infrastructure to balance resource efficiency and service quality.        ",
        path:"/services/cloud-services/cloud-optimization-services"
      },
      {
        img:"/image/service/cloud-services/consulting.webp",
        title:"Cloud Consulting Services",
        content:"Entails seeking expert guidance from professionals or firms specializing in cloud technologies and strategies.        ",
        path:"/services/cloud-services/cloud-consulting-services",
      
      },
      {
        img:"/image/service/cloud-services/engineering.webp",
        title:"Cloud Engineering Services        ",
        content:"Specialized technical expertise for designing, deploying, and managing cloud infrastructure and solutions.        ",
        path:"/services/cloud-services/cloud-engineering-services",
      
      },
      {
        img:"/image/service/cloud-services/managed-service.webp",
        title:"Cloud Managed Services",
        content:"Outsourcing of specific IT management and support tasks to a third-party service provider, often specialized in cloud technologies.        ",
        path:"/services/cloud-services/cloud-managed-services"
      },
      {
        img:"/image/service/cloud-services/infrastructure.webp",
        title:"Cloud Infrastructure & Support Services",
        content:"Providing technical assistance and expertise to manage, monitor, and maintain the cloud infrastructure of an organization.        ",
        path:"/services/cloud-services/cloud-infrastructure-support-services",
      
      },
      {
        img:"/image/service/cloud-services/native.webp",
        title:"Cloud Native Application Transformation        ",
        content:"Empower your businesses to reach new heights through Cloud Native Application Transformation.        ",
        path:"/services/cloud-services/cloud-native-application-development",
      
      },
      {
        img:"/image/service/cloud-services/devops.webp",
        title:"DevOps Services        ",
        content:"Our focus is on improving collaboration, automating processes, and ensuring seamless integration.        ",
        path:"/services/cloud-services/devops-services"
      },
      {
        img:"/image/service/cloud-services/m2m.webp",
        title:"Monolithic to Microservices        ",
        content:"We identify areas suitable for transformation and define the goals of the migration.        ",
        path:"/services/cloud-services/monolithic-to-microservices",
      },
      {
        img:"/image/service/cloud-services/data-migration.webp",
        title:"Database Migration Services",
        content:"Our experts plan, test, and provide a detailed roadmap for a successful and seamless transition.",
        path:"/services/cloud-services/database-migration-services",
      },
    ]

    const overview =[
        {
            heading2:"Harness the Cloud for Modernization, Innovation, and Prosperity",
            content:["At Opseazy, we offer a comprehensive range of cloud solutions designed to expedite transformation and cultivate the digital enterprises of the future. Our approach relies on proven methodologies to trategize, create, transition, fortify, manage, and enhance your expedition into the cloud. We're here to bolster your essential business applications, enabling you to harness the potential of cutting-edge cloud technologies, all for the purpose of amplifying agility and productivity within your organization. With Opseazy by your side, lasting success through the cloud is within reach."]
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
        category: "Agile methodology",
        username: "Hemalatha",
        title: "Best practices for agile software development",
        date: "03",
        mnth: "Mar",
        img: "/image/blog/agile-card-img.webp",
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
            title="Cloud based computing Services - OpsEazy"
            description='Certainly! "OpsEazy offers cutting-edge cloud-based computing services, providing seamless solutions for your business needs. Elevate your operations with our advanced technology today!"'
            url="services/cloud-services"
            image="service/cloud-services/hero-img.webp"
            keyword="cloud based computing, cloud computing services, cloud based server for small business, cloud computing services in chennai"
          />
          <Layout>
           <Subservicetemp heading1={"Explore OpsEazy's comprehensive cloud-based computing services"} img={"/image/service/cloud-services/hero-img.webp"} overview={overview} service={service} />
           <Servicecontact bgimg={"/image/service/cloud-services/cloud-contact.webp"} heading3={"Revolutionize Your Business with Cloud Services Today!"} />
           <Blogmain blogData={blogData}/>
           </Layout>    
      </>

    )
  }
}

export default Cloudservices