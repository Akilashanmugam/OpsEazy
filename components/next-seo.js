import React from "react";
import { CorporateContactJsonLd, LocalBusinessJsonLd, NextSeo, SocialProfileJsonLd ,LogoJsonLd,WebPageJsonLd} from "next-seo";

export default class NextSeoModule extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <NextSeo
                title={this.props.title}
                description={this.props.description}
                canonical={`https://www.opseazy.com/${this.props.url}`}
                additionalMetaTags={[
                    {
                      name: "keywords",
                      content: `${this.props.keyword}`,
                    },
                    {
                        name: "revisit-after",
                        content: "3 days",}
                  ]}
                openGraph={{
                    type: 'website',
                    url: `https://www.opseazy.com/${this.props.url}`,
                    title: `${this.props.title}`,
                    description: `${this.props.description}`,
                    images: [
                        {
                            url: `https://www.opseazy.com/image/${this.props.image}`,
                            width: 400,
                            height: 600,
                            alt: `OpsEazy - ${this.props.title}`,
                        },
                    ],
                    site_name: "OpsEazy",
                }}
            />
            <LogoJsonLd
            id="https://www.opseazy.com"
            name = "Logo - OpsEazy"
            logo="https://www.opseazy.com/image/logo.webp"
            url="https://www.opseazy.com"
           />
            <CorporateContactJsonLd
                id="https://www.opseazy.com/contact"
                url="https://www.opseazy.com/contact"
                logo="https://www.opseazy.com/logob.webp"
                name = "Contact - learnsoft.org"
                contactPoint={[
                    {
                        telephone: '+918681070809',
                        contactType: 'Enquiry',
                        areaServed: ["IN", "US", "CA"],
                        availableLanguage: ["English", "Tamil"],
                    }
                ]}
            />
               <SocialProfileJsonLd type="organization" name="opseazy"
                url="http://www.opseazy.com"
                sameAs={[
                    'https://www.facebook.com/opseazy',
                    'https://twitter.com/opseazy',
                    'https://www.linkedin.com/in/opseazy',
                    'https://www.instagram.com/opseazy'
                ]}
            />
            </>
        )
    }
}