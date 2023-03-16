
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import PhotoAlbum from "react-photo-album";
import UserContext from '../../contexts/userContext';


function generateArrayForRetrievingGalleryImgsUlrs(): string[] {
    const urls = [];
    for(let i = 0; i < 20; i++){
        urls.push('https://aws.random.cat/meow');
    }
    return urls;
}

function Gallery() {
    const [photos, setPhotos] = useState([]as {width:number, height:number, src:string}[]);
    const [loading, setLoading] = useState(false);
    const {userName} = useContext(UserContext);

    useEffect(() => {
       const photosToDisplayUrls = generateArrayForRetrievingGalleryImgsUlrs();
       const photoTemp:{src: string,
        width: number,
        height: number}[] = [];
       for(let i = 0; i < 20; i++){
            photosToDisplayUrls.push('https://aws.random.cat/meow');
       }
       async function getPictures () {
            console.log("will retrieve pics");
            try{
                setLoading(true);
                const picturesData = await axios.all(photosToDisplayUrls.map((photosToDisplayUrl) => axios.get(photosToDisplayUrl)));
                picturesData.forEach(pic => {
                    photoTemp.push({
                        src: pic.data.file,
                        width: 250,
                        height:350
                    });
                });
                setLoading(false);
                setPhotos(photoTemp);
                console.log("pictures were retrieved")
            } catch {
                setLoading(false);
                throw new Error("failure loading pictures");
            }
        }

        if(userName){
            getPictures();
        } else {
            setPhotos([]);
        }
    }, [userName]);
    return (
        <>
            {loading && 'Loading...'}
            <PhotoAlbum photos={photos} layout={'columns'} />
        </>
    );
}

export default Gallery;