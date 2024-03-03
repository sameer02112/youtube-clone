import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const WatchPage = () => {
    const dispatch = useDispatch();
    const [searchParam] = useSearchParams();

    useEffect(()=>{
        dispatch(closeMenu());
    })

    return (
        <div className="m-4">
           <iframe 
                width={1200} 
                height="600" 
                src={`https://www.youtube.com/embed/${searchParam.get('v')}`}
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>
        </div>
    )
}

export default WatchPage
