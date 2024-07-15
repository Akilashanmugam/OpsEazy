import Image from 'next/image';
import Link from 'next/link';
import React, { Component } from 'react'

export default class Blogmain2 extends Component {
 constructor(props){
  super(props);
  this.state={
    currentpage:1,
    dataperpage:4,
  }
 }
 handlePageClick=(page)=>{
this.setState({currentpage:page});
 };
 handleNextPage=(e)=>{
  e.preventDefault();
  const {currentpage}=this.state;
  const{userdata}=this.props;
  const {dataperpage}=this.state
  const totalpages=Math.ceil(userdata.length/dataperpage);
  if(currentpage <totalpages ){
    this.setState({currentpage:currentpage + 1});
  }
 }

 handlePrevPage=(e)=>{
  e.preventDefault();
  const { currentpage } = this.state;
  if(currentpage > 1){
    this.setState({currentpage:currentpage -1});
  }

 }
  render() {
    const{userdata}=this.props
   const{currentpage}=this.state
   const{dataperpage}=this.state
    const startIndex =(currentpage -1) * dataperpage;
    const endIndex = startIndex + dataperpage;
    const totalpages = Math.ceil(userdata.length / dataperpage);
    const sliceData = userdata.slice(startIndex,endIndex)
    return (
      <>
    <section className='pdb30 mpdb10'>
    <div className="container ">
    <h3 className="fs30 mfs18 cp pdb5 fw400" data-aos="fade-down" data-aos-duration="700" data-aos-delay="20">Our Blogs</h3>
      <div className=" pdt20 mb30 ">
              <div className="gd1">
           {sliceData.map((user, i) => {
                  return (
                    <div className="box fw" key={i} data-aos={i % 2 === 0 ? 'slide-right' : 'slide-left'}  data-aos-easing="linear" data-aos-duration="400" data-aos-delay="10"data-aos-once="true">

                      <div className="pd15 ">
                        <div className="boxb1" style={{backgroundImage: `url(${user.img})`}}>

                          <div className="bgcp">{user.tech1}</div>
                        </div>
                        <div className="df pdt25 df mfdc">
                          <div className=" df fac">
                            <div className="icon">
                              <Image src={"/image/blog/Account.webp"} alt='user-icon' width={"40"}height={"40"}/>
                            </div>
                            <div className="fs23 mfs18 pdl10 cg fw500">Posted by {user.name1}</div>
                          </div>
                          <div className="df fac pdl30 mpdl0">
                            <div className="icon">
                            <Image src={"/image/blog/Calendar.webp"} alt='date-icon' width={"40"}height={"40"}/>

                            </div>
                            <div className=" fs23 mfs18 fw500 cg pdl10">{user.date1}</div>
                          </div>
                        </div>

                        <div className="pdt30">
                          <p className="fs23 mfs18 cp fw500">
                            {user.title1}
                          </p>
                          <p className="pdt20 fs20 lh mdn">
                            {user.content1}
                          </p>
                        </div>
                        <div className=' df fjfe'>
                           <div className=" pdt30 fs20 cg  fw500 hov"><Link className='df' href={user.path1} aria-label="some more descriptive text that explains the link">
                        Explore more<span className="screen-reader-text">Details</span>
                            <div className="pdl5 pdt3 df fac hovz">
                            <i className="fas fa-arrow-right fs20 pdr10"></i>                             
                            </div></Link>
                          </div>
                          </div>
                        
                      </div>
                    </div>
                  )
                })} </div>
            </div>
               <div className='df fjc fac'>
            <div className='center-content'>
              {/* 1 st page still in don't show in previous page button */}
          <div className='df fjc m10'>{currentpage >1 &&(
          <button className='fac arrow-btn' onClick={this.handlePrevPage} >
          
          <i className="fa fa-arrow-left fs20 mfs14 cp"></i>
          
          </button>)}
            {/* lasst page still in don't show in last page button */}
          {currentpage < totalpages &&(
            <div className='pdl20 mpdl10'>
          <button className='btn df fjc fac fs18' onClick={this.handleNextPage} >
            Next Page <span className='pdl10 pdt3'> <i className="fa fa-arrow-right"></i></span>
          </button>          
          </div>)}
          </div>
        </div>
        <div className='right-content mdn mpmb'><p className='cg'>page<span className='pgbr mlr10'>{currentpage}</span>of<span className='pdl10'>{totalpages}</span></p></div>
        </div>
          </div>
        </section>
        <style jsx>
          {`
           .gd1{
            flex: 1 100px;
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: space-around;
            }
          .page-icon{
            display:flex;
          }
          .center-content {
            text-align: center;
            flex-grow: 1;
          }
          
          .right-content {
            text-align: right;
          }
          .mlr10{
            margin: 0 10px;
          }
          .arrow-btn{
               width:45px;
               height:40px;
               cursor:pointer;
               border:solid;
               border-width:1px;
               border-radius:10px;
               border-color:#6617CB;
          }
          .pgbr{
            border:solid;
            padding:2px 21px;
            border-width:1px;
            border-color:#4d5057;
            border-radius:5px;
            padding:6px 25px;
          }
          .bn{
            border:none;
          } 
          .btn{
                width:165px;
                height:40px;
                border-radius:10px;
                background-image: linear-gradient(to right,#CB218E, #6617CB);
                border:none;
                cursor:pointer;
                color:white;
            }
           
             .btn:hover{
              background-image: linear-gradient(to left,#CB218E, #6617CB);
             }

            .bgcp{
                color: #ffffff;
                background-image: linear-gradient(to right,#CB218E, #6617CB);
                border-radius: 8px 0px 8px 0px;
                padding: 5px;
                font-size: 20px;
                font-weight: 400;
                letter-spacing: 0.96px;
                line-height: 41.6px;
                position: absolute;
                white-space: nowrap;                
            }           
            .icon{  
              background:linear-gradient(-40deg,#CB218E, #6617CB);
              width:55px;
              height:55px;
              border-radius: 50%; 
              position: relative;
              display: flex;
            justify-content:center;
            align-items: center;  
            }            
                  
            .bgcimy1{            
                background-image: url(/image/blog/Graphic-elemetns.webp);
                background-image: transparent;
                border-radius: 50%;
                background-repeat: no-repeat;
                background-size: contain;
                width: 20px;
                height: 20px;
                padding-left: 10px;
                position: relative;
            }           
            .boxb1{
                // background-image: url(/image/blog/blog-1.webp);
                background-size: 100% 100%;
                background-color: transparent;
                border-top-right-radius:15px;
                border-top-left-radius:45px;
                height:250px;
                max-width: 535px;
                min-width:50%;
                
              }
        
              .box{
                border: 1px silver solid;
                box-shadow: #e0d0f4;
                border-radius: 20px ;
               
                max-width: 560px;  
                min-width:47%;
                margin:10px;
                height:620px;                      
               }
               .box:hover{
                 border-color:#6617CB;
                 border-width:1px;
                 box-shadow:1px 1px 4px 0px #758EFE; 
               }
               .hov{
                display: inline-block;
               }
               .hovz{
                transition: transform 0.3s ease;
               }
               .hov:hover{
                color:#6617CB;
              }
               .hov:hover .hovz{
                transform: translateX(5px);
              }
              .screen-reader-text {
                border: 0;
                clip: rect(1px, 1px, 1px, 1px);
                -webkit-clip-path: inset(50%);
                clip-path: inset(50%);
                height: 1px;
                margin: -1px;
                overflow: hidden;
                padding: 0;
                position: absolute !important;
                width: 1px;
                word-wrap: normal !important;
                word-break: normal;
            }
           
               @media only screen and (max-width: 1023px){
                .btn{
                  width:100px;
                  height:35px;
                  border-radius:10px;
                  background-image: linear-gradient(to right,#CB218E, #6617CB);
                  border:none;
                  cursor:pointer;
                  color:white;
                  font-size:12px;
              }
              .arrow-btn{
                width:35px;
                height:35px;
                cursor:pointer;
                border:solid;
                border-width:1px;
                border-radius:10px;
                border-color:#6617CB;
           }
              .mpmb{
                margin-top:20px;
              }
              
                .box1{
                    border: 2px silver solid;
                    border-radius: 20px ;
                    height: 520px;
                    width: 100%;                             
                }
                .box{
                  border: 2px silver solid;
                  box-shadow: #e0d0f4;
                  border-radius: 20px ;
                  height:100%;
                  max-width:450px;  
                  min-width:50%;
                  margin:10px;                        
                 }
                .boxb1{
                    // background-image: url(/image/blog/blog-1.webp);
                    background-size: 100% 100%;
                    background-color: transparent;
                    border-radius: 10px;
                    height: 250px;
                    width: 100%;
                  }
               .mpdl0{
                padding-left:0px;
               }
               
               }
            `}
        </style>
      </>
    );
  }
}