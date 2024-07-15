import React, { Component } from 'react'
import Layout from '../../components/layout'
import Blogsec1 from '../../components/blog/blogsec1'
import NextSeoModule from '../../components/next-seo'
import Blogmain2 from '../../components/blog/blog-main2'
export class Blog extends Component {
  render() {
 
    const userdata=[
        {
            tech1:"Cloud Services",
            name1:"Pavithra",
            date1:"15/01/2024",
            title1:"Cloud-Based Server Backup Solutions",
            path1:"/blog/cloud-based-server-backup-solutions",
            content1:"Cloud backup solutions offer businesses a reliable and secure method to protect their critical data by storing it offsite in remote servers.",
            img:"/image/blog/blog-1.webp",
        },
        {
            tech1:"Cloud Services",
            name1:"Ghani",
            date1:"22/01/2024",
            title1:"Cloud-Based Server for Small Business",
            path1:"/blog/cloud-based-server-for-small-business",
            content1:"Cloud servers offer small businesses cost-effective and scalable computing resources, enabling them to run applications and store data securely without the need for on-premises infrastructure.",
            img:"/image/blog/blog-1.webp",
        },
        {
            tech1:"Cloud Technology",
            name1:"Anwar",
            date1:"29/01/2024",
            title1:"Types of Cloud Modules and Services a Comprehencive Guide",
            path1:"/blog/types-of-cloud-computing",
            content1:"In today's digital age, cloud computing has become the backbone of modern businesses and individuals. It offers a wide range of services ...",
            img:"/image/blog/blog-1.webp",
        },
        {
            tech1:"Power BI",
            name1:"Mohamed Azharutheen",
            date1:"07/02/2024",
            title1:"Improved-decision-making-with-power-bi",
            path1:"/blog/improved-decision-making-with-power-bi",
            content1:"Decision-making in Power BI involves leveraging its intuitive interface and analytical capabilities to interpret data effectively.",
            img:"/image/blog/power-bi-card-img.webp",
        },
        {
            tech1:"Block chain",
            name1:"Gopi",
            date1:"14/02/2024",
            title1:"Unraveling-the-power-of-blockchain-technology",
            path1:"/blog/unraveling-the-power-of-blockchain-technology",
            content1:"Blockchain Technology delves into a distributed ledger technology revolutionizing various industries.",
            img:"/image/blog/block-chain-card-img.webp",
        },
        {
            tech1:"Digital transformation",
            name1:"Rizwan",
            date1:"21/02/2024",
            title1:"Mastering cross platform app development",
            path1:"/blog/mastering-cross-platform-app-development",
            content1:"By mastering cross-platform development, developers can significantly reduce development time and costs while ensuring consistent user experiences across devices.",
            img:"/image/blog/app-platform-card-img.webp",
        },
        {
            tech1:"Agile methodology",
            name1:"Umar Farook",
            date1:"27/02/2024",
            title1:"Best practices for agile software development",
            path1:"/blog/best-practices-for-agile-software-development",
            content1:"Agile teams can deliver high-quality software products that meet customer needs while remaining responsive to evolving market demands.",
            img:"/image/blog/agile-card-img.webp",
        },
        {
            tech1:"Security and compliance",
            name1:"Hemalatha",
            date1:"05/03/2024",
            title1:"Data privacy in the age of big data",
            path1:"/blog/data-privacy-in-the-age-of-big-data",
            content1:"This article underscores the importance of adopting privacy-preserving technologies for implementing rigorous data governance frameworks,.",
            img:"/image/blog/big-data-card-img.webp",
        },
        {
            tech1:"Technical skills",
            name1:"Muthu",
            date1:"12/03/2024",
            title1:"Top 10 Tools Every Developer Should Know ",
            path1:"/blog/top-10-tools-every-developer",
            content1:"Mastery of these tools equips developers with the necessary arsenal to tackle complex coding challenges and deliver high-quality software solutions efficiently.",
            img:"/image/blog/developer-card-img.webp",
        },
        {
            tech1:"Elasticity",
            name1:"Mahithwin",
            date1:"19/03/2024",
            title1:"How To Build A Scalable Software Architecture",
            path1:"/blog/scalable-software-architecture",
            content1:"This introduction sets the stage for understanding the principles, best practices, and tools essential for constructing software architectures that can scale gracefully to meet the demands of today's dynamic digital landscape.",
            img:"/image/blog/scalable-card-img.webp",
        },
        
    ]
    return (
        <>
         <NextSeoModule
            title="Blog - OpsEazy"
            description='Experience streamlined DevOps services with OpsEazy. Elevate your development and operations processes for maximum efficiency and productivity.'
            url="blog"
            image="blog/cloud-server-for-small-business-1.webp"
            keyword=""
          />
       <Layout>
            <Blogsec1  heading1={"Boldly Blogging Beyond Boundaries"} img={"/image/blog/rectangle.webp"}/>
            <Blogmain2 userdata={userdata}/>
        </Layout>
        </>
        )
  }
}
 
export default Blog
 



















// import React, { Component } from 'react'
// import Layout from '../../components/layout'
// import Blogsec1 from '../../components/blog/blogsec1'
// import NextSeoModule from '../../components/next-seo'
// import Blogmain2 from '../../components/blog/blog-main2'
// export class Blog extends Component {
//   render() {
 
//     const userdata=[
//         {
//             tech1:"Cloud Technology",
//             name1:"Pavithra",
//             date1:"15/10/2023",
//             title1:"Cloud-Based Server Backup Solutions",
//             path1:"/blog/cloud-based-server-backup-solutions",
//             content1:"In today's digital age, small businesses are increasingly embracing cloud-based solutions to enhance their operations. One crucial aspect ...",
           
//         },
//         {
//             tech1:"Cloud Technology",
//             name1:"Ghani",
//             date1:"15/10/2023",
//             title1:"Cloud-Based Server for Small Business",
//             path1:"/blog/cloud-based-server-for-small-business",
//             content1:"In the modern digital landscape, the safety and integrity of your data are paramount. Small mishaps or major disasters can disrupt business operations ...",
           
//         },
//         {
//             tech1:"Cloud Technology",
//             name1:"Anwar",
//             date1:"15/10/2023",
//             title1:"Types of Cloud Modules and Services a Comprehencive Guide",
//             path1:"/blog/types-of-cloud-computing",
//             content1:"In today's digital age, cloud computing has become the backbone of modern businesses and individuals. It offers a wide range of services ...",
           
//         },
//     ]
//     return (
//         <>
//          <NextSeoModule
//             title="Blog - OpsEazy"
//             description='Experience streamlined DevOps services with OpsEazy. Elevate your development and operations processes for maximum efficiency and productivity.'
//             url="blog"
//             image="blog/cloud-server-for-small-business-1.webp"
//             keyword=""
//           />
//        <Layout>
//             <Blogsec1  heading1={"Boldly Blogging Beyond Boundaries"} img={"/image/blog/rectangle.webp"}/>
//             <Blogmain2 userdata={userdata}/>

//         </Layout>
//         </>
//         )
//   }
// }
 
// export default Blog
 