import React, {useState} from "react";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";


const SearchResults = () =>{
    let URL = 'http://localhost:8080/v1/search/'
    const getUsers = async () =>{
        const response = await fetch(URL,{
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response.json();
    }
    return(
        <>
        <SideNav />
        <TopNav />
        <p>SEARCH RESULTS</p>
        <button onClick={()=>getUsers().then((res)=>console.log(res))}> SEARCH</button>
        </>
    )
}

export default SearchResults;