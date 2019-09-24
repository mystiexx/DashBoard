import React, {Component} from 'react'
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

class StoryCard extends Component{
    render(){
        const { id, image, title, desc, handleDelete} = this.props;
        return(
            <div>
                <CardGroup>
                    <Card key={id}>
                    <Card.Img src={image} alt='card-img' variant='top'/>
                        <Card.Body>
                            <Card.Title> <Link to={`/stories/${id}`} style={{ textDecoration: 'none' }}>{title}
                            </Link></Card.Title>
                            <Card.Text>
                                {desc.substring(0, 200)}
                            </Card.Text>
                            <section className="d-flex d-inline-block">
                                            <Link to={`/edit/${id}`} style={{ textDecoration: 'none' }}>Edit</Link>
                                            <Button variant="outline-danger ml-2" onClick={() =>handleDelete(id)}>Delete </Button>
                                        </section>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        )
    }
}

export default StoryCard;