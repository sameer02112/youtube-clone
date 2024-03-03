import React,{useState,useEffect} from 'react';
import {hamburgerLogo,appLogo,searchIcon, userIcon, YOUTUBE_SEARCH_ENDPOINT} from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {

    const dispatch = useDispatch();

    const[searchQuery, setSearchQuery] = useState("");
    const[searchQueryResults, setSearchQueryResults] = useState([]);

    const searchCache = useSelector(state => state.search)

    useEffect(() => {
        const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setSearchQueryResults(searchCache[searchQuery]);
            }else{
                getSearchSuggestions()
            }
        }, 300);
        
        return () => clearTimeout(timer);
    }, [searchQuery])

    const getSearchSuggestions = async () =>  {
        const data = await fetch(YOUTUBE_SEARCH_ENDPOINT + searchQuery);
        const json = await data.json();
        setSearchQueryResults(json[1]);
        dispatch(cacheResults({[searchQuery]: json[1]}))
    }

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
    const handleHomeClick = () => {
        window.location.href = '/';
    }

    return (
        <div className="flex justify-between text-center border border-b-2 " >
            <div className="flex items-center cursor-pointer">
                <img className="h-8 p-2  m-2 " src={hamburgerLogo} alt="hamburger" onClick={() => toggleMenuHandler()}/>
                <img className="h-12 p-1 m-2 " src={appLogo} alt="appLogo" onClick={() => handleHomeClick()}/>
            </div>

            <div className="flex flex-col mt-4">
                <div className="flex">
                    <input className="border border-black rounded-l-full h-10 w-96 px-3 focus:outline-none" type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    <button className="border px-2 py-2 h-10 w-12  border-black border-l-0 rounded-r-full ">
                        <img src = {searchIcon} alt="search-icon" className="h-6"/>
                    </button>
                </div>
                {searchQueryResults.length>0 && <div className="absolute top-20 left-100 flex content-start bg-white py-2 px-5 w-96 shadow-md rounded-md border border-gray-200">
                    <ul className="flex flex-col align-center">
                        {searchQueryResults.map(result => <li className="self-start p-1 cursor-pointer w-100" onClick={() => setSearchQuery(result)}>{result}</li>)} 
                    </ul>
                </div>}
               
            </div>

            <div className="flex items-center">
                <img className="h-12 m-4 cursor-pointer" src={userIcon} alt="userIcon"/> 
            </div>
        </div>
    )
}

export default Header
