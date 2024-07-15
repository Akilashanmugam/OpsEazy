import React, { Component } from 'react'

export default class Processbox extends Component {
  render() {
    return (
        <>
              <div className='df fjsb fw mdf mfdc mfjc mfac'>
              {this.props.data.map((process, i) => {
              return (
                    <div key={i}>
                        <div className='mpdt20'>
                        <div className='box pdt70 mpd30'>
                        <div className='rect cw df fjc'>{process.num}</div>
                        <div className='df fjc'>                    
                        <img src={process.img} alt={`${process.title}`} width={"70"} height={"70"} className=''/>
                        </div>
                        <h4 className='tac fwb fs23 pdtb10 mfs18 pdt25 mpdt20'>{process.title}</h4>
                        <p className='tac lh pd10 mpd10 fs18 mfs16 cg'>{process.content}</p>
                        </div>
                     </div>
                    </div>
                  )
            })}
            </div>
            <style jsx>
                {`
                 .box{
                    position: relative;
                    width:280px;
                    height:400px;
                    border: 2px solid #6617CB;
                    border-radius:20px 0px;
                    background-color:white;
                  }
                  .rect {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 50px;
                    height: 50px;
                    background-color: #6617CB;
                    padding: 15px;
                    display: flex;
                    justify-content: flex-end;
                    border-radius:0px 0px 0px 30px;
                  }
                  @media only screen and (max-width: 1023px) {
                    .box{
                      width:280px;
                      height:100%;
                    }`}
            </style>
        </>
    )
  }
}

