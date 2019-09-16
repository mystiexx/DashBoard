import React, {Component} from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import {FaSearch} from 'react-icons/fa'

class SearchBar extends Component{
    render(){
<<<<<<< Updated upstream
        const { searchChange } = this.props;
=======
        const {search} = this.props
>>>>>>> Stashed changes
        return(
            <div>
                <section id="search">
                <div className="container">
<<<<<<< Updated upstream
                <div class="search-box">
                    <input type="text" class="search-txt" onChange={searchChange} placeholder="Type to search"/>
                 <div class="search-btn mb-5" href=""><FaSearch/></div>
                </div>

=======
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                        <FaSearch/>
                        </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl placeholder="Search" onChange={search} />
                    </InputGroup>
>>>>>>> Stashed changes
                </div>

                </section>
                <h2 className="stories-title text-center"> Stories </h2>
                {this.props.feeds}
            </div>
        )
    }
}
export default SearchBar