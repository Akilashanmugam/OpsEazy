import react from "react";
import Layout from "../components/layout";
import Head from "next/head"
import Blogsec1 from "../components/blog/blogsec1";
import ContactTwo from "../components/contactTwo";
import BlogMap from "../components/blog/blog-map";

export default class Privacy extends react.Component{
    render(){
        const blog=[
            {   
              title: "Privacy Policy Of OpsEazy",
              content:["Welcome to the privacy policy of OpsEazy. This policy outlines how we collect, use, disclose, and protect your personal information.",""],
            },
            {   
                title: "Information We Collect",
                content:["2.1. Personal Information: We may collect personal information, such as names, email addresses, phone numbers, and other contact details, when voluntarily provided by users.","2.2. Usage Data: We may collect information about how users interact with our website, products, and services, including IP addresses, browser types, and page views."],
            },
            {   
                title: "How We Use Your Information",
                content:["3.1. We use personal information to provide and improve our services, communicate with users, and enhance their experience.","3.2. Usage data helps us analyze trends, administer the site, and gather demographic information for aggregate use."],
            },
            {   
                title: "Information Sharing",
                content:["4.1. We do not sell, trade, or rent personal information to third parties. We may share information with trusted service providers who assist us in delivering our products and services.","4.2. We may disclose personal information in response to legal requests, enforce our policies, or protect our rights, privacy, safety, or property."],
            },
            {   
                title: "Security",
                content:["5.1. We employ industry-standard security measures to protect the confidentiality and integrity of personal information.","5.2. Despite our efforts, no online transmission or electronic storage is completely secure. Users should take precautions to protect their personal information."],
            },
            {   
                title: "Cookies and Tracking Technologies",
                content:["6.1. Our website may use cookies and similar tracking technologies to enhance user experience. Users can control cookie preferences through their browser settings.",""],
            },
            {   
                title: "Your Rights",
                content:["7.1. Users have the right to access, correct, or delete their personal information. To exercise these rights, please contact us at our mail",""],
            },
            {   
                title: "Changes to this Privacy Policy",
                content:["8.1. We reserve the right to update this privacy policy. Changes will be posted on this page with an updated effective date.",""],
            },
        ] 
           
        return(
            <>
             <Head>
                <meta name="description" content="Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, 
                which together with our privacy policy govern opseazy relationship with you in relation to this website" />
              </Head>
            <Layout>
            <Blogsec1 heading1="Privacy Policy of OpsEazy" img="/image/terms-and-condition/privacy.webp"display={"dn"}/>
            <section>
            <div className="container">
            <BlogMap blog={blog}/>
            </div>
            </section>
            <ContactTwo/>
            </Layout>
            </>
          
        )
    }
}

