import Link from "next/link";
import React, { Component } from "react"
 
class Header extends Component {
  state = {
    showMenu: false,
    hoverMenu1:false,
    scrolling: false,
    hoverMenu:false,
    accordMenu :false,
    isMenuOpen: false,
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
 
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
 
  handleScroll = () => {
    if (window.scrollY > 70) {
      this.setState({ scrolling: true });
    } else {
      this.setState({ scrolling: false });
    }
  };
  showMenu() {
    this.setState((toggle) => ({
      showMenu: !toggle.showMenu,
      isMenuOpen: !toggle.isMenuOpen,
    }));
  }
  hoverMenu1() {
    this.setState((toggle) => ({
      hoverMenu1: !toggle.hoverMenu1,
    }));
  }
  hoverMenuLeave1() {
    setTimeout(() => {
      this.setState({ hoverMenu1: false });
    }, 3000);
  }
  hoverMenu() {
    this.setState((toggle) => ({
      hoverMenu: !toggle.hoverMenu,
    }));
  }
  hoverMenuLeave() {
    setTimeout(() => {
      this.setState({ hoverMenu: false });
    }, 5000);
  }
  accordOnClick() {
    this.setState((t) => ({ accordMenu: !t.accordMenu }));
  }
  render() {
    return (
<>
<section className={`${this.state.scrolling ? 'headerScrolled' : 'header' }`}>
<div >
<div className="container m0a pdlr20" >
<div className="df fdr fac fjsb pdtb20 mpd0 m0a">
<div className="df">
<Link href="/" className="df fac">
<div className="df fac hovb">

<div className="pdl10 fs30 fwb ">Techno Mechatronics</div>
</div>
</Link>
</div>
<div className="nav df pdr10 fs20  mdn">
<div ><Link href="/" className="">Home</Link></div>

<div  className="pdl20 drop"  ><Link href="/services" className="">Services</Link></div>
<div ><Link href="/blog" className="pdl20">Blogs</Link></div>
<div className="pdl20 drop1">Company
<div className="ser1 servSubmenu">
<li>
<Link href="/company/about">About Us</Link>
</li>
{/* <li>
<Link href="/blog">Blog</Link>
</li> */}
<li>
<Link href="/contact" className="">Contact Us</Link>
</li>
</div>
</div>
<div><Link href="/contact" className="pdl20 ">Contact Us</Link></div>
</div>
<div
  className={`dn mdb mpdt5 ${this.state.scrolling ? 'humburger-menu-scroll' : 'humburger-menu' }`}
  onClick={this.showMenu.bind(this)}>
  <div className={`${this.state.showMenu ? 'line open1' : 'line'}`}></div>
  <div className={`${this.state.showMenu ? 'line open2' : 'line'}`}></div>
  <div className={`${this.state.showMenu ? 'line open3' : 'line'}`}></div>
</div>
</div>
{this.state.showMenu ? (
<div className="navlink-grp dn mdb mdf mdfc mm0a mtac">
<nav>
<Link href="/" className="cg">Home</Link>
<div className="Line"></div>
<Link href="/services">Services</Link>
<div className="Line"></div>
<Link href="/blog">Blogs</Link>
<div className="Line"></div>
<div className=""><a className="pdl30" onClick={this.accordOnClick.bind(this)}>Company</a>
<div className={`${this.state.accordMenu === true ? 'plusIconAct':'plusIcon'}`}></div>
                        {this.state.accordMenu ?(
<ul className="nav-dropdown">
<div className="Line"></div>
<li>
<Link href="/company/about">About Us</Link>
</li>
</ul>) : null}
</div>
<div className="Line"></div>
<Link href="/contact" className="">Contact Us</Link>
</nav>
</div>) : null}
</div>
</div>
</section>
<style jsx global>
          {`
          .header{
            transition: background-color 0.3s ease;
            border-bottom:1px solid #fff;
            color:#fff;
            position:absolute;
            top:0;
            left:0;
            right:0;
            z-index:100;
          }
          .header :hover{
            color:#fff;
          }
          .headerScrolled {
            background-color: #ffffff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            right:0;
            z-index: 100;
            color:#000,
          }
          .headerScrolled :hover{
            color:#000;
          }
          .ser{
            display:none;
            position: absolute;
            min-width: 160px;
            background: transparent;
            box-shadow: 1px 1px 10px rgb(000, 000, 00, 0.5);
            transition: all 0.3s ease-in;
            z-index:100;
          }
          .drop:hover .ser{display:block}
          .ser1 {
            display:none;
            position: absolute;
            min-width: 160px;
            background: transparent;
            box-shadow: 1px 1px 10px rgb(000, 000, 00, 0.5);
            transition: all 0.3s ease-in;
            z-index:100;
          }
          .drop1:hover .ser1{display:block}
          .servSubmenu li {
            min-width: 200px;
            width: 100%;
            background: #fff;
          }
          .servSubmenu li a {
            color: #6617CB;
            font-size: 16px;
            padding: 8px;
            height: 100%;
            width: 100%;
            display: inline-block;
          }
          .servSubmenu li a:hover {
            transition: all 0.3s ease-in;
            border: 6px solid transparent;
            border-left-color: #6617CB;
            color: #6617CB;
          }
          @media only screen and (max-width: 1223px){
            .header{
              transition: background-color 0.3s ease;
              border-bottom:1px solid #fff;
              color:${this.state.isMenuOpen ? '#fff' : '#000'};
              background-color:${this.state.isMenuOpen ? 'rgba(37, 0, 76, 1)' : '#fff'};
              position:fixed:
              top:0;
            }
            .header :hover{
              color:${this.state.isMenuOpen ? '#fff' : '#000'};
            }
            .headerScrolled
            {
              background-color:${this.state.isMenuOpen ? 'rgba(37, 0, 76, 1)' : '#fff'};
            }
            .headerScrolled :hover{
              color:${this.state.isMenuOpen ? '#fff' : '#000'};
            }
            .humburger-menu div{
              width: 25px !important;
              height: 3px !important;
              background-color:${this.state.isMenuOpen ? '#fff' : '#000'};
        }  
        .humburger-menu-scroll div{
          width: 25px !important;
          height: 3px !important;
          background-color:${this.state.isMenuOpen ? '#fff' : '#000'};
        }
        /* For the closed state */
         .line {
           width: 25px;
           height: 3px;
           background-color: #000;
           margin: 5px 0;
           transition: transform 0.5s ease-in-out;
          }
 
      /* For the X (open) state */
        .open1 {
         transform: rotate(45deg) translate(6px, 6px);
         }
        .open2 {
         opacity: 0;
         }
        .open3 {
         transform: rotate(-45deg) translate(5px, -5px);
         }
         .navlink-grp {
          margin-top: ${this.state.isMenuOpen ? '30px' : '0'};
          right: 0;
          left: 0;
          top: 0;
          background: rgba(37, 0, 76, 1);
          width: 100%;
          height:500px;
          z-index: 20;
        }
        .navlink-grp a {
              padding: 20px 32px 20px 8px;
              font-weight:bold;
              text-decoration: none;
              font-size: 18px;
              color: white;
              display: block;
              transition: 0.3s;
          }
            .nav-dropdown{
              position:relative;
            }
            .dropdown {
              padding-left: 15px;
              transition: all 3s ease-in-out;
          }
          .dropdown li {
            display:block;
          }
          .dropdown li a {
              color: #6617CB;
              display: inline-block;
              padding: 5px 0;
          }
 
          `}
</style>
</>
    )
  }
}
export default Header;