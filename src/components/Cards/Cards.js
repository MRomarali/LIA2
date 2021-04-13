import React, { Component } from 'react'
import CardsUi from '../Cards/CardsUi'
import img1 from '../../img/indoor.jpg'
import img2 from '../../img/outdoorsBuliding.jpg'
import img3 from '../../img/cleaning.jpg' 
import img4 from '../../img/window.jpg'
import img5 from  '../../img/furniture.jpg'
import img6 from '../../img/paint.jpg'


class Cards extends Component {
    render() {
        return (
            <div className="background-content">
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <CardsUi imgsrc={img1} title="bygg inomhus"/>
                        </div>
                        <div className="col-md-4">
                            <CardsUi imgsrc={img2} title="bygg utomhus."/>
                        </div>
                        <div className="col-md-4">
                            <CardsUi imgsrc={img3} title="städning"/>
                        </div>
                        <div className="col-md-4">
                            <CardsUi imgsrc={img4} title="fönsterbyte"/>
                        </div>
                        <div className="col-md-4">
                            <CardsUi imgsrc={img5} title="möbelmontering"/>
                        </div>
                        <div className="col-md-4">
                            <CardsUi imgsrc={img6} title="målning"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cards

