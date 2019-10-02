import React, { Component } from 'react'


class DashBoard extends Component {
    state = {
        content: [],
        title: '',
        tagline: '',
        videoUrl: '',
        imageUrl: '',
        desc: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmitFeed = () => {
        const token = localStorage.getItem('token');
        const obj = {
            title: this.state.title,
            tagline: this.state.tagline,
            videoUrl: this.state.videoUrl,
            imageUrl: this.state.imageUrl,
            desc: this.state.desc
        }

        fetch('https://urbanplotz.herokuapp.com/feed/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(obj)
        }).then(res => res.json()).then(res => this.setState({uploaded: true, message: "Story Uploaded Successfully, View in stories"}))
        .catch(error => this.setState({message: error}))
    }

    render() {
        console.log(this.state.title)
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
                                        {
                                            this.state.uploaded && <p className='text-success text-center'>{this.state.message}</p>
                                        }
                                        <div className="card-body">
                                            <h3>Add a new Story Today</h3>
                                            <article>So what do you have to post today? </article>
                                            <br />
                                            <div>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Title</span>
                                                    </div>
                                                    <input onChange={this.handleChange} name='title' type="text" className="form-control" />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Tagline</span>
                                                    </div>
                                                    <input onChange={this.handleChange} name='tagline'  type="text" className="form-control" />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Youtube URL</span>
                                                    </div>
                                                    <input  onChange={this.handleChange}name='videoUrl' type="text" className="form-control" />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Image URL</span>
                                                    </div>
                                                    <input onChange={this.handleChange} name='imageUrl' type="text" className="form-control" />
                                                </div>
                                        
                                                <div className="input-group mb-3">
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Description</span>
                                                    </div>
                                                    <textarea onChange={this.handleChange} name='desc' className="form-control" rows="4" /></div>

                                                <button
                                                    onClick={this.onSubmitFeed}
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