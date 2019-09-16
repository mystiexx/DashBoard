import React, { Component } from 'react'

class DashBoard extends Component {
    constructor(){
        super()
        this.state = {
            content: [],
        }
    }

    componentDidMount(){
        fetch('http://localhost:6530/feed')
        .then(response => response.json())
        .then(feeds => {
          this.setState({
            content: feeds.feeds
          })
        })    
    }

    render() {
        return (
            <div>

                <div className="container-fluid flex-column mt-2 flex-wrap  justify-content-center">
                    <div className="row mt-3">
                        <div className="col-md-3 mt-2">
                        </div>

                        <div className="col-md-6 mt-2">
                            <div className="card-contain p-5 mb-5 rounded shadow-sm">
                                <div className="box">
                                    <h2>Welcome</h2>
                                    <h3>Admin</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card p-sm-1 mb-5 shadow-sm">
                                        <div className="card-body">
                                            <h3>Add a new Story Today</h3>
                                            <article>So what do you have to post today? </article>
                                            <br />
                                            <div>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Title</span>
                                                    </div>
                                                    <input  type="text" className="form-control" />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Tagline</span>
                                                    </div>
                                                    <input  type="text" className="form-control" />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Youtube URL</span>
                                                    </div>
                                                    <input  type="text" className="form-control" />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Image URL</span>
                                                    </div>
                                                    <input  type="text" className="form-control" />
                                                </div>
                                        
                                                <div className="input-group mb-3">
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Description</span>
                                                    </div>
                                                    <textarea  className="form-control" rows="4" /></div>

                                                <button
                                                    
                                                    className
                                                    ="btn btn-outline-dark btn-lg">Publish</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashBoard;