
import axios from 'axios';
import { SetStateAction, useEffect, useState } from 'react';
import PhotoAlbum from "react-photo-album";

function Content() {
    const [photos, setPhotos] = useState([]as {width:number, height:number, src:string}[])
    useEffect(() => {
       const photosToDisplayUrls = [];
       for(let i = 0; i < 20; i++){
            photosToDisplayUrls.push('https://aws.random.cat/meow');
       }
       axios.all(photosToDisplayUrls.map((photosToDisplayUrl) => axios.get(photosToDisplayUrl))).then((data) =>{
        console.log(data)
        const phototemp: SetStateAction<null> | { width: number; height: number; src: any; }[] = [];
        data.forEach((pic => {
            phototemp.push({
                src: pic.data.file,
                width: 250,
                height:350
            })}))
            setPhotos(phototemp);
        })
        
       
    }, []);
  return (
          <PhotoAlbum photos={photos} layout={'columns'} />
  );
}

export default Content;