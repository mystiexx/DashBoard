import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class StoryPage extends Component {
  constructor() {
    super()
    this.state = {
      content: '',
    }
  }

  
  componentDidMount() {
    const { match } = this.props
    fetch(`http://urbanplotz.herokuapp.com/feed/${match.params.id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          content: data
        })
      })
      console.log(this.state.content)
  }

  render() {
    const { content } = this.state
    console.log(content)
    return (

      <div>
        <Container>
          <Row>
            <Col>
            <section id="d-flex flex-column">
                <div className="d-flex flex-sm-wrap">
                <iframe className="position-sticky mt-5" alt="video"
                  style={{ width: 560, height: 315 }} src={content.videoUrl} frameBorder="0"
                  allow="encrypted-media" allowFullScreen></iframe>
                  </div>

                <h4 className="card-title">{content.title}</h4><br />
                <p className="card-text text-justify">{content.desc}</p>
          </section>
          <hr/>
          <h6 className='text-muted mt-4'>Add Comment</h6>
                        <Form>
                            <Form.Group>
                                <Form.Control as="textarea" rows="2" />
                            </Form.Group>
                        </Form>
                        <div className='d-flex flex-wrap pb-5'>
                    <Button variant='primary' className='mt-3'>Add Comment</Button>
                </div>
            
            </Col>

            <Col>
            </Col>
          </Row>
        
        </Container>
      </div>

    )
  }
}
export default StoryPage;