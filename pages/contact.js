import react from "react";
import Layout from "../components/layout";
import NextSeoModule from "../components/next-seo";
import Branches from "../components/branches";
import Contact1 from "../components/contact";
import Blogsec1 from "../components/blog/blogsec1";
import GoogleMap from "../components/googleMap";
export default class Contacts extends react.Component {
  render() {
    return (
      <>
        <NextSeoModule
            title="Contact - OpsEazy"
            description='Get in Touch with OpsEazy for Seamless Solutions. Contact Us for Expert Assistance and Support.'
            url="contact"
            image="contactpage/HeroSection.webp"
            keyword=""
          />
          <Layout>
            <Blogsec1 heading1="Don't hesitate to drop us a line. We're just a message away"
            img="/image/contactpage/HeroSection.webp"/>
          <Branches/>
          <Contact1 img="/image/contactpage/contactimage.webp"/>
          <GoogleMap />
        </Layout>
        <style jsx>{`
         
        `}</style>
      </>
    );
  }
}
