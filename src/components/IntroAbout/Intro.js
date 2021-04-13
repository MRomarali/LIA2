import React from 'react'


import "./Intro.css"
import Boss from '../../img/boss.jpg'
function Intro(props) {
    return (
        <div id="about">

        <div className="container">
          <div className="row">
            <div className="about-img col-xs-12 col-md-6" > <img src={Boss} className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <h3>Why Choose Us?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                  </div>
                  <p>Vad är Lorem Ipsum?
Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.</p>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}


export default Intro

