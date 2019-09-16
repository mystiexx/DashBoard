import React, { Component } from 'react'
import Paginate from '../Pages/Paginate'
import SearchBar from '../Pages/Search'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import { Link } from 'react-router-dom'


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
        fetch('http://localhost:6530/feed')
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
        const content = this.state.content.filter(item => item._id !== id);
        this.setState({ content: content })
    }

    render() {
        const { current_page, posts_perpage } = this.state;

        const indexOfLastPost = current_page * posts_perpage;

        const indexOFFirstPost = indexOfLastPost - posts_perpage;

        const filteredContent = this.state.content.slice(indexOFFirstPost, indexOfLastPost);

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
                    {
                        filteredContent.map(data =>
                            <CardGroup className="p-3" key={data._id}>
                                <Card className="shadow-sm">
                                    <Card.Body>
                                        <section className="d-flex inline-block">
                                            <img src={data.image} alt="img" className="img-story" />
                                            <div className="details">
                                                <Link to={`/stories/${data._id}`} style={{ textDecoration: 'none' }}>
                                                    <h4 className="display-5">{data.title}</h4> </Link>
                                                <p>{data.desc.substring(0, 10)}...</p>
                                            </div>
                                        </section>
                                        <section className="ml-auto float-right">
                                            <Button variant="outline-dark">Edit </Button>
                                            <Button variant="outline-danger ml-2" onClick={() => this.handleDelete(data._id)}>Delete </Button>
                                        </section>
                                    </Card.Body>
                                </Card>
                            </CardGroup>

                        )
                    }


                    <Paginate posts_perpage={posts_perpage} totalPosts={this.state.content.length} paginate={paginate} />

                </Container>

            </div>
        )
    }
}

export default StoryBoard;