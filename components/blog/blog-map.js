import React, { Component } from 'react'

export class BlogMap extends Component {
  render() {
    return (
      <>
         {this.props.blog.map((blog,i)=>{
            return(
                <div key={i}>
                <div className="">
                <h2 className="fs30 mfs18 fwb cp pdb10 pdt20 mpdt10">{blog.title}</h2>
                {blog.content.map((content,i)=>{
                return(
                <div key={i} className="df">
                <p className="fs20 mfs16 lh3 pdb10 cg">{content}</p>
                </div>
                )})}
                </div>
                </div>
            )
          })}
      </>
    )
  }
}

export default BlogMap