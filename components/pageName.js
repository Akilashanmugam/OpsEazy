import react from "react";

export default class PageName extends react.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <>
            <section className="pageTitleSec pdt80">
                <div className="container fd fac fjc tac">
                    <h1 className="pageTitle">{this.props.pageTitle}</h1>
                </div>
            </section>
            <style jsx>{`
                .pageTitleSec {
                    background-color: #000;
                    height: 30vh;
                }
                .pageTitle {
                    font-size: 35px;
                    color: #fff;
                }

                @media only screen and (max-width:1023px) {
                .pageTitleSec {
                    padding-top: 115px;
                    height:40vh;
                }
                .pageTitle {
                    font-size: 20px;
                }
                }
            `}</style>
            </>
        )
    }
}