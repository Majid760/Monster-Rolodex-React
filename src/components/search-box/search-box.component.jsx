import React from 'react';
import './search-style.css';

export const Searchbox=({placeholder,handlevalue})=>{

    return  <div class="flexbox">
                <div class="search">
                    <h1>Search your monster</h1>
                    <h3>Click on search icon, then type your keyword.</h3>
                    <div>
                        <input type="text" placeholder={placeholder} onChange={handlevalue}></input>
                    </div>
                </div>
            </div>

}