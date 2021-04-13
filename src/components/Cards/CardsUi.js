import React from 'react'
import "./card-style.css"
const CardsUi =props=>{
  return (
        <div className="card text-center shadow">
          <div className="overflow">
            <img src={props.imgsrc} alt="" className="card-img-top" />
          </div>
          <div className="card-body text-dark">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text text-secondary">
            Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en
            </p>
            <a href="#" className="btn btn-outline-success">Go Anywhere</a>
          </div>
        </div>
  )
}


export default CardsUi

