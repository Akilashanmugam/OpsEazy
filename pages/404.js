import React, { Component } from 'react'
import Layout from "../components/layout";
 
 
export default class Notfound extends Component {
  render() {
    return (
      <>
      <Layout>
      <section>
            <div
            className="bgimage"
            style={{ backgroundImage: `url("/image/404.webp")`}}>
            </div>       
        </section>
      <style jsx>
          {`
          .bgimage{
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            height:100vh;
         
        }
           
           `}
    </style>
    </Layout>
      </>
    )
  }
}