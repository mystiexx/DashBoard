import React, { Component } from 'react'
import {Container, Card, Button } from 'react-bootstrap'


class StoryBoard extends Component {
    render(){
        return(
            <div className="story">
                <Container className="mt-5">
                <h2 className="stories-title text-center"> Stories </h2>
                    <Card className="shadow-sm mt-5">
                    <Card.Body>
                    <section className="d-flex inline-block">
                            <img src="" alt="img" className="img-story"/>
                            <div className="details">
                            <h4 className="display-5">title</h4>
                            <p>desc</p>
                                 </div>
                                 </section>
                                 <section className="ml-auto float-right">
                                 <Button variant="outline-dark">Edit </Button>
                                 <Button variant="outline-danger ml-2">Delete </Button>
                                 </section>
                                 </Card.Body>
                        </Card>
                        


                    </Container>

                </div>
        )
    }
}

export default StoryBoard;