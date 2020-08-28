import React, {useState } from 'react';
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

const GifExpertApp = () => {

const [categories, setCategories] = useState(['one punch'])


    return (
        <div className='container my-5'>
            <h2> GifExpertApp </h2>
            <AddCategory
                setCategories={setCategories}
            />
            <hr/>

            <div className="row">
                {
                    categories.map( category => (
                    <GifGrid
                        key={category}
                        category={ category }/>
                    ))
                }
            </div>

        </div>
    );
};

export default GifExpertApp;