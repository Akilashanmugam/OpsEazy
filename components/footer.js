import react from "react";
import Link from 'next/link';
import Image from "next/image";
export default class Footer extends react.Component {
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <>
        <footer style={{ backgroundColor: "#010717"}}>
          <div className="container">
            <div className="gd gtc4 mfdc mfafs mgd mgtc1">
              <div className="mmb20">
                <ul className="df fdc cw lh">
                  <li className="cw fs25 mfs20 pdb10">ABOUT US</li>
                  <li className="hLine"></li>
                    <li className="fs20 mfs18 pdb10">Techno Mechatronics will enhance your projects efficiency with our updated methodologies. We implement Your ideas in our own way!</li>
                    <li className="fs20 mfs18 pdb10"><a href="mailto:info@opseazy"><i className="fas fa-envelope fs25  pdr10 mpdr0 cp mpdr50"></i>techno@gmail.com</a></li>
                    <li className="fs20 mfs18"><a href="tel:8681070809"><i className="fas fa-phone-alt fs20  pdr10 mpdr0 cp mpdr50"></i>+91 97902 60109</a></li>
                </ul>
              </div>
              <ul className="cw lh mmb20 pdl20 mpdl0 mpdt10">
                        <li className="fs25 pdb10 cw mfs20">QUICK LINK</li>
                        <li className="hLine"></li>
                        <Link href="/blog" className=""><li className="fs20 mfs18 pdb10 hovp">Blog</li></Link>
                        <li className="fs20 mfs18 pdb10 hovp"><Link href="/company/about" className="">About Us</Link></li>
                        <li className="fs20 mfs18 pdb10 hovp"><Link href="/contact" className="">Contact Us</Link></li>
                        <li className="fs20 mfs18 pdb10 hovp"><Link href="/terms-of-use" className="">Terms & Conditions</Link></li>
                    </ul>
                    <ul className="cw lh mmb20 mpdt10">
                        <li className="fs25 pdb10 cw mfs20">SERVICES</li>
                        <li className="hLine"></li>
                        <li className="fs20 mfs18 pdb10 hovp"><Link href="/services/erp-services" className="">CNC Machining</Link></li>
                        <li className="fs20 mfs18 pdb10 hovp"><Link href="/services/cloud-services" className="">3D Printing</Link></li>
                        <li className="fs20 mfs18 pdb10 hovp"><Link href="/services/data-analytics-services" className="">Sheet Metal Fabrication</Link></li>
                        <li className="fs20 mfs18 pdb10 hovp"><Link href="/services/devops-services" className="">Laser Cutting and Engraving</Link></li>
                        <li className="fs20 mfs18 pdb10 hovp"><Link href="/services/digital-marketing-services" className="">Mechanical Design Services</Link></li>
                        <li className="fs20 mfs18 pdb10 hovp"><Link href="/services/web-development-services" className="">Electronic Design and Prototyping</Link></li>
                    </ul>
                    <div>
                        <div className="fs25 pdb10 cw mfs20 mpdt10">LOCATION</div>
                        <div className="hLine"></div>
                        <ul className="cw lh mmb20">
                          <li className="df"><Image src="/image/home/india.webp" alt="India Image" width={"30"} height={"30"} /><spam className='fs20 pdb10 cw mfs18 pdl10 m0'>INDIA</spam></li>
                          <li className="fs20 mfs18 pdb10">
                          #5, 11th Cross, Brundavana Nagara, KO halli, behind Indian oil petrol Bunk, Bengaluru, Karnataka 560073
                          </li>
                          
                    </ul>
                    </div>

            </div>
            <div className="hlinew"></div>
            <div className="df fjsb fac mdf mfdc">
              <div className="cw mfs14 mtac mpdb5">
                &copy; {currentYear} Copyrights Reserved by Techno Mechatronics
              </div>
              <div className="cw df fac mfs14 mdf mfdcr mtac">
                <div className="mpdb5">
                  Privacy & Policy
                </div>
                <div className="pdl20 pdr20 mfs14 mpdb5 ">
                  <Link href="/terms-of-use">Terms & Conditions</Link>
                </div>
                <div className="vline mdn"></div>
                <div className="mpd5">
                  <img src="/image/home/facebook.webp" className="pdlr5" width={"40px"} height={"30px"} alt="facebook"/>
                  <img src="/image/home/x.webp" className="pdlr5 " width={"40px"} height={"30px"} alt="x"/>
                  <img src="/image/home/instagram.webp" className="pdlr5 " width={"40px"} height={"30px"} alt="instagram"/>
                  <img src="/image/home/indeed.webp" className="pdlr5 " width={"40px"} height={"30px"} alt="indeed"/>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <style jsx>{`
          .social {
            width: 40px;
            height: 40px;
            margin-left: 10px;
          }
          a:hover{
            color: #6617CB;
          }
          .hovp:hover{
            color: #6617CB;
          }
          .hlinew{
            width: 100%;
            background: #fff;
            height: 2px;
            margin-top: 25px;
            margin-bottom: 10px;
          }
          .hLine {
            width: 80px;
            background: #6617CB;
            height: 2px;
            margin-top: 5px;
            margin-bottom: 20px;
          }
          .vline{
            padding:0px 0px 20px 20px;
            border-left: 2px solid #fff; 
            height:100%;
            height: 25px;
          }
          @media only screen and (max-width: 1023px) {
            .social {
              width: 30px;
              height: 30px;
              margin-left: 8px;
            }
          }
        `}</style>
      </>
    );
  }
}
