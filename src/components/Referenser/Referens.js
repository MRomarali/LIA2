import React from 'react'
import GallerSlider from '../Referenser/GallerySlider'
import GalleryCards from './GalleryCards'

import './Referens.css'
function Referens(props) {
    return (
        <div className="referens-body">
            <div className=" move-top container mx-auto">
            <GallerSlider/>
                <div className="text header-text">
                    <h1>Referenser</h1>
                    <div className="text text-paragraph">
                        <p>tidigare arbeten för min kunder</p>
                    </div>
                </div>
                <div className=" cards-body move-top grid grid-cols-1 md:grid-cols-3 gap-2">
                    <GalleryCards title="hej" Address="Lessebo"/>
                    <GalleryCards title="hej" Address="Lessebo"/>
                    <GalleryCards title="hej" Address="Lessebo"/>
                    <GalleryCards title="hej" Address="Lessebo"/>
                    <GalleryCards title="hej" Address="Lessebo"/>
                    <GalleryCards title="hej" Address="Lessebo"/>
                    <GalleryCards title="hej" Address="Lessebo"/>
                    <GalleryCards title="hej" Address="Lessebo"/>
                    <GalleryCards title="hej" Address="Lessebo"/>
                </div>
            </div>
        </div>
    )
}



export default Referens

