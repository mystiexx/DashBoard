import React, { Component } from 'react'
import Paginate from '../Pages/Paginate'
import SearchBar from '../Pages/Search'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import { Link } from 'react-router-dom'
import StoryCard from './StoryCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class StoryBoard extends Component {
    constructor() {
        super()
        this.state = {
            content: [],
            searchfield: '',
            current_page: 1,
            posts_perpage: 10,
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        fetch('https://urbanplotz.herokuapp.com/feed')
            .then(response => response.json())
            .then(feeds => {
                this.setState({
                    content: feeds.feeds
                })
            })
    }

    handleSearch = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    handleDelete = (id) => {
        const token = localStorage.getItem('token');
        const content = this.state.content.filter(item => item._id !== id);
        fetch(`https://urbanplotz.herokuapp.com/feed/${id}`, {
            method: 'delete',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(res => res.json()).then(res => 
            this.setState({ content: content })
        ).catch(err => {
            this.setState({ message: 'unexpected error occured'});
        })
        
    }

    render() {
        const { current_page, posts_perpage } = this.state;

        const indexOfLastPost = current_page * posts_perpage;

        const indexOFFirstPost = indexOfLastPost - posts_perpage;

        const inVerse = this.state.content.reverse();

        const filteredContent = inVerse.slice(indexOFFirstPost, indexOfLastPost);

        const paginate = (pageNumber) => {
            this.setState({
                current_page: pageNumber,
            })
        };

        // const filteredContent = this.state.content.filter(content => {
        //     return content.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
        // })
        return (
            <div className="story">
                <Container className="mt-2 d-flex flex-column flex-sm-column">
                    <SearchBar search={this.handleSearch} />
                    <h2 className="stories-title text-center"> Stories </h2>
                    <Row>
                    {
                        filteredContent.map(data => {
                            return (
                                <Col md={4}>
                                    <StoryCard id={data._id} image={data.imageUrl} title={data.title} desc={data.desc} handleDelete={this.handleDelete}/>
                                </Col>
                            )
                        }
                           
                        )
                    }

                    </Row>
                   


                    <Paginate posts_perpage={posts_perpage} totalPosts={this.state.content.length} paginate={paginate} />

                </Container>

            </div>
        )
    }
}

export default StoryBoard;