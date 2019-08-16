import React, { Component } from 'react'
import image from '../images/color.png'
import Search from '../Pages/Search'
import {Container, Card, Button } from 'react-bootstrap'


class StoryBoard extends Component {
    render(){
        return(
            <div>
                <Container className="mt-5">
                <Search/>,
                <h2 className="stories-title text-center"> Stories </h2>
                    <Card className="shadow-sm mt-4">
                    <Card.Body>
                    <section className="d-flex inline-block">
                            <img src={image} alt="img" className="img-story"/>
                            <div className="details">
                            <h4 className="display-5">Title</h4>
                            <p>Cillum qui consectetur ea veniam dolore. Quis magna Lorem consectetur excepteur sint. 
                                Cillum sunt aliquip aliquip culpa pariatur cillum ullamco fugiat adipisicing exercitation aliqua aute.
                                Dolore adipisicing nulla aliqua officia do cupidatat proident. Ipsum do occaecat nulla dolor esse aliquip
                                 fugiat velit duis nulla Lorem amet duis. Irure adipisicing enim commodo velit minim ipsum culpa ipsum anim 
                                 laborum. Labore deserunt ad do in consequat mollit non consequat. Mollit Lorem qui aute exercitation laborum. 
                                 Qui minim adipisicing nisi et elit nulla aliqua duis deserunt minim aliquip ea. Eiusmod deserunt nulla est ad 
                                 aute.</p>
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