import React  from 'react';
import Logo from '../../img/LogoTransparent.png'
import "./Header.css"

function Header(props) {

    return (
    <div>
        <header id="home">

      <div className="row banner">
      
         <div className="banner-text">
            <hr />
            <ul className="social">
               <div className="LogoImg">
               <img src={Logo} alt="Logo"/>
               </div>
               {/* <a className="button btn github-btn"><i className="fa fa-github"></i>Entreprenad</a> */}
            </ul>
         </div>
      </div>

   </header>
   </div>
    );
  
}

export default Header;
