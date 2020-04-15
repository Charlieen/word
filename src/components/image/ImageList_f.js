import React from 'react';
import ImageCard from './ImageCard';
import './ImageListFn.css';
/*
 the key is purely a performance consideration and it's going to help react render
 lists or updates to lists to be more precise more performant ,
 We only have to assign the key to the root element that we are returning from a
 list of records or
*/
const ImageListFn = props => {
    console.log(props.imgs);
    // const images = props.imgs.map( (image)=>{
    //     return <img alt={image.description} key={image.id} src={image.urls.small} />
    // })

    const images = props.imgs.map( (image) => {
        return <ImageCard key={image.id} image = {image} />
    })
   return  <div className="image-list">{images}</div>
}

export default ImageListFn;