import React, { Component } from 'react'
import NextSeoModule from '../../../components/next-seo'
import { Subservicetemp } from '../../../components/services/subservicetemp';
import Link from 'next/link';
import Layout from '../../../components/layout';
import Blogmain from '../../../components/blog/blog-main';
import Servicecontact from '../../../components/services/servicecontact';

export class Cloudservices extends Component {
  render() {
    const service =[
      {
        img:"/image/service/data-services/consulting.webp",
        title:"Analog Circuit Design",
        content:"Design of circuits that process analog signals, including amplifiers, filters, and oscillators.",
        path:"/services/data-analytics-services/data-analytics-consulting-services",
      
      },
      {
        img:"/image/service/data-services/Enterprise-data-management.webp",
        title:"Digital Circuit Design",
        content:" Creation of circuits that use digital signals, including logic gates, microcontrollers, and FPGAs (Field Programmable Gate Arrays). ",
        path:"/services/data-analytics-services/enterprise-data-management-services"
      },
      {
        img:"/image/service/data-services/Data-visualization.webp",
        title:"Mixed-Signal Design",
        content:" Integration of both analog and digital circuits on a single chip or board to handle both types of signals.",
        path:"/services/data-analytics-services/data-visualization-services",
      
      },
      {
        img:"/image/service/data-services/Big-data.webp",
        title:"Power Electronics Design",
        content:" Design of systems that manage power conversion and distribution, including power supplies and inverters.",
        path:"/services/data-analytics-services/big-data-services",
      
      },
      {
        img:"/image/service/data-services/Data-Lake.webp",
        title:"RF and Microwave Design",
        content:" Development of hardware for radio frequency and microwave communication, including antennas, transmitters, and receivers. ",
        path:"/services/data-analytics-services/data-lake-services"
      },
      {
        img:"/image/service/data-services/Data-science.webp",
        title:"Sensor Integration and Development",
        content:"Design and integration of various sensors for specific applications, ensuring proper interfacing and data acquisition. ",
        path:"/services/data-analytics-services/data-science-services",
      
      },
    ]
    const blogData = [
      {
        category: "Custom Hardware Design and Development",
        username: "Anbazhagan",
        title: "Design and Development for Small Business",
        date: "16",
        mnth: "June",
        img: "/image/blog/power-bi-card-img.webp",
        path:"/blog/cloud-based-server-for-small-business"
      },
      {
        category: "Security and compliance",
        username: "Akila",
        title: "Data-Privacy in The Age Of Big Data",
        date: "03",
        mnth: "Mar",
        img: "/image/blog/big-data-card-img.webp",
        path:"/blog/data-privacy-in-the-age-of-big-data"
      },
      {
        category: " Elasticity",
        username: "Kishore",
        title: "Scalable Software Architecture",
        date: "10",
        mnth: "Mar",
        img: "/image/blog/scalable-card-img.webp",
        path:"/blog/scalable-software-architecture"
      },
    ];
    const overview =[
        {
            heading2:"Unlocking the Power of Custom Hardware Design and Development",
            content:["At Techno Mechatronics, we unlock the power of your ideas with our custom hardware design and development services. Our expertise covers analog and digital circuit design, mixed-signal integration, power electronics, and RF systems. We specialize in sensor integration, embedded systems, IoT devices, and robotics hardware. Additionally, we offer prototyping, custom PCB design, high-speed circuits, and ensure all designs meet safety and compliance standards. Our goal is to provide innovative, user-friendly solutions that exceed expectations, driving your projects to success with efficiency and excellence."]
        },
    ]
    return (
      <>
      <NextSeoModule
            title="Data Analytics as a Services - OpsEazy"
            description="Unlock the power of Data Analytics with OpsEazy's comprehensive services. Leverage insights to drive informed decisions and propel your business forward."
            url="services/data-analytics-services"
            image="service/data-services/data-services.webp"
            keyword=""
          />
          <Layout>
           <Subservicetemp heading1={"Custom Hardware Design and Development"} img={"/image/service/data-services/data-serivces.webp"} overview={overview} service={service} />
           <Servicecontact bgimg={"/image/service/data-services/contactdata.webp"} heading3={"A Secure Future with Custom Hardware Design and Development Services Strategies "} />
           <Blogmain blogData={blogData}/>
           </Layout>    
          
      </>

    )
  }
}

export default Cloudservices