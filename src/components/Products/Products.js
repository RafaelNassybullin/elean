import React from 'react';
import './Products.scss'
import products1 from "../../assets/media/products-1.webp";
import products2 from "../../assets/media/products-2.webp";
import products3 from "../../assets/media/products-3.webp";
import products4 from "../../assets/media/products-4.webp";
import {ImageBlock} from "../../App";




export const Products = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="products-wrapper">
                        <ImageBlock small={true} titles={'Блузы'} image={products1}/>
                        <ImageBlock small={true} titles={'Юбки'} image={products2}/>
                        <ImageBlock small={true} titles={'Топы и желеты'} image={products3}/>
                        <ImageBlock small={true} titles={'Аксессуары'} image={products4}/>
                    </div>
                </div>
            </section>
        </>
    )
}