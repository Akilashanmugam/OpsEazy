import react from "react";
import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
import { LocalBusinessJsonLd, NextSeo, SocialProfileJsonLd } from "next-seo";

export default class Layout extends react.Component{
    render(){
        return(
            <>
            <Head>
                <link rel="shortcut icon" href="/image/fav-icon.png" />
            </Head>
         
            <LocalBusinessJsonLd  type="organization" id="http://opseazy.com" name="opseazy"
                description="something write here..."
                url="http://www.opseazy.com" telephone="+9188998899"
                address={{
                    streetAddress: '18 Sa, Ave',
                    addressLocality: 'tambaram',
                    addressRegion: 'CA',
                    postalCode: '600028',
                    addressCountry: 'INDIA',
                }}
                geo={{
                    latitude: '22.20920',
                    longitude: '220.20',
                }}
                images={[
                    'https://opseazy.com/photos/1X1/photo.jpg',
                    'https://opseazy.com/photos/1X1/photo.jpg'
                ]}
                openingHours={[
                    {
                        opens: '08:30',
                        closes: '23:50',
                        dayOfWeek: [
                            'Monday',
                            'Tuesday',
                            'Wednesday',
                            'Thursday',
                            'Friday',
                            'Saturday',
                        ]
                    }
                ]}
            />
            <Header bgColor={this.props.headerColor}/>
                    {this.props.children}
            <Footer />
            </>
        )
    }
}