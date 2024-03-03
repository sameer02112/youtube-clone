import React from 'react'

const VideoCard = ({info}) => {

    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;

    const getLikesCount = val => {
        if(val > 1000000)
            return Math.round(val/1000000) + 'M';
        else if(val < 1000000 && val > 1000)
            return Math.round(val/1000) + 'K';
        else
            return val;
    }
    return (
        <div className="p-2 m-2 w-72 h-80 shadow-lg cursor-pointer">
            <img className="rounded-lg" src = {thumbnails.medium.url} alt="thumbnail"/>
            <ul>
                <li className="font-bold">{title}</li>
                <li className="mt-1">{channelTitle}</li>
                <li>{getLikesCount(statistics.viewCount)} views</li>
            </ul>
        </div>
    )
}

export default VideoCard
