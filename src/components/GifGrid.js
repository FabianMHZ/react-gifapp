import React from 'react';
import { useFetchGif } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {

    //const [count, setcount] = useState(0);
    const {data:images,loading}=useFetchGif(category);


 /*    const [images, setimages] = useState([])
    useEffect( () => {
        getGifs(category).then(imgs=>(
            setimages(imgs)
        ))
        
    }, [category]) */

        return (
        <>
        <h2>{category}</h2>
        {loading && <p>Loading</p>}
        <div className="card-grid">
                
                {
                    images.map(img =>(
                    <GifGridItem
                    key={img.id}
                    {...img}
                    />
    ))
                }
            
            </div>
            </>
    )
}
