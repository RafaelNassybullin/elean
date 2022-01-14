import React from 'react';
import './ImageBlock.scss'

export const ImageBlock = (props) => {

    return (
        <>
           <div className='image-block'
             style={{
                 width: props.small ? 324 : 662,
                 height: props.small ? 436 : 791
             }}>
            <div className="img-title">
                <h4>{props.titles}</h4>
            </div>
            <div className="image"
                 style={{
                     height: props.small ? 401 : 756
                 }}
            >
                <img src={props.image} alt=""/>
            </div>
        </div>
        </>
    )
}