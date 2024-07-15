import Image from "next/image";
import React, { Component } from "react";
import Subservicetemp1 from "../../../components/services/subservicetemp1";
import Layout from "../../../components/layout";
import Blogmain from "../../../components/blog/blog-main";
import NextSeoModule from "../../../components/next-seo";
import Para2 from "../../../components/para2";
import Para3 from "../../../components/para3";
import Servicecontact from "../../../components/services/servicecontact";
import Client from "../../../components/services/cloud/client";
import Databox from "../../../components/services/data-analytics/databox";
import Circleimgbox from "../../../components/services/cloud/circleimgbox";
export default class Seo extends Component {
  render() {
    const overview = [
      {
        heading2: "Search Engine Optimization at OpsEazys",
        content: [
          "In the ever-expanding digital landscape, the visibility of your online presence is paramount. OpsEazy is your dedicated partner in optimizing your website for search engines, ensuring that your business stands out in the competitive online arena.",
        ],
      },
      {
        heading2: "OpsEazy's Commitment to SEO Excellence",
        content: [
          "OpsEazy brings a wealth of experience and expertise to the realm of Search Engine Optimization (SEO). Our team is committed to implementing strategies that enhance your website's visibility, drive organic traffic, and ultimately contribute to your business growth",
        ],
      },
    ];


    const data=[
        {
          img: "/image/service/digital-marketing/seo-services/keyword-optimization.webp",
          title: "Keyword Optimization",
          content:["In-depth keyword research to identify terms relevant to your business.","Strategic integration of keywords into website content for maximum impact",]
         
        },
        {
          img: "/image/service/digital-marketing/seo-services/on-page-seo.webp",
          title: "On-Page SEO",
          content:["Optimization of website elements such as meta tags, headers, and images","Content enhancements to improve relevancy and readability"]
        
        },
        {
            img: "/image/service/digital-marketing/seo-services/off-page-seo.webp",
            title: "Off-Page SEO",
            content:["Building high-quality backlinks to improve domain authority.","Social media integration and external partnerships to boost online reputation."]
           
          },
          {
            img: "/image/service/digital-marketing/seo-services/seo-technical.webp",
            title: "Technical SEO",
            content:["Site structure optimization for improved user experience.","Mobile responsiveness and fast loading times for enhanced performance."]
        
          },
          {
            img: "/image/service/digital-marketing/seo-services/seo-content.webp",
            title: "Content Strategy",
            content:["Development of compelling and relevant content.","Regular updates and additions to keep the website fresh and engaging."]
          },
       
      ]
      const circlecontent=[
        {
          img:"/image/service/digital-marketing/seo-services/seo-proven.webp",
          title:"Proven Results",
          content:"OpsEazy has a track record of delivering tangible results through effective SEO strategies. Our focus is on driving real, measurable outcomes for your business.",
         },
         {
          img:"/image/service/digital-marketing/seo-services/seo-approach.webp",
          title:"Customized Approach",
          content:"We understand that every business is unique. OpsEazy tailors its SEO approach to align with your specific industry, target audience, and business goals.",
         },
         {
          img:"/image/service/digital-marketing/seo-services/seo-transparant.webp",
          title:"Transparent Reporting",
          content:"Stay informed about the impact of our SEO efforts. OpsEazy provides transparent reporting, ensuring you have visibility into the performance of your SEO campaign."
        }
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
          title="SEO Services"
          description="Boost Your Online Visibility with Opseazy's SEO Services. Drive Traffic and Enhance Your Website's Ranking."
          url="services/digital-marketing-services/seo-services"
          image="service/digital-marketing/seo-services/seo-matters.webp"
          keyword=""
        />
        <Layout>
          <Subservicetemp1
            heading1={"Boost your business prospects with effective SEO services"}
            img={"/image/service/digital-marketing/seo-services/seo-bg.webp"}
            overview={overview}
          />
          <section>
            <div className="container">
              <div className="df fac mfdcr">
                <div className="w60p mw100p mpdt25">
                  <Para2
                    style="fs25 mfs18 cp mtac"
                    heading2="Why SEO Matters"
                    content="This section delves into the importance of SEO in the digital age. From improving search rankings to increasing website credibility, OpsEazy's SEO services are designed to unlock the full potential of your online presence."
                  />
                </div>
                <div className="w40p mw100p df fjc">
                  <img
                    src={"/image/service/digital-marketing/seo-services/seo-matters.webp"}
                    alt="Seo-matters"
                    width={"390"}
                    height={"324"}
                    className="img"
                  />
                </div>
              </div>
            </div>
          </section>
        
         
          <Databox heading2="Key Features of OpsEazy's SEO Services" boxcontent={data}/>
          <Circleimgbox heading3={"Benefits of Choosing OpsEazy for SEO"} circlecontent={circlecontent} display={"dn"}/>

          <Client
            img={"/image/service/digital-marketing/success-story-bg.webp"} content="Explore real-world examples of businesses that have experienced significant growth and success through OpsEazy's SEO expertise. These success stories highlight the effectiveness of our strategies in improving search rankings and driving organic traffic."/>
          <section>
          <div className="container">
            <div className="df fac mfdcr">
              <div className="w60p mw100p mpdt25">
              <div className="pdt20 mpdt10 pdb5">
                <h3 className={`fs25 mfs18 cp mtac fwb mpdb5`}>
                Addressing Common SEO Challenges
                </h3>
                <p
                  className={`fs20 mfs16 lh3 pdt20 cg`}
                >
                  SEO comes with its set of challenges, from algorithm updates to fierce online competition. OpsEazy addresses these challenges head-on, providing solutions that keep your website optimized and resilient to industry changes.</p>
              </div>
              </div>
              <div className="w40p df fjc mw100p mfdc mfac">
                  <img
                    src="/image/service/digital-marketing/seo-services/seo-challenges.webp"
                    alt="seo-challenge"
                    width={"410"}
                    height={"340"}
                    className="img"
                  />
                </div>
            </div>
            <div className="w100p mw100p mpdt25">
              <div className="pdt80 mpdt10 pdb5">
                <h3 className={`fs30 mfs18 cp tac mtac fwb mpdb5`}>
                The Future of SEO Trends and Innovations
                </h3>
                <p
                  className={`fs20 mfs16 lh3 pdt20 tac mtac cg`}
                >
                 Stay ahead of the curve with insights into the future of SEO. OpsEazy is dedicated to adopting emerging trends and innovations, ensuring that your website remains at the forefront of search engine optimization. </p>
              </div>
              </div>
              <div className="w100p mw100p mpdt25">
              <div className="pdt80 mpdt10 pdb5">
                <h3 className={`fs30 mfs18 cp tac mtac fwb mpdb5`}>
                Get Started with OpsEazy Your SEO Partner
                </h3>
                <p
                  className={`fs20 mfs16 lh3 pdt20 tac mtac cg`}
                >
                 Embark on a journey to enhance your online visibility with OpsEazy as your SEO partner. Whether you&apos;re looking to improve search rankings, increase organic traffic, or enhance website performance, OpsEazy has the expertise to drive results.
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
