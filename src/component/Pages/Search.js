import React, {Component} from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import {FaSearch} from 'react-icons/fa'

class SearchBar extends Component{
    render(){
        const {search} = this.props
        return(
            <div>
                <section id="search">
                <div className="container">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                        <FaSearch/>
                        </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl placeholder="Search" onChange={search} />
                    </InputGroup>
                </div>
                </section>
            </div>
        )
    }
}
export default SearchBar