import React, {Component} from 'react'
import {FaSearch} from 'react-icons/fa'

class SearchBar extends Component{
    render(){
        return(
            <div>
                <section id="search">
                <div className="container">
                <div class="search-box">
                    <input type="text" class="search-txt" placeholder="Type to search"/>
                 <div class="search-btn"><FaSearch/></div>
                </div>
                </div>
                </section>
            </div>
        )
    }
}
export default SearchBar