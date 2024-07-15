import React, { Component } from 'react'
import NextSeoModule from '../../../components/next-seo'
import { Subservicetemp } from '../../../components/services/subservicetemp';
import Layout from '../../../components/layout';
import Servicecontact from '../../../components/services/servicecontact';
import Tools from '../../../components/services/tools';
import Blogmain from '../../../components/blog/blog-main';

export class Cloudservices extends Component {
  render() {
    const service =[
      {
        img:"/image/service/devops-services/consulting.webp",
        title:"DevOps Consulting Services",
        content:"Let's delve into some real-world examples of how organizations have leveraged our DevOps consulting ervices to transform their operations and achieve remarkable success.",
        path:"/services/devops-services/devops-consulting-services",
      
      },
      {
        img:"/image/service/devops-services/implementation.webp",
        title:"DevOps Implementation Services",
        content:"Partner with OpsEazy for top-tier DevOps implementation services and initiate a journey toward a more agile, efficient, and prosperous future.",
        path:"/services/devops-services/devops-implementation-services"
      },
      {
        img:"/image/service/devops-services/Azure.webp",
        title:"Azure DevOps Services",
        content:"From planning and coding to building, testing, and deployment, Azure DevOps Services provide the tools and services necessary for efficient collaboration, automation, and tracking.",
        path:"/services/devops-services/azure-devops-services",
      
      },
      {
        img:"/image/service/devops-services/AWS.webp",
        title:"AWS DevOps Services",
        content:"We simplify project planning, tracking, and reporting, enabling organizations to keep projects on schedule and within budget.",
        path:"/services/devops-services/aws-devops-services",
      
      },
      {
        img:"/image/service/devops-services/CICD.webp",
        title:"DevOps CI/CD Services",
        content:"Regardless of the size of your organization, DevOps CI/CD can revolutionize your software development process.",
        path:"/services/devops-services/devops-ci-cd-services"
      },
      {
        img:"/image/service/devops-services/Infrastructure.webp",
        title:"DevOps Infrastructure Automation",
        content:"DevOps Infrastructure Automation goes beyond mere cost-cutting and it's about empowering your organization to excel in the digital age.",
        path:"/services/devops-services/infrastructure-automation-devops",
      
      },
      {
        img:"/image/service/devops-services/Containerization.webp",
        title:"DevOps Containerization Services",
        content:"Our DevOps Containerization Services offer a solution that allows organizations to build, deploy, and manage applications more efficiently.",
        path:"/services/devops-services/devops-containerization-services",
      
      },
      {
        img:"/image/service/devops-services/Release.webp",
        title:"DevOps Release Management",
        content:"With this hub at the helm of your DevOps endeavors, you can expect a streamlined and error-reduced deployment pipeline.",
        path:"/services/devops-services/devops-release-management"
      },
      {
        img:"/image/service/devops-services/Automation.webp",
        title:"DevOps Automation Services",
        content:"Automated processes are consistent, reducing the risk of human errors and ensuring reliability",
        path:"/services/devops-services/devops-automation-services",
      
      },
    ]

    const overview =[
        {
            heading2:"Our platform is designed to ensure a smooth, frictionless experience for users.",
            content:["Your journey toward a more agile, productive, and digitally empowered organization commences with OpsEazy. We are wholeheartedly committed to providing you with the expertise, guidance, and support required to extract the maximum benefits from cloud technology. Join hands with OpsEazy, and together, we'll navigate the path to enduring success through the cloud."]
        },
    ]

    const tool = [
      {
        title:"Continuous Integration",
        img:"/image/service/devops-services/jmeter.webp",
      }
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
            title="DevOps as a services - OpsEazy"
            description='Experience streamlined DevOps services with OpsEazy. Elevate your development and operations processes for maximum efficiency and productivity.'
            url="services/devops-services"
            image="service/devops-services/devops-services.webp"
            keyword=""
          />
          <Layout>
           <Subservicetemp heading1={"Pioneering DevOps Services for Seamless Operations"} img={"/image/service/devops-services/devops-services.webp"} overview={overview} service={service} />
           <Servicecontact bgimg={"/image/service/devops-services/img2.webp"} heading3={"Accelerate Your Development Timelines with DevOps"} />
           <Blogmain blogData={blogData}/>
           </Layout>    
      </>

    )
  }
}

export default Cloudservices