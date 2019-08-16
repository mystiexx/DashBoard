import React, {Component} from 'react'
import {FaSearch} from 'react-icons/fa'

class SearchBar extends Component{
    render(){
        const { searchChange } = this.props;
        return(
            <div>
                <section id="search">
                <div className="container">
                <div class="search-box">
            <input type="text" class="search-txt" onChange={searchChange} placeholder="Type to search"/>
            <div class="search-btn mb-5" href=""><FaSearch/></div>
        </div>

                </div>

                </section>

                </div>
        )
    }
}
export default SearchBar