import React from 'react';
import './Products.scss'
import {ImageBlock} from "../ImageBlock/ImageBlock";

import products1 from "../../assets/media/products-1.webp";
import products2 from "../../assets/media/products-2.webp";
import products3 from "../../assets/media/products-3.webp";
import products4 from "../../assets/media/products-4.webp";
import main1 from "../../assets/media/main1.webp";
import main2 from "../../assets/media/main2.webp";
import main3 from "../../assets/media/main3.webp";
import main4 from "../../assets/media/main4.webp";
import main5 from "../../assets/media/main5.webp";
import main6 from "../../assets/media/main6.webp";


export const Products = () => {

    return (
        <>
            <section>
                <div className="container">
                    <div className="image-flx-wrapper">
                        <div className="image-column-one">
                            <ImageBlock image={main1} titles={'Новинки'}/>
                            <div className="small-images">
                                <ImageBlock image={main2} titles={'Смокинги'} small={true}/>
                                <ImageBlock image={main3} titles={'Брюки'} small={true}/>
                            </div>
                        </div>
                        <div className="image-column-two">
                            <div className="small-images">
                                <ImageBlock image={main4} titles={'Акции'} small={true}/>
                                <ImageBlock image={main5} titles={'Костюмы'} small={true}/>
                            </div>
                            <ImageBlock titles={'Платья'} image={main6}/>
                        </div>
                    </div>
                </div>
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