import Image from "next/image";
import React, { Component } from "react";
import Subservicetemp1 from "../../../components/services/subservicetemp1";
import Layout from "../../../components/layout";
import Blogmain from "../../../components/blog/blog-main";
import NextSeoModule from "../../../components/next-seo";
import Servicecontact from "../../../components/services/servicecontact";
import Client from "../../../components/services/cloud/client";
import Databox from "../../../components/services/data-analytics/databox";
import Circleimgbox from "../../../components/services/cloud/circleimgbox";
export default class SocialMediaMarketing extends Component {
  render() {
    const overview = [
      {
        heading2: "Social Media Marketing at OpsEazys",
        content: [
          "In the era of social connectivity, a robust social media presence is essential for business success. OpsEazy offers comprehensive Social Media Marketing (SMM) services to help your brand thrive in the digital realm. Let's explore how our strategic approach to SMM can elevate your brand's visibility and engagement.",
        ],
      },
      {
        heading2: "OpsEazy's Strategic Approach to Social Media Marketing.",
        content: [
          "At OpsEazy, we understand that successful SMM goes beyond posting content. It involves crafting a strategic plan that aligns with your brand identity, engages your target audience, and drives meaningful interactions. Our approach combines creativity, data-driven insights, and the latest trends to deliver impactful results.",
        ],
      },
    ];
    const data=[
        {
          img: "/image/service/digital-marketing/social-media-marketing-services/social-content.webp",
          title: " Strategic Content Planning",
          content:["Crafting a content strategy aligned with your brand voice and goals","Planning diverse and engaging content formats for maximum impact",]
        
        },
        {
          img: "/image/service/digital-marketing/social-media-marketing-services/social-audience.webp",
          title: "Audience Targeting and Persona Development",
          content:["Identifying and understanding your target audience.","Developing audience personas to tailor content for maximum relevance"]
   
        },
        {
            img: "/image/service/digital-marketing/social-media-marketing-services/social-optim.webp",
            title: "Platform Optimization",
            content:["Optimizing social media profiles for a cohesive brand presence",  "Leveraging platform-specific features to enhance visibility."]
          
          },
          {
            img: "/image/service/digital-marketing/social-media-marketing-services/social-comunity.webp",
            title: "Community Engagement and Management",
            content:["Actively engaging with your audience through comments, messages, and discussions", "Managing and nurturing online communities to foster brand loyalty"]
          
          },
          {
            img: "/image/service/digital-marketing/social-media-marketing-services/social-analytics.webp",
            title: "Analytics and Performance Tracking",
            content:["Utilizing analytics tools to track the performance of social media campaigns",  "Regular reporting and analysis for data-driven decision-making"]
         },
       
      ]
    const circlecontent=[
        {
          img:"/image/service/digital-marketing/social-media-marketing-services/social-awareness.webp",
          title:"Increased Brand Awareness",
          content:"OpsEazy's SMM services are designed to enhance brand visibility, ensuring that your brand is recognized and remembered by your target audience.",
         },
         {
          img:"/image/service/digital-marketing/social-media-marketing-services/social-engaged.webp",
          title:"Engaged and Loyal Audience",
          content:"Through strategic content and community management, we foster engagement and build a loyal online community around your brand.",
         },
         {
          img:"/image/service/digital-marketing/social-media-marketing-services/social-strategies.webp",
          title:"Data-Driven Strategies",
          content:"Our approach to SMM is data-driven, with regular analytics and performance tracking to measure the impact of our campaigns and refine strategies for optimal results."
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
          title="Social Media Marketing Service"
          description="Enhance Your Brand's Presence with OpsEazy's Social Media Marketing Services. Amplify Your Reach and Engagement Strategically."
          url="services/digital-marketing-services/social-media-marketing-services"
          image="service/digital-marketing/social-media-marketing-services/future-social-media.webp"
          keyword=""
        />
        <Layout>
          <Subservicetemp1 heading1={"Maximize your business potential with Social Media Marketing solutions"} img={"/image/service/digital-marketing/social-media-marketing-services/social-media-marketing-bg.webp"}  overview={overview}/>
          <Databox heading2="Key Components of OpsEazy's Social Media Marketing Services" boxcontent={data}/>
          <Circleimgbox heading3={"Benefits of Choosing OpsEazyvfor Social Media Marketing"} circlecontent={circlecontent} display={"dn"}/>
          <Client img={"/image/service/digital-marketing/success-story-bg.webp"} content="Explore real-world examples of brands that have achieved success with OpsEazy's SMM services. These success stories highlight increased brand awareness, engaged audiences, and tangible business outcomes." />
          <section>
          <div className="container">
            <div className="df fac mfdcr">
              <div className="w60p mw100p mpdt25">
              <div className="pdt20 mpdt10 pdb5">
                <h3 className={`fs25 mfs18 cp mtac fwb mpdb5`}> The Future of Social Media Marketing: Trends and Innovations</h3>
                <p className={`fs20 mfs16 lh3 pdt20 cg`}> Stay ahead of the curve with insights into the future of SMM. OpsEazy is dedicated to adopting emerging trends and innovations, ensuring that your brand remains at the forefront of social media success.</p>
                </div>
                </div>
              <div className="w40p df fjc mw100p mfdc mfac">
              <img src="/image/service/digital-marketing/social-media-marketing-services/future-social-media.webp" alt="Social-Future"width={"385"} height={"327"} className="img"/>
             </div>
            </div>
            <div className="w100p mw100p mpdt25">
              <div className="pdt80 mpdt10 pdb5">
                <h3 className={`fs30 mfs18 cp tac mtac fwb mpdb5`}>
                Get Started with OpsEazy: Your Social Media Marketing Partner
                </h3>
                <p className={`fs20 mfs16 lh3 pdt20 tac mtac cg`}>
                    Ready to elevate your brand&apos;s social media presence? Partner with OpsEazy for expert SMM services. Whether you&apos;re looking to increase brand awareness, foster engagement, or drive conversions, OpsEazy has the expertise to guide you to success.
               </p>
              </div>
              </div>
          </div>
        </section>
        <Servicecontact
            bgimg={"/image/service/digital-marketing/contact-bg.webp"}
            heading3={"Transform your business with today's digital marketing services!"}
          />
          <Blogmain blogData={blogData}/>
        </Layout>
        <style jsx>
          {`
            @media only screen and (max-width: 1223px) {
              .img {
                width: 100%;
                height: 100%;
              } 
          `}
        </style>
      </>
    );
  }
}
