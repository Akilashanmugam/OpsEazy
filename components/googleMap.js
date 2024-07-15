import React from 'react'

const GoogleMap = () => {
    return (<>
    <section>
    <div className='df fjc fac container'>
        <div class="gmap"><iframe className='wdh iframe' src="https://maps.google.com/maps?q=opseazy%20No.221A,%209th%20Street,%20S.Kolathur,%20Viduthalai%20Nagar,%20Kovilambakkam,%20Chennai,%20Tamil%20Nadu%20600117&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe></div>
        </div>
        </section>
        <style jsx>{`
             .wdh{
                width: 1240px;
                 height: 330px;
                 position:relative;
                 background:#fff;
             }
       
          .gmap{
            overflow:hidden;
        }
          .iframe{
            position:relative;
            z-index:2;
        } @media only screen and (max-width: 1023px){
         .wdh{             
            max-width:100%;
          height:300px;}
        }
         }

       ` }
        </style></>

    )

}

export default GoogleMap