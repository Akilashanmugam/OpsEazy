import React, { Component } from 'react'
import Subservicetemp1 from '../../../components/services/subservicetemp1'
import Layout from '../../../components/layout'
import Partner from '../../../components/services/cloud/partner'
import Blogmain from '../../../components/blog/blog-main'
import NextSeoModule from '../../../components/next-seo'
import Para3 from '../../../components/para3'
import Image from 'next/image'
import Circleimgbox from '../../../components/services/cloud/circleimgbox'
import Para2 from '../../../components/para2'
export default class NativeApplication extends Component {
  render() {
    const overview =[
      {
          heading2:"The Evolution of Cloud Native Applications          ",
          content:["The digital landscape is constantly evolving, and businesses today need to be agile and responsive to stay competitive. Cloud native applications have emerged as a game-changer in this regard. These applications are designed to harness the full potential of the cloud, enabling organizations to adapt, innovate, and scale rapidly. Cloud native applications represent a paradigm shift in software development. They are built to leverage cloud resources and are inherently scalable, resilient, and highly available. Unlike traditional applications, cloud native apps are designed for the cloud from the ground up."]
      },
      {
        heading2:"OpsEazy: Your Partner for Cloud Native Application Transformation",
        content:["OpsEazy has established itself as a trusted provider of cloud native application transformation services. Their expertise and experience make them the ideal partner for organizations looking to embark on a transformation journey."]
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
  const circlecontent = [
    {
      img: "/image/service/cloud-services/native/assessment.webp",
      title: "Assessment and Planning",
      content:"The journey begins with a comprehensive assessment of existing applications and their suitability for cloud native transformation. OpsEazy works with clients to develop a transformation plan that aligns with their specific business goals."    },
    {
      img: "/image/service/cloud-services/native/architect.webp",
      title: "Architecture Redesign ",
      content:"Transforming a legacy application into a cloud native one often involves significant architectural changes. OpsEazy's experts redesign the application's architecture to make it cloud-ready, focusing on scalability, microservices, and containerization."    },
      {
        img: "/image/service/cloud-services/native/migration.webp",
        title: "Migration and Deployment",
        content:"The actual migration of the application to the cloud is a critical phase. OpsEazy ensures a seamless transition, minimizing downtime and ensuring data integrity during the migration process."    },
      {
      img: "/image/service/cloud-services/native/continous.webp",
      title: "Continuous Improvement",
      content:"Cloud native applications are all about continuous improvement. OpsEazy helps organizations set up processes for ongoing enhancement, integrating DevOps practices to enable rapid updates and improvements."    },
   
  ];
    return (
     <>
     <NextSeoModule
            title="Cloud Native Application Development"
            description="Empower your business with OpsEazy's Cloud Native App Development. Embrace innovation, scalability, and agility for a seamless digital transformation journey."
            url="services/cloud-services/cloud-native-application-development"
            image="service/cloud-services/native/architect.webp"
            keyword=""
          />
     <Layout>
     <Subservicetemp1 heading1={"Unleash Innovation with Cutting-Edge Cloud Native Application Development"}  img={"/image/service/cloud-services/hero-img.webp"} overview={overview} />
     <Circleimgbox heading3={"The Cloud Native Application Transformation Process"} circlecontent={circlecontent} display={"dn"}/>
     <section className="">
            <div className="container">
              <h2 className="fs30 mfs20 cp tac mb20 pdt20 mpdt0 fwb">
              Benefits of Cloud Native Application Transformation
              </h2>
              <div className="df fjsb mdf mfdc mfjc mfac pdt20 mpdt10">
                <div className="">
                  <div className="box-img pd20 mpd10 mmb5 ">
                    <div className="df fjc fjfs pdb20 mpdb10  cursor">
                      <Image
                        src="/image/service/cloud-services/native/scalability.webp"
                        alt="Streamline Image"
                        width={"50"}
                        height={"50"}
                      />
                    </div>
                    <h4 className="df fjfs fwb fs20 pdb10 fwb mfs16">
                    Scalability
                    </h4>
                    <p className=" lh3 pdb10 mpdb10 lh fs16 mfs14mfs14">
                    Cloud native applications can scale automatically to meet changing demands.
                    </p>
                  </div>
                  <div className="pdt50 mpdt10">
                  <div className="box-img pd20 mpd10 mmb5 ">
                    <div className="df fjc fjfs pdb20 mpdb10  cursor">
                      <Image
                        src="/image/service/cloud-services/native/cost.webp"
                        alt="Continous Image"
                        width={"50"}
                        height={"50"}
                      />
                    </div>
                    <h4 className="df fjfs fwb fs20 pdb10 fwb mfs16">
                    Cost Efficiency
                    </h4>
                    <p className=" lh3 pdb10 mpdb10 lh fs16 mfs14">
                    By optimizing resource usage, cloud native apps can lead to cost savings.                    
                    </p>
                  </div>
                </div>
                </div>
                <div className="df fac mpdt10">
                  <div className="box-img pd20 mpd10 mmb5 ">
                    <div className="df fjc fjfs pdb20 mpdb10  cursor">
                      <Image
                        src="/image/service/cloud-services/native/flexibility.webp"
                        alt="Continous Image"
                        width={"50"}
                        height={"50"}
                      />
                    </div>
                    <h4 className="df fjfs fwb fs20 pdb10 fwb mfs16">
                    Flexibility
                    </h4>
                    <p className=" lh3 pdb10 mpdb10 lh fs16 mfs14">
                    Organizations can quickly adapt to market changes and deploy new features. 
                    </p>
                    </div>
                </div>
                <div className="mpdt10">
                  <div className="box-img pd20 mpd10 mmb5 ">
                    <div className="df fjc fjfs pdb20 mpdb10  cursor">
                      <Image
                        src="/image/service/cloud-services/native/global.webp"
                        alt="Streamline Image"
                        width={"50"}
                        height={"50"}
                      />
                    </div>
                    <h4 className="df fjfs fwb fs20 pdb10 fwb mfs16">
                    Global Accessibility
                    </h4>
                    <p className=" lh3 pdb10 mpdb10 lh fs16 mfs14">
                    Cloud native apps are accessible from anywhere, supporting remote work.
                    </p>
                  </div>
                  <div className="pdt50 mpdt10">
                  <div className="box-img pd20 mpd10 mmb5">
                    <div className="df fjc fjfs pdb20 mpdb10  cursor">
                      <Image
                        src="/image/service/cloud-services/native/disaster.webp"
                        alt="Continous Image"
                        width={"50"}
                        height={"50"}
                      />
                    </div>
                    <h4 className="df fjfs fwb fs20 pdb10 fwb mfs16">
                    Disaster Recovery
                    </h4>
                    <p className=" lh3 pdb10 mpdb10 lh fs16 mfs14">
                    Cloud platforms offer robust backup and recovery options. 
                    </p>
                    </div>
                </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className='container'>
              <div>
                <Para2 style="cp fs30 mfs20 tac" stylepara="tac" heading2="Conclusion on Cloud Native Application Development at OpsEazy" content="The transformation of legacy applications into cloud native ones is a strategic move that empowers
                organizations to thrive in the digital age. OpsEazy's expertise in this domain ensures a smooth transition while maximizing the benefits of the cloud." />
              </div>
            </div>
          </section>
     <Partner />
     <Blogmain blogData={blogData}/>
     </Layout>
     <style jsx>
      {`
     
      .box-img {
        width: 360px;
        height: 250px;
        border-radius: 10px;
        position: relative;
        border:1px solid #D3D3D3;
        background-color:white;
      }
      @media only screen and (max-width: 1023px) {
        .box-img {
          width: 100%;
          height: 100%;
        }
      }
      `}
     </style>
     </>
    )
  }
}