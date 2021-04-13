import React from 'react'

import './Referens.css'
const GalleryCards =props=> {
    return (
        <div className="the-card max-w-sm rounded overflow-hidden shadow-lg">
            <img src="http://source.unsplash.com/random" alt="" className="w-full" />
            <div className="px-6 py-1">
                <div className=" title font-bold text-purple-500 text-xl mb-2">
                    {props.title}
                </div>
                <ul >
                    <li>
                        <strong className="text-black" >Ort: </strong>
                        {props.Address}
                    </li>
                    <li>
                        <strong className="text-black" >Företag: </strong>
                       {props.business}
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ,r-2">
                  # sulubsson
                </div>
            </div>
        </div>
    )
}


export default GalleryCards

