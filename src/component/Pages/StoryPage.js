import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
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
    fetch(`http://localhost:6530/feed/${match.params.id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          content: data
        })
      })
  }

  render() {
    const { content } = this.state
    return (

      <div>
        <Container>
          <section id="video">
            <Row>
              <Col className="d-flex flex-column">
                <div className="d-flex flex-sm-wrap">
                <iframe className="position-sticky mt-5" alt="video"
                  style={{ width: 560, height: 315 }} src={`https://www.youtube.com/embed/QhBnZ6NPOY0`} frameBorder="0"
                  allow="encrypted-media" allowFullScreen></iframe>
                  </div>

                <h4 className="card-title">{content.title}</h4><br />
                <p className="card-text text-justify overflow-auto">{content.desc}</p>
              </Col>


            </Row>
          </section>
        </Container>
      </div>

    )
  }
}
export default StoryPage;