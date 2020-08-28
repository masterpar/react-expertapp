import React from "react"
import GifGridItem from "./GifGridItem"
import {useFetchGifs} from "../hooks/useFetchGifs"
import '../css/spinner.css'


const GifGrid = ( { category } ) => {

    const{ data: images, loading } = useFetchGifs(category)

    return (
        <>
            { loading && (
                <div className='col-12 align-content-center'>
                    <div className="spinner">
                        <div className="dot1"></div>
                        <div className="dot2"></div>
                    </div>
                </div>
            ) }
            {
                images.map( img =>
                <GifGridItem
                    key={img.id}
                    { ...img }
                />
                )
            }

        </>
    )
}

export default GifGrid