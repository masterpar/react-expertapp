import React from "react"

const GifGridItem = ({ id, title, url }) => {

    return (
        <div className='col-3 m-2'>
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={url} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{ title }</h5>
                        <p className="card-text">Some quick example text to build
                            the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
    )
}

export default GifGridItem