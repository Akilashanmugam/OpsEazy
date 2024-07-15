import React, { Component } from 'react'
import Layout from '../../components/layout'
import Blogsec1 from '../../components/blog/blogsec1'
import NextSeoModule from '../../components/next-seo'
import BlogMap from '../../components/blog/blog-map'
import Image from 'next/image'
import Para3 from '../../components/para3'
export class BackupSolutions extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            pno: "",
            sub:"",
            service:"",
            msg:"",
            errmsg: {}
        };
        this.sectionRefs = {
            topic0: React.createRef(),
            topic1: React.createRef(),
          };
    }
    scrollToTopic = (refName) => {
        const ref = this.sectionRefs[refName];
        if (ref && ref.current) {
          ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
    handleChange = (event) => {
        let n = event.target.name;
        let v = event.target.value;
        this.setState({[n]: v });
    }
    handleValidation() {
        let a = this.state.username;
        let b = this.state.pno;
        let c = this.state.email;
        let err = {};
        let formIsvalid = true;
        if (a) {
            if (Number(a)) {
                formIsvalid = false;
                err["username"] = <strong>Name must be letter</strong>;
            }
        }
        if (c) {
            let lastAtPos = c.lastIndexOf('@');
            let lastDotPos = c.lastIndexOf('.');
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && c.indexOf('@@') == -1 && lastDotPos > 2 && (c.length - lastDotPos) > 2)) {
                formIsvalid = false;
                err["email"] = <strong>Invalid email</strong>;
            }
        }
        if (b) {
            if ((!(b).match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/))) {
                formIsvalid = false;
                err["pno"] = <strong>Phone number must be number</strong>;
            }
        }
        this.setState({ errmsg: err })
        return formIsvalid;
    }
  render() {
    const blog = [
        {
            title:"Cloud-Based Server Backup Solutions at OpsEazy",
            content:["In the modern digital landscape, the safety and integrity of your data are paramount. Small mishaps or major disasters can disrupt business operations. That's where cloud-based server backup solutions come to the rescue. In this article, we'll explore the importance of data backup, OpsEazy's expertise in this domain, and why choosing OpsEazy for cloud-based server backup is a smart move."]
        },
        {
            title:"Introduction to Cloud-Based Server Backup Solutions            ",
            content:["Data loss can be catastrophic for businesses. Cloud-based server backup solutions offer a robust approach to safeguarding your data. They involve the routine copying and archiving of data to prevent data loss and facilitate recovery in case of unexpected events.            "]
        },
        {
            title:"The Significance of Data Backup            ",
            content:["Data is the lifeblood of modern businesses. Loss of critical data can result in financial losses and damage to reputation. The significance of data backup cannot be overstated, and cloud-based solutions provide a secure and efficient way to protect your data.            "]
        },
        {
            title:"OpsEazy's Expertise in Server Backup            ",
            content:["OpsEazy, with its extensive experience and expertise in cloud services, is well-equipped to handle your data backup needs. Their proficiency in data management and cloud solutions sets them apart in the industry.            "]
        },
    ]
    const topic =[
        {
            title:"Cloud-Based Server for Small Business at OpsEazy"
        },
        {
            title:"Introduction to Cloud-Based Servers"
        },
        {
            title:"The Significance of Data Backup"
        },
        {
            title:"OpsEazy's Expertise in Server Backup"
        },
        {
            title:"Why Choose OpsEazy for Cloud-Based Server Backup"
        },
        {
            title:"Client Success Stories"
        },
        {
            title:"Conclusion on Cloud-Based Server Backup"
        }
    ]
    return (
        <>
         <NextSeoModule
            title="Cloud Based Server Backup Solutions - OpsEazy"
            description="Discover reliable Cloud-Based Server Backup Solutions for safeguarding your data. Ensure seamless operations with OpsEazy's trusted services."
            url="blog/cloud-based-server-backup-solutions"
            image="blog/cloud-server-backup-solution-1.webp"
            keyword=""
          />
        <Layout>
            <Blogsec1 heading1={"Cloud-Based Server Backup Solutions at OpsEazy"} img={"/image/blog/cloud-server-backup-solution.webp"}/>
            <section>
                <div className='container'>
                    <div className='df mfdc'>
                        <div className='box1'>
                        <BlogMap blog={blog} />
                        <h2 className="fs30 mfs18 fwb cp pdt20 mpdt10">Why Choose OpsEazy for Cloud-Based Server Backup</h2>
                        <Para3 style={"cb fs25 mfs18"} heading3={"OpsEazy's Tailored Backup Solutions"} content={"OpsEazy understands that one size doesn't fit all. They work closely with clients to design customized backup solutions that align with their unique data backup requirements and business objectives."} />
                        <h3 className="fs30 mfs18 fwb cp pdt20 mpdt10">
                        Key Benefits of Cloud-Based Servers
                        </h3>
                        <div className=''>                    
                        <Para3 style={"cb fs25 mfs16"} heading3={"Data Security and Compliance"} content={"OpsEazy places a high priority on data security and compliance. They implement stringent measures to safeguard data, ensuring that it remains protected and compliant with industry regulations."} />
                        <Para3 style={"cb fs25 mfs16"} heading3={"Continuous Monitoring and Maintenance"} content={"OpsEazy offers round-the-clock monitoring and maintenance for data backups. This proactive approach ensures the reliability and security of your data."} />               
                        <Para3 style={"cb fs25 mfs16"} heading3={"Disaster Recovery Preparedness"} content={"The unexpected can happen at any time. OpsEazy helps clients prepare for disasters by offering robust disaster recovery solutions, ensuring minimal downtime and data loss."} />                   
                        <Para3 style={"cb fs25 mfs16"} heading3={"Migration and Scalability"} content={"Migrating data and scaling up operations are simplified with OpsEazy's expertise, ensuring a smooth transition and resource flexibility."} />
                        <Para3 style={"cp fs30 mfs18"} heading3={"Client Success Stories"} content={"Discover real-life examples of clients who have benefitted from OpsEazy's cloud-based server backup solutions. These success stories highlight the positive impact of data backup on business continuity."} />
                        <Para3 style={"cp fs30 mfs18"} heading3={"Conclusion on Cloud-Based Server Backup"} content={"In conclusion, cloud-based server backup solutions at OpsEazy are an essential aspect of modern business continuity. They provide data security, compliance, and disaster recovery preparedness. With OpsEazy, your data is in safe hands."} />
                        </div>
                        </div>
                        <div className='box2 pdl30 pdt20 mpdl0'>
                        <div className='box-list mdn'>
                            <div className='box-topic'>
                                <div className='pdb10'>
                                    <div className='list df fjc fac fwb'>
                                        List of Chapters
                                    </div>
                                </div>
                                {topic.map((singleTopic, i) => {
                                const isLastIndex = i === topic.length - 1;
                                return (
                                <div key={i}>
                                <div ref={this.sectionRefs[`topic${i}`]} key={i}>
                                <div className='pd20 fs20 mfs14 fw500 cp' onClick={() => this.scrollToTopic(`topic${i}`)}>
                                <p>{singleTopic.title}</p>
                                </div>
                                <div className='pdlr20'>
                                {isLastIndex ? null : <div className="line"></div>}
                                </div>
                                </div>
                                </div>
                                );
                                })}
                            </div>
                        </div>
                        <div className='pdt30 mpdt0'>
                        <Image src={"/image/blog/cloud-server-backup-solution-1.webp"} className="mdn" alt='cloud-server-backup-solution' width={"400"} height={"460"}/>
                        <Image src={"/image/blog/cloud-server-backup-solution-1.webp"} className="dn mdb" alt='cloud-server-backup-solution' width={"280"} height={"320"}/>

                        </div>
                        <div className='pdt30'>
                            <div className='form-txt'>
                            Get in Touch with Our Support Team
                            </div>
                            <div>
                            <div className="df fdc">
                                <input type="text" name="username" className="textFeild" placeholder='Name*' onChange={this.handleChange} value={this.state.username} required></input>
                                <span style={{ color: "red" }} className="fs14">{this.state.errmsg["username"]}</span>
                            </div>
                            <div className="df fdc">
                                <input type="text" name="email" placeholder='Email*' className="textFeild" onChange={this.handleChange} value={this.state.email} required></input>
                                <span style={{ color: "red" }} className="fs14">{this.state.errmsg["username"]}</span>
                            </div>
                            <div className="df fdc">
                                <input type="text" name="pno" placeholder='Phone*' className="textFeild" onChange={this.handleChange} value={this.state.pno} required></input>
                                <span style={{ color: "red" }} className="fs14">{this.state.errmsg["username"]}</span>
                            </div>
                            <div className="df fdc">
                                <input type="text" name="sub" placeholder='Company' onChange={this.handleChange}  className="textFeild" value={this.state.sub}></input>
                                <span style={{ color: "red" }} className="fs14">{this.state.errmsg["username"]}</span>
                            </div>
                            <div className="df fdc">
                                <input type="text" name="pno" placeholder='What Service are you looking for?' className="textarea" onChange={this.handleChange} value={this.state.service} required></input>
                                <span style={{ color: "red" }} className="fs14">{this.state.errmsg["username"]}</span>
                            </div>
                            <div className="df fdc">
                                <textarea name="msg" placeholder='Type your Message' className="textarea" onChange={this.handleChange} value={this.state.msg} ></textarea>
                            </div>
                            <div className='df'>
                                    <button className="btn"  >
                                        <div className="fs24 mfs16 fw500 cw" type="submit" >
                                          Send us Message 
                                          </div>
                                          <div className='df fac pdl20 mpdl10'>
                                            <Image  src='/image/contactpage/arrow-icon.webp' alt="Arrow Img" className='mdn' width={"32"} height={"32"}/>
                                            <Image  src='/image/contactpage/arrow-icon.webp' alt="Arrow Img" className='dn mdb' width={"20"} height={"20"}/>
                                          </div>
                                          </button>
                                    </div>
                            </div>
                        </div>
                        </div>
                    </div>            
                </div>
            </section>
        </Layout>
        <style jsx>
            {`
            .box1{
                width:750px;
            }
            .box2{
                width:450px;
            }
            .list{
                height:95px;
                background-image:linear-gradient(to right,#CB218E, #6617CB);
                border-radius:20px;
                border:1px solid #EFEFEF;
                font-size:32px;
                color:#fff;
            }
            .box-list{
                border:2px solid #EFEFEF;
                box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, 0.25);
                width:400px;
                border-radius:20px;
            }
            .box-topic{
                
            }
            .line{
            background: #D3D3D3;
            height: 1px;
            }
            .form-txt{
            font-size: 28px;
            font-weight: 700;
            line-height: 40px;
            letter-spacing: 0.03em;
            text-align: left;
            padding-bottom: 35px;
            }          
            .textFeild{
                width:300px;
                height:52px;
                border: 1px solid #A9A9A9;
                font-size: 20px;
                font-weight: 400;
                line-height: 42px;
                letter-spacing: 0.03em;
                display:flex;
                flex-align:center;
                padding-left:10px;
                margin-bottom: 25px;
                border-radius:4px;
                color:#B4B4B4;
            }
            .textarea{
                width:400px;
                height:52px;
                border: 1px solid #A9A9A9;
                font-size: 20px;
                font-weight: 400;
                line-height: 42px;
                letter-spacing: 0.03em;
                display:flex;
                flex-align:center;
                padding-left:10px;
                margin-bottom: 25px;
                border-radius:4px;
                color:#B4B4B4;
            }
            .btn {    
                width: 306px;
                height: 88px;
                background-image:linear-gradient(to right,#CB218E, #6617CB);
                color: black;
                border:none;
                font-size: 24px;
                font-weight:500;
                border-radius: 5px;
                display: flex;
                justify-content:center;
                align-items: center;
              }
              .icon{
                align-self: center;
                font-size: 24px;
                color: blueviolet;
              }
            @media only screen and (max-width: 1023px) {
            .blog-img{
                width: 200px;
                height: 200px;
            }
            .box1{
                width:100%;
            }
            .box2{
                width:100%;
            }
            .btn{
                width:100%;
                height:50px;
            }
            .textarea{
                width:100%;
                height:42px;
                font-size:14px;
            }
            .textFeild{
                width:100%;
                height:32px;
                font-size:14px;
            }
            .form-txt{
                font-size:18px;
                line-height: 20px;
                letter-spacing: 0.03em;
                text-align: left;
                padding-bottom: 15px;
            }
            .box-list{
                width:100%;
                border-radius:10px; 
            }
            .list{
                font-size:20px;  
                border-radius:10px;
            }
            }
            `}
        </style>
        </>
        )
  }
}

export default BackupSolutions