import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const isMenuOpen = useSelector(state => state.app.isMenuOpen);

    if(!isMenuOpen) return null;


    return (
        <div className="p-5 shadow-lg w-48">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>
            <h2 className="font-bold pt-2">Subscriptions</h2>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h2 className="font-bold pt-2">Explore</h2>
            <ul>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Videos</li>
            </ul>
            <h2 className="font-bold pt-2">More from Youtube</h2>
            <ul>
                <li>YouTube Studio</li>
                <li>YouTube Music</li>
                <li>YouTube Kids</li>
            </ul>
        </div>
    )
}

export default Sidebar
